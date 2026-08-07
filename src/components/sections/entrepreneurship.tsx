"use client";

import { motion } from "framer-motion";
import { entrepreneurshipStories } from "@/data/content";
import { Trophy, Sparkles, Award, MapPin, Calendar, ExternalLink } from "lucide-react";

export function EntrepreneurshipSection() {
  const spark = entrepreneurshipStories[0];
  const thalir = entrepreneurshipStories[1];

  return (
    <section id="entrepreneurship" className="py-20 lg:py-28 bg-[#101117]/50 border-y border-[#101117]">
      <div className="container-max section-padding">
        <div className="max-w-[1200px]">
          <div className="label-mono text-[#6F7482] mb-3">Entrepreneurship</div>

          <div className="grid lg:grid-cols-12 gap-8 items-start mb-10">
            <div className="lg:col-span-7">
              <h2 className="heading-section text-[#F5F7FA]">
                Turning ideas
                <span className="block text-[#A5A9B6]">into products.</span>
              </h2>
              <p className="text-[14px] leading-relaxed text-[#A5A9B6] mt-4 max-w-[420px]">
                Early recognition for entrepreneurial potential followed by seed funding validation for a prototype — two milestones on the same journey from ideation to building.
              </p>
            </div>
            <div className="lg:col-span-5 hidden lg:flex items-center justify-end">
              <div className="text-[11px] font-mono tracking-widest uppercase text-[#6F7482]">Taj Samudra • Hotel Northgate • 2024 — 2025</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* SPARK 101 */}
            <motion.div
              initial={{ y: 16 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              className="group relative rounded-[24px] overflow-hidden bg-[#08090D] border border-[#1E202B] hover:border-[#2A2D3A] transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/[0.06] via-transparent to-transparent pointer-events-none" />
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#8B5CF6]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-[14px] bg-[#F5F7FA] text-[#08090D] flex items-center justify-center">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono tracking-widest uppercase text-[#A78BFA] flex items-center gap-1.5">
                        <Award className="w-3 h-3" /> {spark.type}
                      </div>
                      <div className="text-[13px] font-semibold text-[#F5F7FA] mt-0.5">{spark.date} • {spark.location}</div>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-[#A78BFA] text-[11px] font-bold tracking-wide">RECOGNIZED</span>
                </div>

                <div className="mt-6">
                  <h3 className="text-[26px] font-bold tracking-tight leading-none text-[#F5F7FA]">{spark.title}</h3>
                  <div className="text-[13px] font-medium text-[#A5A9B6] mt-1">{spark.subtitle}</div>
                  <div className="text-[12px] font-semibold text-[#F5F7FA] mt-3 leading-tight">{spark.award}</div>
                  <p className="text-[13px] leading-relaxed text-[#A5A9B6] mt-3">{spark.description}</p>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="rounded-[14px] bg-[#101117] border border-[#1E202B] p-4">
                    <div className="text-[11px] font-mono tracking-widest uppercase text-[#6F7482] mb-2">Powered By</div>
                    <div className="flex flex-wrap gap-1.5">
                      {(spark.poweredBy as readonly string[]).map((p) => (
                        <span key={p} className="px-2.5 py-1 rounded-full bg-[#151720] border border-[#1E202B] text-[11px] text-[#A5A9B6]">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {spark.highlights.map((h: string) => (
                      <span key={h} className="px-2.5 py-1 rounded-full bg-[#151720] border border-[#1E202B] text-[11px] text-[#A5A9B6]">
                        {h}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-[11px] font-mono text-[#6F7482] pt-2">
                    <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" />{spark.location}</span>
                    <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" />{spark.date}</span>
                  </div>
                  <a href={spark.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-3 text-[12px] font-medium text-[#A5A9B6] hover:text-[#F5F7FA] transition-colors">
                    View organization <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* THALIR SEED-FUNDING */}
            <motion.div
              initial={{ y: 16 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="group relative rounded-[24px] overflow-hidden bg-[#08090D] border border-[#FBBF24]/20 hover:border-[#FBBF24]/30 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FBBF24]/[0.08] via-[#FBBF24]/[0.03] to-transparent pointer-events-none" />
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#FBBF24]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-[14px] bg-gradient-to-br from-[#FBBF24] to-[#F59E0B] flex items-center justify-center shadow-lg shadow-[#FBBF24]/20">
                      <Trophy className="w-6 h-6 text-[#08090D]" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono tracking-widest uppercase text-[#FBBF24] flex items-center gap-1.5">
                        <Award className="w-3 h-3" /> {thalir.type}
                      </div>
                      <div className="text-[13px] font-semibold text-[#F5F7FA] mt-0.5">{thalir.date} • {thalir.location}</div>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#FBBF24] text-[#08090D] text-[11px] font-bold tracking-wide">FUNDED</span>
                </div>

                <div className="mt-6 grid md:grid-cols-[1.1fr_0.9fr] gap-6 items-start">
                  <div>
                    <h3 className="text-[26px] font-bold tracking-tight leading-none text-[#F5F7FA]">{thalir.title}</h3>
                    <div className="text-[13px] font-medium text-[#A5A9B6] mt-1">{thalir.subtitle}</div>
                    <div className="text-[12px] font-semibold text-[#F5F7FA] mt-2">{thalir.award}</div>

                    <p className="text-[12px] leading-relaxed text-[#A5A9B6] mt-3">{thalir.description}</p>

                    <div className="mt-4 rounded-[14px] bg-[#101117] border border-[#1E202B] p-3">
                      <div className="text-[11px] font-mono tracking-widest uppercase text-[#6F7482] mb-2">Journey Stats</div>
                      <div className="space-y-1.5 text-[11px]">
                        <div className="flex justify-between"><span className="text-[#6F7482]">Applications</span><span className="text-[#F5F7FA] font-medium">{(thalir.stats as any).applications}</span></div>
                        <div className="flex justify-between"><span className="text-[#6F7482]">Shortlisted</span><span className="text-[#F5F7FA] font-medium">{(thalir.stats as any).shortlisted}</span></div>
                        <div className="flex justify-between"><span className="text-[#6F7482]">Result</span><span className="text-[#FBBF24] font-bold">{(thalir.stats as any).champions}</span></div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-[20px] bg-[#101117] border border-[#FBBF24]/20 p-5">
                      <div className="text-[11px] font-mono tracking-widest uppercase text-[#6F7482]">Seed Grant Awarded</div>
                      <div className="mt-3 flex items-baseline gap-2">
                        <span className="text-[11px] font-mono text-[#FBBF24]">LKR</span>
                        <span className="text-[36px] font-bold tracking-tight leading-none text-[#F5F7FA]">{(thalir.amount as string).replace("LKR ", "")}</span>
                      </div>
                      <div className="text-[11px] text-[#A5A9B6] mt-2 font-medium">{thalir.amountLabel}</div>
                      <div className="mt-3 text-[11px] leading-relaxed text-[#6F7482]">For digital product idea and prototype — powerful first step, actively seeking further partnerships.</div>
                      <div className="mt-4 h-px bg-[#1E202B]" />
                      <div className="mt-3 flex items-center gap-2 text-[11px] font-mono text-[#6F7482]">
                        <div className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
                        {thalir.organization}
                      </div>
                    </div>

                    <div className="rounded-[14px] bg-[#101117] border border-[#1E202B] p-3">
                      <div className="text-[11px] font-mono tracking-widest uppercase text-[#6F7482] mb-2">Milestones</div>
                      <div className="space-y-1.5">
                        {(thalir.milestones as readonly string[]).map((m) => (
                          <div key={m} className="text-[11px] text-[#A5A9B6] flex gap-2"><span className="text-[#FBBF24]">•</span> {m}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-[#1E202B]">
                  <div className="text-[11px] font-mono tracking-widest uppercase text-[#6F7482] mb-2">Gratitude & Mentorship</div>
                  <div className="flex flex-wrap gap-1.5">
                    {(thalir.gratitude as readonly {name: string; role: string}[]).map((g) => (
                      <span key={g.name} className="px-2.5 py-1 rounded-full bg-[#151720] border border-[#1E202B] text-[11px] text-[#A5A9B6]">
                        {g.name} • <span className="text-[#6F7482]">{g.role}</span>
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <a href={thalir.link as string} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F5F7FA] text-[#08090D] text-[11px] font-semibold hover:bg-white transition-colors">
                      View ceremony post <ExternalLink className="w-3 h-3" />
                    </a>
                    <span className="text-[11px] font-mono text-[#6F7482]">First stage speech as entrepreneur — unforgettable</span>
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
