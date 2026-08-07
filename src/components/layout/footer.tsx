"use client";

import { personal } from "@/data/content";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { ArrowUp, Sparkles } from "lucide-react";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/[0.06] overflow-hidden">
      <div className="absolute inset-0 bg-zinc-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.08),transparent_60%)] pointer-events-none" />

      <div className="container-max section-padding relative py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white flex items-center gap-2">
                © {new Date().getFullYear()} {personal.name}
                <span className="hidden sm:inline w-1 h-1 rounded-full bg-zinc-700" />
                <span className="hidden sm:inline text-zinc-500 font-normal">Crafted with care in Colombo</span>
              </div>
              <div className="text-xs text-zinc-600 font-mono">Next.js · Tailwind · Framer Motion · TypeScript</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-zinc-900 border border-white/[0.06] flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/15 hover:bg-zinc-800 transition-all"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-zinc-900 border border-white/[0.06] flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/15 hover:bg-zinc-800 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-zinc-900 text-sm font-semibold hover:bg-zinc-100 transition-colors ml-1"
            >
              Back to top
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
