import { SectionHeading } from "@/components/ui";

const SUPPORTS = [
  { q: "Epic keynote experience unlike anything we have ever seen.", org: "Appian", hue: "cyan" },
  { q: "Game changing.", org: "Microsoft", hue: "magenta" },
  { q: "Erik was the highlight of our entire conference.", org: "AT&T", hue: "yellow" },
];

export function Testimonials() {
  return (
    <section className="py-10 px-(--gutter)">
      <div className="mx-auto max-w-(--container-lg)">
        <SectionHeading eyebrow="02 / From the room" title="Standing ovations, on repeat" align="center" titleSize="var(--text-2xl)" />

        <figure className="mx-auto mt-12 text-center">
          <div aria-hidden="true" className="font-display text-spark font-extrabold" style={{ fontSize: "clamp(110px, 17vw, 200px)", lineHeight: 0.45 }}>&ldquo;</div>
          <blockquote className="font-display mx-auto mt-4 max-w-[24ch] text-3xl font-bold" style={{ lineHeight: 1.18, letterSpacing: "-0.02em" }}>
            Erik transformed the stage and created an{" "}
            <span className="ew-marker" style={{ backgroundImage: "linear-gradient(var(--color-hue-yellow), var(--color-hue-yellow))" }}>
              epic audience experience.
            </span>
          </blockquote>
          <figcaption className="ew-eyebrow mt-5" style={{ color: "var(--text-muted)" }}>
            Conference Chair · Financial Institutions Forum
          </figcaption>
        </figure>

        <div className="mt-16 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-y-5 border-t pt-12" style={{ borderColor: "var(--border-subtle)" }}>
          {SUPPORTS.map((s, i) => (
            <div key={s.org} className="border-l px-6 text-center first:border-l-0" style={{ borderColor: i ? "var(--border-subtle)" : "transparent" }}>
              <div className="font-display text-lg font-bold" style={{ lineHeight: 1.3, color: "var(--text-secondary)" }}>&ldquo;{s.q}&rdquo;</div>
              <div className="ew-eyebrow mt-3" style={{ color: `var(--color-hue-${s.hue})` }}>{s.org}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
