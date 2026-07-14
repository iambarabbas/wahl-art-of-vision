// Static export has no Image Optimization API, so this pre-generates resized
// variants at build time. The custom loader (src/lib/image-loader.ts) picks
// the smallest variant that still covers the requested render width, instead
// of always shipping the full-resolution source to every device. Opaque
// sources are re-encoded as mozjpeg regardless of their original format --
// several "logo" and "photo" assets in this project turned out to be
// oversized PNGs (some 3840px logos, some photos saved lossless) where JPEG
// recompression alone is a large win even at the same pixel dimensions.
import { readdir, mkdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.join(import.meta.dirname, "..");
const SOURCE_DIRS = ["public/photos", "public/assets"];
const OUTPUT_DIR = path.join(ROOT, "public/_optimized");
const WIDTHS = [400, 800, 1200, 1920];
const EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

async function collectImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.isDirectory()) {
      files.push(...(await collectImages(path.join(dir, entry.name))));
    } else if (EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      files.push(path.join(dir, entry.name));
    }
  }
  return files;
}

async function main() {
  const manifest = {};
  for (const sourceDir of SOURCE_DIRS) {
    const absDir = path.join(ROOT, sourceDir);
    let images;
    try {
      images = await collectImages(absDir);
    } catch {
      continue;
    }

    for (const filePath of images) {
      const relFromPublic = path.relative(path.join(ROOT, "public"), filePath);
      const publicSrc = `/${relFromPublic.split(path.sep).join("/")}`;
      const ext = path.extname(filePath);
      const base = relFromPublic.slice(0, -ext.length);

      const meta = await sharp(filePath).metadata();
      const originalWidth = meta.width ?? 0;
      const hasAlpha = meta.hasAlpha ?? false;
      const outExt = hasAlpha ? ".png" : ".jpg";

      // Cap at originalWidth (not strictly below it) so small, poorly
      // compressed sources still get one recompressed variant at their
      // native size instead of being skipped entirely.
      const candidateWidths = [...new Set(WIDTHS.map((w) => Math.min(w, originalWidth)))].filter(
        (w) => w > 0
      );

      const variants = [];
      for (const width of candidateWidths) {
        const outRel = `${base}-${width}${outExt}`;
        const outAbs = path.join(OUTPUT_DIR, outRel);
        const srcStat = await stat(filePath);
        let needsGenerate = true;
        try {
          const outStat = await stat(outAbs);
          needsGenerate = outStat.mtimeMs < srcStat.mtimeMs;
        } catch {
          needsGenerate = true;
        }

        if (needsGenerate) {
          await mkdir(path.dirname(outAbs), { recursive: true });
          const pipeline = sharp(filePath).resize({ width, withoutEnlargement: true });
          if (hasAlpha) {
            await pipeline.png({ quality: 80, compressionLevel: 9 }).toFile(outAbs);
          } else {
            await pipeline.jpeg({ quality: 78, mozjpeg: true }).toFile(outAbs);
          }
        }
        variants.push({ width, src: `/_optimized/${outRel.split(path.sep).join("/")}` });
      }

      manifest[publicSrc] = { originalWidth, variants };
    }
  }

  const manifestPath = path.join(ROOT, "src/lib/image-variants.json");
  await writeFile(manifestPath, JSON.stringify(manifest, null, 2));
  const totalVariants = Object.values(manifest).reduce((n, m) => n + m.variants.length, 0);
  console.log(`Generated ${totalVariants} image variants for ${Object.keys(manifest).length} images.`);
}

main();
