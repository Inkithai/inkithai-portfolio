"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface FocusBlurItemProps {
  children: React.ReactNode;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (idx: number | null) => void;
  className?: string;
}

export function FocusBlurItem({
  children,
  index,
  hoveredIndex,
  setHoveredIndex,
  className = "",
}: FocusBlurItemProps) {
  const isHovered = hoveredIndex === index;
  const isSomeoneElseHovered = hoveredIndex !== null && !isHovered;

  return (
    <motion.div
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      animate={{
        opacity: isSomeoneElseHovered ? 0.45 : 1,
        filter: isSomeoneElseHovered ? "blur(1.5px)" : "blur(0px)",
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`transition-all ${className}`}
    >
      {children}
    </motion.div>
  );
}

interface FocusBlurContainerProps {
  children: (props: {
    hoveredIndex: number | null;
    setHoveredIndex: (idx: number | null) => void;
  }) => React.ReactNode;
  className?: string;
}

export function FocusBlurContainer({ children, className = "" }: FocusBlurContainerProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={className}>
      {children({ hoveredIndex, setHoveredIndex })}
    </div>
  );
}
