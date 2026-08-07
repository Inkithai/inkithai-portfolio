"use client";

import { motion } from "framer-motion";
import { about, personal } from "@/data/content";

export function AboutSection() {
  // Trimmed summary - 2 concise paragraphs
  const summary = [
    "Software Engineer building production AI products across the full stack — from AI-powered learning platforms and email automation to document processing pipelines. Core stack: React, Next.js, Node.js, Python, OpenAI, Gemini.",
    "Available for freelance and full-time roles where AI meets product. Open to building from scratch or strengthening existing teams.",
  ];

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
              <h2 className="heading-section text-[#F8FAFC]">Engineer who ships AI that people actually use.</h2>
              <div className="mt-6 space-y-4 text-[14px] leading-relaxed text-[#94A3B8]">
                {summary.map((p, i) => (
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
                <div className="text-[11px] font-mono tracking-widest uppercase text-[#3B82F6]">What I Bring</div>
                <div className="mt-4 space-y-3">
                  {about.highlights.slice(0, 4).map((h, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#3B82F6]/20 to-[#06B6D4]/20 border border-[#3B82F6]/20 flex items-center justify-center text-[9px] font-mono text-[#38BDF8]">
                        0{i + 1}
                      </span>
                      <span className="text-[13px] leading-snug text-[#94A3B8]">{h.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[20px] bg-[#0F172A]/50 backdrop-blur-xl border border-[#10B981]/20 p-5 flex items-center justify-between">
                <div className="text-[12px]">
                  <div className="font-semibold text-[#F8FAFC]">Based in {personal.location}</div>
                  <div className="text-[#64748B] mt-0.5">Open to remote worldwide</div>
                </div>
                <span className="px-3 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 text-[#10B981] text-[11px] font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" /> OPEN
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
