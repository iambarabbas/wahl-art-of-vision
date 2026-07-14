import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS, getPostBySlug } from "@/lib/blog-posts";
import { Button } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/constants";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const title = post.title;
  const url = `${SITE_URL}/blog/${post.id}`;
  const image = `${SITE_URL}${post.image}`;

  return {
    title,
    description: post.dek,
    alternates: { canonical: url },
    openGraph: { title, description: post.dek, url, type: "article", images: [{ url: image }] },
    twitter: { card: "summary_large_image", title, description: post.dek, images: [image] },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.dek,
    image: `${SITE_URL}${post.image}`,
    author: { "@id": `${SITE_URL}/#person` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: `${SITE_URL}/blog/${post.id}`,
  };

  return (
    <div data-theme="paper" style={{ background: "var(--bg-canvas)", color: "var(--text-primary)" }}>
      <JsonLd data={articleSchema} />
      <article className="mx-auto max-w-(--container-md) pt-8 pb-9 px-(--gutter)">
        <Link
          href="/blog"
          className="font-mono mb-5 inline-block text-xs tracking-[0.1em] uppercase no-underline"
          style={{ color: "var(--text-muted)" }}
        >
          ← All posts
        </Link>
        <div className="font-mono mb-3 text-xs tracking-[0.12em] uppercase" style={{ color: `var(--color-hue-${post.hue})` }}>
          {post.category} · {post.readTime} read
        </div>
        <h1 className="m-0 mb-5 text-4xl" style={{ letterSpacing: "-0.03em", lineHeight: 1.05 }}>{post.title}</h1>
        <div className="relative mb-6 aspect-[16/8] overflow-hidden rounded-lg border" style={{ borderColor: "var(--border-subtle)" }}>
          <Image src={post.image} alt="" fill sizes="(max-width: 880px) 100vw, 880px" priority fetchPriority="high" className="object-cover" />
        </div>
        {post.body.map((b, i) => {
          if (b.type === "h") {
            return (
              <h2 key={i} className="my-6 mb-3 text-2xl" style={{ letterSpacing: "-0.02em" }}>
                {b.text}
              </h2>
            );
          }
          if (b.type === "q") {
            return (
              <blockquote
                key={i}
                className="font-display my-6 pl-5 text-xl font-bold"
                style={{ borderLeft: `4px solid var(--color-hue-${post.hue})`, lineHeight: 1.3 }}
              >
                {b.text}
              </blockquote>
            );
          }
          return (
            <p key={i} className="mb-4 text-[length:var(--text-md)]" style={{ lineHeight: 1.8, color: "var(--text-secondary)" }}>
              {b.text}
            </p>
          );
        })}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t pt-8" style={{ borderColor: "var(--border-subtle)" }}>
          <div>
            <div className="font-display text-lg font-extrabold">Erik Wahl</div>
            <div className="text-sm" style={{ color: "var(--text-muted)" }}>Artist · Speaker · Author</div>
          </div>
          <Button variant="spark" href="/book">Book Erik to speak</Button>
        </div>
      </article>
    </div>
  );
}
