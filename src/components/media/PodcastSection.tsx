import Image from "next/image";
import { SectionHeading } from "@/components/ui";
import { PodcastEpisodeLink } from "./PodcastEpisodeLink";

interface Episode {
  show: string;
  title: string;
  hue: string;
  url: string;
  on: string;
}

const EPISODES: Episode[] = [
  {
    show: "Passionistas Project",
    title: "Choosing Your Passion with Erik Wahl",
    hue: "magenta",
    url: "https://podcasts.apple.com/us/podcast/choosing-your-passion-with-erik-wahl/id928159684?i=1000629883561",
    on: "Apple Podcasts",
  },
  {
    show: "Episode 460",
    title: "Make Money Through Your Art with Erik Wahl",
    hue: "cyan",
    url: "https://podcasts.apple.com/us/podcast/460-make-money-through-your-art-with-erik-wahl/id596047499?i=1000466876739",
    on: "Apple Podcasts",
  },
  {
    show: "Featured Guest",
    title: "Erik Wahl on Art, Money, Creativity & Power",
    hue: "yellow",
    url: "https://shows.acast.com/61de0665cc27c20014ea15cf/episodes/erik-wahl-on-art-money-creativity-and-power",
    on: "Acast",
  },
];

export function PodcastSection() {
  return (
    <section className="border-t py-9 px-(--gutter)" style={{ borderColor: "var(--border-subtle)" }}>
      <div className="mx-auto max-w-(--container-xl)">
        <SectionHeading
          eyebrow="On the mic"
          title="Erik on the airwaves"
          lead="Conversations on creativity, disruption, and the business of art."
        />
        <div className="mt-7 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-7">
          <div className="relative">
            <div className="pointer-events-none absolute -inset-3 rounded-xl bg-(--grad-spectrum) opacity-[0.28] blur-[46px]" />
            <div
              className="relative aspect-[16/11] overflow-hidden rounded-lg border"
              style={{ borderColor: "var(--border-subtle)" }}
            >
              <Image
                src="/assets/photo-interview-bw.jpg"
                alt="Erik Wahl recording a podcast"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(120deg, color-mix(in srgb, var(--color-hue-magenta) 22%, transparent), rgba(11,11,18,0.35))",
                }}
              />
              <div
                className="font-mono text-hue-cyan absolute bottom-[14px] left-4 inline-flex items-center gap-2 rounded-pill px-[14px] py-[6px] text-xs tracking-[0.12em] uppercase backdrop-blur-[8px]"
                style={{ background: "rgba(11,11,18,0.72)", border: "1px solid var(--border-subtle)" }}
              >
                <span className="text-[0.9em]">🎙</span> Podcast guest
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {EPISODES.map((e, i) => (
              <PodcastEpisodeLink key={i} {...e} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
