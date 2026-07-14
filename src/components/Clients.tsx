"use client";

import { useState } from "react";
import Image from "next/image";
import { CLIENT_GROUPS } from "@/lib/client-groups";

interface ClientLogo {
  src: string;
  name: string;
}

const CLIENT_LOGOS: ClientLogo[] = [
  { src: "/photos/logos/disney.svg", name: "Disney" },
  { src: "/photos/logos/att.svg", name: "AT&T" },
  { src: "/photos/logos/fedex.png", name: "FedEx" },
  { src: "/photos/logos/exxon.png", name: "ExxonMobil" },
  { src: "/photos/logos/verizon.svg", name: "Verizon" },
  { src: "/photos/logos/wellsfargo.png", name: "Wells Fargo" },
  { src: "/photos/logos/bofa.png", name: "Bank of America" },
  { src: "/photos/logos/amex.png", name: "American Express" },
  { src: "/photos/logos/salesforce.png", name: "Salesforce" },
  { src: "/photos/logos/pfizer.png", name: "Pfizer" },
  { src: "/photos/logos/kaiser.png", name: "Kaiser Permanente" },
  { src: "/photos/logos/cigna.png", name: "Cigna" },
  { src: "/photos/logos/colgate.png", name: "Colgate" },
  { src: "/photos/logos/costco.webp", name: "Costco Wholesale" },
  { src: "/photos/logos/delmonte.webp", name: "Del Monte" },
  { src: "/photos/logos/darden.webp", name: "Darden Restaurants" },
  { src: "/photos/logos/wyndham.webp", name: "Wyndham Hotels & Resorts" },
  { src: "/photos/logos/tdameritrade.png", name: "TD Ameritrade" },
  { src: "/photos/logos/lpl.webp", name: "LPL Financial" },
  { src: "/photos/logos/massmutual.png", name: "MassMutual" },
  { src: "/photos/logos/ing.png", name: "ING" },
  { src: "/photos/logos/appian.webp", name: "Appian" },
  { src: "/photos/logos/ted.png", name: "TED" },
  { src: "/photos/logos/cnn.png", name: "CNN" },
  { src: "/photos/logos/nar.webp", name: "National Association of Realtors" },
  { src: "/photos/logos/atd.png", name: "Association for Talent Development" },
  { src: "/photos/logos/lbs.webp", name: "London Business School" },
];

function LogoCell({ src, name, index }: { src: string; name: string; index: number }) {
  return (
    <div
      className="ew-logo-in relative h-[52px] flex-[0_1_150px]"
      style={{ animationDelay: `${(index * 0.12).toFixed(2)}s` }}
    >
      <Image src={src} alt={name} fill sizes="150px" className="object-contain" />
    </div>
  );
}

function FullClientList() {
  const [open, setOpen] = useState(false);
  const total = CLIENT_GROUPS.reduce((n, g) => n + g.items.length, 0);

  return (
    <div className="mt-8 text-center">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="font-mono inline-flex cursor-pointer items-center gap-2 border-0 border-b bg-none p-2 text-xs font-bold tracking-[0.14em] uppercase"
        style={{
          color: "var(--color-hue-cyan)",
          borderBottomColor: "color-mix(in srgb, var(--color-hue-cyan) 40%, transparent)",
        }}
      >
        {open ? "Hide Client List" : "See Full Client List"}
        <span
          className="inline-block transition-transform duration-300 ease-in-out"
          style={{ transform: open ? "rotate(180deg)" : "none" }}
        >
          ▾
        </span>
      </button>

      <div
        className="grid text-left"
        style={{ gridTemplateRows: open ? "1fr" : "0fr", transition: "grid-template-rows 0.55s var(--ease-in-out)" }}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="max-h-[500px] overflow-y-auto pt-6 [-webkit-overflow-scrolling:touch]">
            <div className="ew-eyebrow mb-6 text-center" style={{ color: "var(--text-muted)" }}>
              {total.toLocaleString()} organizations across {CLIENT_GROUPS.length} sectors
            </div>
            <div className="mx-auto grid max-w-[1100px] grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-x-7 gap-y-6">
              {CLIENT_GROUPS.map((g) => (
                <div key={g.group}>
                  <h3
                    className="font-mono m-0 mb-3 flex items-baseline justify-between gap-2 border-b pb-2 text-xs font-bold tracking-[0.14em] uppercase"
                    style={{ color: "var(--color-spark)", borderColor: "var(--border-subtle)" }}
                  >
                    <span>{g.group}</span>
                    <span className="font-normal" style={{ color: "var(--text-muted)" }}>
                      {g.items.length}
                    </span>
                  </h3>
                  <ul className="m-0 list-none columns-2 gap-5 p-0">
                    {g.items.map((name) => (
                      <li
                        key={name}
                        className="text-xs leading-[1.75] break-inside-avoid"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Clients — the cross-page "brands we serve" logo wall plus an
 * expandable full client roster. Shared across pages (Home, Speaker),
 * so it lives at the components root rather than under a single
 * page's folder.
 */
export function Clients() {
  return (
    <section
      className="border-t border-b bg-ink-850 px-(--gutter) py-8"
      style={{ borderColor: "var(--border-subtle)" }}
    >
      <div className="mx-auto max-w-(--container-xl)">
        <div className="ew-eyebrow mb-2 text-center" style={{ color: "var(--text-muted)" }}>
          1,500+ keynotes · 21 countries
        </div>
        <h2
          className="font-display mx-auto mb-8 text-center text-2xl font-bold tracking-[-0.01em]"
          style={{ color: "var(--text-primary)" }}
        >
          The Brands We Serve
        </h2>
        <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-center gap-6">
          {CLIENT_LOGOS.map((logo, i) => (
            <LogoCell key={logo.name} src={logo.src} name={logo.name} index={i} />
          ))}
        </div>
        <FullClientList />
      </div>
    </section>
  );
}
