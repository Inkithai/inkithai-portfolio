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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 origin-left z-50"
      style={{ scaleX: progress / 100 }}
      transition={{ type: "tween", duration: 0.1 }}
      aria-hidden="true"
    />
  );
}
