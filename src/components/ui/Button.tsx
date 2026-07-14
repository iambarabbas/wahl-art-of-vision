"use client";

import { useState } from "react";
import Link from "next/link";

export type ButtonVariant = "spark" | "spectrum" | "solid" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

interface SharedProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  hue?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  full?: boolean;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export type ButtonProps = SharedProps &
  (
    | ({ href: string } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof SharedProps>)
    | ({ href?: undefined } & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedProps>)
  );

const SIZES: Record<ButtonSize, { padding: string; font: string; gap: string; minH: string }> = {
  sm: { padding: "8px 16px", font: "var(--text-sm)", gap: "6px", minH: "36px" },
  md: { padding: "12px 22px", font: "var(--text-base)", gap: "8px", minH: "44px" },
  lg: { padding: "16px 30px", font: "var(--text-md)", gap: "10px", minH: "54px" },
};

const HOVER_GLOW: Record<string, string> = {
  spark: "0 0 0 1px rgba(255,45,26,0.55), 0 16px 50px -8px rgba(255,45,26,0.7)",
  magenta: "0 0 0 1px rgba(255,46,139,0.55), 0 16px 50px -8px rgba(255,46,139,0.7)",
  cyan: "0 0 0 1px rgba(20,197,232,0.55), 0 16px 50px -8px rgba(20,197,232,0.7)",
  blue: "0 0 0 1px rgba(44,107,255,0.55), 0 16px 50px -8px rgba(44,107,255,0.7)",
  spectrum: "0 16px 50px -10px rgba(124,58,237,0.6)",
};
const GLOW_FOR: Record<string, string> = {
  spark: "var(--glow-spark)",
  magenta: "var(--glow-magenta)",
  cyan: "var(--glow-cyan)",
  blue: "var(--glow-blue)",
};

/**
 * Button — the brand's primary action. Variants map to the brand's
 * energy: `spark` (rebel red), `spectrum` (full gradient, for the
 * single hero CTA), `solid` (a chosen hue), `outline` and `ghost`.
 * Pass `href` to render a real, navigable link styled identically
 * (hover previews / middle-click / accessibility all work correctly),
 * or omit it for a `<button type="button">`.
 */
export function Button({
  children,
  variant = "spark",
  size = "md",
  hue,
  iconLeft,
  iconRight,
  full = false,
  disabled = false,
  className,
  style,
  href,
  ...rest
}: ButtonProps) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const s = SIZES[size];
  const chosen = hue ? `var(--color-hue-${hue})` : "var(--color-spark)";
  const lightInk = hue === "yellow" || hue === "lime" || hue === "cyan";

  const variants: Record<ButtonVariant, React.CSSProperties> = {
    spark: { background: "var(--color-spark)", color: "#fff", boxShadow: "var(--glow-spark)" },
    spectrum: { background: "var(--grad-spectrum)", color: "#fff" },
    solid: { background: chosen, color: lightInk ? "var(--color-ink-900)" : "#fff" },
    outline: { background: "transparent", color: "var(--text-primary)", borderColor: "var(--border-strong)" },
    ghost: { background: "transparent", color: "var(--text-secondary)" },
  };

  const baseGlow = variant === "spark" ? "var(--glow-spark)" : variant === "solid" ? (GLOW_FOR[hue ?? ""] ?? "none") : "none";

  const hoverStyle: React.CSSProperties = {};
  if (hovered && !disabled) {
    hoverStyle.transform = "translateY(-2px)";
    if (variant === "spark") hoverStyle.boxShadow = HOVER_GLOW.spark;
    if (variant === "spectrum") hoverStyle.boxShadow = HOVER_GLOW.spectrum;
    if (variant === "solid" && hue && HOVER_GLOW[hue]) hoverStyle.boxShadow = HOVER_GLOW[hue];
    if (variant === "outline") { hoverStyle.borderColor = "var(--color-spark)"; hoverStyle.color = "var(--color-spark)"; }
    if (variant === "ghost") { hoverStyle.color = "var(--text-primary)"; hoverStyle.background = "var(--surface-2)"; }
  } else if (!disabled && (variant === "spark" || variant === "solid")) {
    hoverStyle.boxShadow = baseGlow;
  }
  if (pressed && !disabled) {
    hoverStyle.transform = "translateY(0) scale(0.97)";
  }

  const cls = [
    "ew-btn",
    variant === "spectrum" ? "ew-btn--spectrum" : "",
    "inline-flex items-center justify-center rounded-full font-body font-bold whitespace-nowrap no-underline border-2 border-transparent transition-[transform,box-shadow,background,color] duration-200",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const computedStyle: React.CSSProperties = {
    gap: s.gap,
    padding: s.padding,
    minHeight: s.minH,
    width: full ? "100%" : "auto",
    fontSize: s.font,
    letterSpacing: "-0.01em",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    ...variants[variant],
    ...hoverStyle,
    ...style,
  };

  const content = (
    <>
      {iconLeft && <span className="inline-flex">{iconLeft}</span>}
      {children}
      {iconRight && <span className="inline-flex">{iconRight}</span>}
    </>
  );

  const hoverHandlers = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => { setHovered(false); setPressed(false); },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
  };

  if (href) {
    return (
      <Link
        href={href}
        className={cls}
        style={computedStyle}
        {...hoverHandlers}
        {...(rest as Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof SharedProps>)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      disabled={disabled}
      className={cls}
      style={computedStyle}
      {...hoverHandlers}
      {...(rest as Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedProps>)}
    >
      {content}
    </button>
  );
}
