import Image from "next/image";
import { Button } from "@/components/ui";

/**
 * CTASection — the closing "Book Erik" banner reused at the bottom of
 * every page. Lives at the components root (like Nav/Footer) since
 * it's shared across pages, not specific to the Speaker page.
 */
export function CTASection() {
  return (
    <section className="relative overflow-hidden px-(--gutter) py-10 text-center">
      <Image
        src="/assets/keynote-human-edge-cosmic.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "center 42%" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 120% at 50% 50%, rgba(11,11,18,0.45) 0%, rgba(11,11,18,0.78) 60%, rgba(11,11,18,0.94) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-ink-900) 0%, transparent 22%, transparent 78%, var(--color-ink-900) 100%)",
        }}
      />
      <div className="relative mx-auto max-w-[30ch]">
        <h2 className="mb-4 text-4xl tracking-[-0.03em]">
          What are you <span className="ew-spectrum-text">waiting</span> for?
        </h2>
        <p className="mb-6 text-md" style={{ color: "var(--text-secondary)" }}>
          Bring an unforgettable, art-fueled keynote to your next event.
        </p>
        <Button variant="spark" size="lg" href="/book">
          Book Erik today
        </Button>
      </div>
    </section>
  );
}
