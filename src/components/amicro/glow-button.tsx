"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

interface GlowButtonProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  onClick?: (e: React.MouseEvent) => void;
  [key: string]: unknown;
}

export function GlowButton({
  children,
  className = "",
  glowColor = "rgba(79, 140, 255, 0.4)",
  onClick,
  ...props
}: GlowButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`relative group rounded-full p-[1px] overflow-hidden transition-all duration-300 ${className}`}
      {...props}
    >
      {/* Interactive cursor glow border background */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none rounded-full"
          style={{
            background: useTransform(
              [mouseX, mouseY],
              ([cx, cy]) =>
                `radial-gradient(120px circle at ${cx}px ${cy}px, ${glowColor}, transparent 70%)`
            ),
          }}
        />
      )}

      {/* Button Inner Content */}
      <div className="relative z-10 w-full h-full rounded-full">
        {children}
      </div>
    </div>
  );
}
