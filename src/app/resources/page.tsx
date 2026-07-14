import type { Metadata } from "next";
import Image from "next/image";
import { DownloadCard, type DownloadCardProps } from "@/components/resources/DownloadCard";
import { IaaCard, type IaaCardProps } from "@/components/resources/IaaCard";
import { BASE_PATH } from "@/lib/base-path";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Books, planner downloads, and everything you need to bring Erik Wahl's ideas, and Erik himself, to your organization.",
};

const DOWNLOADS: DownloadCardProps[] = [
  {
    title: "Speaker bio",
    filetype: "DOCX",
    description: "Full bio and approved boilerplate copy, ready to paste into your program.",
    hue: "magenta",
    href: `${BASE_PATH}/planner/erik-wahl-bio.docx`,
  },
  {
    title: "Stage introduction",
    filetype: "DOCX",
    description: "The word-for-word script to introduce Erik from the podium.",
    hue: "cyan",
    href: `${BASE_PATH}/planner/erik-wahl-introduction.docx`,
  },
  {
    title: "Audio / video requirements",
    filetype: "PDF",
    description: "Complete AV and technical rider for your venue and production team.",
    hue: "yellow",
    href: `${BASE_PATH}/planner/erik-wahl-audio-video.pdf`,
  },
  {
    title: "Stage requirements",
    filetype: "PDF",
    description: "Stage dimensions, easel placement, and set needs for the live painting.",
    hue: "green",
    href: `${BASE_PATH}/planner/erik-wahl-stage-requirements.pdf`,
  },
  {
    title: "Presentation presets",
    filetype: "PDF",
    description: "Lighting, projection, and visual presets for a seamless show.",
    hue: "violet",
    href: `${BASE_PATH}/planner/erik-wahl-presets.pdf`,
  },
  {
    title: "Event questionnaire",
    filetype: "PDF",
    description: "Tell us about your event so Erik can tailor the keynote to your audience.",
    hue: "orange",
    href: `${BASE_PATH}/planner/erik-wahl-questionnaire.pdf`,
  },
  {
    title: "Press headshot",
    filetype: "JPG",
    description: "High-resolution headshot of Erik for programs, web, and press.",
    hue: "blue",
    href: `${BASE_PATH}/assets/headshot-1556.jpg`,
  },
];

const IAA_ITEMS: IaaCardProps[] = [
  {
    img: "/assets/iaa-create.jpg",
    label: "Create Something Out of Nothing",
    tag: "The original",
    hue: "green",
    href: `${BASE_PATH}/planner/create-something-out-of-nothing.pdf`,
  },
  {
    img: "/assets/iaa-healthcare.jpg",
    label: "Healthcare Edition",
    tag: "For care teams",
    hue: "magenta",
    href: `${BASE_PATH}/planner/create-healthcare.pdf`,
  },
  {
    img: "/assets/iaa-student.jpg",
    label: "Student Edition",
    tag: "For students",
    hue: "cyan",
    href: `${BASE_PATH}/planner/create-student.pdf`,
  },
  {
    img: "/assets/iaa-classroom.jpg",
    label: "Classroom Edition",
    tag: "For educators",
    hue: "orange",
    href: `${BASE_PATH}/planner/create-classroom.pdf`,
  },
];

function ResourcesHero() {
  return (
    <section className="px-(--gutter) pt-9 pb-7">
      <div className="mx-auto grid max-w-(--container-xl) grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-center gap-8">
        <div>
          <div className="mb-3 font-mono text-xs tracking-[0.16em] uppercase" style={{ color: "var(--color-spark)" }}>
            Resources
          </div>
          <h1 className="mb-3 text-5xl leading-none font-[800] tracking-[-0.04em]" style={{ color: "var(--text-primary)" }}>
            Tools to keep the spark
          </h1>
          <p className="max-w-[48ch] text-md" style={{ color: "var(--text-secondary)" }}>
            Books, planner downloads, and everything you need to bring Erik&apos;s ideas, and Erik himself, to your
            organization.
          </p>
        </div>
        <div className="relative">
          <div
            className="pointer-events-none absolute rounded-xl"
            style={{ inset: "-14px", background: "var(--grad-spectrum)", filter: "blur(52px)", opacity: 0.28 }}
          />
          <div className="relative w-full overflow-hidden rounded-lg border" style={{ borderColor: "var(--border-subtle)", boxShadow: "var(--shadow-md)" }}>
            <Image
              src="/assets/resources-hero-hat.jpg"
              alt="Erik Wahl"
              width={1800}
              height={1732}
              className="block h-auto w-full"
              sizes="(max-width: 768px) 100vw, 560px"
              priority
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Downloads() {
  return (
    <section className="px-(--gutter) pt-7 pb-8">
      <div className="mx-auto max-w-(--container-lg)">
        <div className="mb-5 font-mono text-xs tracking-[0.14em] uppercase" style={{ color: "var(--text-muted)" }}>
          For event planners
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
          {DOWNLOADS.map((d) => (
            <DownloadCard key={d.title} {...d} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IAmArtist() {
  return (
    <section className="px-(--gutter) py-8">
      <div className="mx-auto max-w-(--container-lg)">
        <div className="mb-2 font-mono text-xs tracking-[0.14em] uppercase" style={{ color: "var(--text-muted)" }}>
          I Am Artist
        </div>
        <p className="mb-5 max-w-[52ch] text-sm" style={{ color: "var(--text-secondary)" }}>
          Free &quot;Create Something Out of Nothing&quot; guides. Pick the edition that fits your audience.
        </p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5">
          {IAA_ITEMS.map((it) => (
            <IaaCard key={it.label} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StageCta() {
  return (
    <section className="px-(--gutter) pb-8">
      <div className="relative mx-auto max-w-(--container-lg)">
        <div
          className="pointer-events-none absolute rounded-xl"
          style={{ inset: "-12px", background: "var(--grad-spectrum)", filter: "blur(48px)", opacity: 0.22 }}
        />
        <div
          className="relative aspect-[16/6] overflow-hidden rounded-xl border"
          style={{ borderColor: "var(--border-subtle)", boxShadow: "var(--shadow-md)" }}
        >
          <Image
            src="/photos/resources-band.jpg"
            alt="Erik Wahl seated among his custom-painted sneaker collection"
            fill
            sizes="(max-width: 1140px) 100vw, 1140px"
            className="object-cover"
            style={{ objectPosition: "center 32%" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(90deg, rgba(11,11,18,0.55), transparent 55%)" }}
          />
          <div className="absolute bottom-5 left-6 max-w-[30ch]">
            <div className="font-display text-2xl leading-[1.05] font-[800] text-white">
              Bring the spark to your stage.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ResourcesPage() {
  return (
    <div data-theme="paper" style={{ background: "var(--bg-canvas)", color: "var(--text-primary)" }}>
      <ResourcesHero />
      <Downloads />
      <IAmArtist />
      <StageCta />
    </div>
  );
}
