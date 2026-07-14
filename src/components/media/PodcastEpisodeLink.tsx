"use client";

import { useState } from "react";

export interface PodcastEpisodeLinkProps {
  show: string;
  title: string;
  hue: string;
  url: string;
  on: string;
}

/**
 * PodcastEpisodeLink — one row in the podcast episode list. Hover nudges
 * the row right and colors the border with the episode's hue; state
 * lives here (mirrors Card/Button) instead of mutating the DOM directly.
 */
export function PodcastEpisodeLink({ show, title, hue, url, on }: PodcastEpisodeLinkProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-4 rounded-lg border px-5 py-4 no-underline transition-[border-color,transform] duration-[120ms] ease-[var(--ease-out)]"
      style={{
        borderColor: hovered ? `var(--color-hue-${hue})` : "var(--border-subtle)",
        background: "var(--surface-1)",
        transform: hovered ? "translateX(4px)" : "none",
      }}
    >
      <div
        className="flex h-11 w-11 flex-none items-center justify-center rounded-full text-base"
        style={{
          background: `color-mix(in srgb, var(--color-hue-${hue}) 18%, transparent)`,
          border: `1px solid var(--color-hue-${hue})`,
          color: `var(--color-hue-${hue})`,
        }}
      >
        ▶
      </div>
      <div className="min-w-0 flex-1">
        <div className="font-mono mb-[3px] text-xs tracking-[0.1em] uppercase" style={{ color: "var(--text-muted)" }}>
          {show} · {on}
        </div>
        <div className="font-display text-md leading-[1.2] font-bold" style={{ color: "var(--text-primary)" }}>
          {title}
        </div>
      </div>
      <span
        className="font-mono flex-none text-xs tracking-[0.08em] uppercase"
        style={{ color: `var(--color-hue-${hue})` }}
      >
        Listen →
      </span>
    </a>
  );
}
