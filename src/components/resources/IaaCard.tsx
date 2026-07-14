"use client";

import { useState } from "react";
import Image from "next/image";

export interface IaaCardProps {
  img: string;
  label: string;
  tag: string;
  hue: string;
  href: string;
}

/**
 * IaaCard — a single "I Am Artist" guide download: a square cover image,
 * a hue-tinted tag, and a title with a download arrow. Lifts and glows
 * (hue-tinted) on hover.
 */
export function IaaCard({ img, label, tag, hue, href }: IaaCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      download
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col gap-3 no-underline"
      style={{
        transform: hovered ? "translateY(-6px)" : "none",
        transition: "transform var(--dur-base) var(--ease-out)",
      }}
    >
      <div
        className="relative aspect-square overflow-hidden rounded-lg border"
        style={{
          borderColor: "var(--border-subtle)",
          boxShadow: hovered
            ? `0 18px 40px -12px color-mix(in srgb, var(--color-hue-${hue}) 70%, transparent)`
            : "var(--shadow-sm)",
          transition: "box-shadow var(--dur-base) var(--ease-out)",
        }}
      >
        <Image src={img} alt={label} fill sizes="(max-width: 768px) 50vw, 240px" className="object-cover" />
      </div>
      <div>
        <div className="mb-1 font-mono text-[11px] uppercase tracking-[0.1em]" style={{ color: `var(--color-hue-${hue})` }}>
          {tag}
        </div>
        <div className="flex items-baseline justify-between gap-2">
          <span className="font-display text-sm font-[800] leading-[1.2]" style={{ color: "var(--text-primary)" }}>
            {label}
          </span>
          <span
            className="inline-block font-mono text-[13px]"
            style={{
              color: `var(--color-hue-${hue})`,
              transform: hovered ? "translateY(3px)" : "none",
              transition: "transform var(--dur-base) var(--ease-out)",
            }}
          >
            &#8595;
          </span>
        </div>
      </div>
    </a>
  );
}
