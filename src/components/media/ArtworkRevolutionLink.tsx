"use client";

import { useState } from "react";

/**
 * ArtworkRevolutionLink — the closing CTA card linking out to Erik's
 * broader creative initiative. Hover swaps the border to magenta; state
 * lives here rather than mutating the DOM directly (mirrors Card/Button).
 */
export function ArtworkRevolutionLink() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://theartworkrevolution.com/"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative mt-6 flex flex-wrap items-center justify-between gap-4 overflow-hidden rounded-lg border p-6 no-underline"
      style={{
        borderColor: hovered ? "var(--color-hue-magenta)" : "var(--border-subtle)",
        background: "var(--surface-1)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-(--grad-spectrum) opacity-[0.08]" />
      <div className="relative">
        <div className="font-mono text-hue-magenta mb-1.5 text-xs tracking-[0.12em] uppercase">The movement</div>
        <div className="font-display text-xl font-extrabold" style={{ color: "var(--text-primary)" }}>
          The Artwork Revolution
        </div>
        <div className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
          Erik&apos;s broader creative initiative. Explore the project.
        </div>
      </div>
      <span
        className="font-body relative inline-flex items-center gap-2 pb-0.5 text-sm font-bold"
        style={{ color: "var(--text-primary)", borderBottom: "2px solid var(--color-hue-magenta)" }}
      >
        Visit the site →
      </span>
    </a>
  );
}
