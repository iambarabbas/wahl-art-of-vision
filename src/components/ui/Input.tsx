"use client";

import { useState } from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  as?: "input" | "textarea";
  hint?: string;
  error?: string;
  containerClassName?: string;
}

/**
 * Input — text field with the brand's mono label and a focus ring
 * that lights up in cyan. Works on dark surfaces. Pass `as="textarea"`
 * for multiline. `error` swaps the accent to spark red.
 */
export function Input({
  label,
  id,
  as = "input",
  hint,
  error,
  containerClassName,
  className,
  style,
  onFocus,
  onBlur,
  ...rest
}: InputProps) {
  const [focused, setFocused] = useState(false);
  const Comp = as as React.ElementType;
  const fieldId = id || (label ? `f-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const accent = error ? "var(--color-spark)" : "var(--focus-ring)";

  return (
    <div className={`flex flex-col gap-[7px] ${containerClassName ?? ""}`}>
      {label && (
        <label htmlFor={fieldId} className="ew-eyebrow" style={{ color: "var(--text-secondary)" }}>
          {label}
        </label>
      )}
      <Comp
        id={fieldId}
        className={`font-body w-full rounded-lg border text-base text-[var(--text-primary)] outline-none transition-[border-color,box-shadow] duration-200 ${as === "textarea" ? "resize-y" : ""} ${className ?? ""}`}
        style={{
          background: "var(--surface-inset)",
          borderColor: focused ? accent : error ? "var(--color-spark)" : "var(--border-strong)",
          padding: "12px 14px",
          minHeight: as === "textarea" ? "96px" : undefined,
          boxShadow: focused ? `0 0 0 3px ${error ? "rgba(255,45,26,.25)" : "rgba(20,197,232,.25)"}` : "none",
          ...style,
        }}
        onFocus={(e: React.FocusEvent<HTMLInputElement>) => { setFocused(true); onFocus?.(e); }}
        onBlur={(e: React.FocusEvent<HTMLInputElement>) => { setFocused(false); onBlur?.(e); }}
        {...rest}
      />
      {(hint || error) && (
        <span className="text-sm" style={{ color: error ? "var(--color-spark)" : "var(--text-muted)" }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
