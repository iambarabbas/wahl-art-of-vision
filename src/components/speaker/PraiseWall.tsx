import { SectionHeading } from "@/components/ui";

const PRAISE: [string, string][] = [
  ["Brilliant", "Wells Fargo"],
  ["Game changing", "Microsoft"],
  ["Mind expanding", "Mass Mutual"],
  ["Energizing & transformative", "Celgene"],
  ["Standing ovation", "Ultimate Software"],
  ["Set our feed on fire", "Assoc. for Talent Development"],
];

const HUES = ["magenta", "cyan", "yellow", "green", "orange", "violet"];

/**
 * PraiseWall — a grid of short client quotes. Hue cycles per card from
 * a fixed palette, so the accent color stays inline (computed from index).
 */
export function PraiseWall() {
  return (
    <section
      className="border-t bg-ink-850 px-(--gutter) py-9"
      style={{ borderColor: "var(--border-subtle)" }}
    >
      <div className="mx-auto max-w-(--container-xl)">
        <SectionHeading align="center" eyebrow="What our clients say" title="In their own words" />
        <div className="mt-7 flex flex-wrap justify-center gap-4">
          {PRAISE.map(([word, org], i) => {
            const hue = HUES[i % HUES.length];
            return (
              <div
                key={org}
                className="max-w-[300px] min-w-[220px] flex-[1_1_220px] rounded-lg border py-5 px-6"
                style={{ borderColor: "var(--border-subtle)", background: "var(--surface-1)" }}
              >
                <div
                  className="font-display text-xl leading-[1.1] font-extrabold"
                  style={{ color: `var(--color-hue-${hue})` }}
                >
                  &quot;{word}&quot;
                </div>
                <div
                  className="mt-2 font-mono text-xs tracking-[0.1em] uppercase"
                  style={{ color: "var(--text-muted)" }}
                >
                  {org}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
