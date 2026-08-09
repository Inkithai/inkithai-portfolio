"use client";

import { motion } from "framer-motion";

interface GlareShineProps {
  className?: string;
}

export function GlareShine({ className = "" }: GlareShineProps) {
  return (
    <motion.div
      className={`absolute inset-0 pointer-events-none overflow-hidden rounded-[inherit] z-20 ${className}`}
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute -inset-full w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent transform -rotate-45"
        initial={{ x: "-100%", y: "-100%" }}
        whileHover={{ x: "100%", y: "100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
