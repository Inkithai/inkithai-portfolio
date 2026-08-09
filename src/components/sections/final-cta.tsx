import { personal } from "@/data/content";
import { Mail } from "lucide-react";
import { CopyButton } from "@/components/ui/copy-button";
import { GithubIcon, LinkedinIcon, MediumIcon } from "@/components/ui/icons";

export function FinalCTASection() {
  return (
    <section id="contact" className="section-y">
      <div className="container-max section-padding">
        <div className="max-w-[640px] mx-auto text-center">
          <div className="flex items-center justify-center gap-2.5 mb-6">
            <span className="badge-dot badge-dot-success" aria-hidden="true" />
            <span className="body-mono">Available for freelance &amp; full-time roles</span>
          </div>

          <h2 className="heading-section text-[clamp(2rem,4vw,2.75rem)]">
            Let&apos;s build something useful.
          </h2>

          <p className="body-large mt-5">
            I&apos;m open to software engineering, AI product, and freelance
            opportunities. Drop a message and I&apos;ll reply within hours.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href={`mailto:${personal.email}`} className="btn-primary">
              <Mail className="w-4 h-4" aria-hidden="true" />
              Get in touch
            </a>
            <CopyButton
              textToCopy={personal.email}
              variant="pill"
              label="Copy email"
              copiedLabel="Email copied ✓"
            />
          </div>

          {/* Contact details — one quiet line */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[14px] text-muted">
            <span>{personal.email}</span>
            <span aria-hidden="true">·</span>
            <span>{personal.location}</span>
            <span aria-hidden="true">·</span>
            <span>UTC+5:30</span>
          </div>

          {/* Socials */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-border-subtle flex items-center justify-center text-secondary hover:text-primary hover:border-border-strong transition-colors"
              aria-label="GitHub profile"
            >
              <GithubIcon className="w-[18px] h-[18px]" />
            </a>
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-border-subtle flex items-center justify-center text-secondary hover:text-primary hover:border-border-strong transition-colors"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon className="w-[18px] h-[18px]" />
            </a>
            <a
              href={personal.socials.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-border-subtle flex items-center justify-center text-secondary hover:text-primary hover:border-border-strong transition-colors"
              aria-label="Medium profile"
            >
              <MediumIcon className="w-[18px] h-[18px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
