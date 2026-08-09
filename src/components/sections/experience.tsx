"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { experience } from "@/data/content";
import { MapPin, Plus, Minus } from "lucide-react";

export function ExperienceSection() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="section-y">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-7">
            <div className="label-eyebrow mb-5 flex items-center">
              <span className="eyebrow-bar" />
              <span>Experience &amp; Impact</span>
            </div>
            <h2 className="heading-section max-w-[480px]">
              Where I&apos;ve made <span className="text-accent">measurable impact.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-12">
            <p className="body-default max-w-[380px]">
              AI platforms, automation tools, and full-stack systems in production.
              Click any role to expand the technical contribution.
            </p>
          </div>
        </div>

        {/* Editorial timeline — left date rail, right content */}
        <div className="space-y-4">
          {experience.map((exp, idx) => {
            const isExpanded = expanded === idx;
            return (
              <motion.div
                key={`${exp.company}-${exp.role}-${idx}`}
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                className={`card overflow-hidden transition-colors ${
                  isExpanded ? "!border-border-strong" : ""
                }`}
              >
                <button
                  onClick={() => setExpanded(isExpanded ? null : idx)}
                  className="w-full text-left p-6 md:p-8 flex items-start gap-6 md:gap-10"
                >
                  {/* Left meta — date rail */}
                  <div className="hidden md:flex flex-col items-start min-w-[140px] pt-1">
                    <div className="body-mono normal-case tracking-normal text-[11.5px] text-primary font-medium">
                      {exp.period.split(" – ")[0]}
                    </div>
                    <div className="body-mono normal-case tracking-normal text-[11px] text-muted mt-1">
                      → {exp.period.split(" – ")[1] || "Present"}
                    </div>
                    {idx === 0 && (
                      <div className="mt-3 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-soft" />
                        <span className="body-mono normal-case tracking-normal text-[10.5px] text-success">Current</span>
                      </div>
                    )}
                  </div>

                  {/* Main content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap md:hidden">
                      <span className="body-mono normal-case tracking-normal text-[11px] text-primary">
                        {exp.period}
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 mb-2 flex-wrap">
                      <h3 className="heading-sub text-[18px] md:text-[19px]">{exp.role}</h3>
                      <span className="text-muted">·</span>
                      <span className="text-[15px] text-secondary font-medium">{exp.company}</span>
                      <span className="badge !text-[10px]">{exp.type}</span>
                    </div>
                    <p className="body-default text-[14px] max-w-[600px]">{exp.summary}</p>
                    <div className="mt-3 flex items-center gap-3 body-mono normal-case tracking-normal text-[11.5px]">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3 h-3" /> {exp.location}
                      </span>
                      <span>·</span>
                      <span>{exp.achievements.length} contributions</span>
                    </div>
                  </div>

                  {/* Expand toggle */}
                  <div
                    className={`shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                      isExpanded
                        ? "bg-accent border-accent text-bg"
                        : "border-border-subtle text-secondary"
                    }`}
                  >
                    {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 pt-2 border-t border-border-subtle">
                        <div className="grid md:grid-cols-[140px_1fr] gap-6 md:gap-10 mt-6">
                          <div className="hidden md:block body-mono normal-case tracking-normal text-[10.5px] uppercase text-muted">
                            Highlights
                          </div>
                          <div className="space-y-7">
                            {exp.achievements.map((ach, j) => (
                              <div key={j}>
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="w-1 h-1 rounded-full bg-accent" />
                                  <h4 className="text-[15px] font-semibold text-primary">
                                    {ach.title}
                                  </h4>
                                </div>
                                <p className="text-[13.5px] leading-relaxed text-secondary ml-3.5">
                                  {ach.description}
                                </p>
                                <div className="mt-2.5 ml-3.5 px-3.5 py-2.5 rounded-[10px] border-l-2 border-accent/60 bg-accent/[0.03]">
                                  <span className="body-mono normal-case tracking-normal text-[10.5px] uppercase text-muted mr-2">
                                    Impact
                                  </span>
                                  <span className="text-[13px] text-secondary">{ach.impact}</span>
                                </div>
                                <div className="flex flex-wrap gap-1.5 mt-3 ml-3.5">
                                  {ach.technologies.map((t) => (
                                    <span key={t} className="badge">
                                      {t}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
