"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
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

  const desktopLinkClass =
    "relative px-3.5 py-1.5 rounded-full text-[13.5px] font-medium transition-colors duration-200 block";

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
              <div className="w-8 h-8 rounded-[10px] bg-bg-elevated border border-border-subtle flex items-center justify-center text-primary font-semibold text-[13px] transition-colors group-hover:border-accent/60 group-hover:shadow-[0_0_15px_rgba(79,140,255,0.3)]">
                I
              </div>
              <span className="font-semibold tracking-tight text-[13.5px] text-primary hidden sm:inline">
                {personal.shortName}
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1 relative z-10">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const activeClass = isActive
                  ? "text-accent font-semibold"
                  : "text-secondary hover:text-primary";

                return item.type === "page" ? (
                  <Link key={item.label} href={item.href} className={`${desktopLinkClass} ${activeClass}`}>
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleAnchorClick(e, item.href)}
                    className={`${desktopLinkClass} ${activeClass}`}
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
                className="px-3.5 py-1.5 rounded-full text-[13px] font-medium text-secondary hover:text-primary transition-colors"
              >
                Resume
              </a>
              <Link
                href="/#contact"
                onClick={(e) => handleAnchorClick(e, "/#contact")}
                className="btn-primary text-[13.5px] !py-2 !px-4 shadow-[0_0_20px_rgba(79,140,255,0.25)] hover:shadow-[0_0_25px_rgba(79,140,255,0.5)] transition-shadow"
              >
                Let&apos;s talk
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 rounded-full bg-bg-elevated border border-border-subtle flex items-center justify-center text-secondary hover:text-primary transition-colors relative z-10"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-3xl md:hidden flex flex-col">
          <div
            className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-[0.12] blur-[100px] pointer-events-none"
            style={{ background: "radial-gradient(circle, #4F8CFF, transparent 70%)" }}
          />

          <div className="flex-1 flex flex-col justify-center px-8 gap-1 pt-24 relative">
            <div className="label-eyebrow mb-6">Navigation</div>

            <div>
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
            </div>

            {navItems.map((item) =>
              item.type === "page" ? (
                <div key={item.label}>
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
                </div>
              ) : (
                <div key={item.label}>
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
                </div>
              )
            )}

            <div className="pt-8 flex flex-col gap-3">
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
                Let&apos;s talk <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="p-8 body-mono">
            © {new Date().getFullYear()} {personal.name} · Colombo, LK
          </div>
        </div>
      )}
    </>
  );
}
