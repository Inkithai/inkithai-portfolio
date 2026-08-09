"use client";

import { useState, useEffect } from "react";
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
    const onScroll = () => setScrolled(window.scrollY > 8);
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
    "px-3.5 py-2 rounded-full text-[14px] font-medium transition-colors duration-200";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-bg/90 backdrop-blur-md border-b border-border-subtle"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="container-max section-padding">
          <nav className="flex items-center justify-between h-[72px]" aria-label="Main navigation">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 min-h-[44px]"
              aria-label={`${personal.name} — home`}
            >
              <div className="w-8 h-8 rounded-[10px] bg-bg-elevated border border-border-subtle flex items-center justify-center text-primary font-semibold text-[13px]">
                IM
              </div>
              <span className="font-semibold tracking-tight text-[15px] text-primary">
                {personal.firstName}
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const activeClass = isActive
                  ? "text-primary font-semibold"
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
            <div className="hidden md:flex items-center gap-3">
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 text-[14px] font-medium text-secondary hover:text-primary transition-colors"
              >
                Resume
              </a>
              <Link
                href="/#contact"
                onClick={(e) => handleAnchorClick(e, "/#contact")}
                className="btn-primary !min-h-0 !py-2.5 !px-5"
              >
                Let&apos;s talk
              </Link>
            </div>

            {/* Mobile toggle — 44px target */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-11 h-11 rounded-[10px] border border-border-subtle flex items-center justify-center text-secondary hover:text-primary transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-bg md:hidden flex flex-col">
          <div className="flex-1 flex flex-col justify-center px-6 gap-1 pt-24">
            <div className="label-eyebrow mb-6">Navigation</div>

            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="group py-4 border-b border-border-subtle flex items-center justify-between min-h-[56px]"
            >
              <span className="text-[1.5rem] font-semibold tracking-tight text-primary">Home</span>
              <span className="text-muted" aria-hidden="true">→</span>
            </Link>

            {navItems.map((item) =>
              item.type === "page" ? (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="group py-4 border-b border-border-subtle flex items-center justify-between min-h-[56px]"
                >
                  <span className="text-[1.5rem] font-semibold tracking-tight text-primary">
                    {item.label}
                  </span>
                  <span className="text-muted" aria-hidden="true">→</span>
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleAnchorClick(e, item.href)}
                  className="group py-4 border-b border-border-subtle flex items-center justify-between min-h-[56px]"
                >
                  <span className="text-[1.5rem] font-semibold tracking-tight text-primary">
                    {item.label}
                  </span>
                  <span className="text-muted" aria-hidden="true">→</span>
                </a>
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
                Let&apos;s talk
              </Link>
            </div>
          </div>

          <div className="p-6 text-[12px] text-muted">
            © {new Date().getFullYear()} {personal.name} · Colombo, LK
          </div>
        </div>
      )}
    </>
  );
}
