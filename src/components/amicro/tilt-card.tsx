"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltIntensity?: number;
  spotlightColor?: string;
  showSpotlight?: boolean;
  onClick?: () => void;
}

export function TiltCard({
  children,
  className = "",
  tiltIntensity = 12,
  spotlightColor = "rgba(79, 140, 255, 0.14)",
  showSpotlight = true,
  onClick,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Raw mouse relative position (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Mouse coordinates in pixels relative to card top-left (for spotlight)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for rotation
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [tiltIntensity, -tiltIntensity]), {
    stiffness: 260,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-tiltIntensity, tiltIntensity]), {
    stiffness: 260,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseXPx = e.clientX - rect.left;
    const mouseYPx = e.clientY - rect.top;

    mouseX.set(mouseXPx);
    mouseY.set(mouseYPx);

    x.set(mouseXPx / width - 0.5);
    y.set(mouseYPx / height - 0.5);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      animate={{
        scale: isHovered ? 1.01 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={`relative perspective-1000 ${className}`}
    >
      {/* Children content */}
      <div style={{ transform: "translateZ(0px)" }}>{children}</div>

      {/* Spotlight layer */}
      {showSpotlight && isHovered && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-30"
          style={{
            background: useTransform(
              [mouseX, mouseY],
              ([cx, cy]) =>
                `radial-gradient(400px circle at ${cx}px ${cy}px, ${spotlightColor}, transparent 80%)`
            ),
          }}
        />
      )}
    </motion.div>
  );
}
