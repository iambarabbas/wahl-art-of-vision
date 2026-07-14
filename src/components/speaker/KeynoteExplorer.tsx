"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionHeading, Tag, Button } from "@/components/ui";

interface Keynote {
  id: string;
  tag: string;
  hue: string;
  title: string;
  lead: string;
  body: string;
  cols: [string, string[]][];
  img: string;
  imgPos?: string;
}

const KEYNOTES: Keynote[] = [
  {
    id: "vision",
    tag: "Signature",
    hue: "magenta",
    title: "The Art of Vision",
    lead: "The best sustainable edge in business is the ability to differentiate yourself from your competition.",
    body: "Through this entertaining and highly practical program, we uncover new ways to make your organization more creative, innovative and profitable while helping your people become better storytellers within and for your company.",
    cols: [
      [
        "Organizational excellence",
        ["Differentiation, differentiation, differentiation", "Telling a better story", "Outthinking the competition"],
      ],
      [
        "Embracing change",
        ["Working smarter, not harder", "Sustaining excellence in a changing economy", "Leveraging chaos to capitalize on opportunity"],
      ],
    ],
    img: "/photos/kn-vision.jpg",
  },
  {
    id: "ai",
    tag: "New for 2026",
    hue: "cyan",
    title: "The Human Edge",
    lead: "The greatest advantage in an AI-driven world is not becoming more machine-like. It is becoming more human.",
    body: "Through this timely and highly engaging program, we explore how to harness AI as a catalyst for innovation while reclaiming the creativity, courage, and imagination that make us unmistakably human. Audiences will learn how to think more expansively, adapt more confidently, and use emerging technology without losing the human edge that drives connection, meaning, and breakthrough ideas.",
    cols: [
      [
        "Human-centered innovation",
        ["Harnessing AI as a creative catalyst", "Expanding imagination in a rapidly changing world", "Using technology without losing human connection"],
      ],
      [
        "Creative courage",
        ["Reclaiming curiosity, risk, and original thinking", "Building confidence in times of uncertainty", "Turning disruption into possibility"],
      ],
    ],
    img: "/assets/keynote-human-edge-cosmic.jpg",
    imgPos: "18% 60%",
  },
  {
    id: "leadership",
    tag: "Leadership",
    hue: "blue",
    title: "The Art of Leadership",
    lead: "Today's leaders face pressure to innovate or perish unlike any time in history.",
    body: "Erik paints a compelling new portrait of the successful leader of tomorrow, inspiring audiences to shed “business as usual” processes and build the emotional connection that drives engagement. Growth and comfort cannot co-exist.",
    cols: [
      [
        "The end results",
        ["Innovative solutions to further your organization", "Attracting and engaging quality employees", "New efficiencies and the end of redundancies"],
      ],
    ],
    img: "/assets/keynote-spark.jpg",
  },
  {
    id: "unthink",
    tag: "Bestseller",
    hue: "violet",
    title: "UNTHINK",
    lead: "Somehow we've come to believe creativity is reserved for the chosen few. The truth is bigger than that.",
    body: "UNthink pushes your organization beyond habitual levels of performance, reframing thinking so new creative actions become possible. Begin to see your work as a blank canvas of limitless opportunity.",
    cols: [
      [
        "Actionable Takeaways",
        ["Step outside convention for unexpected solutions", "Challenge pre-conceived notions of what's possible", "UNthink your way to creativity, productivity & passion"],
      ],
    ],
    img: "/photos/kn-unthink.jpg",
  },
  {
    id: "spark",
    tag: "Bestseller",
    hue: "yellow",
    title: "The Spark & The Grind",
    lead: "The paradox of creativity is that structure creates freedom.",
    body: "Even the wildest minds require extreme orderliness so they have the space and discipline to create. Erik deconstructs the creative process to turn ideas into disciplined action, because disruption is the new normal.",
    cols: [
      [
        "Real World Strategies",
        ["Deconstruct the discipline of the creative process", "Explore the psychology of success & science of innovation", "Build the mental toughness to master complexity"],
      ],
    ],
    img: "/photos/about-sneakers.jpg",
  },
  {
    id: "candid",
    tag: "Fireside",
    hue: "orange",
    title: "Erik & Tasha Wahl: A Candid Conversation",
    lead: "A dynamic, 60-minute curated Q&A on building a business, consulting worldwide, and 30 years of marriage.",
    body: "With honesty and insight, Erik and Tasha share lessons on growth, failure, resilience, and gratitude in a rare behind-the-scenes look at the intersection of creativity, entrepreneurship, and personal evolution.",
    cols: [],
    img: "/assets/photo-interview-bw.jpg",
  },
];

/**
 * KeynoteExplorer — a tabbed showcase of Erik's programs. The active
 * tab's border/background/text colors are per-item hues resolved at
 * render time (color-mix expressions), so those stay inline; layout
 * (grid, gap, padding, radii) is expressed with Tailwind utilities.
 */
export function KeynoteExplorer() {
  const [active, setActive] = useState("vision");
  const k = KEYNOTES.find((x) => x.id === active) ?? KEYNOTES[0];

  return (
    <section className="px-(--gutter) py-9">
      <div className="mx-auto max-w-(--container-xl)">
        <SectionHeading
          eyebrow="The Keynotes"
          title={
            <>
              Transform your business with an <span className="ew-marker">experiential</span>{" "}
              keynote.
            </>
          }
          lead="Explore Erik’s programs to see how each keynote is tailored to your audience, goals, and outcomes."
        />
        <div className="my-6 flex flex-wrap gap-2.5">
          {KEYNOTES.map((p) => {
            const on = p.id === active;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setActive(p.id)}
                className="font-body cursor-pointer rounded-full px-[18px] py-2.5 text-sm font-semibold"
                style={{
                  border: on ? `1px solid var(--color-hue-${p.hue})` : "1px solid var(--border-strong)",
                  background: on
                    ? `color-mix(in srgb, var(--color-hue-${p.hue}) 16%, transparent)`
                    : "transparent",
                  color: on ? "var(--text-primary)" : "var(--text-secondary)",
                  transition: "all var(--dur-fast) var(--ease-out)",
                }}
              >
                {p.title}
              </button>
            );
          })}
        </div>
        <div
          className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-7 overflow-hidden rounded-xl border"
          style={{ borderColor: "var(--border-subtle)", background: "var(--surface-1)" }}
        >
          <div className="relative h-full min-h-[340px]">
            <Image
              src={k.img}
              alt={k.title}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              style={{ objectPosition: k.imgPos ?? "center 32%" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(120deg, color-mix(in srgb, var(--color-hue-${k.hue}) 30%, transparent), rgba(11,11,18,0.55))`,
              }}
            />
          </div>
          <div className="p-7">
            <Tag hue={k.hue}>{k.tag}</Tag>
            <h3 className="my-3 text-2xl leading-[1.1]">{k.title}</h3>
            <p
              className="font-display mb-3 text-lg leading-[1.3] font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              {k.lead}
            </p>
            <p className="mb-5 leading-[1.7]" style={{ color: "var(--text-secondary)" }}>
              {k.body}
            </p>
            {k.cols.length > 0 && (
              <div
                className="mb-5 grid gap-5"
                style={{
                  gridTemplateColumns: k.cols.length > 1 ? "repeat(auto-fit, minmax(200px, 1fr))" : "1fr",
                }}
              >
                {k.cols.map(([h, items]) => (
                  <div key={h}>
                    <div className="ew-eyebrow mb-2.5" style={{ color: `var(--color-hue-${k.hue})` }}>
                      {h}
                    </div>
                    <ul className="m-0 flex list-none flex-col gap-2 p-0">
                      {items.map((it) => (
                        <li
                          key={it}
                          className="flex gap-2.5 text-sm leading-[1.5]"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          <span className="font-extrabold" style={{ color: `var(--color-hue-${k.hue})` }}>
                            /
                          </span>
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
            <Button variant="outline" href="/book">
              Bring this keynote to your event
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
