"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { publication } from "@/data/content";
import { ExternalLink, FileText, ChevronDown } from "lucide-react";

export function ResearchSection() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section id="research" className="py-24 lg:py-32">
      <div className="container-max section-padding">
        <div className="max-w-[1100px]">
          <div className="label-mono text-[#F43F5E] mb-4 flex items-center gap-2">
            <span className="w-6 h-px bg-[#F43F5E]" />
            Research
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <h2 className="heading-section text-[#F8FAFC]">
                IEEE Publication
                <span className="block text-[#94A3B8] text-[0.7em] font-medium tracking-tight mt-2">Peer-reviewed • 2024</span>
              </h2>
            </div>

            <motion.div
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-8"
            >
              <div className="rounded-[24px] bg-[#0F172A]/50 backdrop-blur-xl border border-white/[0.06] overflow-hidden group hover:border-[#F43F5E]/20 transition-all duration-300">
                <div className="p-7 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-[12px] bg-gradient-to-br from-[#F43F5E] to-[#E11D48] flex items-center justify-center shadow-lg shadow-[#F43F5E]/20">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-[11px] font-mono tracking-widest uppercase text-[#94A3B8]">{publication.type}</div>
                        <div className="text-[12px] font-medium text-[#F8FAFC]">{publication.conference}</div>
                      </div>
                    </div>
                    <span className="hidden sm:inline-flex px-2.5 py-1 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#F59E0B] text-[10px] font-bold tracking-widest">
                      PEER REVIEWED
                    </span>
                  </div>

                  <h3 className="mt-5 text-[18px] md:text-[20px] font-semibold tracking-tight leading-snug text-[#F8FAFC]">
                    {publication.title}
                  </h3>

                  <p className="text-[13px] leading-relaxed text-[#94A3B8] mt-3">
                    {publication.description}
                  </p>

                  {/* Expandable details */}
                  <AnimatePresence>
                    {showDetails && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-4">
                          <p className="text-[12px] leading-relaxed text-[#64748B]">
                            {publication.detailedSummary}
                          </p>
                          <div className="flex items-center gap-2 text-[11px] font-mono text-[#64748B]">
                            DOI: {publication.doi}
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {publication.technologies.map((tech) => (
                              <span key={tech} className="px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[10px] text-[#94A3B8]">{tech}</span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-5 flex items-center gap-3">
                    <a
                      href={publication.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold text-white overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#F43F5E] to-[#E11D48]" />
                      <span className="relative flex items-center gap-2">
                        Read on IEEE Xplore
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </span>
                    </a>
                    <button
                      onClick={() => setShowDetails(!showDetails)}
                      className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#64748B] hover:text-[#F43F5E] transition-colors"
                    >
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showDetails ? "rotate-180" : ""}`} />
                      {showDetails ? "Less" : "Details"}
                    </button>
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
