"use client";

import { motion } from "framer-motion";
import { education } from "@/data/content";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function AcademicFoundationSection() {
  return (
    <section id="education" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/30 via-transparent to-[#0F172A]/30 pointer-events-none" />
      <div className="container-max section-padding relative">
        <div className="max-w-[1100px]">
          <div className="label-mono text-[#F59E0B] mb-4 flex items-center gap-2">
            <span className="w-6 h-px bg-[#F59E0B]" />
            Academic Foundation
          </div>
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <h2 className="heading-section text-[#F8FAFC] leading-[1.08]">
                Learning that
                <span className="block text-gradient-warm">compounds.</span>
              </h2>
              <p className="text-[14px] leading-relaxed text-[#94A3B8] mt-4">
                Formal foundation in systems design, algorithms, and software engineering — blended with production shipping and research.
              </p>
            </div>

            <motion.div
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="rounded-[24px] bg-[#0F172A]/50 backdrop-blur-xl border border-white/[0.06] overflow-hidden hover:border-[#F59E0B]/20 transition-colors duration-300">
                <div className="p-7 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-12 h-12 rounded-[14px] bg-gradient-to-br from-[#F59E0B] to-[#EF4444] flex items-center justify-center shadow-lg shadow-[#F59E0B]/20">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 text-[#10B981] text-[11px] font-bold tracking-widest">GRADUATED 2025</span>
                  </div>

                  <div className="mt-6">
                    <div className="inline-flex px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-[#94A3B8] text-[11px] font-mono">
                      SLIIT • Sri Lanka
                    </div>
                    <h3 className="text-[20px] md:text-[22px] font-semibold tracking-tight text-[#F8FAFC] mt-3 leading-tight">
                      {education.degree}
                    </h3>
                    <div className="text-[14px] text-[#94A3B8] mt-1">{education.specialization}</div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-5 gap-6 pt-6 border-t border-white/[0.06]">
                    <div className="sm:col-span-3">
                      <p className="text-[13px] leading-relaxed text-[#94A3B8]">{education.description}</p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {education.focus.map((f) => (
                          <span key={f} className="px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[11px] text-[#94A3B8]">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="sm:col-span-2 space-y-3">
                      <div className="rounded-[14px] bg-white/[0.03] border border-white/[0.06] p-3">
                        <div className="text-[11px] font-mono tracking-widest uppercase text-[#64748B] flex items-center gap-1.5">
                          <Calendar className="w-3 h-3" /> Period
                        </div>
                        <div className="text-[13px] text-[#F8FAFC] mt-1 font-medium">{education.period}</div>
                      </div>
                      <div className="rounded-[14px] bg-white/[0.03] border border-white/[0.06] p-3">
                        <div className="text-[11px] font-mono tracking-widest uppercase text-[#64748B] flex items-center gap-1.5">
                          <MapPin className="w-3 h-3" /> Location
                        </div>
                        <div className="text-[13px] text-[#F8FAFC] mt-1 font-medium">{education.location}</div>
                      </div>
                    </div>
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
