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
  { label: "Medium", handle: "@inkithai · articles & writing", href: personal.socials.medium, Icon: MediumIcon },
];

const reveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
} as const;

export function Footer() {
  const pathname = usePathname();

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("/#")) return;
    if (pathname !== "/") return; // let it navigate to home + hash
    e.preventDefault();
    document.getElementById(href.replace("/#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#02040A] overflow-hidden">
      {/* Gradient hairline along the top edge */}
      <div
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent"
        aria-hidden="true"
      />

      {/* Ambient backdrop: soft glow rising from the bottom + faint grid */}
      <div className="pointer-events-none" aria-hidden="true">
        <div className="absolute -bottom-56 left-1/2 -translate-x-1/2 w-[760px] h-[380px] rounded-full bg-[#D4AF37]/[0.08] blur-[110px]" />
        <div className="absolute -bottom-40 right-[10%] w-[380px] h-[220px] rounded-full bg-[#F0D77B]/[0.06] blur-[100px]" />
        <div
          className="absolute inset-0 bg-grid-fade opacity-50"
          style={{
            WebkitMaskImage: "radial-gradient(ellipse 80% 100% at 50% 110%, black 15%, transparent 70%)",
            maskImage: "radial-gradient(ellipse 80% 100% at 50% 110%, black 15%, transparent 70%)",
          }}
        />
      </div>

      <div className="container-max section-padding relative">
        {/* Main grid */}
        <div className="grid gap-12 md:grid-cols-12 py-14 lg:py-16">
          {/* Brand */}
          <motion.div {...reveal} transition={{ duration: 0.55 }} className="md:col-span-5 space-y-5">
            <Link href="/" className="group flex items-center gap-3 w-fit">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] via-[#E8C547] to-[#F0D77B] text-white flex items-center justify-center font-bold text-[14px] shadow-lg shadow-[#D4AF37]/25 group-hover:shadow-[#D4AF37]/45 transition-shadow">
                  I
                </div>
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#E8C547] opacity-0 group-hover:opacity-20 blur-sm transition-opacity" />
              </div>
              <div>
                <div className="text-[15px] font-bold tracking-tight text-[#F8FAFC]">{personal.name}</div>
                <div className="text-[12px] text-[#64748B]">{personal.title}</div>
              </div>
            </Link>

            <p className="text-[13.5px] leading-[1.7] text-[#94A3B8] max-w-[340px]">
              {personal.heroDescription}
            </p>

            <div className="flex flex-wrap items-center gap-2.5">
              <span
                title={personal.status.label}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/[0.08] border border-[#D4AF37]/20 text-[11px] font-mono tracking-wide uppercase text-[#E8C547]"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]" />
                </span>
                Open to work
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono tracking-wide text-[#64748B]">
                <MapPin className="w-3 h-3" /> {personal.location}
              </span>
            </div>
          </motion.div>

          {/* Navigate */}
          <motion.div {...reveal} transition={{ duration: 0.55, delay: 0.1 }} className="md:col-span-3">
            <div className="label-mono text-[#475569] mb-5">Navigate</div>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item.label}>
                  {item.type === "page" ? (
                    <Link
                      href={item.href}
                      className="group inline-flex items-center gap-1.5 text-[13.5px] text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-gradient-to-r from-[#D4AF37] to-[#E8C547] transition-all duration-300" />
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => handleAnchorClick(e, item.href)}
                      className="group inline-flex items-center gap-1.5 text-[13.5px] text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-gradient-to-r from-[#D4AF37] to-[#E8C547] transition-all duration-300" />
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div {...reveal} transition={{ duration: 0.55, delay: 0.2 }} className="md:col-span-4">
            <div className="label-mono text-[#475569] mb-5">Connect</div>

            <div className="space-y-1">
              {socialLinks.map(({ label, handle, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl px-3 py-2.5 -mx-3 border border-transparent hover:border-white/[0.08] hover:bg-white/[0.03] transition-all"
                >
                  <span className="w-9 h-9 shrink-0 rounded-[10px] bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#94A3B8] group-hover:text-[#F8FAFC] group-hover:border-[#D4AF37]/40 group-hover:shadow-[0_0_18px_-4px_rgba(16,185,129,0.4)] transition-all">
                    <Icon className="w-4 h-4" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-[13px] font-semibold text-[#E2E8F0]">{label}</span>
                    <span className="block text-[11.5px] text-[#64748B] truncate">{handle}</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37] opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                </a>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2.5">
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-[12.5px] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-white/[0.16] hover:bg-white/[0.06] transition-all"
              >
                <Mail className="w-3.5 h-3.5" /> {personal.email}
              </a>
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-[12.5px] font-semibold text-white overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#E8C547] to-[#F0D77B]" />
                <span className="relative flex items-center gap-1.5">
                  Resume
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[12px] text-[#64748B] text-center sm:text-left">
            © {new Date().getFullYear()} {personal.name}. Built with Next.js, Tailwind & Framer Motion.
          </span>
          <span className="font-mono text-[10.5px] tracking-[0.2em] text-[#475569] uppercase">
            Colombo • Remote Worldwide
          </span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="group w-9 h-9 rounded-full border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.08] hover:border-[#D4AF37]/40 flex items-center justify-center text-[#94A3B8] hover:text-[#F8FAFC] transition-all"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
