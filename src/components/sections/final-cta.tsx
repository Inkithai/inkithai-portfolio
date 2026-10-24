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

          <div className="relative p-8 md:p-12 lg:p-14">
            <div className="max-w-[560px]">
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
                Tell me about the product you&apos;re building.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 items-center">
                <a
                  href={`mailto:${personal.email}`}
                  className="btn-primary shadow-[0_0_25px_rgba(59,130,246,0.35)]"
                >
                  <Mail className="w-4 h-4" />
                  Email me
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
