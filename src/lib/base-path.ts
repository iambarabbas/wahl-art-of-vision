// GitHub Pages project sites serve from a subpath (/repo-name/); Cloudflare
// Pages / a custom domain serves from root. See next.config.ts basePath.
// Anything that references a public/ asset by a hardcoded string (download
// links, CSS background-image, the custom image loader) needs this prefix --
// next/image and next/link apply it automatically, plain <a href> and CSS
// url() do not. Must be NEXT_PUBLIC_-prefixed: this module is bundled into
// client JS (the image loader re-runs in the browser), and only
// NEXT_PUBLIC_* env vars get inlined into client bundles -- a plain
// BASE_PATH would read as undefined at runtime in the browser, which is
// exactly what caused images to 404 after client-side navigation.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
