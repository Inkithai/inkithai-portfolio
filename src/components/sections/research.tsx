"use client";

import { motion } from "framer-motion";
import { publication } from "@/data/content";
import { BookOpen, ExternalLink, FileText } from "lucide-react";

export function ResearchSection() {
  return (
    <section id="research" className="py-24 lg:py-32">
      <div className="container-max section-padding">
        <div className="max-w-[1100px]">
          <div className="label-mono text-[#F43F5E] mb-4 flex items-center gap-2">
            <span className="w-6 h-px bg-[#F43F5E]" />
            Research
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Editorial header */}
            <div className="lg:col-span-4">
              <h2 className="heading-section text-[#F8FAFC]">
                Publication
                <span className="block text-[#94A3B8] text-[0.7em] font-medium tracking-tight mt-2">Peer-reviewed research</span>
              </h2>
              <div className="mt-6 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-[#94A3B8]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" /> IEEE ICAC 2024
                </div>
                <div className="text-[13px] leading-relaxed text-[#64748B]">
                  {publication.researchArea} • Published in IEEE Xplore
                </div>
              </div>
            </div>

            {/* Paper card */}
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-8"
            >
              <div className="rounded-[24px] bg-[#0F172A]/50 backdrop-blur-xl border border-white/[0.06] overflow-hidden group hover:border-[#F43F5E]/20 transition-all duration-300 hover:shadow-[0_8px_30px_-8px_rgba(244,63,94,0.1)]">
                <div className="p-7 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-[12px] bg-gradient-to-br from-[#F43F5E] to-[#E11D48] flex items-center justify-center shadow-lg shadow-[#F43F5E]/20">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-[11px] font-mono tracking-widest uppercase text-[#94A3B8]">{publication.type}</div>
                        <div className="text-[13px] font-medium text-[#F8FAFC]">{publication.conference}</div>
                      </div>
                    </div>
                    <span className="hidden sm:inline-flex px-2.5 py-1 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#F59E0B] text-[10px] font-bold tracking-widest">
                      PEER REVIEWED
                    </span>
                  </div>

                  <h3 className="mt-6 text-[20px] md:text-[22px] font-semibold tracking-tight leading-tight text-[#F8FAFC]">
                    {publication.title}
                  </h3>

                  <div className="mt-4 flex items-center gap-2 text-[12px] font-mono text-[#64748B]">
                    <BookOpen className="w-3.5 h-3.5" /> {publication.publisher} • {publication.year} • DOI: {publication.doi}
                  </div>

                  {/* Authors */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {publication.authors.map((author) => (
                      <span key={author} className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-[11px] text-[#94A3B8]">
                        {author}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 pl-4 border-l-2 border-[#1E293B] group-hover:border-[#F43F5E]/30 transition-colors">
                    <p className="text-[14px] leading-relaxed text-[#94A3B8]">{publication.description}</p>
                    <p className="text-[13px] leading-relaxed text-[#64748B] mt-3">{publication.detailedSummary}</p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {publication.technologies.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[11px] text-[#94A3B8]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center gap-3">
                    <a
                      href={publication.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-semibold text-white overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#F43F5E] to-[#E11D48]" />
                      <span className="relative flex items-center gap-2">
                        Read on IEEE Xplore
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </span>
                    </a>
                    <span className="text-[11px] font-mono text-[#64748B] hidden sm:inline">
                      Available via institutional access
                    </span>
                  </div>
                </div>

                {/* footer meta */}
                <div className="px-7 md:px-8 py-4 bg-white/[0.02] border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#64748B]">
                  <span>Research • Educational Technology & Well-being Analytics</span>
                  <span className="hidden sm:inline">Published 2024</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
