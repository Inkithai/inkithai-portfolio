"use client";

import { motion } from "framer-motion";
import { education } from "@/data/content";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function AcademicFoundationSection() {
  return (
    <section id="education" className="py-20 lg:py-28 bg-[#101117]/50 border-y border-[#101117]">
      <div className="container-max section-padding">
        <div className="max-w-[1100px]">
          <div className="label-mono text-[#6F7482] mb-3">Academic Foundation</div>
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <h2 className="heading-section text-[#F5F7FA] leading-[1.05]">
                Learning that
                <span className="block text-[#A5A9B6]">compounds.</span>
              </h2>
              <p className="text-[14px] leading-relaxed text-[#A5A9B6] mt-4">
                Formal foundation in systems design, algorithms, and software engineering — blended with production shipping and research.
              </p>
            </div>

            <motion.div
              initial={{ y: 16 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="rounded-[24px] bg-[#08090D] border border-[#1E202B] overflow-hidden">
                <div className="p-7 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-12 h-12 rounded-[14px] bg-[#F5F7FA] text-[#08090D] flex items-center justify-center">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#34D399]/10 border border-[#34D399]/20 text-[#34D399] text-[11px] font-bold tracking-widest">GRADUATED 2025</span>
                  </div>

                  <div className="mt-6">
                    <div className="inline-flex px-2.5 py-1 rounded-full bg-[#151720] border border-[#1E202B] text-[#A5A9B6] text-[11px] font-mono">
                      SLIIT • Sri Lanka
                    </div>
                    <h3 className="text-[20px] md:text-[22px] font-semibold tracking-tight text-[#F5F7FA] mt-3 leading-tight">
                      {education.degree}
                    </h3>
                    <div className="text-[14px] text-[#A5A9B6] mt-1">{education.specialization}</div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-5 gap-6 pt-6 border-t border-[#1E202B]">
                    <div className="sm:col-span-3">
                      <p className="text-[13px] leading-relaxed text-[#A5A9B6]">{education.description}</p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {education.focus.map((f) => (
                          <span key={f} className="px-2.5 py-1 rounded-full bg-[#101117] border border-[#1E202B] text-[11px] text-[#A5A9B6]">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="sm:col-span-2 space-y-3">
                      <div className="rounded-[14px] bg-[#101117] border border-[#1E202B] p-3">
                        <div className="text-[11px] font-mono tracking-widest uppercase text-[#6F7482] flex items-center gap-1.5">
                          <Calendar className="w-3 h-3" /> Period
                        </div>
                        <div className="text-[13px] text-[#F5F7FA] mt-1 font-medium">{education.period}</div>
                      </div>
                      <div className="rounded-[14px] bg-[#101117] border border-[#1E202B] p-3">
                        <div className="text-[11px] font-mono tracking-widest uppercase text-[#6F7482] flex items-center gap-1.5">
                          <MapPin className="w-3 h-3" /> Location
                        </div>
                        <div className="text-[13px] text-[#F5F7FA] mt-1 font-medium">{education.location}</div>
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
