import Link from "next/link";
import { Card, Tag, SectionHeading } from "@/components/ui";

const PROGRAMS = [
  { tag: "Signature", hue: "magenta", glow: "magenta", title: "UNTHINK", desc: "Rediscover your creative genius. Push past habitual thinking into boundless, innovative solutions.", img: "/assets/keynote-unthink.jpg", imgPos: "center 28%" },
  { tag: "New for 2026", hue: "cyan", glow: "cyan", title: "The Human Edge", desc: "The Human Edge in an AI World helps audiences harness AI as a catalyst while reclaiming the creativity, courage, and imagination that make us unmistakably human.", img: "/assets/keynote-artai.jpg", imgPos: "center 42%" },
  { tag: "Bestseller", hue: "yellow", glow: "spark", title: "The Spark & The Grind", desc: "The paradox of creativity: structure creates freedom. Turn wild ideas into disciplined action.", img: "/assets/keynote-spark.jpg", imgPos: "60% 18%" },
];

export function KeynotesPreview() {
  return (
    <section className="py-10 px-(--gutter)">
      <div className="mx-auto max-w-(--container-xl)">
        <SectionHeading
          eyebrow="01 / The Keynotes"
          title={<>Three ways to <span className="ew-marker">disrupt</span> business as usual</>}
          lead="Each keynote is a live experience: part performance, part strategy, fully unforgettable."
        />
        <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
          {PROGRAMS.map((p) => (
            <Link key={p.title} href="/speaker" className="no-underline">
              <Card image={p.img} imageHeight={180} imagePosition={p.imgPos} accent={p.hue} interactive glow={p.glow}>
                <Tag hue={p.hue}>{p.tag}</Tag>
                <h3 className="m-0 text-xl">{p.title}</h3>
                <p className="m-0 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{p.desc}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
