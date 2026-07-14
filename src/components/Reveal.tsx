"use client";

import { useEffect, useRef, useState } from "react";

export interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  style?: React.CSSProperties;
}

/**
 * Reveal — scroll-reveal wrapper that fades + rises content as it enters
 * the viewport. Reduced-motion is handled globally in globals.css.
 */
export function Reveal({ children, delay = 0, y = 24, style }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setSeen(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    const fallback = setTimeout(() => setSeen(true), 1400);
    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: seen ? 1 : 0,
        transform: seen ? "none" : `translateY(${y}px)`,
        transition: "opacity var(--dur-paint) var(--ease-out), transform var(--dur-paint) var(--ease-out)",
        transitionDelay: seen ? `${delay}ms` : "0ms",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
