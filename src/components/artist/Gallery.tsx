"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui";

interface GalleryItem {
  src: string;
  label: string;
  hue: string;
}

const ITEMS: GalleryItem[] = [
  { src: "/assets/art-lennon.jpg", label: "Lennon", hue: "magenta" },
  { src: "/assets/art-john.jpg", label: "John", hue: "pink" },
  { src: "/assets/art-cobain.jpg", label: "Cobain", hue: "cyan" },
  { src: "/assets/art-marilyn.jpg", label: "Marilyn", hue: "yellow" },
  { src: "/assets/art-einstein.jpg", label: "Einstein", hue: "violet" },
  { src: "/assets/art-jordan.jpg", label: "Jordan", hue: "orange" },
  { src: "/assets/art-brady.jpg", label: "Brady", hue: "blue" },
  { src: "/assets/art-trooper.jpg", label: "Trooper", hue: "magenta" },
  { src: "/assets/art-buffett.jpg", label: "Buffett", hue: "green" },
  { src: "/assets/art-gates.jpg", label: "Gates", hue: "cyan" },
  { src: "/assets/art-teresa.jpg", label: "Mother Teresa", hue: "yellow" },
  { src: "/assets/art-rogan.jpg", label: "Rogan", hue: "orange" },
  { src: "/assets/art-bluegold.jpg", label: "Blue & Gold", hue: "blue" },
];

/**
 * GalleryCard — one painting. Static, matching the original (no hover
 * animation on these cards in the source site).
 */
function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <figure
      className="relative m-0 aspect-[3/4] overflow-hidden rounded-lg border"
      style={{ background: "var(--surface-1)", borderColor: "var(--border-subtle)" }}
    >
      <Image
        src={item.src}
        alt={`${item.label}, original painting by Erik Wahl`}
        fill
        sizes="(max-width: 640px) 50vw, 200px"
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(11,11,18,0.78), transparent 46%)" }}
      />
      <figcaption
        className="absolute bottom-3 left-3.5 font-mono text-xs tracking-[0.12em] uppercase"
        style={{ color: `var(--color-hue-${item.hue})` }}
      >
        {item.label}
      </figcaption>
    </figure>
  );
}

/**
 * InstagramLink — "See more on Instagram" CTA; hover swaps border/text
 * to magenta via state instead of the original's onMouseEnter/Leave
 * inline-style mutation.
 */
function InstagramLink() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://www.instagram.com/erikwahl/"
      target="_blank"
      rel="noopener noreferrer"
      className="font-body inline-flex items-center gap-2.5 rounded-full border text-sm font-bold no-underline"
      style={{
        padding: "12px 22px",
        color: hovered ? "var(--color-hue-magenta)" : "var(--text-primary)",
        borderColor: hovered ? "var(--color-hue-magenta)" : "var(--border-strong)",
        transition: "all var(--dur-fast) var(--ease-out)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
        @erikwahl
      </span>
      See more on Instagram →
    </a>
  );
}

/**
 * Gallery — the painting grid plus Instagram CTA. Client-only because
 * of the per-card and per-link hover state above.
 */
export function Gallery() {
  return (
    <section className="py-9 px-(--gutter)">
      <div className="mx-auto max-w-(--container-xl)">
        <SectionHeading
          align="center"
          eyebrow="The gallery"
          title="Color, given away"
          lead="A selection of original works: icons reimagined in Erik's unmistakable hand."
        />
        <div className="mt-7 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
          {ITEMS.map((item) => (
            <GalleryCard key={item.label} item={item} />
          ))}
        </div>
        <div className="mt-7 flex justify-center">
          <InstagramLink />
        </div>
      </div>
    </section>
  );
}
