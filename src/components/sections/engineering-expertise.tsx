"use client";

import { motion } from "framer-motion";
import { engineeringExpertise } from "@/data/content";

export function EngineeringExpertiseSection() {
  return (
    <section id="expertise" className="py-20 lg:py-28 bg-[#101117]/50 border-y border-[#101117]">
      <div className="container-max section-padding">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="label-mono text-[#6F7482] mb-3">Engineering Expertise</div>
            <h2 className="heading-section text-[#F5F7FA]">
              Built for speed, <span className="text-[#A5A9B6]">scale & intelligence.</span>
            </h2>
          </div>
          <p className="text-[14px] leading-relaxed text-[#A5A9B6] max-w-[420px]">
            A deliberately narrow toolkit that lets me ship from prototype to production without friction. Organized by actually-used stacks.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-4">
          {/* Use editorial grouping rather than wall of badges */}
          {engineeringExpertise.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ y: 16 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className={`rounded-[20px] bg-[#08090D] border border-[#1E202B] p-6 ${
                cat.id === "frontend" || cat.id === "ai" ? "md:col-span-7" : "md:col-span-5"
              } ${cat.id === "databases" ? "md:col-span-4" : ""} ${cat.id === "cloud" ? "md:col-span-4" : ""} ${
                cat.id === "backend" ? "md:col-span-4" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <h3 className="text-[15px] font-semibold tracking-tight text-[#F5F7FA]">{cat.title}</h3>
                  <p className="text-[12px] text-[#6F7482] mt-1">{cat.description}</p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#151720] border border-[#1E202B] text-[11px] font-mono text-[#A5A9B6]">
                  {cat.skills.length} tools
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-[#101117] border border-[#1E202B] text-[13px] text-[#A5A9B6] hover:text-[#F5F7FA] hover:border-[#2A2D3A] transition-colors"
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
