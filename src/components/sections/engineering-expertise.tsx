"use client";

import { motion } from "framer-motion";
import { engineeringExpertise } from "@/data/content";

export function EngineeringExpertiseSection() {
  return (
    <section id="expertise" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/30 via-transparent to-[#0F172A]/30 pointer-events-none" />
      <div className="container-max section-padding relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <div className="label-mono text-[#06B6D4] mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-[#06B6D4]" />
              Engineering Expertise
            </div>
            <h2 className="heading-section text-[#F8FAFC]">
              Built for speed, <span className="text-gradient-blue">scale & intelligence.</span>
            </h2>
          </div>
          <p className="text-[14px] leading-relaxed text-[#94A3B8] max-w-[420px]">
            A deliberately narrow toolkit that lets me ship from prototype to production without friction. Organized by actually-used stacks.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-4">
          {engineeringExpertise.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className={`group rounded-[20px] bg-[#0F172A]/50 backdrop-blur-xl border border-white/[0.06] p-6 hover:border-[#3B82F6]/20 hover:bg-[#0F172A]/80 transition-all duration-300 hover:shadow-[0_8px_30px_-8px_rgba(59,130,246,0.1)] ${
                cat.id === "frontend" || cat.id === "ai" ? "md:col-span-7" : "md:col-span-5"
              } ${cat.id === "databases" ? "md:col-span-4" : ""} ${cat.id === "cloud" ? "md:col-span-4" : ""} ${
                cat.id === "backend" ? "md:col-span-4" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <h3 className="text-[15px] font-semibold tracking-tight text-[#F8FAFC]">{cat.title}</h3>
                  <p className="text-[12px] text-[#64748B] mt-1">{cat.description}</p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-[11px] font-mono text-[#94A3B8]">
                  {cat.skills.length} tools
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-[13px] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#3B82F6]/30 hover:bg-[#3B82F6]/5 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
