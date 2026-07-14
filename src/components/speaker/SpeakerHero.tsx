import Image from "next/image";
import { Tag, Button } from "@/components/ui";

/**
 * SpeakerHero — the Speaker page's opening statement: headline, lead
 * copy, primary CTAs, and a portrait of Erik. The soft spark-colored
 * blob and spectrum glow behind the portrait are decorative and stay
 * as inline styles since they mix multiple tokens with blur/opacity.
 */
export function SpeakerHero() {
  return (
    <section
      className="relative overflow-hidden px-(--gutter) pt-9 pb-8"
      style={{ background: "var(--bg-canvas-stage)" }}
    >
      <div
        className="absolute -top-[10%] -right-[6%] h-[70%] w-[46%] rounded-full"
        style={{ background: "var(--grad-spark)", filter: "blur(120px)", opacity: 0.22 }}
      />
      <div className="relative mx-auto grid max-w-(--container-lg) grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-8">
        <div>
          <Tag hue="magenta" dot>
            The Speaker
          </Tag>
          <h1 className="my-4 text-4xl leading-[1.02] font-extrabold tracking-[-0.03em]">
            Erik redefines
            <br />
            <span className="ew-spectrum-text inline-block pb-[0.06em]">“keynote speaker”</span>
          </h1>
          <p
            className="mb-5 max-w-[52ch] text-md leading-[1.7]"
            style={{ color: "var(--text-secondary)" }}
          >
            For more than two decades, Erik Wahl has reimagined the keynote experience, blending
            the insight of a #1 bestselling business author with the energy of a world-renowned
            artist. His presentations combine provocative ideas, powerful storytelling, and live
            on-stage painting to inspire audiences to see possibility in a whole new way.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="spark" size="lg" href="/book">
              Book Erik
            </Button>
            <Button variant="outline" size="lg" href="/media">
              See Erik in action
            </Button>
          </div>
        </div>
        <div className="relative">
          <div
            className="absolute -inset-3.5 rounded-xl"
            style={{ background: "var(--grad-spectrum)", filter: "blur(50px)", opacity: 0.35 }}
          />
          <Image
            src="/assets/speaker-hero.jpg"
            alt="Erik Wahl"
            width={1000}
            height={1500}
            className="relative block h-auto w-full rounded-xl border"
            style={{ borderColor: "var(--border-subtle)" }}
            priority
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
