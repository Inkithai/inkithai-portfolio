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
            className="absolute -top-40 left-1/2 -translate-x-1/2 w-[520px] h-[420px] rounded-full opacity-[0.16] blur-[120px] pointer-events-none"
            style={{ background: "radial-gradient(circle, #3B82F6, transparent 70%)" }}
            aria-hidden="true"
          />

          <div className="relative px-6 py-14 md:px-12 md:py-16 lg:py-20">
            <div className="max-w-[620px] mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-soft" />
                <span className="body-mono normal-case tracking-normal">
                  Available for freelance &amp; new roles
                </span>
              </div>

              <h2 className="heading-section">
                Let&apos;s build{" "}
                <span className="text-accent text-gradient-blue">something great.</span>
              </h2>
              <p className="body-large mt-5">
                Tell me about the product you&apos;re building.
              </p>

              <div className="mt-9 flex flex-wrap gap-3 items-center justify-center">
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

              <div className="mt-7 flex flex-wrap items-center justify-center gap-3 body-mono normal-case tracking-normal">
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
