"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, ChevronRight, ExternalLink } from "lucide-react";

interface AnimatedArrowProps {
  type?: "up-right" | "right" | "chevron" | "external";
  className?: string;
}

export function AnimatedArrow({ type = "up-right", className = "w-4 h-4" }: AnimatedArrowProps) {
  const IconComponent =
    type === "right"
      ? ArrowRight
      : type === "chevron"
      ? ChevronRight
      : type === "external"
      ? ExternalLink
      : ArrowUpRight;

  return (
    <motion.span
      className="inline-block shrink-0"
      initial={false}
      whileHover={{
        x: type === "right" || type === "chevron" ? 3 : 2,
        y: type === "up-right" ? -2 : 0,
        scale: 1.1,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <IconComponent className={className} />
    </motion.span>
  );
}
