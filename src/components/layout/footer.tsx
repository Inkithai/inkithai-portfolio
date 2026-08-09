"use client";

import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, MediumIcon } from "@/components/ui/icons";
import { personal } from "@/data/content";
import Link from "next/link";

const socialLinks = [
  { label: "GitHub", href: personal.socials.github, Icon: GithubIcon },
  { label: "LinkedIn", href: personal.socials.linkedin, Icon: LinkedinIcon },
  { label: "Medium", href: personal.socials.medium, Icon: MediumIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg">
      <div className="container-max section-padding">
        <div className="py-12 md:py-14 grid gap-10 md:grid-cols-2 md:items-start">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-[10px] bg-bg-elevated border border-border-subtle flex items-center justify-center font-semibold text-[13px] text-primary">
                IM
              </div>
              <div>
                <div className="text-[15px] font-semibold tracking-tight text-primary">
                  {personal.name}
                </div>
                <div className="text-[13px] text-muted mt-0.5">
                  Software Engineer · AI · Full Stack
                </div>
              </div>
            </Link>
            <p className="text-[14px] leading-[1.7] text-secondary max-w-[380px] mt-5">
              {personal.heroTagline} React · TypeScript · Node.js · Python · AI.
            </p>
          </div>

          {/* Connect */}
          <div className="md:justify-self-end">
            <div className="flex flex-wrap items-center gap-2 md:justify-end">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border-subtle text-[13.5px] text-secondary hover:text-primary hover:border-border-strong transition-colors"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                  {label}
                </a>
              ))}
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border-subtle text-[13.5px] text-secondary hover:text-primary hover:border-border-strong transition-colors"
              >
                Email
              </a>
            </div>
            <div className="mt-4 md:text-right">
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13.5px] text-secondary hover:text-primary transition-colors underline-offset-4 hover:underline"
              >
                Download resume
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[13px] text-muted text-center sm:text-left">
            © {new Date().getFullYear()} {personal.name}. Built with Next.js &amp; Tailwind CSS.
          </span>
          <div className="flex items-center gap-4">
            <span className="text-[12px] text-muted">Colombo · Remote worldwide</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center text-secondary hover:text-primary hover:border-border-strong transition-colors"
            >
              <ArrowUp className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
