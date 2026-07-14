import Image from "next/image";
import { Tag, Button } from "@/components/ui";

const STATS: [string, string][] = [
  ["1,500+", "keynotes delivered"],
  ["#1", "bestselling author"],
  ["21", "countries"],
  ["2", "books published"],
];

export function About() {
  return (
    <section id="about-anchor" className="border-t py-10 px-(--gutter)" style={{ borderColor: "var(--border-subtle)", background: "var(--ink-850)" }}>
      <div className="mx-auto grid max-w-(--container-lg) grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-center gap-16">
        <div className="relative">
          <div className="pointer-events-none absolute -inset-3.5 rounded-xl opacity-30 blur-[52px]" style={{ background: "var(--grad-spectrum)" }} />
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border" style={{ borderColor: "var(--border-subtle)" }}>
            <Image
              src="/assets/kn-spark.jpg"
              alt="Erik Wahl among his custom-painted sneakers"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-[center_20%]"
            />
          </div>
        </div>
        <div>
          <Tag hue="violet">The Artist</Tag>
          <h2 className="my-4 text-3xl">From corporate partner to graffiti artist</h2>
          <p className="mb-3 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Erik left a successful corporate career to pursue creativity as a catalyst for transformation. Today he consults for the world&rsquo;s largest organizations and paints live on stages from TED to the London Business School.
          </p>
          <p className="mb-6 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            His artwork has raised millions for charity and hangs in executive offices and private collections across the globe.
          </p>
          <div className="mb-6 grid grid-cols-2 gap-4">
            {STATS.map(([n, l]) => (
              <div key={l}>
                <div className="ew-spark-text font-display text-2xl leading-none font-extrabold">{n}</div>
                <div className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>{l}</div>
              </div>
            ))}
          </div>
          <Button variant="outline" href="/artist">Read Erik&rsquo;s story</Button>
        </div>
      </div>
    </section>
  );
}
