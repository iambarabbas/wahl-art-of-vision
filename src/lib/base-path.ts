// GitHub Pages project sites serve from a subpath (/repo-name/); Cloudflare
// Pages / a custom domain serves from root. See next.config.ts basePath.
// Anything that references a public/ asset by a hardcoded string (download
// links, CSS background-image) needs this prefix -- next/image and next/link
// apply it automatically, plain <a href> and CSS url() do not.
export const BASE_PATH = process.env.BASE_PATH || "";
