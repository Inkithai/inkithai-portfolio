"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { personal } from "@/data/content";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Work", href: "/work", type: "page" },
  { label: "Experience", href: "/#experience", type: "anchor" },
  { label: "Certifications", href: "/certifications", type: "page" },
  { label: "About", href: "/#about", type: "anchor" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="container-max section-padding">
          <nav
            className={`relative flex items-center justify-between rounded-full transition-all duration-500 ${
              scrolled
                ? "px-2 py-2 bg-[#0F172A]/70 backdrop-blur-2xl border border-white/[0.06] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)]"
                : "px-1 py-1 bg-transparent border border-transparent"
            }`}
          >
            {/* Animated gradient border when scrolled */}
            {scrolled && (
              <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                <div
                  className="absolute inset-[-1px] rounded-full animate-gradient opacity-30"
                  style={{
                    background: "linear-gradient(135deg, #3B82F6, #06B6D4, #14B8A6, #3B82F6)",
                    backgroundSize: "200% 200%",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    padding: "1px",
                  }}
                />
              </div>
            )}

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group relative z-10 pl-3 pr-2">
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#3B82F6] via-[#06B6D4] to-[#14B8A6] flex items-center justify-center text-white font-bold text-[14px] shadow-lg shadow-[#3B82F6]/20 group-hover:shadow-[#3B82F6]/40 transition-shadow">
                  I
                </div>
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] opacity-0 group-hover:opacity-20 blur-sm transition-opacity" />
              </div>
              <span className="font-bold tracking-tight text-[14px] text-[#F8FAFC] hidden sm:inline">
                {personal.shortName}
              </span>
            </Link>

            {/* Desktop nav - centered pills */}
            <div className="hidden md:flex items-center gap-0.5 relative z-10">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const baseClass = "px-4 py-2 rounded-full text-[13.5px] font-medium transition-all duration-300";
                const activeClass = isActive
                  ? "text-white bg-gradient-to-r from-[#3B82F6]/20 to-[#06B6D4]/20 border border-[#3B82F6]/30 shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]"
                  : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/[0.04]";

                return item.type === "page" ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`${baseClass} ${activeClass}`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleAnchorClick(e, item.href)}
                    className={`${baseClass} ${activeClass}`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-2 relative z-10">
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-[13px] font-medium text-[#94A3B8] hover:text-[#F8FAFC] border border-transparent hover:border-white/[0.08] hover:bg-white/[0.04] transition-all"
              >
                Resume
              </a>
              <a
                href="/#contact"
                onClick={(e) => handleAnchorClick(e, "/#contact")}
                className="relative group px-5 py-2.5 rounded-full text-[13.5px] font-semibold text-white overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#14B8A6] transition-all duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#14B8A6] opacity-0 group-hover:opacity-100 blur-lg transition-opacity" />
                <span className="relative flex items-center gap-1.5">
                  Contact
                  <Sparkles className="w-3.5 h-3.5" />
                </span>
              </a>
            </div>

            {/* Mobile button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 rounded-full bg-white/[0.06] border border-white/[0.08] backdrop-blur-xl flex items-center justify-center text-[#94A3B8] hover:text-white transition-colors relative z-10"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile overlay - Full screen animated */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#030712]/95 backdrop-blur-3xl md:hidden flex flex-col"
          >
            {/* Animated bg orbs */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-[#3B82F6]/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#06B6D4]/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="flex-1 flex flex-col justify-center px-8 gap-1 pt-24 relative">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-6"
              >
                <div className="label-mono text-[#64748B]">Navigation</div>
              </motion.div>

              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="group py-5 border-b border-white/[0.06] flex items-center justify-between"
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-3xl font-bold tracking-tight text-[#F8FAFC] group-hover:text-gradient-blue transition-all"
                >
                  Home
                </motion.span>
                <span className="text-[#64748B] group-hover:text-[#3B82F6] transition-colors">→</span>
              </Link>

              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.06 }}
                >
                  {item.type === "page" ? (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="group py-5 border-b border-white/[0.06] flex items-center justify-between"
                    >
                      <span className="text-3xl font-bold tracking-tight text-[#F8FAFC]">
                        {item.label}
                      </span>
                      <span className="text-[#64748B] group-hover:text-[#06B6D4] transition-colors">→</span>
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => handleAnchorClick(e, item.href)}
                      className="group py-5 border-b border-white/[0.06] flex items-center justify-between"
                    >
                      <span className="text-3xl font-bold tracking-tight text-[#F8FAFC]">
                        {item.label}
                      </span>
                      <span className="text-[#64748B] group-hover:text-[#06B6D4] transition-colors">→</span>
                    </a>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-10 flex flex-col gap-3"
              >
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  className="w-full py-4 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl text-center text-[15px] font-medium text-[#F8FAFC]"
                >
                  Download Resume
                </a>
                <a
                  href="/#contact"
                  onClick={(e) => handleAnchorClick(e, "/#contact")}
                  className="w-full py-4 rounded-full bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#14B8A6] text-white text-center text-[15px] font-semibold shadow-lg shadow-[#3B82F6]/20"
                >
                  Get in touch ✨
                </a>
              </motion.div>
            </div>

            <div className="p-8 text-[11px] font-mono text-[#64748B] tracking-widest uppercase">
              © {new Date().getFullYear()} {personal.name} • Colombo, LK
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
