"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { personal } from "@/data/content";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MagneticButton } from "@/components/amicro/magnetic-button";
import { AnimatedArrow } from "@/components/amicro/icon-morph";
import { FocusBlurContainer, FocusBlurItem } from "@/components/amicro/focus-blur";

const navItems = [
  { label: "Work", href: "/work", type: "page" },
  { label: "Experience", href: "/#experience", type: "anchor" },
  { label: "Certifications", href: "/certifications", type: "page" },
  { label: "About", href: "/#about", type: "anchor" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      if (pathname !== "/") {
        setMobileOpen(false);
        return;
      }
      e.preventDefault();
      const id = href.replace("/#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    } else {
      setMobileOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-2.5" : "py-4"
        }`}
      >
        <div className="container-max section-padding">
          <nav
            className={`flex items-center justify-between rounded-full transition-all duration-300 ${
              scrolled
                ? "px-2 py-2 glass-strong shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5)]"
                : "px-1 py-1 bg-transparent border border-transparent"
            }`}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group relative z-10 pl-3 pr-2">
              <motion.div
                whileHover={{ scale: 1.08, rotate: 3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-8 h-8 rounded-[10px] bg-bg-elevated border border-border-subtle flex items-center justify-center text-primary font-semibold text-[13px] transition-colors group-hover:border-accent/60 group-hover:shadow-[0_0_15px_rgba(79,140,255,0.3)]"
              >
                I
              </motion.div>
              <span className="font-semibold tracking-tight text-[13.5px] text-primary hidden sm:inline">
                {personal.shortName}
              </span>
            </Link>

            {/* Desktop nav with FocusBlur micro-interaction */}
            <FocusBlurContainer className="hidden md:flex items-center gap-1 relative z-10">
              {({ hoveredIndex, setHoveredIndex }) =>
                navItems.map((item, idx) => {
                  const isActive = pathname === item.href;
                  const baseClass =
                    "relative px-3.5 py-1.5 rounded-full text-[13.5px] font-medium transition-colors duration-200 block";
                  const activeClass = isActive
                    ? "text-accent font-semibold"
                    : "text-secondary hover:text-primary";

                  return (
                    <FocusBlurItem
                      key={item.label}
                      index={idx}
                      hoveredIndex={hoveredIndex}
                      setHoveredIndex={setHoveredIndex}
                    >
                      {item.type === "page" ? (
                        <Link href={item.href} className={`${baseClass} ${activeClass}`}>
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          onClick={(e) => handleAnchorClick(e, item.href)}
                          className={`${baseClass} ${activeClass}`}
                        >
                          {item.label}
                        </a>
                      )}
                    </FocusBlurItem>
                  );
                })
              }
            </FocusBlurContainer>

            {/* Desktop CTA with Magnetic Button */}
            <div className="hidden md:flex items-center gap-2 relative z-10">
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full text-[13px] font-medium text-secondary hover:text-primary transition-colors"
              >
                Resume
              </a>
              <MagneticButton strength={0.2}>
                <Link
                  href="/#contact"
                  onClick={(e) => handleAnchorClick(e, "/#contact")}
                  className="btn-primary text-[13.5px] !py-2 !px-4 shadow-[0_0_20px_rgba(79,140,255,0.25)] hover:shadow-[0_0_25px_rgba(79,140,255,0.5)] transition-shadow"
                >
                  Let&apos;s talk
                  <AnimatedArrow type="up-right" className="w-3.5 h-3.5" />
                </Link>
              </MagneticButton>
            </div>

            {/* Mobile button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 rounded-full bg-bg-elevated border border-border-subtle flex items-center justify-center text-secondary hover:text-primary transition-colors relative z-10"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="w-4 h-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </nav>
        </div>
      </header>

      {/* Mobile overlay with staggered spring entrance */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-3xl md:hidden flex flex-col"
          >
            <div
              className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-[0.12] blur-[100px] pointer-events-none"
              style={{ background: "radial-gradient(circle, #4F8CFF, transparent 70%)" }}
            />

            <div className="flex-1 flex flex-col justify-center px-8 gap-1 pt-24 relative">
              <div className="label-eyebrow mb-6">Navigation</div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.05 }}
              >
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="group py-4 border-b border-border-subtle flex items-center justify-between"
                >
                  <span className="text-[1.75rem] font-semibold tracking-tight text-primary">
                    Home
                  </span>
                  <span className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </Link>
              </motion.div>

              {navItems.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                >
                  {item.type === "page" ? (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="group py-4 border-b border-border-subtle flex items-center justify-between"
                    >
                      <span className="text-[1.75rem] font-semibold tracking-tight text-primary">
                        {item.label}
                      </span>
                      <span className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all">
                        →
                      </span>
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => handleAnchorClick(e, item.href)}
                      className="group py-4 border-b border-border-subtle flex items-center justify-between"
                    >
                      <span className="text-[1.75rem] font-semibold tracking-tight text-primary">
                        {item.label}
                      </span>
                      <span className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all">
                        →
                      </span>
                    </a>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-8 flex flex-col gap-3"
              >
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost w-full justify-center"
                >
                  Download Resume
                </a>
                <Link
                  href="/#contact"
                  onClick={(e) => handleAnchorClick(e, "/#contact")}
                  className="btn-primary w-full justify-center"
                >
                  Let&apos;s talk <AnimatedArrow type="up-right" className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            <div className="p-8 body-mono">
              © {new Date().getFullYear()} {personal.name} · Colombo, LK
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
