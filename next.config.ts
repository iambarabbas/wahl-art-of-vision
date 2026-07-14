import type { NextConfig } from "next";
import path from "node:path";

// Static export works identically on GitHub Pages, Cloudflare Pages, or any
// static host -- no server required. GitHub Pages project sites serve from
// a subpath (/repo-name/), so BASE_PATH lets the SAME build target either
// host: leave it unset for a custom-domain/root deploy (Cloudflare later),
// or set BASE_PATH=/art-of-vision when building for GitHub Pages now.
const basePath = process.env.BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    // The static-export output has no server to run the Image Optimization
    // API, so a custom loader stands in for it (see src/lib/image-loader.ts).
    // `unoptimized: true` alone would skip loader invocation entirely, which
    // breaks basePath prefixing on GitHub Pages subpath deploys.
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    // Matches the widths generate-image-variants.mjs pre-renders. Next's
    // defaults (16 combined widths) would just repeat the same handful of
    // real files across many srcset descriptors -- this keeps the generated
    // HTML aligned with what actually exists on disk.
    deviceSizes: [400, 800, 1200, 1920],
    imageSizes: [64, 128, 256, 384],
  },
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
