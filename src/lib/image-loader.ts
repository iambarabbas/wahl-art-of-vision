import variants from "./image-variants.json";
import { BASE_PATH } from "./base-path";

// Static export has no Image Optimization API, so this loader stands in for
// it. `scripts/generate-image-variants.mjs` pre-resizes images at build time
// into public/_optimized and records the results in image-variants.json;
// this picks the smallest variant that still covers the requested render
// width instead of always shipping the full-resolution source. It also
// prepends BASE_PATH, which `unoptimized: true` would otherwise skip (Next
// returns the raw `src` verbatim in that mode, never invoking a loader, so
// basePath-prefixed asset URLs are impossible without a custom one).

interface Variant {
  width: number;
  src: string;
}

const manifest: Record<string, { originalWidth: number; variants: Variant[] }> = variants;

function resolvePath(src: string, width: number): string {
  const entry = manifest[src];
  if (!entry || entry.variants.length === 0) {
    return src;
  }
  // A request wider than every generated variant still gets the largest
  // variant rather than the raw source: every source that reaches this point
  // already has a variant at (or recompressed at) its own native width, so
  // the raw original is never a better choice, only an uncompressed one.
  const fit = entry.variants.find((v) => v.width >= width);
  return fit ? fit.src : entry.variants[entry.variants.length - 1].src;
}

export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  return `${BASE_PATH}${resolvePath(src, width)}`;
}

// For the rare case of a plain CSS `background-image` instead of next/image
// (e.g. a full-bleed hero treated with a non-`cover` background-size), so it
// still gets basePath prefixing and a right-sized pre-generated variant.
export function backgroundImageUrl(src: string, preferredWidth = 1920): string {
  return `${BASE_PATH}${resolvePath(src, preferredWidth)}`;
}
