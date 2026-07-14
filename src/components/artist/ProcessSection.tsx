import { SectionHeading } from "@/components/ui";

type Step = [num: string, hue: string, title: string, desc: string];

const STEPS: Step[] = [
  [
    "01",
    "magenta",
    "Blank canvas",
    "Every talk begins the way every breakthrough does, with nothing but possibility and a little fear.",
  ],
  [
    "02",
    "cyan",
    "Rapid creation",
    "In minutes, splashes of seemingly random color resolve into something unmistakable. The room leans in.",
  ],
  [
    "03",
    "yellow",
    "The reveal",
    "The finished portrait lands as a metaphor: what looked like chaos was vision all along.",
  ],
  [
    "04",
    "green",
    "The takeaway",
    "Audiences leave seeing their own work, and their own potential, differently.",
  ],
];

/**
 * ProcessSection — the four-step "blank canvas to message" explainer.
 */
export function ProcessSection() {
  return (
    <section
      className="border-t py-9 px-(--gutter)"
      style={{ background: "var(--color-ink-850)", borderColor: "var(--border-subtle)" }}
    >
      <div className="mx-auto max-w-(--container-xl)">
        <SectionHeading
          eyebrow="The live experience"
          title={
            <>
              How a painting becomes a <span className="ew-marker">message</span>
            </>
          }
        />
        <div className="mt-7 grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-5">
          {STEPS.map(([num, hue, title, desc]) => (
            <div key={num} className="pt-4" style={{ borderTop: `3px solid var(--color-hue-${hue})` }}>
              <div
                className="font-display text-2xl leading-[1] font-extrabold"
                style={{ color: `var(--color-hue-${hue})` }}
              >
                {num}
              </div>
              <h3 className="mt-3 mb-2 text-lg">{title}</h3>
              <p className="m-0 text-sm leading-[1.6]" style={{ color: "var(--text-secondary)" }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
