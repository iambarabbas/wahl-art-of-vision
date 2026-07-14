export interface SectionHeadingProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  titleSize?: string;
  className?: string;
}

/**
 * SectionHeading — the brand's standard section opener: a mono
 * eyebrow, a display title, and optional lead. `align` centers it.
 */
export function SectionHeading({ eyebrow, title, lead, align = "left", titleSize = "var(--text-3xl)", className }: SectionHeadingProps) {
  return (
    <header
      className={`flex flex-col gap-3 ${align === "center" ? "mx-auto max-w-[44ch] items-center text-center" : "items-start text-left"} ${className ?? ""}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2">
          <span className="inline-block h-0.5 w-[22px]" style={{ background: "var(--color-spark)" }} />
          <span className="ew-eyebrow" style={{ color: "var(--text-secondary)" }}>{eyebrow}</span>
        </span>
      )}
      <h2
        className="font-display m-0 font-bold"
        style={{ fontSize: titleSize, letterSpacing: "var(--tracking-snug)", lineHeight: "var(--leading-tight)", color: "var(--text-primary)" }}
      >
        {title}
      </h2>
      {lead && (
        <p className="m-0 max-w-[56ch] text-[length:var(--text-md)]" style={{ lineHeight: "var(--leading-normal)", color: "var(--text-secondary)" }}>
          {lead}
        </p>
      )}
    </header>
  );
}
