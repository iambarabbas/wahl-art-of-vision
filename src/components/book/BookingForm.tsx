"use client";

import { useState } from "react";
import { Input, Button, Tag } from "@/components/ui";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xvzekdkd";

const STEPS: [string, string, string, string][] = [
  ["01", "magenta", "Tell us about your event", "Share your date, audience, and goals. We respond within one business day."],
  ["02", "cyan", "Design the moment", "We'll match the right keynote and tailor the live painting to your theme."],
  ["03", "yellow", "Erik takes the stage", "An unforgettable experience, and a finished work of art the room will never forget."],
];

type Status = "idle" | "submitting" | "sent" | "error";

export function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

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
          <a href="tel:+18582480619" className="font-display mb-4 block text-lg font-bold no-underline" style={{ color: "var(--text-primary)" }}>
            858.248.0619
          </a>
          <div className="ew-eyebrow mb-1.5" style={{ color: "var(--text-muted)" }}>Email Tasha Moffitt</div>
          <a href="mailto:tmoffitt@theartofvision.com" className="font-mono text-sm" style={{ color: "var(--link)" }}>
            tmoffitt@theartofvision.com
          </a>
        </div>
      </div>

      <div>
        {status === "sent" ? (
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
            onSubmit={handleSubmit}
            className="grid grid-cols-2 gap-4 rounded-lg border p-6"
            style={{ borderColor: "var(--border-subtle)", background: "var(--surface-1)" }}
          >
            <Input name="name" label="Your name" placeholder="Jane Doe" required />
            <Input name="email" label="Email" type="email" placeholder="you@company.com" required />
            <Input name="phone" label="Phone number" type="tel" placeholder="(000) 000-0000" required />
            <Input name="company" label="Company name" placeholder="Company / organization" />
            <Input name="location" label="Event location" placeholder="City, venue" />
            <Input name="event_date" label="Event date" placeholder="Month / year" />
            <div className="col-span-full">
              <Input
                as="textarea"
                name="message"
                label="Tell us about your event"
                placeholder="Audience size, theme, goals, and which keynote interests you…"
                hint="The more detail, the better the fit."
              />
            </div>
            {status === "error" && (
              <div className="col-span-full text-sm" style={{ color: "var(--color-spark)" }}>
                Something went wrong sending your request. Please try again, or email tmoffitt@theartofvision.com directly.
              </div>
            )}
            <div className="col-span-full">
              <Button variant="spark" size="lg" full type="submit" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending…" : "Book Erik"}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
