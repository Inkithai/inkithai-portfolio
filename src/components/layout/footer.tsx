"use client";

import { personal } from "@/data/content";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#101117] bg-[#08090D]">
      <div className="container-max section-padding py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-[10px] bg-[#F5F7FA] text-[#08090D] flex items-center justify-center font-bold text-[12px]">I</div>
              <div>
                <div className="text-[14px] font-semibold tracking-tight text-[#F5F7FA]">{personal.name}</div>
                <div className="text-[12px] text-[#6F7482]">{personal.title} • {personal.location}</div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-[13px]">
            <a href={personal.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#A5A9B6] hover:text-[#F5F7FA] transition-colors">
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
            <a href={personal.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#A5A9B6] hover:text-[#F5F7FA] transition-colors">
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </a>
            <a href={`mailto:${personal.email}`} className="flex items-center gap-2 text-[#A5A9B6] hover:text-[#F5F7FA] transition-colors">
              <Mail className="w-4 h-4" /> {personal.email}
            </a>
            <a href={personal.resumeUrl} target="_blank" className="px-4 py-2 rounded-full border border-[#1E202B] bg-[#101117] hover:bg-[#151720] text-[#F5F7FA] transition-colors">
              Resume
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#101117] flex flex-col sm:flex-row gap-3 justify-between text-[12px] text-[#6F7482]">
          <span>© {new Date().getFullYear()} {personal.name}. Built with Next.js, Tailwind & Framer Motion.</span>
          <span className="font-mono">COLOMBO • REMOTE WORLDWIDE • {personal.status.label}</span>
        </div>
      </div>
    </footer>
  );
}
