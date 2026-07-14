import { Button, Tag } from "@/components/ui";

/**
 * CharityBand — closing CTA tying the live-painting ritual to
 * charitable giving, with a "Bring Erik to your stage" booking CTA.
 */
export function CharityBand() {
  return (
    <section
      className="border-t py-9 px-(--gutter)"
      style={{ background: "var(--bg-canvas-stage)", borderColor: "var(--border-subtle)" }}
    >
      <div className="mx-auto max-w-(--container-md) text-center">
        <Tag hue="orange" dot>
          Art for good
        </Tag>
        <h2 className="mt-4 mb-3 text-3xl tracking-[-0.02em]">Art That Gives Back</h2>
        <p className="mx-auto mb-6 max-w-[56ch] leading-[1.7]" style={{ color: "var(--text-secondary)" }}>
          At nearly every event, the live painting is auctioned or gifted to a charity chosen by the host, turning a
          powerful moment on stage into lasting impact.
        </p>
        <Button variant="spark" size="lg" href="/book">
          Bring Erik to your stage
        </Button>
      </div>
    </section>
  );
}
