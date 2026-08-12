"use client";

import { personal } from "@/data/content";
import { Mail, ArrowUpRight } from "lucide-react";
import { CopyButton } from "@/components/ui/copy-button";

export function FinalCTASection() {
  return (
    <section id="contact" className="section-y">
      <div className="container-max section-padding">
        <div className="relative rounded-[24px] overflow-hidden card !border-border-strong">
          {/* Subtle blue background halo */}
          <div
            className="absolute -top-32 -right-32 w-[440px] h-[440px] rounded-full opacity-[0.18] blur-[120px] pointer-events-none"
            style={{ background: "radial-gradient(circle, #3B82F6, transparent 70%)" }}
            aria-hidden="true"
          />

          <div className="relative p-8 md:p-12 lg:p-14 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-soft" />
                <span className="body-mono normal-case tracking-normal">
                  Available for freelance &amp; new roles
                </span>
              </div>

              <h2 className="heading-section">
                Let&apos;s build{" "}
                <span className="text-accent text-gradient-blue">something great.</span>
              </h2>
              <p className="body-large mt-5 max-w-[480px]">
                Available for freelance and full-time roles — especially where AI meets
                product. Drop a message and I&apos;ll reply within hours.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 items-center">
                <a
                  href={`mailto:${personal.email}`}
                  className="btn-primary shadow-[0_0_25px_rgba(59,130,246,0.35)]"
                >
                  <Mail className="w-4 h-4" />
                  Email me directly
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <CopyButton
                  textToCopy={personal.email}
                  variant="pill"
                  label="Copy email"
                  copiedLabel="Email copied ✓"
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 body-mono normal-case tracking-normal">
                <span>{personal.location}</span>
                <span className="text-muted/40">·</span>
                <span>UTC+5:30</span>
                <span className="text-muted/40">·</span>
                <span>Response &lt; 3h</span>
              </div>
            </div>

            {/* Right — quick connect card */}
            <div className="lg:col-span-5">
              <div className="card !bg-bg !border-border-subtle p-5 overflow-hidden group">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-full bg-bg-elevated border border-border-subtle text-primary flex items-center justify-center font-semibold text-[14px]">
                    IM
                  </div>
                  <div>
                    <div className="text-[13.5px] font-semibold text-primary flex items-center gap-2">
                      Inkithai Meiyalagan
                      <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-soft" />
                    </div>
                    <div className="body-mono normal-case tracking-normal text-[11px]">
                      Replies usually within 2 hours
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="rounded-[14px] bg-bg-elevated border border-border-subtle p-4 text-[13.5px] leading-relaxed text-secondary">
                    Hey! Love your AI work — especially EduFlow. Free for a quick chat?
                    <div className="body-mono normal-case tracking-normal text-[10.5px] text-muted mt-2">
                      Recruiter · 9:41 AM
                    </div>
                  </div>
                  <div className="rounded-[14px] bg-accent/10 border border-accent/20 p-4 text-[13.5px] leading-relaxed text-primary ml-6">
                    Absolutely! Happy to share demos and architecture details.
                    <div className="body-mono normal-case tracking-normal text-[10.5px] text-muted mt-2">
                      You · just now
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex gap-2 z-20 relative">
                  <a
                    href={personal.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-full bg-[#0A66C2] text-white text-[13px] font-semibold text-center hover:bg-[#0958a8] transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={personal.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-primary justify-center"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
