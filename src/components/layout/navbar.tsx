"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { navSections } from "@/data/content";
import { useScrollPosition, useActiveSection, useTheme } from "@/hooks/use-scroll";
import { Menu, X, Sun, Moon, Sparkles } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/ui/icons";

const sectionIds = navSections.map((s) => s.id);

export function Navbar() {
  const scrollY = useScrollPosition();
  const activeSection = useActiveSection(sectionIds);
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isScrolled = scrollY > 20;

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    },
    []
  );

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName ?? "")) {
        e.preventDefault();
        document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          isScrolled ? "py-3" : "py-5"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container-max section-padding">
          <nav
            className={cn(
              "flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500",
              isScrolled
                ? "bg-zinc-900/70 backdrop-blur-2xl border border-white/[0.08] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.04)_inset]"
                : "bg-transparent border border-transparent"
            )}
          >
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "hero")}
              className="flex items-center gap-2.5 group"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300" />
                <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[15px] font-bold tracking-tight font-display text-white">
                  inkithai<span className="text-zinc-500 font-medium">.dev</span>
                </span>
                <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase hidden sm:block">
                  Full Stack & AI
                </span>
              </div>
            </a>

            {/* Desktop Nav - Pill */}
            <div className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-zinc-800/50 border border-white/[0.06] backdrop-blur">
              {navSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => handleNavClick(e, section.id)}
                  className={cn(
                    "relative px-4 py-1.5 text-[13px] font-medium rounded-full transition-all duration-300",
                    activeSection === section.id
                      ? "text-white"
                      : "text-zinc-400 hover:text-zinc-200"
                  )}
                >
                  {activeSection === section.id && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-white text-zinc-900 rounded-full shadow-lg shadow-white/10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{section.label}</span>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={toggleTheme}
                className="hidden sm:flex w-9 h-9 items-center justify-center rounded-full bg-zinc-800/60 border border-white/[0.06] text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              <a
                href="https://github.com/Inkithai"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex w-9 h-9 items-center justify-center rounded-full bg-zinc-800/60 border border-white/[0.06] text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/inkithai/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex w-9 h-9 items-center justify-center rounded-full bg-zinc-900 border border-violet-500/20 text-white hover:bg-zinc-800 transition-all group"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="mailto:inkithai@gmail.com"
                className="hidden md:inline-flex items-center gap-2 ml-1 px-4 py-2 rounded-full bg-white text-zinc-900 text-sm font-semibold hover:bg-zinc-100 transition-colors shadow-lg shadow-white/10"
              >
                Hire me
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full bg-zinc-800 border border-white/[0.06] text-zinc-300"
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-zinc-950/90 backdrop-blur-2xl lg:hidden flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex-1 flex flex-col items-center justify-center gap-2 px-6 pt-20">
              {navSections.map((section, i) => (
                <motion.a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => handleNavClick(e, section.id)}
                  className={cn(
                    "w-full text-center py-4 rounded-2xl text-xl font-display font-semibold transition-all",
                    activeSection === section.id
                      ? "bg-white text-zinc-900 shadow-xl"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.06]"
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  {section.label}
                </motion.a>
              ))}

              <motion.div
                className="flex items-center gap-3 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <a href="https://github.com/Inkithai" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/inkithai/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white">
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a href="mailto:inkithai@gmail.com" className="px-6 py-3 rounded-full bg-white text-zinc-900 font-semibold">
                  Let&apos;s talk
                </a>
              </motion.div>
            </div>
            <div className="pb-8 text-center">
              <p className="text-xs font-mono text-zinc-600 tracking-widest uppercase">© {new Date().getFullYear()} Inkithai Meiyalagan</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
