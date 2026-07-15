"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Tag, SectionHeading } from "@/components/ui";

interface PlayableVideo {
  id: string;
  title: string;
}

interface FeaturedVideo extends PlayableVideo {
  len?: string;
  img: string;
}

interface GridVideo extends PlayableVideo {
  img: string;
  hue: string;
}

const FEATURED: FeaturedVideo = {
  id: "6htIR6AL0LM",
  title: "Erik Wahl Keynote",
  img: "/photos/video-keynote.png",
};

const GRID_VIDEOS: GridVideo[] = [
  { id: "l1O6kFp5yVU", title: "This is Erik Wahl", img: "/photos/video-thisis.png", hue: "cyan" },
  { id: "5CaVLqSLq3U", title: "Sizzle Reel", img: "/photos/video-sizzle.jpg", hue: "yellow" },
];

function PlayButton({ hue = "spark", size = 64 }: { hue?: string; size?: number }) {
  const bg = hue === "spark" ? "var(--color-spark)" : `var(--color-hue-${hue})`;
  return (
    <div
      className="flex items-center justify-center rounded-full"
      style={{ width: size, height: size, background: bg, boxShadow: "var(--glow-spark)" }}
    >
      <span className="text-white" style={{ fontSize: size * 0.34, marginLeft: size * 0.06, lineHeight: 1 }}>
        ▶
      </span>
    </div>
  );
}

/**
 * MediaVideos — the featured keynote video, the "more from the stage"
 * grid, and the shared YouTube lightbox modal. Kept as a single client
 * component since the featured button, the grid cards, and the modal
 * all share the same `video` selection state.
 */
export function MediaVideos() {
  const [video, setVideo] = useState<PlayableVideo | null>(null);

  useEffect(() => {
    if (!video) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVideo(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [video]);

  return (
    <>
      <section className="bg-(--bg-canvas-stage) pt-9 pb-7 px-(--gutter)">
        <div className="mx-auto max-w-(--container-xl)">
          <Tag hue="cyan" dot>
            Media
          </Tag>
          <h1 className="mt-4 mb-6 text-5xl leading-[0.98] font-extrabold tracking-[-0.04em]">
            See Erik
            <br />
            <span className="ew-spectrum-text inline-block pb-[0.06em]">in action</span>
          </h1>
          <div className="relative">
            <div className="pointer-events-none absolute -inset-3.5 rounded-xl bg-(--grad-spectrum) opacity-30 blur-[52px]" />
            <button
              type="button"
              onClick={() => setVideo(FEATURED)}
              className="relative block w-full cursor-pointer overflow-hidden rounded-xl border bg-transparent p-0 text-left"
              style={{ borderColor: "var(--border-subtle)" }}
            >
              <div className="relative pt-[46%]">
                <Image
                  src={FEATURED.img}
                  alt={FEATURED.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 960px"
                  className="object-cover object-[center_18%]"
                  priority
                  fetchPriority="high"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(11,11,18,0.85), rgba(11,11,18,0.15))" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayButton size={84} />
                </div>
                <div className="absolute bottom-6 left-6">
                  <div className="font-mono text-hue-magenta mb-1.5 text-xs tracking-[0.12em] uppercase">
                    Featured{FEATURED.len ? ` · ${FEATURED.len}` : ""}
                  </div>
                  <div className="font-display text-2xl font-extrabold" style={{ color: "var(--text-primary)" }}>
                    {FEATURED.title}
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      <section className="border-t py-9 px-(--gutter)" style={{ borderColor: "var(--border-subtle)" }}>
        <div className="mx-auto max-w-(--container-xl)">
          <SectionHeading eyebrow="Erik in video" title="More from the stage" />
          <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
            {GRID_VIDEOS.map((c) => (
              <button
                key={c.id}
                type="button"
                className="ew-videocard relative block aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-lg border p-0"
                onClick={() => setVideo(c)}
                aria-label={`Play ${c.title}`}
                style={{
                  borderColor: "var(--border-subtle)",
                  background: "var(--color-ink-850)",
                  ["--cardhue" as string]: `var(--color-hue-${c.hue})`,
                }}
              >
                <Image
                  src={c.img}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="ew-videocard-img object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, rgba(11,11,18,0.05) 40%, rgba(11,11,18,0.85))" }}
                />
                <span
                  className="ew-videocard-play absolute top-1/2 left-1/2 flex h-[62px] w-[62px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full pl-1 text-[22px]"
                  style={{
                    background: `color-mix(in srgb, var(--color-hue-${c.hue}) 88%, transparent)`,
                    color: "#0b0b12",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.45)",
                  }}
                >
                  ▶
                </span>
                <span className="font-display absolute right-4 bottom-4 left-4 text-left text-lg leading-[1.1] font-bold text-white">
                  {c.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {video && (
        <div
          onClick={() => setVideo(null)}
          className="fixed inset-0 z-[1000] flex items-center justify-center p-(--gutter)"
          style={{ background: "rgba(5,5,10,0.88)", backdropFilter: "blur(8px)" }}
        >
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-[960px]">
            <div className="mb-3 flex items-center justify-between">
              <span className="font-mono text-hue-cyan text-xs tracking-[0.12em] uppercase">{video.title}</span>
              <button
                type="button"
                onClick={() => setVideo(null)}
                className="font-mono cursor-pointer rounded-pill border bg-transparent px-4 py-2 text-xs"
                style={{ borderColor: "var(--border-strong)", color: "var(--text-primary)" }}
              >
                CLOSE ✕
              </button>
            </div>
            <div
              className="relative overflow-hidden rounded-lg border pt-[56.25%]"
              style={{ borderColor: "var(--border-subtle)" }}
            >
              <iframe
                title={video.title}
                src={`https://www.youtube.com/embed/${video.id}?rel=0&autoplay=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
