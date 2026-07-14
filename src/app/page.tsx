import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Clients } from "@/components/Clients";
import { VideoCards } from "@/components/home/VideoCards";
import { About } from "@/components/home/About";
import { Testimonials } from "@/components/home/Testimonials";
import { KeynotesPreview } from "@/components/home/KeynotesPreview";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { personSchema, organizationSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";

const description =
  "Erik Wahl is an internationally recognized graffiti artist, #1 bestselling author, and one of the most sought-after keynote speakers in the world.";

export const metadata: Metadata = {
  title: "Erik Wahl — The Art of Vision",
  description,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Erik Wahl — The Art of Vision",
    description,
    url: SITE_URL,
    type: "website",
    images: [{ url: `${SITE_URL}/photos/erik-stage-hero.jpg` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Erik Wahl — The Art of Vision",
    description,
    images: [`${SITE_URL}/photos/erik-stage-hero.jpg`],
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={personSchema} />
      <JsonLd data={organizationSchema} />
      <Hero />
      <Reveal><Clients /></Reveal>
      <Reveal><VideoCards /></Reveal>
      <Reveal><About /></Reveal>
      <Reveal><Testimonials /></Reveal>
      <Reveal><KeynotesPreview /></Reveal>
      <Reveal><CTASection /></Reveal>
    </>
  );
}
