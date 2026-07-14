import type { Metadata } from "next";
import { MediaVideos } from "@/components/media/MediaVideos";
import { MediaBooks } from "@/components/media/MediaBooks";
import { PodcastSection } from "@/components/media/PodcastSection";
import { PressSection } from "@/components/media/PressSection";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Watch Erik Wahl's keynote reel, browse his bestselling books, listen to podcast conversations, and see what Forbes, Fast Company, and TED have to say.",
};

export default function MediaPage() {
  return (
    <div>
      <MediaVideos />
      <MediaBooks />
      <PodcastSection />
      <PressSection />
      <CTASection />
    </div>
  );
}
