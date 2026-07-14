import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/blog-posts";
import { SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";

const STATIC_ROUTES = ["", "/speaker", "/artist", "/media", "/blog", "/resources", "/book"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
  }));

  const postEntries = POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.id}`,
  }));

  return [...staticEntries, ...postEntries];
}
