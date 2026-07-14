import { Tag } from "@/components/ui";
import { backgroundImageUrl } from "@/lib/image-loader";

/**
 * ArtistHero — full-bleed portrait photo with a dark gradient scrim
 * fading in from the right, and the page's title treatment on top.
 */
export function ArtistHero() {
  return (
    <section className="relative flex min-h-[78vh] items-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImageUrl("/photos/artist-hero.jpg")})`,
          backgroundSize: "150%",
          backgroundPosition: "16% 42%",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, var(--color-ink-900) 0%, var(--color-ink-900) 26%, rgba(11,11,18,0.82) 48%, rgba(11,11,18,0.35) 72%, rgba(11,11,18,0.08) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, var(--color-ink-900) 1%, transparent 26%)" }}
      />
      <div className="relative mx-auto w-full max-w-(--container-xl) py-9 px-(--gutter)">
        <div className="max-w-[min(92vw,620px)]">
          <Tag hue="violet" dot>
            The Artist
          </Tag>
          <h1
            className="my-4 max-w-[14ch] font-extrabold"
            style={{ fontSize: "clamp(3.2rem, 7vw, 5rem)", lineHeight: 0.98, letterSpacing: "-0.04em" }}
          >
            The canvas is a{" "}
            <span className="ew-spectrum-text inline-block pb-[0.06em]">metaphor</span>
          </h1>
          <p className="m-0 max-w-[48ch] text-md leading-[1.6]" style={{ color: "var(--text-secondary)" }}>
            Erik left a successful corporate career to pursue creativity as a catalyst for transformation. On stage,
            a blank canvas becomes a finished masterpiece in minutes, and the painting itself becomes the message.
          </p>
        </div>
      </div>
    </section>
  );
}
