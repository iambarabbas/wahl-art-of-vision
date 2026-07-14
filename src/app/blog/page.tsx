import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getFeaturedPost, getNonFeaturedPosts } from "@/lib/blog-posts";
import { SITE_URL } from "@/lib/constants";

const description = "Ideas on disruption, AI, and unlocking the creative genius hiding in every organization.";
const url = `${SITE_URL}/blog`;

export const metadata: Metadata = {
  title: "Blog",
  description,
  alternates: { canonical: url },
  openGraph: { title: "Blog | Erik Wahl", description, url, images: [{ url: `${SITE_URL}${getFeaturedPost().image}` }] },
  twitter: { card: "summary_large_image", title: "Blog | Erik Wahl", description, images: [`${SITE_URL}${getFeaturedPost().image}`] },
};

export default function BlogIndexPage() {
  const feat = getFeaturedPost();
  const rest = getNonFeaturedPosts();

  return (
    <div data-theme="paper" style={{ background: "var(--bg-canvas)", color: "var(--text-primary)" }}>
      <section className="pt-9 pb-6 px-(--gutter)">
        <div className="mx-auto max-w-(--container-xl)">
          <div className="font-mono mb-3 text-xs tracking-[0.16em] uppercase text-spark">The Blog</div>
          <h1 className="m-0 mb-3 text-5xl font-extrabold" style={{ letterSpacing: "-0.04em" }}>Notes on creativity</h1>
          <p className="m-0 max-w-[52ch] text-[length:var(--text-md)]" style={{ color: "var(--text-secondary)" }}>
            Ideas on disruption, AI, and unlocking the creative genius hiding in every organization.
          </p>
        </div>
      </section>

      <section className="pb-7 px-(--gutter)">
        <div className="mx-auto max-w-(--container-xl)">
          <Link
            href={`/blog/${feat.id}`}
            className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] overflow-hidden rounded-xl border shadow-md no-underline"
            style={{ borderColor: "var(--border-subtle)", background: "var(--surface-1)" }}
          >
            <div className="relative min-h-[300px]">
              <Image src={feat.image} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority fetchPriority="high" />
            </div>
            <div className="p-12">
              <span className="font-mono text-xs tracking-[0.12em] uppercase" style={{ color: `var(--color-hue-${feat.hue})` }}>
                {feat.category} · Featured
              </span>
              <h2 className="my-3 text-3xl" style={{ letterSpacing: "-0.02em", lineHeight: 1.1 }}>{feat.title}</h2>
              <p className="mb-5" style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>{feat.dek}</p>
              <span className="font-mono text-xs tracking-[0.1em] uppercase" style={{ color: "var(--text-muted)" }}>
                {feat.readTime} read →
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="pb-24 px-(--gutter)">
        <div className="mx-auto grid max-w-(--container-xl) grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
          {rest.map((p) => (
            <Link
              key={p.id}
              href={`/blog/${p.id}`}
              className="flex flex-col overflow-hidden rounded-lg border shadow-sm no-underline"
              style={{ borderColor: "var(--border-subtle)", background: "var(--surface-1)" }}
            >
              <div className="relative pt-[56%]">
                <Image src={p.image} alt="" fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover" />
                <span
                  className="font-mono absolute top-3 left-3 rounded-full px-2.5 py-1 text-[11px] tracking-[0.1em] text-white uppercase"
                  style={{ background: `var(--color-hue-${p.hue})` }}
                >
                  {p.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <h3 className="m-0 text-lg" style={{ lineHeight: 1.2 }}>{p.title}</h3>
                <p className="m-0 text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>{p.dek}</p>
                <span className="font-mono mt-auto pt-3 text-[11px] tracking-[0.1em] uppercase" style={{ color: "var(--text-muted)" }}>
                  {p.readTime} read
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
