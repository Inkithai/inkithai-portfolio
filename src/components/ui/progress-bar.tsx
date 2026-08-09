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
    <div
      className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none bg-bg-elevated"
      aria-hidden="true"
    >
      <motion.div
        className="h-full bg-accent origin-left"
        style={{ scaleX: progress / 100 }}
        transition={{ type: "tween", duration: 0.15, ease: "easeOut" }}
      />
    </div>
  );
}
