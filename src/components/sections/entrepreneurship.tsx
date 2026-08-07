"use client";

import { motion } from "framer-motion";
import { entrepreneurshipStories } from "@/data/content";
import { Trophy, Sparkles, Award, MapPin, Calendar, ExternalLink } from "lucide-react";

export function EntrepreneurshipSection() {
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

          <div className="grid lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-7">
              <h2 className="heading-section text-[#F8FAFC]">
                Turning ideas
                <span className="block text-gradient-warm">into products.</span>
              </h2>
              <p className="text-[14px] leading-relaxed text-[#94A3B8] mt-4 max-w-[420px]">
                Early recognition for entrepreneurial potential followed by seed funding validation for a prototype — two milestones on the same journey from ideation to building.
              </p>
            </div>
            <div className="lg:col-span-5 hidden lg:flex items-center justify-end">
              <div className="text-[11px] font-mono tracking-widest uppercase text-[#64748B]">Taj Samudra • Hotel Northgate • 2024 — 2025</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* SPARK 101 */}
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="group relative rounded-[24px] overflow-hidden bg-[#0F172A]/50 backdrop-blur-xl border border-white/[0.06] hover:border-[#3B82F6]/20 transition-all duration-300 hover:shadow-[0_8px_30px_-8px_rgba(59,130,246,0.15)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/[0.06] via-transparent to-transparent pointer-events-none" />
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#3B82F6]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-[14px] bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] flex items-center justify-center shadow-lg shadow-[#3B82F6]/20">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono tracking-widest uppercase text-[#38BDF8] flex items-center gap-1.5">
                        <Award className="w-3 h-3" /> {spark.type}
                      </div>
                      <div className="text-[13px] font-semibold text-[#F8FAFC] mt-0.5">{spark.date} • {spark.location}</div>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#38BDF8] text-[11px] font-bold tracking-wide">RECOGNIZED</span>
                </div>

                <div className="mt-6">
                  <h3 className="text-[26px] font-bold tracking-tight leading-none text-[#F8FAFC]">{spark.title}</h3>
                  <div className="text-[13px] font-medium text-[#94A3B8] mt-1">{spark.subtitle}</div>
                  <div className="text-[12px] font-semibold text-[#F8FAFC] mt-3 leading-tight">{spark.award}</div>
                  <p className="text-[13px] leading-relaxed text-[#94A3B8] mt-3">{spark.description}</p>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="rounded-[14px] bg-white/[0.03] border border-white/[0.06] p-4">
                    <div className="text-[11px] font-mono tracking-widest uppercase text-[#64748B] mb-2">Powered By</div>
                    <div className="flex flex-wrap gap-1.5">
                      {(spark.poweredBy as readonly string[]).map((p) => (
                        <span key={p} className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-[11px] text-[#94A3B8]">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {spark.highlights.map((h: string) => (
                      <span key={h} className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-[11px] text-[#94A3B8]">
                        {h}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-[11px] font-mono text-[#64748B] pt-2">
                    <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" />{spark.location}</span>
                    <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" />{spark.date}</span>
                  </div>
                  <a href={spark.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-3 text-[12px] font-medium text-[#94A3B8] hover:text-[#38BDF8] transition-colors">
                    View organization <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* THALIR SEED-FUNDING */}
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="group relative rounded-[24px] overflow-hidden bg-[#0F172A]/50 backdrop-blur-xl border border-[#F59E0B]/20 hover:border-[#F59E0B]/30 transition-all duration-300 hover:shadow-[0_8px_30px_-8px_rgba(245,158,11,0.15)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/[0.08] via-[#F59E0B]/[0.03] to-transparent pointer-events-none" />
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-[14px] bg-gradient-to-br from-[#F59E0B] to-[#EF4444] flex items-center justify-center shadow-lg shadow-[#F59E0B]/20">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono tracking-widest uppercase text-[#F59E0B] flex items-center gap-1.5">
                        <Award className="w-3 h-3" /> {thalir.type}
                      </div>
                      <div className="text-[13px] font-semibold text-[#F8FAFC] mt-0.5">{thalir.date} • {thalir.location}</div>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#EF4444] text-white text-[11px] font-bold tracking-wide shadow-lg">FUNDED</span>
                </div>

                <div className="mt-6 grid md:grid-cols-[1.1fr_0.9fr] gap-6 items-start">
                  <div>
                    <h3 className="text-[26px] font-bold tracking-tight leading-none text-[#F8FAFC]">{thalir.title}</h3>
                    <div className="text-[13px] font-medium text-[#94A3B8] mt-1">{thalir.subtitle}</div>
                    <div className="text-[12px] font-semibold text-[#F8FAFC] mt-2">{thalir.award}</div>

                    <p className="text-[12px] leading-relaxed text-[#94A3B8] mt-3">{thalir.description}</p>

                    <div className="mt-4 rounded-[14px] bg-white/[0.03] border border-white/[0.06] p-3">
                      <div className="text-[11px] font-mono tracking-widest uppercase text-[#64748B] mb-2">Journey Stats</div>
                      <div className="space-y-1.5 text-[11px]">
                        <div className="flex justify-between"><span className="text-[#64748B]">Applications</span><span className="text-[#F8FAFC] font-medium">{(thalir.stats as any).applications}</span></div>
                        <div className="flex justify-between"><span className="text-[#64748B]">Shortlisted</span><span className="text-[#F8FAFC] font-medium">{(thalir.stats as any).shortlisted}</span></div>
                        <div className="flex justify-between"><span className="text-[#64748B]">Result</span><span className="text-[#F59E0B] font-bold">{(thalir.stats as any).champions}</span></div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-[20px] bg-white/[0.03] border border-[#F59E0B]/20 p-5">
                      <div className="text-[11px] font-mono tracking-widest uppercase text-[#64748B]">Seed Grant Awarded</div>
                      <div className="mt-3 flex items-baseline gap-2">
                        <span className="text-[11px] font-mono text-[#F59E0B]">LKR</span>
                        <span className="text-[36px] font-bold tracking-tight leading-none text-gradient-warm">{(thalir.amount as string).replace("LKR ", "")}</span>
                      </div>
                      <div className="text-[11px] text-[#94A3B8] mt-2 font-medium">{thalir.amountLabel}</div>
                      <div className="mt-3 text-[11px] leading-relaxed text-[#64748B]">For digital product idea and prototype — powerful first step, actively seeking further partnerships.</div>
                      <div className="mt-4 h-px bg-white/[0.06]" />
                      <div className="mt-3 flex items-center gap-2 text-[11px] font-mono text-[#64748B]">
                        <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                        {thalir.organization}
                      </div>
                    </div>

                    <div className="rounded-[14px] bg-white/[0.03] border border-white/[0.06] p-3">
                      <div className="text-[11px] font-mono tracking-widest uppercase text-[#64748B] mb-2">Milestones</div>
                      <div className="space-y-1.5">
                        {(thalir.milestones as readonly string[]).map((m) => (
                          <div key={m} className="text-[11px] text-[#94A3B8] flex gap-2"><span className="text-[#F59E0B]">•</span> {m}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/[0.06]">
                  <div className="text-[11px] font-mono tracking-widest uppercase text-[#64748B] mb-2">Gratitude & Mentorship</div>
                  <div className="flex flex-wrap gap-1.5">
                    {(thalir.gratitude as readonly {name: string; role: string}[]).map((g) => (
                      <span key={g.name} className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-[11px] text-[#94A3B8]">
                        {g.name} • <span className="text-[#64748B]">{g.role}</span>
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <a href={thalir.link as string} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#EF4444] text-white text-[11px] font-semibold hover:shadow-lg hover:shadow-[#F59E0B]/20 transition-all">
                      View ceremony post <ExternalLink className="w-3 h-3" />
                    </a>
                    <span className="text-[11px] font-mono text-[#64748B]">First stage speech as entrepreneur — unforgettable</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
