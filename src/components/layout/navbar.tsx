"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
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
        // Let next/link handle navigation to home + anchor
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-[#08090D]/80 backdrop-blur-xl border-[#1E202B] py-3"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="container-max section-padding">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-[10px] bg-[#F5F7FA] text-[#08090D] flex items-center justify-center font-bold text-[13px] tracking-tight group-hover:scale-[1.02] transition-transform">
                I
              </div>
              <span className="font-semibold tracking-tight text-[14px] text-[#F5F7FA]">
                {personal.shortName}
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return item.type === "page" ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`px-4 py-2 rounded-full text-[13.5px] font-medium transition-colors ${
                      isActive
                        ? "text-[#F5F7FA] bg-[#151720] border border-[#1E202B]"
                        : "text-[#A5A9B6] hover:text-[#F5F7FA] hover:bg-[#101117]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleAnchorClick(e, item.href)}
                    className="px-4 py-2 rounded-full text-[13.5px] font-medium text-[#A5A9B6] hover:text-[#F5F7FA] hover:bg-[#101117] transition-colors"
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-2">
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-[13px] font-medium text-[#A5A9B6] hover:text-[#F5F7FA] border border-transparent hover:border-[#1E202B] hover:bg-[#101117] transition-colors"
              >
                Resume
              </a>
              <a
                href="/#contact"
                onClick={(e) => handleAnchorClick(e, "/#contact")}
                className="px-5 py-2 rounded-full bg-[#F5F7FA] text-[#08090D] text-[13.5px] font-semibold hover:bg-white transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Mobile button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 rounded-full bg-[#151720] border border-[#1E202B] flex items-center justify-center text-[#A5A9B6]"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#08090D] md:hidden flex flex-col"
          >
            <div className="flex-1 flex flex-col justify-center px-6 gap-2 pt-20">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="py-4 text-2xl font-semibold tracking-tight border-b border-[#101117]"
              >
                Home
              </Link>
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {item.type === "page" ? (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex py-4 text-2xl font-semibold tracking-tight border-b border-[#101117] text-[#F5F7FA]"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => handleAnchorClick(e, item.href)}
                      className="flex py-4 text-2xl font-semibold tracking-tight border-b border-[#101117] text-[#F5F7FA]"
                    >
                      {item.label}
                    </a>
                  )}
                </motion.div>
              ))}
              <div className="pt-8 flex flex-col gap-3">
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  className="w-full py-3.5 rounded-full border border-[#1E202B] bg-[#101117] text-center text-[14px] font-medium"
                >
                  Download Resume
                </a>
                <a
                  href="/#contact"
                  onClick={(e) => handleAnchorClick(e, "/#contact")}
                  className="w-full py-3.5 rounded-full bg-[#F5F7FA] text-[#08090D] text-center text-[14px] font-semibold"
                >
                  Contact me
                </a>
              </div>
            </div>
            <div className="p-6 text-[11px] font-mono text-[#6F7482] tracking-widest uppercase">
              © {new Date().getFullYear()} {personal.name} • Colombo, LK
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
