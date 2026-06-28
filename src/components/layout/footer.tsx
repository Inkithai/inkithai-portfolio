"use client";

import { personal } from "@/data/content";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 py-8 section-padding">
      <div className="container-max flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} {personal.name}
          </p>
          <span className="text-zinc-700">·</span>
          <p className="text-xs text-zinc-600">
            Built with Next.js, Tailwind CSS, and Framer Motion
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-zinc-300 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-zinc-300 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
