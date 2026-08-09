"use client";

import { useState } from "react";
import { Copy, Check, Mail } from "lucide-react";

interface CopyButtonProps {
  textToCopy: string;
  variant?: "icon" | "pill" | "ghost";
  label?: string;
  copiedLabel?: string;
  className?: string;
}

export function CopyButton({
  textToCopy,
  variant = "pill",
  label = "Copy email",
  copiedLabel = "Copied ✓",
  className = "",
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await navigator.clipboard.writeText(textToCopy);
    } catch {
      window.location.href = `mailto:${textToCopy}`;
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const Icon = copied
    ? Check
    : label.toLowerCase().includes("email")
    ? Mail
    : Copy;

  return (
    <button
      onClick={handleCopy}
      className={`relative inline-flex items-center justify-center gap-2 transition-colors cursor-pointer ${
        variant === "pill"
          ? "btn-ghost"
          : variant === "ghost"
          ? "inline-flex items-center gap-2 text-[13.5px] text-secondary hover:text-primary transition-colors px-2 py-1"
          : "w-9 h-9 rounded-full border border-border-subtle bg-bg-elevated flex items-center justify-center text-secondary hover:text-primary hover:border-border-strong"
      } ${copied ? "!border-success/50 !text-success bg-success/5" : ""} ${className}`}
      aria-label={label}
    >
      <Icon className={`w-4 h-4 ${copied ? "text-success" : ""}`} />
      {variant !== "icon" && <span>{copied ? copiedLabel : label}</span>}
    </button>
  );
}
