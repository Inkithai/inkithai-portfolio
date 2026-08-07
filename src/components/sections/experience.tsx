"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { experience } from "@/data/content";
import { Calendar, MapPin, ChevronDown } from "lucide-react";

export function ExperienceSection() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="py-20 lg:py-28">
      <div className="container-max section-padding">
        <div className="mb-12">
          <div className="label-mono text-[#6F7482] mb-3">Experience & Impact</div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="heading-section text-[#F5F7FA] max-w-[480px]">Where I've made impact</h2>
            <p className="text-[14px] text-[#A5A9B6] max-w-[360px] leading-relaxed">
              Two years shipping AI platforms, automation tools, and full-stack systems in agile, high-velocity teams. Click to expand.
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Timeline line - desktop */}
          <div className="hidden lg:block absolute left-[180px] top-2 bottom-2 w-px bg-gradient-to-b from-[#1E202B] via-[#1E202B] to-transparent" />

          <div className="space-y-5">
            {experience.map((exp, idx) => {
              const isExpanded = expanded === idx;
              return (
                <motion.div
                  key={`${exp.company}-${exp.role}-${idx}`}
                  initial={{ y: 16 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  className="grid lg:grid-cols-[160px_1fr] gap-4 lg:gap-8 relative"
                >
                  {/* Left meta desktop */}
                  <div className="hidden lg:block pt-6">
                    <div className="sticky top-28 space-y-2">
                      <div className="inline-flex px-3 py-1 rounded-full bg-[#F5F7FA] text-[#08090D] text-[12px] font-bold tracking-wide">
                        {exp.company}
                      </div>
                      <div className="text-[12px] font-mono text-[#6F7482] flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" /> {exp.period}
                      </div>
                      <div className="text-[12px] font-mono text-[#6F7482] flex items-center gap-1.5">
                        <MapPin className="w-3 h-3" /> {exp.location}
                      </div>
                      <div className={`inline-flex px-2 py-1 rounded-full text-[10px] font-bold tracking-widest border ${
                        exp.type === "Internship"
                          ? "bg-[#60A5FA]/10 text-[#60A5FA] border-[#60A5FA]/20"
                          : "bg-[#34D399]/10 text-[#34D399] border-[#34D399]/20"
                      }`}>
                        {exp.type.toUpperCase()}
                      </div>
                    </div>
                  </div>

                  {/* dot */}
                  <div className="hidden lg:block absolute left-[175px] top-8 w-2.5 h-2.5 rounded-full bg-[#08090D] border-2 border-[#2A2D3A] group-hover:border-[#8B5CF6] z-10" style={{ marginLeft: "0" }} />

                  {/* Card */}
                  <div
                    className={`rounded-[20px] border overflow-hidden transition-all ${
                      isExpanded ? "bg-[#101117] border-[#1E202B]" : "bg-[#0F1016] border-[#151720] hover:border-[#1E202B]"
                    }`}
                  >
                    <button
                      onClick={() => setExpanded(isExpanded ? null : idx)}
                      className="w-full text-left p-5 md:p-6 flex items-start justify-between gap-4"
                    >
                      <div className="min-w-0 flex-1">
                        {/* mobile meta */}
                        <div className="flex items-center gap-2 mb-3 lg:hidden flex-wrap">
                          <span className="px-2.5 py-1 rounded-full bg-[#F5F7FA] text-[#08090D] text-[11px] font-bold">{exp.company}</span>
                          <span className={`px-2 py-1 rounded-full text-[10px] font-bold border ${exp.type === "Internship" ? "bg-[#60A5FA]/10 text-[#60A5FA] border-[#60A5FA]/20" : "bg-[#34D399]/10 text-[#34D399] border-[#34D399]/20"}`}>{exp.type}</span>
                          <span className="ml-auto text-[11px] font-mono text-[#6F7482]">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-[16px] md:text-[17px] font-semibold tracking-tight text-[#F5F7FA]">{exp.role}</h3>
                          {idx === 0 && <span className="px-2 py-0.5 rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/20 text-[#FBBF24] text-[10px] font-bold">CURRENT</span>}
                        </div>
                        <p className="text-[13px] text-[#A5A9B6] mt-1 leading-relaxed">{exp.summary}</p>
                        <div className="mt-3 flex items-center gap-3 text-[12px] text-[#6F7482]">
                          <span className="hidden md:inline-flex items-center gap-1.5"><MapPin className="w-3 h-3" />{exp.location}</span>
                          <span className="hidden md:inline">•</span>
                          <span>{exp.achievements.length} key contributions</span>
                        </div>
                      </div>
                      <div className={`shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all ${isExpanded ? "bg-[#F5F7FA] text-[#08090D] border-[#F5F7FA] rotate-180" : "bg-[#151720] text-[#A5A9B6] border-[#1E202B]"}`}>
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
                          <div className="px-5 md:px-6 pb-6 pt-2 border-t border-[#1E202B] space-y-6">
                            {exp.achievements.map((ach, j) => (
                              <div key={j} className="relative pl-4 border-l border-[#1E202B] hover:border-[#8B5CF6]/30 transition-colors">
                                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#1E202B]" />
                                <h4 className="text-[14px] font-semibold text-[#F5F7FA]">{ach.title}</h4>
                                <p className="text-[13px] leading-relaxed text-[#A5A9B6] mt-1.5">{ach.description}</p>
                                <div className="mt-3 px-3 py-2.5 rounded-[12px] bg-[#34D399]/[0.06] border border-[#34D399]/10">
                                  <p className="text-[12px] leading-relaxed text-[#A5A9B6]">
                                    <span className="text-[#34D399] font-semibold">Impact:</span> {ach.impact}
                                  </p>
                                </div>
                                <div className="flex flex-wrap gap-1.5 mt-3">
                                  {ach.technologies.map((t) => (
                                    <span key={t} className="px-2.5 py-1 rounded-full bg-[#151720] border border-[#1E202B] text-[11px] text-[#A5A9B6]">
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
