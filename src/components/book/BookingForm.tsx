"use client";

import { useState } from "react";
import { Input, Button, Tag } from "@/components/ui";

const STEPS: [string, string, string, string][] = [
  ["01", "magenta", "Tell us about your event", "Share your date, audience, and goals. We respond within one business day."],
  ["02", "cyan", "Design the moment", "We'll match the right keynote and tailor the live painting to your theme."],
  ["03", "yellow", "Erik takes the stage", "An unforgettable experience, and a finished work of art the room will never forget."],
];

export function BookingForm() {
  const [sent, setSent] = useState(false);

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-start gap-12">
      <div className="flex flex-col gap-6">
        <div className="ew-eyebrow" style={{ color: "var(--text-muted)" }}>How it works</div>
        {STEPS.map(([num, hue, title, desc]) => (
          <div key={num} className="flex gap-4">
            <div className="font-display min-w-[44px] text-2xl leading-none font-extrabold" style={{ color: `var(--color-hue-${hue})` }}>
              {num}
            </div>
            <div>
              <h3 className="mb-1.5 text-[length:var(--text-md)]">{title}</h3>
              <p className="m-0 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{desc}</p>
            </div>
          </div>
        ))}
        <div className="mt-3 rounded-lg border p-6" style={{ borderColor: "var(--border-subtle)", background: "var(--surface-1)" }}>
          <div className="font-display mb-3 text-lg font-extrabold">Prefer to talk?</div>
          <div className="ew-eyebrow mb-1.5" style={{ color: "var(--text-muted)" }}>Call the Wahl Group</div>
          <a href="tel:+18587151997" className="font-display mb-4 block text-lg font-bold no-underline" style={{ color: "var(--text-primary)" }}>
            858.715.1997
          </a>
          <div className="ew-eyebrow mb-1.5" style={{ color: "var(--text-muted)" }}>Email Tasha Moffitt</div>
          <a href="mailto:tmoffitt@theartofvision.com" className="font-mono text-sm" style={{ color: "var(--link)" }}>
            tmoffitt@theartofvision.com
          </a>
        </div>
      </div>

      <div>
        {sent ? (
          <div className="rounded-lg border p-16 text-center" style={{ borderColor: "var(--border-subtle)", background: "var(--surface-1)" }}>
            <div className="mb-3 flex justify-center">
              <Tag variant="filled" hue="green" dot>Request received</Tag>
            </div>
            <h3 className="mb-3 text-2xl">Thanks, your idea is in good hands.</h3>
            <p className="mb-5" style={{ color: "var(--text-secondary)" }}>
              We&rsquo;ll be in touch shortly to talk dates, audience, and the canvas we&rsquo;ll create together.
            </p>
            <Button variant="outline" href="/">Back to home</Button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="grid grid-cols-2 gap-4 rounded-lg border p-6"
            style={{ borderColor: "var(--border-subtle)", background: "var(--surface-1)" }}
          >
            <Input label="Your name" placeholder="Jane Doe" required />
            <Input label="Email" type="email" placeholder="you@company.com" required />
            <Input label="Phone number" type="tel" placeholder="(000) 000-0000" required />
            <Input label="Company name" placeholder="Company / organization" />
            <Input label="Event location" placeholder="City, venue" />
            <Input label="Event date" placeholder="Month / year" />
            <div className="col-span-full">
              <Input
                as="textarea"
                label="Tell us about your event"
                placeholder="Audience size, theme, goals, and which keynote interests you…"
                hint="The more detail, the better the fit."
              />
            </div>
            <div className="col-span-full">
              <Button variant="spark" size="lg" full type="submit">Book Erik</Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
