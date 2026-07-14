import type { Metadata } from "next";
import { ArtistHero } from "@/components/artist/ArtistHero";
import { ArtistStory } from "@/components/artist/ArtistStory";
import { ProcessSection } from "@/components/artist/ProcessSection";
import { Gallery } from "@/components/artist/Gallery";
import { CharityBand } from "@/components/artist/CharityBand";

export const metadata: Metadata = {
  title: "The Artist",
};

export default function ArtistPage() {
  return (
    <div>
      <ArtistHero />
      <ArtistStory />
      <ProcessSection />
      <Gallery />
      <CharityBand />
    </div>
  );
}
