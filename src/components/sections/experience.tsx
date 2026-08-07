"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { experience } from "@/data/content";
import { Calendar, MapPin, ChevronDown } from "lucide-react";

export function ExperienceSection() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 lg:py-32">
      <div className="container-max section-padding">
        <div className="mb-14">
          <div className="label-mono text-[#F0D77B] mb-4 flex items-center gap-2">
            <span className="w-6 h-px bg-[#F0D77B]" />
            Experience & Impact
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="heading-section text-[#F8FAFC] max-w-[480px]">Where I&apos;ve made impact</h2>
            <p className="text-[14px] text-[#94A3B8] max-w-[360px] leading-relaxed">
              AI platforms, automation tools, and full-stack systems. Click to expand.
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Timeline line - desktop */}
          <div className="hidden lg:block absolute left-[180px] top-2 bottom-2 w-px bg-gradient-to-b from-[#D4AF37]/30 via-[#1E293B] to-transparent" />

          <div className="space-y-5">
            {experience.map((exp, idx) => {
              const isExpanded = expanded === idx;
              return (
                <motion.div
                  key={`${exp.company}-${exp.role}-${idx}`}
                  initial={{ y: 16, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  className="grid lg:grid-cols-[160px_1fr] gap-4 lg:gap-8 relative"
                >
                  {/* Left meta desktop */}
                  <div className="hidden lg:block pt-6">
                    <div className="sticky top-28 space-y-2">
                      <div className="inline-flex px-3 py-1.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E8C547] text-white text-[12px] font-bold tracking-wide shadow-lg shadow-[#D4AF37]/20">
                        {exp.company}
                      </div>
                      <div className="text-[12px] font-mono text-[#64748B] flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" /> {exp.period}
                      </div>
                      <div className="text-[12px] font-mono text-[#64748B] flex items-center gap-1.5">
                        <MapPin className="w-3 h-3" /> {exp.location}
                      </div>
                      <div className={`inline-flex px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest border ${
                        exp.type === "Internship"
                          ? "bg-[#F0D77B]/10 text-[#F0D77B] border-[#F0D77B]/20"
                          : "bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/20"
                      }`}>
                        {exp.type.toUpperCase()}
                      </div>
                    </div>
                  </div>

                  {/* dot */}
                  <div className="hidden lg:block absolute left-[175px] top-8 w-2.5 h-2.5 rounded-full bg-[#030712] border-2 border-[#D4AF37]/40 z-10" />

                  {/* Card */}
                  <div
                    className={`rounded-[20px] border overflow-hidden transition-all duration-300 backdrop-blur-xl ${
                      isExpanded
                        ? "bg-[#0F172A]/70 border-[#D4AF37]/20 shadow-[0_8px_30px_-8px_rgba(16,185,129,0.1)]"
                        : "bg-[#0F172A]/40 border-white/[0.06] hover:border-white/[0.1]"
                    }`}
                  >
                    <button
                      onClick={() => setExpanded(isExpanded ? null : idx)}
                      className="w-full text-left p-5 md:p-6 flex items-start justify-between gap-4"
                    >
                      <div className="min-w-0 flex-1">
                        {/* mobile meta */}
                        <div className="flex items-center gap-2 mb-3 lg:hidden flex-wrap">
                          <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E8C547] text-white text-[11px] font-bold">{exp.company}</span>
                          <span className={`px-2 py-1 rounded-full text-[10px] font-bold border ${exp.type === "Internship" ? "bg-[#F0D77B]/10 text-[#F0D77B] border-[#F0D77B]/20" : "bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/20"}`}>{exp.type}</span>
                          <span className="ml-auto text-[11px] font-mono text-[#64748B]">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-[16px] md:text-[17px] font-semibold tracking-tight text-[#F8FAFC]">{exp.role}</h3>
                          {idx === 0 && <span className="px-2.5 py-0.5 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#F59E0B] text-[10px] font-bold">CURRENT</span>}
                        </div>
                        <p className="text-[13px] text-[#94A3B8] mt-1 leading-relaxed">{exp.summary}</p>
                        <div className="mt-3 flex items-center gap-3 text-[12px] text-[#64748B]">
                          <span className="hidden md:inline-flex items-center gap-1.5"><MapPin className="w-3 h-3" />{exp.location}</span>
                          <span className="hidden md:inline">•</span>
                          <span>{exp.achievements.length} key contributions</span>
                        </div>
                      </div>
                      <div className={`shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all ${isExpanded ? "bg-gradient-to-r from-[#D4AF37] to-[#E8C547] text-white border-transparent rotate-180 shadow-lg shadow-[#D4AF37]/20" : "bg-white/[0.04] text-[#94A3B8] border-white/[0.08]"}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 md:px-6 pb-6 pt-2 border-t border-white/[0.06] space-y-6">
                            {exp.achievements.map((ach, j) => (
                              <div key={j} className="relative pl-4 border-l border-[#1E293B] hover:border-[#D4AF37]/40 transition-colors">
                                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#D4AF37]/40" />
                                <h4 className="text-[14px] font-semibold text-[#F8FAFC]">{ach.title}</h4>
                                <p className="text-[13px] leading-relaxed text-[#94A3B8] mt-1.5">{ach.description}</p>
                                <div className="mt-3 px-4 py-2.5 rounded-[12px] bg-[#D4AF37]/[0.05] border border-[#D4AF37]/10">
                                  <p className="text-[12px] leading-relaxed text-[#94A3B8]">
                                    <span className="text-[#D4AF37] font-semibold">Impact:</span> {ach.impact}
                                  </p>
                                </div>
                                <div className="flex flex-wrap gap-1.5 mt-3">
                                  {ach.technologies.map((t) => (
                                    <span key={t} className="px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[11px] text-[#94A3B8]">
                                      {t}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
