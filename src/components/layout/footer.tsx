"use client";

import { personal } from "@/data/content";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#030712]/80 backdrop-blur-xl">
      <div className="container-max section-padding py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#3B82F6] via-[#06B6D4] to-[#14B8A6] text-white flex items-center justify-center font-bold text-[13px] shadow-lg shadow-[#3B82F6]/20">I</div>
              <div>
                <div className="text-[14px] font-semibold tracking-tight text-[#F8FAFC]">{personal.name}</div>
                <div className="text-[12px] text-[#64748B]">{personal.title} • {personal.location}</div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-[13px]">
            <a href={personal.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#94A3B8] hover:text-[#F8FAFC] transition-colors">
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
            <a href={personal.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#94A3B8] hover:text-[#F8FAFC] transition-colors">
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </a>
            <a href={`mailto:${personal.email}`} className="flex items-center gap-2 text-[#94A3B8] hover:text-[#F8FAFC] transition-colors">
              <Mail className="w-4 h-4" /> {personal.email}
            </a>
            <a href={personal.resumeUrl} target="_blank" className="px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] text-[#F8FAFC] transition-all backdrop-blur-xl">
              Resume
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row gap-3 justify-between text-[12px] text-[#64748B]">
          <span>© {new Date().getFullYear()} {personal.name}. Built with Next.js, Tailwind & Framer Motion.</span>
          <span className="font-mono">COLOMBO • REMOTE WORLDWIDE • {personal.status.label}</span>
        </div>
      </div>
    </footer>
  );
}
