"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { entrepreneurshipStories } from "@/data/content";
import { Trophy, Sparkles, Award, ChevronDown, ExternalLink } from "lucide-react";

export function EntrepreneurshipSection() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const spark = entrepreneurshipStories[0];
  const thalir = entrepreneurshipStories[1];

  return (
    <section id="entrepreneurship" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/30 via-transparent to-[#0F172A]/30 pointer-events-none" />
      <div className="container-max section-padding relative">
        <div className="max-w-[1200px]">
          <div className="label-mono text-[#F59E0B] mb-4 flex items-center gap-2">
            <span className="w-6 h-px bg-[#F59E0B]" />
            Entrepreneurship
          </div>
          <h2 className="heading-section text-[#F8FAFC] mb-12">
            Turning ideas <span className="text-gradient-warm">into products.</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* SPARK 101 */}
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="rounded-[24px] overflow-hidden bg-[#0F172A]/50 backdrop-blur-xl border border-white/[0.06] hover:border-[#3B82F6]/20 transition-all duration-300"
            >
              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-[14px] bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] flex items-center justify-center shadow-lg shadow-[#3B82F6]/20">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono tracking-widest uppercase text-[#38BDF8]">Recognition • 2024</div>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#38BDF8] text-[10px] font-bold">TOP 101</span>
                </div>

                <h3 className="text-[24px] font-bold tracking-tight text-[#F8FAFC] mt-5">{spark.title}</h3>
                <div className="text-[13px] font-medium text-[#94A3B8] mt-1">{spark.subtitle}</div>
                <p className="text-[13px] leading-relaxed text-[#94A3B8] mt-3">
                  Selected among Sri Lanka&apos;s top young entrepreneurial talents at the SPARK Grand Finale, powered by the Ceylon Chamber of Commerce, ILO, and U.S. Embassy.
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {(spark.poweredBy as readonly string[]).map((p) => (
                    <span key={p} className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-[11px] text-[#94A3B8]">{p}</span>
                  ))}
                </div>

                <AnimatePresence>
                  {expanded === "spark" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-5 pt-5 border-t border-white/[0.06] space-y-3">
                        <p className="text-[12px] leading-relaxed text-[#64748B]">
                          Recognized at Taj Samudra, Colombo on September 5, 2024. Currently working towards ideation for a new startup.
                        </p>
                        <a href={spark.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#38BDF8] hover:text-white transition-colors">
                          View organization <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => setExpanded(expanded === "spark" ? null : "spark")}
                  className="mt-5 flex items-center gap-2 text-[12px] font-medium text-[#64748B] hover:text-[#38BDF8] transition-colors"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${expanded === "spark" ? "rotate-180" : ""}`} />
                  {expanded === "spark" ? "Show less" : "Read more"}
                </button>
              </div>
            </motion.div>

            {/* THALIR SEED-FUNDING */}
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="rounded-[24px] overflow-hidden bg-[#0F172A]/50 backdrop-blur-xl border border-[#F59E0B]/15 hover:border-[#F59E0B]/25 transition-all duration-300"
            >
              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-[14px] bg-gradient-to-br from-[#F59E0B] to-[#EF4444] flex items-center justify-center shadow-lg shadow-[#F59E0B]/20">
                      <Trophy className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono tracking-widest uppercase text-[#F59E0B]">Seed Funding • 2025</div>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#EF4444] text-white text-[10px] font-bold shadow-lg">FUNDED</span>
                </div>

                <h3 className="text-[24px] font-bold tracking-tight text-[#F8FAFC] mt-5">{thalir.title}</h3>
                <div className="text-[13px] font-medium text-[#94A3B8] mt-1">{thalir.subtitle}</div>

                {/* Key stat - always visible */}
                <div className="mt-4 flex items-center gap-4">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[11px] font-mono text-[#F59E0B]">LKR</span>
                    <span className="text-[28px] font-bold tracking-tight leading-none text-gradient-warm">500,000</span>
                  </div>
                  <div className="h-8 w-px bg-white/[0.06]" />
                  <div className="text-[11px] text-[#64748B] leading-tight">
                    <div className="text-[#F8FAFC] font-medium">Top 4 of 100+</div>
                    applications
                  </div>
                </div>

                <p className="text-[13px] leading-relaxed text-[#94A3B8] mt-4">
                  First-ever funding pitch and stage speech. Digital product idea validated with seed grant from David Pieris Group&apos;s Thalir Program.
                </p>

                <AnimatePresence>
                  {expanded === "thalir" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-5 pt-5 border-t border-white/[0.06] space-y-4">
                        <div className="rounded-[14px] bg-white/[0.03] border border-white/[0.06] p-4">
                          <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748B] mb-2">The Journey</div>
                          <p className="text-[12px] leading-relaxed text-[#94A3B8]">
                            Idea shaped with mentor Andrew Asher. Selected from 28 shortlisted startups. Delivered first-ever stage speech at Hotel Northgate, Jaffna. Actively seeking further funding & partnerships.
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {(thalir.milestones as readonly string[]).map((m) => (
                            <span key={m} className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-[11px] text-[#94A3B8]">
                              <span className="text-[#F59E0B] mr-1">•</span>{m}
                            </span>
                          ))}
                        </div>
                        <div>
                          <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748B] mb-2">Mentorship</div>
                          <div className="flex flex-wrap gap-1.5">
                            {(thalir.gratitude as readonly {name: string; role: string}[]).map((g) => (
                              <span key={g.name} className="px-2 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[10px] text-[#94A3B8]">
                                {g.name}
                              </span>
                            ))}
                          </div>
                        </div>
                        <a href={thalir.link as string} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#F59E0B] hover:text-white transition-colors">
                          View ceremony post <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => setExpanded(expanded === "thalir" ? null : "thalir")}
                  className="mt-5 flex items-center gap-2 text-[12px] font-medium text-[#64748B] hover:text-[#F59E0B] transition-colors"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${expanded === "thalir" ? "rotate-180" : ""}`} />
                  {expanded === "thalir" ? "Show less" : "Read full story"}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
