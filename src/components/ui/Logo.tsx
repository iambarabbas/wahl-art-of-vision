export interface LogoProps {
  size?: number;
  tone?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
}

/**
 * Logo — the erikwahl wordmark. Lowercase, set tight, with the "a"
 * rendered as the red anarchy-A (rebel against business as usual).
 * `tone` flips it for dark vs paper backgrounds.
 */
export function Logo({ size = 32, tone = "light", showTagline = false, className }: LogoProps) {
  const ink = tone === "dark" ? "var(--color-ink-900)" : "#fff";
  const aSize = size * 1.15;

  return (
    <span className={`inline-flex flex-col gap-0.5 leading-none ${className ?? ""}`}>
      <span
        className="font-display inline-flex items-baseline font-black"
        style={{ fontSize: `${size}px`, letterSpacing: "-0.04em", color: ink }}
      >
        erikw
        <span className="relative inline-block text-spark">
          a
          <span
            className="pointer-events-none absolute rounded-full border-spark"
            style={{
              left: "50%",
              top: "54%",
              transform: "translate(-50%,-50%)",
              width: `${aSize * 0.5}px`,
              height: `${aSize * 0.5}px`,
              borderWidth: `${Math.max(2, size / 16)}px`,
              borderStyle: "solid",
            }}
          />
        </span>
        hl
      </span>
      {showTagline && (
        <span
          className={`ew-eyebrow ${tone === "dark" ? "text-ink-400" : "text-ink-300"}`}
          style={{ fontSize: `${Math.max(9, size * 0.28)}px` }}
        >
          the art of vision
        </span>
      )}
    </span>
  );
}
