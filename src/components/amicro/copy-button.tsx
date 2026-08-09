"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [triggerRing, setTriggerRing] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await navigator.clipboard.writeText(textToCopy);
      if (typeof window !== "undefined" && "vibrate" in navigator) {
        try {
          navigator.vibrate(40);
        } catch {}
      }
    } catch {
      window.location.href = `mailto:${textToCopy}`;
    }

    setCopied(true);
    setTriggerRing(true);

    setTimeout(() => setTriggerRing(false), 600);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="relative inline-flex items-center">
      {/* Expand Ring effect on click */}
      <AnimatePresence>
        {triggerRing && (
          <motion.span
            initial={{ scale: 0.8, opacity: 0.8 }}
            animate={{ scale: 2.2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-0 rounded-full border border-accent bg-accent/20 pointer-events-none z-0"
          />
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleCopy}
        whileTap={{ scale: 0.94 }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className={`relative z-10 inline-flex items-center justify-center gap-2 transition-colors cursor-pointer ${
          variant === "pill"
            ? "btn-ghost"
            : variant === "ghost"
            ? "inline-flex items-center gap-2 text-[13.5px] text-secondary hover:text-primary transition-colors px-2 py-1"
            : "w-9 h-9 rounded-full border border-border-subtle bg-bg-elevated flex items-center justify-center text-secondary hover:text-primary hover:border-border-strong"
        } ${copied ? "!border-success/50 !text-success bg-success/5" : ""} ${className}`}
        aria-label={label}
      >
        {/* Animated Icon Swap */}
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.span
              key="check"
              initial={{ scale: 0, rotate: -90, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0, rotate: 90, opacity: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
            >
              <Check className="w-4 h-4 text-success" />
            </motion.span>
          ) : (
            <motion.span
              key="icon"
              initial={{ scale: 0, rotate: 90, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0, rotate: -90, opacity: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
            >
              {label.toLowerCase().includes("email") ? (
                <Mail className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </motion.span>
          )}
        </AnimatePresence>

        {/* Text Label if not icon variant */}
        {variant !== "icon" && (
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={copied ? "copied" : "normal"}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15 }}
            >
              {copied ? copiedLabel : label}
            </motion.span>
          </AnimatePresence>
        )}
      </motion.button>
    </div>
  );
}
