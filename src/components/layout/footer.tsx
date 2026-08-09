"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUp, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, MediumIcon } from "@/components/ui/icons";
import { personal } from "@/data/content";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/", type: "page" },
  { label: "Work", href: "/work", type: "page" },
  { label: "Experience", href: "/#experience", type: "anchor" },
  { label: "Certifications", href: "/certifications", type: "page" },
  { label: "About", href: "/#about", type: "anchor" },
];

const socialLinks = [
  { label: "GitHub", handle: "@Inkithai", href: personal.socials.github, Icon: GithubIcon },
  { label: "LinkedIn", handle: "in/inkithai", href: personal.socials.linkedin, Icon: LinkedinIcon },
  { label: "Medium", handle: "@inkithai", href: personal.socials.medium, Icon: MediumIcon },
];

const reveal = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
} as const;

export function Footer() {
  const pathname = usePathname();

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("/#")) return;
    if (pathname !== "/") return;
    e.preventDefault();
    document.getElementById(href.replace("/#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border-subtle bg-bg overflow-hidden">
      {/* Subtle blue glow rising from bottom */}
      <div className="pointer-events-none" aria-hidden="true">
        <div
          className="absolute -bottom-56 left-1/2 -translate-x-1/2 w-[760px] h-[380px] rounded-full opacity-[0.10] blur-[120px]"
          style={{ background: 'radial-gradient(circle, #4F8CFF, transparent 70%)' }}
        />
      </div>

      <div className="container-max section-padding relative">
        <div className="grid gap-12 md:grid-cols-12 py-16 lg:py-20">
          {/* Brand */}
          <motion.div {...reveal} transition={{ duration: 0.5 }} className="md:col-span-5 space-y-6">
            <Link href="/" className="group flex items-center gap-3 w-fit">
              <div className="w-10 h-10 rounded-[10px] bg-bg-elevated border border-border-subtle flex items-center justify-center font-semibold text-[14px] text-primary transition-colors group-hover:border-accent/40">
                I
              </div>
              <div>
                <div className="text-[15px] font-semibold tracking-tight text-primary">{personal.name}</div>
                <div className="text-[12.5px] text-muted mt-0.5">{personal.title}</div>
              </div>
            </Link>

            <p className="text-[14px] leading-[1.7] text-secondary max-w-[360px]">
              {personal.heroDescription}
            </p>

            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-bg-elevated border border-border-subtle text-[12px] font-medium text-secondary">
                <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-soft" />
                Open to work
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-bg-elevated border border-border-subtle text-[12px] text-secondary">
                <MapPin className="w-3 h-3" /> {personal.location}
              </span>
            </div>
          </motion.div>

          {/* Navigate */}
          <motion.div {...reveal} transition={{ duration: 0.5, delay: 0.05 }} className="md:col-span-3">
            <div className="label-eyebrow mb-5 flex items-center">
              <span className="eyebrow-bar" />
              <span>Navigate</span>
            </div>
            <ul className="space-y-3.5">
              {navLinks.map((item) => (
                <li key={item.label}>
                  {item.type === "page" ? (
                    <Link
                      href={item.href}
                      className="group inline-flex items-center gap-2 text-[14px] text-secondary hover:text-primary transition-colors"
                    >
                      {item.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => handleAnchorClick(e, item.href)}
                      className="group inline-flex items-center gap-2 text-[14px] text-secondary hover:text-primary transition-colors"
                    >
                      {item.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div {...reveal} transition={{ duration: 0.5, delay: 0.1 }} className="md:col-span-4">
            <div className="label-eyebrow mb-5 flex items-center">
              <span className="eyebrow-bar" />
              <span>Connect</span>
            </div>

            <div className="space-y-1.5">
              {socialLinks.map(({ label, handle, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-[10px] px-3 py-2.5 -mx-3 border border-transparent hover:border-border-subtle hover:bg-bg-elevated/40 transition-all"
                >
                  <span className="w-8 h-8 shrink-0 rounded-[8px] bg-bg-elevated border border-border-subtle flex items-center justify-center text-secondary group-hover:text-primary transition-colors">
                    <Icon className="w-4 h-4" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-[13.5px] font-medium text-primary">{label}</span>
                    <span className="block text-[11.5px] text-muted truncate">{handle}</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                </a>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2.5">
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-bg-elevated border border-border-subtle text-[12.5px] text-secondary hover:text-primary hover:border-border-strong transition-all"
              >
                <Mail className="w-3.5 h-3.5" /> {personal.email}
              </a>
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !text-[12.5px] !py-2.5"
              >
                Resume
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="py-7 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[12.5px] text-muted text-center sm:text-left">
            © {new Date().getFullYear()} {personal.name}. Built with Next.js, Tailwind &amp; Framer Motion.
          </span>
          <span className="body-mono normal-case tracking-[0.15em]">
            Colombo · Remote Worldwide
          </span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="group w-9 h-9 rounded-full border border-border-subtle bg-bg-elevated hover:bg-bg-surface hover:border-border-strong flex items-center justify-center text-secondary hover:text-primary transition-all"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
