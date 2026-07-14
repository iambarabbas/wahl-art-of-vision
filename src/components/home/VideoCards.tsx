"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface VideoCard {
  id: string;
  title: string;
  img: string;
  hue: string;
}

const CARDS: VideoCard[] = [
  { id: "6htIR6AL0LM", title: "Erik Wahl Keynote", img: "/photos/video-keynote.png", hue: "magenta" },
  { id: "l1O6kFp5yVU", title: "This is Erik Wahl", img: "/photos/video-thisis.png", hue: "cyan" },
  { id: "5CaVLqSLq3U", title: "Sizzle Reel", img: "/photos/video-sizzle.jpg", hue: "yellow" },
];

export function VideoCards() {
  const [active, setActive] = useState<VideoCard | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section className="py-10 px-(--gutter)">
      <div className="mx-auto max-w-(--container-xl)">
        <div className="ew-eyebrow mb-2 text-center" style={{ color: "var(--text-muted)" }}>Watch</div>
        <h2 className="font-display m-0 mx-auto mb-16 text-center text-2xl font-bold tracking-[-0.01em]">See Erik on stage</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
          {CARDS.map((c) => (
            <button
              key={c.id}
              type="button"
              className="ew-videocard relative block aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-lg border p-0"
              onClick={() => setActive(c)}
              aria-label={`Play ${c.title}`}
              style={{ borderColor: "var(--border-subtle)", background: "var(--ink-850)", ["--cardhue" as string]: `var(--color-hue-${c.hue})` }}
            >
              <Image src={c.img} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="ew-videocard-img object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(11,11,18,0.05) 40%, rgba(11,11,18,0.85))" }} />
              <span
                className="ew-videocard-play absolute top-1/2 left-1/2 flex h-[62px] w-[62px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full pl-1 text-[22px]"
                style={{ background: `color-mix(in srgb, var(--color-hue-${c.hue}) 88%, transparent)`, color: "#0b0b12", boxShadow: "0 8px 30px rgba(0,0,0,0.45)" }}
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

      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[2000] flex items-center justify-center p-5"
          style={{ background: "rgba(6,6,11,0.85)", backdropFilter: "blur(6px)" }}
        >
          <div onClick={(e) => e.stopPropagation()} className="w-[min(1000px,100%)]">
            <div className="mb-3 flex items-center justify-between">
              <span className="font-display text-lg font-bold text-white">{active.title}</span>
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close"
                className="flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-full border text-lg text-white"
                style={{ borderColor: "var(--border-subtle)", background: "none" }}
              >
                ×
              </button>
            </div>
            <div className="relative overflow-hidden rounded-lg border pt-[56.25%]" style={{ borderColor: "var(--border-subtle)" }}>
              <iframe
                title={active.title}
                src={`https://www.youtube.com/embed/${active.id}?rel=0&autoplay=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
