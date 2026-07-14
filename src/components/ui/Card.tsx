"use client";

import { useState } from "react";
import Image from "next/image";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  accent?: "spectrum" | string;
  glow?: string;
  image?: string;
  imageHeight?: number | string;
  imagePosition?: string;
  padding?: string;
  interactive?: boolean;
}

/**
 * Card — a content surface. On the dark stage it reads as a faint
 * elevated panel; `glow` makes it emit colored light on hover.
 * `accent` paints a top spectrum/hue rule. `image` makes a media card.
 */
export function Card({
  children,
  as: Comp = "div",
  accent,
  glow,
  image,
  imageHeight = 200,
  imagePosition = "center",
  padding = "var(--space-5)",
  interactive = false,
  className,
  style,
  ...rest
}: CardProps) {
  const [hovered, setHovered] = useState(false);
  const accentBar = accent === "spectrum" ? "var(--grad-spectrum)" : accent ? `var(--color-hue-${accent})` : null;
  const glowShadow = glow ? `var(--glow-${glow})` : null;

  return (
    <Comp
      className={`relative flex flex-col overflow-hidden rounded-lg border transition-[transform,box-shadow,border-color] duration-200 ${interactive ? "cursor-pointer" : ""} ${className ?? ""}`}
      style={{
        background: "var(--surface-1)",
        borderColor: hovered && interactive ? "var(--border-strong)" : "var(--border-subtle)",
        transform: hovered && interactive ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered && interactive && glowShadow ? glowShadow : "none",
        ...style,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...rest}
    >
      {accentBar && <div className="h-1 flex-none" style={{ background: accentBar }} />}
      {image && (
        <div
          className="relative flex-none overflow-hidden"
          style={{
            height: typeof imageHeight === "number" ? `${imageHeight}px` : imageHeight,
            background: "#15151f",
          }}
        >
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
            style={{ objectPosition: imagePosition }}
          />
        </div>
      )}
      <div className="flex flex-col gap-3" style={{ padding }}>
        {children}
      </div>
    </Comp>
  );
}
