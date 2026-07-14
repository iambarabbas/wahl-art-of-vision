import type { Metadata } from "next";
import { SpeakerHero } from "@/components/speaker/SpeakerHero";
import { BooksStrip } from "@/components/speaker/BooksStrip";
import { KeynoteExplorer } from "@/components/speaker/KeynoteExplorer";
import { PraiseWall } from "@/components/speaker/PraiseWall";
import { Clients } from "@/components/Clients";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "The Speaker",
  description:
    "Erik Wahl blends the insight of a #1 bestselling business author with the energy of a world-renowned artist. Explore his keynote programs, from The Art of Vision to The Human Edge.",
};

export default function SpeakerPage() {
  return (
    <div>
      <SpeakerHero />
      <BooksStrip />
      <Clients />
      <KeynoteExplorer />
      <PraiseWall />
      <CTASection />
    </div>
  );
}
