import { ArrowDownToLine, Terminal, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, MediumIcon } from "@/components/ui/icons";
import { personal } from "@/data/content";
import Link from "next/link";
import Image from "next/image";
import { CopyButton } from "@/components/ui/copy-button";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[88vh] flex items-center pt-32 pb-20 overflow-hidden">
      <div className="container-max section-padding w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-10 items-start">
          {/* LEFT — Content */}
          <div className="lg:col-span-7 max-w-[640px]">
            {/* Status line */}
            <div className="flex items-center gap-2.5 mb-7">
              <span className="badge-dot-success inline-block w-1.5 h-1.5 rounded-full bg-success animate-pulse-soft" />
              <span className="body-mono">{personal.status.label}</span>
            </div>

            {/* Eyebrow */}
            <div className="label-eyebrow flex items-center mb-6">
              <span className="eyebrow-bar" />
              <span className="flex items-center gap-2">
                <Terminal className="w-3 h-3 text-accent" />
                {personal.headlineRole}
              </span>
            </div>

            {/* Headline */}
            <h1 className="heading-hero">
              I build software{" "}
              <span className="text-accent text-gradient-blue">people actually use.</span>
            </h1>

            {/* Subhead */}
            <p className="body-large mt-7 max-w-[540px]">
              {personal.heroDescription}
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-3 mt-9">
              <Link href="/work" className="btn-primary shadow-[0_0_25px_rgba(79,140,255,0.3)]">
                View my work
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <ArrowDownToLine className="w-4 h-4" />
                Download Resume
              </a>
            </div>

            {/* Social links & Copy Email button */}
            <div className="mt-7 flex flex-wrap items-center gap-2">
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13.5px] text-secondary hover:text-primary transition-colors px-2 py-1"
              >
                <GithubIcon className="w-4 h-4" /> GitHub
              </a>

              <span className="text-muted/40">·</span>

              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13.5px] text-secondary hover:text-primary transition-colors px-2 py-1"
              >
                <LinkedinIcon className="w-4 h-4" /> LinkedIn
              </a>

              <span className="text-muted/40">·</span>

              <a
                href={personal.socials.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13.5px] text-secondary hover:text-primary transition-colors px-2 py-1"
              >
                <MediumIcon className="w-4 h-4" /> Medium
              </a>

              <span className="text-muted/40">·</span>

              <CopyButton
                textToCopy={personal.email}
                variant="ghost"
                label="Email"
                copiedLabel="Email copied ✓"
              />
            </div>

            {/* Stats */}
            <div className="mt-12 pt-6 border-t border-border-subtle grid grid-cols-3 max-w-[440px] gap-6">
              {[
                { k: "6+", v: "Projects shipped" },
                { k: "2 yr", v: "Production" },
                { k: "1", v: "IEEE Publication" },
              ].map((s) => (
                <div key={s.v} className="group cursor-default">
                  <div className="text-[22px] font-semibold tracking-tight text-primary group-hover:text-accent transition-colors">
                    {s.k}
                  </div>
                  <div className="text-[12px] text-muted mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Portrait */}
          <div className="lg:col-span-5 lg:pl-4 lg:pt-2">
            <div className="max-w-[380px] mx-auto lg:mx-0 lg:ml-auto">
              {/* Portrait card */}
              <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden border border-border-subtle bg-bg-surface group">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
                <Image
                  src="/images/inkithai.jpg"
                  alt="Inkithai Meiyalagan"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  priority
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-border-subtle rounded-[20px] pointer-events-none" />

                {/* Bottom identity strip */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent pt-16 pb-4 px-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-primary font-semibold text-[14px] tracking-tight">
                        Inkithai Meiyalagan
                      </div>
                      <div className="text-secondary text-[12px] mt-0.5">Full Stack &amp; AI Engineer</div>
                    </div>
                    <div className="flex items-center gap-1.5 body-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-soft" />
                      Available
                    </div>
                  </div>
                </div>
              </div>

              {/* Minimal meta row below portrait */}
              <div className="mt-4 flex items-center justify-between body-mono">
                <span>SLIIT · 2025</span>
                <span>Colombo → Remote</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
