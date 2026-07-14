export interface AvatarProps {
  src?: string;
  name?: string;
  size?: number;
  ring?: boolean;
  hue?: string;
  className?: string;
}

/**
 * Avatar — circular portrait with an optional spectrum ring. Falls
 * back to initials on a hue background when no image is given.
 */
export function Avatar({ src, name = "", size = 48, ring = false, hue = "violet", className }: AvatarProps) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
  const ringPad = ring ? Math.max(2, size * 0.06) : 0;

  const inner: React.CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: "50%",
    objectFit: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: src ? `#15151f url(${src}) center/cover no-repeat` : `var(--color-hue-${hue})`,
    color: "#fff",
    fontFamily: "var(--font-display)",
    fontWeight: "var(--fw-bold)",
    fontSize: `${size * 0.4}px`,
    flex: "none",
  };

  const node = src ? (
    // eslint-disable-next-line @next/next/no-img-element -- decorative avatar sized dynamically by prop, next/image not worth it here
    <img src={src} alt={name} style={inner} />
  ) : (
    <span style={inner}>{initials}</span>
  );

  if (!ring) return <span className={`inline-flex ${className ?? ""}`}>{node}</span>;

  return (
    <span
      className={`inline-flex rounded-full ${className ?? ""}`}
      style={{ padding: `${ringPad}px`, background: "var(--grad-spectrum)" }}
    >
      <span className="inline-flex rounded-full" style={{ padding: `${ringPad}px`, background: "var(--bg-canvas)" }}>
        {node}
      </span>
    </span>
  );
}
