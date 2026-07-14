"use client";

import { useState } from "react";
import Image from "next/image";

export interface BookCoverLinkProps {
  img: string;
  title: string;
  sub: string;
  hue: string;
  badge: string;
  url: string;
}

/**
 * BookCoverLink — an external Amazon link for one book. Hover lifts and
 * rotates the cover slightly and gives it a colored glow keyed to the
 * book's hue; state lives here (rather than imperative DOM mutation)
 * to match the Card/Button hover pattern used across the app.
 */
export function BookCoverLink({ img, title, sub, hue, badge, url }: BookCoverLinkProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center gap-3 text-center no-underline"
    >
      <div
        className="ew-book relative aspect-[300/383] w-full max-w-[200px] overflow-hidden rounded-sm"
        style={{
          background: "#0d0d14",
          boxShadow: hovered
            ? `0 22px 50px -12px color-mix(in srgb, var(--color-hue-${hue}) 70%, transparent)`
            : "0 12px 32px -10px rgba(0,0,0,0.7)",
          transform: hovered ? "translateY(-8px) rotate(-2deg)" : "none",
          transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
        }}
      >
        <Image src={img} alt={`${title} book cover`} fill sizes="(max-width: 768px) 50vw, 200px" className="object-cover" />
      </div>
      <span className="font-mono text-xs tracking-[0.12em] uppercase" style={{ color: `var(--color-hue-${hue})` }}>
        {badge}
      </span>
      <span className="font-display text-lg leading-[1.1] font-extrabold" style={{ color: "var(--text-primary)" }}>
        {title}
      </span>
      <span className="max-w-[28ch] text-sm leading-[1.5]" style={{ color: "var(--text-secondary)" }}>
        {sub}
      </span>
      <span
        className="font-body mt-auto inline-flex items-center gap-1.5 pb-0.5 text-sm font-bold"
        style={{ color: "var(--text-primary)", borderBottom: `2px solid var(--color-hue-${hue})` }}
      >
        Get the book →
      </span>
    </a>
  );
}
