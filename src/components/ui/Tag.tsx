export interface TagProps {
  children: React.ReactNode;
  hue?: string;
  variant?: "outline" | "filled";
  dot?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Tag — the brand's mono "graffiti label" pill. Used for kickers,
 * categories, and status. Defaults to a quiet outline; pass a `hue`
 * for a filled spectrum chip, or `dot` for a leading status dot.
 */
export function Tag({ children, hue, variant = "outline", dot = false, className, style }: TagProps) {
  const filled = variant === "filled" && hue;
  const lightInk = hue === "yellow" || hue === "lime" || hue === "cyan" || hue === "amber";

  const skin: React.CSSProperties = filled
    ? { background: `var(--color-hue-${hue})`, color: lightInk ? "var(--color-ink-900)" : "#fff", borderColor: "transparent" }
    : { background: "transparent", color: hue ? `var(--color-hue-${hue})` : "var(--text-secondary)", borderColor: "var(--border-strong)" };

  return (
    <span
      className={`font-mono inline-flex items-center gap-1.5 rounded-full border text-xs font-bold tracking-[0.18em] uppercase whitespace-nowrap ${className ?? ""}`}
      style={{ padding: "6px 12px", lineHeight: 1, ...skin, ...style }}
    >
      {dot && (
        <span
          className="inline-block h-[7px] w-[7px] flex-none rounded-full"
          style={{ background: hue ? (filled ? "currentColor" : `var(--color-hue-${hue})`) : "var(--color-spark)" }}
        />
      )}
      {children}
    </span>
  );
}
