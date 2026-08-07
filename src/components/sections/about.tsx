"use client";

import { motion } from "framer-motion";
import { about, personal, continuousLearning } from "@/data/content";

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/30 via-transparent to-[#0F172A]/30 pointer-events-none" />
      <div className="container-max section-padding relative">
        <div className="max-w-[1100px]">
          <div className="label-mono text-[#3B82F6] mb-4 flex items-center gap-2">
            <span className="w-6 h-px bg-[#3B82F6]" />
            About
          </div>
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <h2 className="heading-section text-[#F8FAFC]">Product-minded engineer who ships AI that people actually use.</h2>
              <div className="mt-6 space-y-4 text-[14px] leading-relaxed text-[#94A3B8]">
                {about.summary.split("\n\n").map((p, i) => (
                  <p key={i} className={i === 0 ? "text-[#CBD5E1]" : ""}>
                    {p}
                  </p>
                ))}
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                {about.mindset.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="rounded-[14px] bg-[#0F172A]/50 backdrop-blur-xl border border-white/[0.06] p-4 hover:border-[#3B82F6]/20 transition-colors"
                  >
                    <div className="text-[13px] leading-relaxed text-[#94A3B8]">{item}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-[20px] bg-[#0F172A]/50 backdrop-blur-xl border border-white/[0.06] p-6">
                <div className="text-[11px] font-mono tracking-widest uppercase text-[#3B82F6]">Highlights</div>
                <div className="mt-4 space-y-3">
                  {about.highlights.slice(0, 4).map((h, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-[#3B82F6]/20 to-[#06B6D4]/20 border border-[#3B82F6]/20 flex items-center justify-center text-[10px] font-mono text-[#38BDF8]">
                        0{i + 1}
                      </span>
                      <span className="text-[13px] leading-relaxed text-[#94A3B8]">{h.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[20px] bg-[#0F172A]/50 backdrop-blur-xl border border-white/[0.06] p-6">
                <div className="text-[11px] font-mono tracking-widest uppercase text-[#06B6D4]">Recent Learning</div>
                <div className="mt-4 space-y-4">
                  {continuousLearning.map((item) => (
                    <div key={item.title} className="pl-4 border-l border-white/[0.08] hover:border-[#06B6D4]/40 transition-colors">
                      <div className="text-[13px] font-semibold text-[#F8FAFC]">{item.title}</div>
                      <div className="text-[12px] text-[#94A3B8] mt-1 leading-relaxed">{item.description}</div>
                      <div className="text-[11px] font-mono text-[#64748B] mt-2">{item.period}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[20px] bg-[#0F172A]/50 backdrop-blur-xl border border-[#10B981]/20 p-4 flex items-center justify-between">
                <div className="text-[12px]">
                  <div className="font-semibold text-[#F8FAFC]">Based in {personal.location}</div>
                  <div className="text-[#64748B]">Open to remote worldwide</div>
                </div>
                <span className="px-3 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 text-[#10B981] text-[11px] font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" /> OPEN TO WORK
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
