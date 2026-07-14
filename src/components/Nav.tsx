"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./ui/Logo";
import { Button } from "./ui/Button";

const NAV_LINKS = [
  { href: "/speaker", label: "The Speaker" },
  { href: "/artist", label: "The Artist" },
  { href: "/media", label: "Media" },
  { href: "/blog", label: "Blog" },
  { href: "/resources", label: "Resources" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className="sticky top-0 z-100 border-b transition-all duration-200"
      style={{
        background: scrolled ? "rgba(11,11,18,0.82)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
        borderColor: scrolled ? "var(--border-subtle)" : "transparent",
      }}
    >
      <div className="mx-auto flex max-w-(--container-xl) items-center justify-between gap-4 px-(--gutter) py-4">
        <Link href="/" className="inline-flex">
          <Logo size={28} />
        </Link>
        <nav className="hidden items-center gap-[26px] md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-body text-sm font-semibold no-underline transition-colors duration-150"
              style={{
                color: isActive(l.href) ? "var(--text-primary)" : "var(--text-secondary)",
                borderBottom: isActive(l.href) ? "2px solid var(--color-spark)" : "2px solid transparent",
                paddingBottom: "2px",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Button variant="spark" size="sm" href="/book">Book Erik</Button>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
          className="font-mono flex md:hidden items-center rounded-sm border px-2.5 py-2 text-xs"
          style={{ borderColor: "var(--border-strong)", color: "var(--text-primary)", background: "transparent" }}
        >
          MENU
        </button>
      </div>
      {open && (
        <div className="flex flex-col gap-1 px-(--gutter) pt-2 pb-5 md:hidden" style={{ background: "rgba(11,11,18,0.96)" }}>
          {[...NAV_LINKS, { href: "/book", label: "Book Erik" }].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b py-3 font-semibold no-underline"
              style={{ borderColor: "var(--border-subtle)", color: "var(--text-primary)" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
