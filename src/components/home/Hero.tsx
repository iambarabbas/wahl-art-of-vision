"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Tag, Button } from "@/components/ui";

export function Hero() {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShown(true), 60);
    return () => clearTimeout(t);
  }, []);

  const rise = (delay: number): React.CSSProperties => ({
    opacity: shown ? 1 : 0,
    transform: shown ? "none" : "translateY(24px)",
    transition: "opacity var(--dur-paint) var(--ease-out), transform var(--dur-paint) var(--ease-out)",
    transitionDelay: `${delay}ms`,
  });

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      <Image
        src="/photos/erik-stage-hero.jpg"
        alt="Erik Wahl painting live on stage"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="ew-hero-pan object-cover object-[right_12%]"
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(11,11,18,0.94) 0%, rgba(11,11,18,0.78) 38%, rgba(11,11,18,0.30) 70%, rgba(11,11,18,0.10) 100%)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--color-ink-900) 2%, transparent 30%)" }} />
      <div className="ew-blob" style={{ width: "42vw", height: "42vw", maxWidth: 560, maxHeight: 560, left: "-6%", bottom: "-12%", background: "radial-gradient(circle, rgba(255,45,26,0.45), transparent 65%)", opacity: 0.5, animation: "ew-blob-drift 22s var(--ease-in-out) infinite" }} />
      <div className="ew-blob" style={{ width: "34vw", height: "34vw", maxWidth: 460, maxHeight: 460, right: "4%", top: "-8%", background: "radial-gradient(circle, rgba(20,197,232,0.40), transparent 65%)", opacity: 0.45, animation: "ew-blob-drift 28s var(--ease-in-out) infinite reverse" }} />

      <div className="relative mx-auto w-full max-w-(--container-xl) px-(--gutter)">
        <div className="max-w-[min(94vw,740px)]">
          <div className="mb-4" style={rise(0)}>
            <Tag hue="cyan" dot>Keynote Speaker · Live Artist</Tag>
          </div>
          <h1
            className="m-0 mb-4 font-extrabold"
            style={{ fontSize: "clamp(3.2rem, 7.6vw, 5.8rem)", lineHeight: 0.95, letterSpacing: "-0.04em", ...rise(90) }}
          >
            <span className="text-white">Expand your mind.</span>
            <br />
            <span className="ew-spectrum-text inline-block pb-[0.06em]">Transform your business.</span>
          </h1>
          <div
            className="font-mono mb-4 flex flex-wrap gap-3 text-xs tracking-[0.18em] uppercase"
            style={{ color: "var(--text-muted)", ...rise(180) }}
          >
            <span>Speaker</span>
            <span className="text-spark">/</span>
            <span>Artist</span>
            <span className="text-spark">/</span>
            <span>Author</span>
          </div>
          <p className="mb-6 max-w-[44ch] text-[length:var(--text-md)]" style={{ lineHeight: 1.55, color: "var(--text-secondary)", ...rise(260) }}>
            Experience Erik Wahl&rsquo;s unforgettable fusion of art, story, and breakthrough thinking.
          </p>
          <div className="flex flex-wrap gap-3" style={rise(360)}>
            <Button variant="outline" size="lg" href="/media" iconLeft={<span className="text-[0.8em]">▶</span>}>
              See Erik in Action
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
