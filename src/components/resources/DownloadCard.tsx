"use client";

import { useState } from "react";

export interface DownloadCardProps {
  title: string;
  filetype: string;
  description: string;
  hue: string;
  href: string;
}

/**
 * DownloadCard — a single planner download (bio, rider, questionnaire, ...).
 * Real file link (download + new tab), with a hue-tinted top rule that
 * spreads to the rest of the border and lifts the card on hover.
 */
export function DownloadCard({ title, filetype, description, hue, href }: DownloadCardProps) {
  const [hovered, setHovered] = useState(false);
  const sideColor = hovered ? `var(--color-hue-${hue})` : "var(--border-subtle)";

  return (
    <a
      href={href}
      download
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col gap-2.5 rounded-lg p-5 no-underline"
      style={{
        background: "var(--surface-1)",
        borderStyle: "solid",
        borderTopWidth: "3px",
        borderRightWidth: "1px",
        borderBottomWidth: "1px",
        borderLeftWidth: "1px",
        borderTopColor: `var(--color-hue-${hue})`,
        borderRightColor: sideColor,
        borderBottomColor: sideColor,
        borderLeftColor: sideColor,
        boxShadow: hovered
          ? `0 16px 36px -14px color-mix(in srgb, var(--color-hue-${hue}) 65%, transparent)`
          : "var(--shadow-sm)",
        transform: hovered ? "translateY(-4px)" : "none",
        transition:
          "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)",
      }}
    >
      <div className="flex items-baseline justify-between gap-2">
        <span className="font-display text-md font-[800]" style={{ color: "var(--text-primary)" }}>
          {title}
        </span>
        <span
          className="inline-block whitespace-nowrap font-mono text-[13px]"
          style={{
            color: `var(--color-hue-${hue})`,
            transform: hovered ? "translateY(4px)" : "none",
            transition: "transform var(--dur-base) var(--ease-out)",
          }}
        >
          &#8595;
        </span>
      </div>
      <span className="font-mono text-[11px] uppercase tracking-[0.08em]" style={{ color: "var(--text-muted)" }}>
        {filetype}
      </span>
      <span className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        {description}
      </span>
    </a>
  );
}
