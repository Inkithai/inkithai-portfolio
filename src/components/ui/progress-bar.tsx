"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function ScrollProgressIndicator() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollY = window.scrollY;
      setProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-[#D4AF37] via-[#E8C547] to-[#F0D77B] origin-left shadow-[0_0_10px_rgba(16,185,129,0.6)]"
        style={{ scaleX: progress / 100 }}
        transition={{ type: "tween", duration: 0.15, ease: "easeOut" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 via-[#E8C547]/20 to-[#F0D77B]/20 blur-[4px]" style={{ transform: `scaleX(${progress / 100})`, transformOrigin: "left" }} />
    </div>
  );
}
