import Image from "next/image";

const STATS: [string, string][] = [
  ["$8M+", "raised for charity through live art"],
  ["1,500+", "stages painted worldwide"],
  ["21", "countries"],
];

/**
 * ArtistStory — the pop-art portrait plus the "corporate partner to
 * graffiti artist" narrative and headline stats.
 */
export function ArtistStory() {
  return (
    <section className="py-9 px-(--gutter)">
      <div className="mx-auto grid max-w-(--container-lg) grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-8">
        <div className="relative">
          <div
            className="pointer-events-none absolute -inset-3.5 rounded-xl opacity-30 blur-[52px]"
            style={{ background: "var(--grad-spectrum)" }}
          />
          <Image
            src="/assets/portrait-wpap.jpg"
            alt="Erik Wahl pop-art portrait"
            width={1125}
            height={1500}
            className="relative block h-auto w-full rounded-lg border"
            style={{ borderColor: "var(--border-subtle)" }}
          />
        </div>
        <div>
          <h2 className="mb-4 text-3xl tracking-[-0.02em]">From corporate partner to graffiti artist</h2>
          <p className="mb-3 leading-[1.7]" style={{ color: "var(--text-secondary)" }}>
            A former partner in a corporate firm, Erik walked away from the predictable path to chase a bigger
            question: what if creativity, not certainty, was the real competitive advantage? Today he consults for
            the world&apos;s largest organizations and paints live on stages from TED to the London Business School.
          </p>
          <p className="mb-6 leading-[1.7]" style={{ color: "var(--text-secondary)" }}>
            His artwork hangs in executive offices and private collections across the globe, and his live, on-stage
            paintings have raised millions for charity, proof that art, given away, multiplies.
          </p>
          <div className="mb-6 flex flex-wrap gap-6">
            {STATS.map(([n, l]) => (
              <div key={l} className="max-w-[16ch]">
                <div className="ew-spark-text font-display text-2xl leading-none font-extrabold">{n}</div>
                <div className="mt-1.5 text-sm leading-[1.4]" style={{ color: "var(--text-muted)" }}>
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
