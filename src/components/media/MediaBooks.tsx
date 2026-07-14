import { SectionHeading } from "@/components/ui";
import { BookCoverLink } from "./BookCoverLink";

interface Book {
  img: string;
  title: string;
  sub: string;
  hue: string;
  badge: string;
  url: string;
}

const BOOKS: Book[] = [
  {
    img: "/assets/book-unthink.jpg",
    title: "UNthink",
    sub: "Rediscover Your Creative Genius",
    hue: "magenta",
    badge: "#1 Bestseller",
    url: "https://www.amazon.com/Unthink-Rediscover-Your-Creative-Genius/dp/0770434002",
  },
  {
    img: "/assets/book-spark.jpg",
    title: "The Spark & The Grind",
    sub: "Ignite the Power of Disciplined Creativity",
    hue: "yellow",
    badge: "Bestseller",
    url: "https://www.amazon.com/Spark-Grind-Ignite-Disciplined-Creativity-ebook/dp/B01IOHQ7ZM",
  },
  {
    img: "/assets/book-unchain.jpg",
    title: "Unchain the Elephant",
    sub: "Reframe Your Thinking to Unleash Your Potential",
    hue: "orange",
    badge: "The latest",
    url: "https://www.amazon.com/Unchain-Elephant-Reframe-Thinking-Potential/dp/1608104818",
  },
  {
    img: "/assets/book-wahl.jpg",
    title: "The Wahl Story",
    sub: "The art & life of Erik Wahl, by Sean Sheridan",
    hue: "cyan",
    badge: "The art book",
    url: "https://www.amazon.com/Erik-Wahl-Story/dp/0615594980",
  },
];

export function MediaBooks() {
  return (
    <section
      className="relative overflow-hidden border-t py-9 px-(--gutter)"
      style={{ background: "var(--color-ink-850)", borderColor: "var(--border-subtle)" }}
    >
      <div className="pointer-events-none absolute top-[10%] left-[-8%] h-[60%] w-[40%] rounded-full bg-(--grad-spectrum) opacity-[0.12] blur-[130px]" />
      <div className="relative mx-auto max-w-(--container-xl)">
        <SectionHeading
          eyebrow="On the shelf"
          title={
            <>
              Read the{" "}
              <span
                className="ew-marker"
                style={{ backgroundImage: "linear-gradient(var(--color-hue-yellow), var(--color-hue-yellow))" }}
              >
                movement
              </span>
            </>
          }
          lead="Four books on creativity, disruption, and seeing differently. Grab one, or all four."
        />
        <div className="mt-7 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
          {BOOKS.map((b) => (
            <BookCoverLink key={b.title} {...b} />
          ))}
        </div>
      </div>
    </section>
  );
}
