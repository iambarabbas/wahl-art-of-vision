import { Card, SectionHeading } from "@/components/ui";
import { ArtworkRevolutionLink } from "./ArtworkRevolutionLink";

const PRESS: [string, string][] = [
  ["Forbes", "“The blueprint for actionable creativity.”"],
  ["Fast Company", "“Provocative with a purpose.”"],
  ["TED", "Featured speaker on creativity & disruption."],
  ["Top 30 Global Gurus", "Ranked among the world's top keynote speakers."],
];

const HUES = ["magenta", "cyan", "yellow", "green"];

export function PressSection() {
  return (
    <section
      className="border-t py-9 px-(--gutter)"
      style={{ background: "var(--color-ink-850)", borderColor: "var(--border-subtle)" }}
    >
      <div className="mx-auto max-w-(--container-xl)">
        <SectionHeading eyebrow="In the press" title="What they're saying" />
        <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
          {PRESS.map(([outlet, quote], i) => (
            <Card key={outlet} padding="var(--space-6)">
              <span className="font-display text-lg font-extrabold" style={{ color: `var(--color-hue-${HUES[i % 4]})` }}>
                {outlet}
              </span>
              <span className="text-sm leading-[1.6]" style={{ color: "var(--text-secondary)" }}>
                {quote}
              </span>
            </Card>
          ))}
        </div>
        <ArtworkRevolutionLink />
      </div>
    </section>
  );
}
