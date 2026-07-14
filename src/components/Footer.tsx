import Link from "next/link";
import { Logo } from "./ui/Logo";

const EXPLORE_LINKS: [string, string][] = [
  ["The Speaker", "/speaker"],
  ["The Artist", "/artist"],
  ["Media", "/media"],
];
const MORE_LINKS: [string, string][] = [
  ["Blog", "/blog"],
  ["Resources", "/resources"],
  ["Book Erik", "/book"],
];
const SOCIALS: [string, string][] = [
  ["Instagram", "https://www.instagram.com/erikwahl/"],
  ["YouTube", "https://www.youtube.com/channel/UCqEuyx1VCTdvhnXt7buvbMA"],
  ["LinkedIn", "https://www.linkedin.com/in/meeterikwahl"],
  ["Facebook", "http://www.facebook.com/iamerikwahl"],
  ["X", "https://twitter.com/erikwahl"],
];

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <div className="ew-eyebrow mb-3.5">{title}</div>
      <div className="flex flex-col gap-2.5">
        {links.map(([label, href]) => (
          <Link key={href} href={href} className="text-sm no-underline" style={{ color: "var(--text-secondary)" }}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t px-(--gutter) pt-16 pb-6" style={{ borderColor: "var(--border-subtle)", background: "var(--ink-850)" }}>
      <div className="mx-auto flex max-w-(--container-xl) flex-wrap justify-between gap-12">
        <div className="flex max-w-[34ch] flex-col gap-3">
          <Logo size={32} showTagline />
          <p className="m-0 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Internationally recognized graffiti artist, #1 bestselling author, and one of the most sought-after keynote speakers in the world.
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          <FooterCol title="Explore" links={EXPLORE_LINKS} />
          <FooterCol title="More" links={MORE_LINKS} />
          <div>
            <div className="ew-eyebrow mb-3.5">Follow</div>
            <div className="flex flex-col gap-2.5">
              {SOCIALS.map(([label, url]) => (
                <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="text-sm no-underline" style={{ color: "var(--text-secondary)" }}>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-(--container-xl) flex-wrap justify-between gap-3 border-t pt-5" style={{ borderColor: "var(--border-subtle)" }}>
        <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>© 2026 ERIK WAHL · THE ART OF VISION</span>
        <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>SAN DIEGO, CA</span>
      </div>
    </footer>
  );
}
