interface Book {
  book: string;
  praise: string;
  src: string;
  hue: string;
  url: string;
}

const BOOKS: Book[] = [
  {
    book: "UNTHINK",
    praise: "“The blueprint for actionable creativity.”",
    src: "Forbes",
    hue: "violet",
    url: "https://www.amazon.com/Unthink-Rediscover-Your-Creative-Genius/dp/0770434002",
  },
  {
    book: "The Spark & The Grind",
    praise: "“Provocative with a purpose.”",
    src: "Fast Company",
    hue: "yellow",
    url: "https://www.amazon.com/Spark-Grind-Ignite-Disciplined-Creativity/dp/0399564209",
  },
];

/**
 * BooksStrip — a quiet editorial row crediting Erik's two bestsellers,
 * each linking out to its Amazon listing. The left rule color is
 * per-item (hue from data), so it stays inline.
 */
export function BooksStrip() {
  return (
    <section
      className="border-t border-b bg-ink-850 px-(--gutter) py-7"
      style={{ borderColor: "var(--border-subtle)" }}
    >
      <div className="mx-auto grid max-w-(--container-lg) grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
        {BOOKS.map((b) => (
          <a
            key={b.book}
            href={b.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-2 pl-4 no-underline"
            style={{ color: "inherit", borderLeft: `3px solid var(--color-hue-${b.hue})` }}
          >
            <span
              className="font-mono text-xs tracking-[0.14em] uppercase"
              style={{ color: "var(--text-muted)" }}
            >
              #1 Bestseller
            </span>
            <span className="font-display text-xl font-extrabold">{b.book}</span>
            <span className="leading-[1.5] italic" style={{ color: "var(--text-secondary)" }}>
              {b.praise}{" "}
              <span
                className="font-bold not-italic"
                style={{ color: `var(--color-hue-${b.hue})` }}
              >
                {b.src}
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
