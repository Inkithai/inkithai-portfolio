"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { navSections } from "@/data/content";
import { useScrollPosition, useActiveSection, useTheme } from "@/hooks/use-scroll";
import { Menu, X, Sun, Moon } from "lucide-react";
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
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
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
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled && "bg-background/80 backdrop-blur-xl border-b border-zinc-800/50"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <nav className="container-max section-padding py-4 flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "hero")}
            className="text-lg font-bold tracking-tight hover:text-zinc-300 transition-colors"
          >
            <span className="text-gradient-accent">inkithai</span>
            <span className="text-zinc-500">.dev</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => handleNavClick(e, section.id)}
                className={cn(
                  "px-3 py-1.5 text-sm rounded-md transition-all duration-200",
                  activeSection === section.id
                    ? "text-zinc-100 bg-zinc-800"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
                )}
              >
                {section.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50 transition-all"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            {/* Social Links */}
            <a
              href="https://github.com/Inkithai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50 transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/inkithai/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50 transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50 transition-all"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-background/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {navSections.map((section, i) => (
                <motion.a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => handleNavClick(e, section.id)}
                  className={cn(
                    "text-2xl font-medium transition-colors",
                    activeSection === section.id ? "text-zinc-100" : "text-zinc-400 hover:text-zinc-200"
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {section.label}
                </motion.a>
              ))}
              <div className="flex items-center gap-4 mt-6">
                <a
                  href="https://github.com/Inkithai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/inkithai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
