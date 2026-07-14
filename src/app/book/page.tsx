import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui";
import { BookingForm } from "@/components/book/BookingForm";
import { SITE_URL } from "@/lib/constants";

const description = "Tell us about your event and our team will respond within one business day.";
const url = `${SITE_URL}/book`;

export const metadata: Metadata = {
  title: "Book Erik",
  description,
  alternates: { canonical: url },
  openGraph: { title: "Book Erik | Erik Wahl", description, url, images: [{ url: `${SITE_URL}/assets/speaker-hero.jpg` }] },
  twitter: { card: "summary_large_image", title: "Book Erik | Erik Wahl", description, images: [`${SITE_URL}/assets/speaker-hero.jpg`] },
};

export default function BookPage() {
  return (
    <section className="min-h-[70vh] py-24 px-(--gutter)" style={{ background: "var(--bg-canvas-stage)" }}>
      <div className="mx-auto max-w-(--container-lg)">
        <div className="mb-12 text-center">
          <SectionHeading
            align="center"
            eyebrow="Book Erik"
            title={<>Let&rsquo;s design your <span className="ew-spectrum-text">moment</span></>}
            lead="Tell us about your event and our team will respond within one business day."
          />
        </div>
        <BookingForm />
      </div>
    </section>
  );
}
