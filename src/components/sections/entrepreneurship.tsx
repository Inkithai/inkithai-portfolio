"use client";

import { useState } from "react";
import { entrepreneurshipStories } from "@/data/content";
import { Trophy, Sparkles, ExternalLink, ChevronDown } from "lucide-react";

export function EntrepreneurshipSection() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const spark = entrepreneurshipStories[0];
  const thalir = entrepreneurshipStories[1];

  return (
    <section id="entrepreneurship" className="section-y">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-7">
            <div className="label-eyebrow mb-5 flex items-center">
              <span className="eyebrow-bar" />
              <span>Entrepreneurship</span>
            </div>
            <h2 className="heading-section max-w-[520px]">
              Turning ideas{" "}
              <span className="text-accent text-gradient-blue">into products.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-12">
            <p className="body-default max-w-[380px]">
              National recognition, seed funding, and a first stage speech. The messy, real
              arc of going from concept to validation.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* SPARK 101 */}
          <div className="card overflow-hidden h-full group">
            <div className="p-7 md:p-8">
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-[12px] bg-bg-elevated border border-border-subtle flex items-center justify-center text-accent">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="body-mono normal-case tracking-normal text-[10.5px] uppercase text-muted">
                      Recognition · 2024
                    </div>
                    <div className="text-[12.5px] text-secondary mt-0.5">{spark.location}</div>
                  </div>
                </div>
                <span className="badge-accent">Top 101</span>
              </div>

              <h3 className="text-[24px] md:text-[26px] font-semibold tracking-tight text-primary leading-tight group-hover:text-accent transition-colors">
                {spark.title}
              </h3>
              <p className="text-[14px] text-secondary mt-2.5 font-medium">
                {spark.subtitle}
              </p>
              <p className="body-default mt-4">
                Selected among Sri Lanka&apos;s top young entrepreneurial talents at the SPARK
                Grand Finale, powered by the Ceylon Chamber of Commerce, ILO, and U.S. Embassy.
              </p>

              <div className="flex flex-wrap gap-1.5 mt-5 z-20 relative">
                {(spark.poweredBy as readonly string[]).map((p) => (
                  <span key={p} className="badge">
                    {p}
                  </span>
                ))}
              </div>

              {expanded === "spark" && (
                <div className="mt-5 pt-5 border-t border-border-subtle space-y-3">
                  <p className="text-[13px] leading-relaxed text-secondary">
                    Recognized at Taj Samudra, Colombo on September 5, 2024. Currently
                    working towards ideation for a new startup.
                  </p>
                  <a
                    href={spark.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-link z-20 relative"
                  >
                    View organization <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}

              <button
                onClick={() => setExpanded(expanded === "spark" ? null : "spark")}
                className="btn-link mt-5 cursor-pointer z-20 relative inline-flex items-center gap-1.5"
              >
                <span className={`inline-block ${expanded === "spark" ? "rotate-180" : ""}`}>
                  <ChevronDown className="w-4 h-4" />
                </span>
                {expanded === "spark" ? "Show less" : "Read more"}
              </button>
            </div>
          </div>

          {/* THALIR SEED-FUNDING */}
          <div className="card overflow-hidden h-full group">
            <div className="p-7 md:p-8">
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-[12px] bg-bg-elevated border border-border-subtle flex items-center justify-center text-accent">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="body-mono normal-case tracking-normal text-[10.5px] uppercase text-muted">
                      Seed Funding · 2025
                    </div>
                    <div className="text-[12.5px] text-secondary mt-0.5">{thalir.location}</div>
                  </div>
                </div>
                <span className="badge-accent">Funded</span>
              </div>

              <h3 className="text-[24px] md:text-[26px] font-semibold tracking-tight text-primary leading-tight group-hover:text-accent transition-colors">
                {thalir.title}
              </h3>
              <p className="text-[14px] text-secondary mt-2.5 font-medium">
                {thalir.subtitle}
              </p>

              {/* Headline stat */}
              <div className="mt-6 flex items-center gap-5">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[12px] font-mono text-muted">LKR</span>
                  <span className="text-[32px] font-semibold tracking-tight leading-none text-primary">
                    500,000
                  </span>
                </div>
                <div className="h-9 w-px bg-border-subtle" />
                <div className="text-[12px] text-secondary">
                  <div className="text-primary font-medium">Top 4 of 100+</div>
                  <div className="text-muted">applications</div>
                </div>
              </div>

              <p className="body-default mt-5">
                First-ever funding pitch and stage speech. Digital product idea validated
                with a seed grant from David Pieris Group&apos;s Thalir Program.
              </p>

              {expanded === "thalir" && (
                <div className="mt-5 pt-5 border-t border-border-subtle space-y-4">
                  <div className="px-4 py-3 rounded-[12px] bg-bg-elevated border border-border-subtle">
                    <div className="body-mono normal-case tracking-normal text-[10.5px] uppercase text-muted mb-1.5">
                      The Journey
                    </div>
                    <p className="text-[12.5px] leading-relaxed text-secondary">
                      Idea shaped with mentor Andrew Asher. Selected from 28 shortlisted
                      startups. Delivered first-ever stage speech at Hotel Northgate, Jaffna.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 z-20 relative">
                    {(thalir.milestones as readonly string[]).map((m) => (
                      <span key={m} className="badge">
                        {m}
                      </span>
                    ))}
                  </div>
                  <a
                    href={thalir.link as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-link z-20 relative"
                  >
                    View ceremony post <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}

              <button
                onClick={() => setExpanded(expanded === "thalir" ? null : "thalir")}
                className="btn-link mt-5 cursor-pointer z-20 relative inline-flex items-center gap-1.5"
              >
                <span className={`inline-block ${expanded === "thalir" ? "rotate-180" : ""}`}>
                  <ChevronDown className="w-4 h-4" />
                </span>
                {expanded === "thalir" ? "Show less" : "Read full story"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
