import { Button } from "@/components/ui";

export const metadata = { title: "Page not found", robots: { index: false, follow: false } };

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-(--gutter) text-center">
      <div className="max-w-[46ch]">
        <div className="font-mono mb-3 text-xs tracking-[0.16em] uppercase text-spark">404</div>
        <h1 className="mb-4 text-4xl">This page went off-canvas.</h1>
        <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
          The page you&rsquo;re looking for doesn&rsquo;t exist — it may have moved, or the link&rsquo;s a little off.
        </p>
        <Button variant="spark" href="/">Back to erikwahl.com</Button>
      </div>
    </div>
  );
}
