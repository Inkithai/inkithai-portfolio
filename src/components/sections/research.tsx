"use client";

import { motion } from "framer-motion";
import { publication } from "@/data/content";
import { BookOpen, ExternalLink, FileText } from "lucide-react";

export function ResearchSection() {
  return (
    <section id="research" className="py-20 lg:py-28">
      <div className="container-max section-padding">
        <div className="max-w-[1100px]">
          <div className="label-mono text-[#6F7482] mb-3">Research</div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Editorial header */}
            <div className="lg:col-span-4">
              <h2 className="heading-section text-[#F5F7FA]">
                Publication
                <span className="block text-[#A5A9B6] text-[0.7em] font-medium tracking-tight mt-2">Peer-reviewed research</span>
              </h2>
              <div className="mt-6 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101117] border border-[#1E202B] text-[11px] font-mono text-[#A5A9B6]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24]" /> IEEE ICAC 2024
                </div>
                <div className="text-[13px] leading-relaxed text-[#6F7482]">
                  {publication.researchArea} • Published in IEEE Xplore
                </div>
              </div>
            </div>

            {/* Paper card - editorial style */}
            <motion.div
              initial={{ y: 16 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8"
            >
              <div className="rounded-[24px] bg-[#101117] border border-[#1E202B] overflow-hidden group hover:border-[#2A2D3A] transition-colors">
                <div className="p-7 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-[12px] bg-[#F5F7FA] text-[#08090D] flex items-center justify-center">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-mono tracking-widest uppercase text-[#A5A9B6]">{publication.type}</div>
                        <div className="text-[13px] font-medium text-[#F5F7FA]">{publication.conference}</div>
                      </div>
                    </div>
                    <span className="hidden sm:inline-flex px-2.5 py-1 rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/20 text-[#FBBF24] text-[10px] font-bold tracking-widest">
                      PEER REVIEWED
                    </span>
                  </div>

                  <h3 className="mt-6 text-[20px] md:text-[22px] font-semibold tracking-tight leading-tight text-[#F5F7FA]">
                    {publication.title}
                  </h3>

                  <div className="mt-4 flex items-center gap-2 text-[12px] font-mono text-[#6F7482]">
                    <BookOpen className="w-3.5 h-3.5" /> {publication.publisher} • {publication.year} • DOI: {publication.doi}
                  </div>

                  {/* Authors */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {publication.authors.map((author) => (
                      <span key={author} className="px-2.5 py-1 rounded-full bg-[#151720] border border-[#1E202B] text-[11px] text-[#A5A9B6]">
                        {author}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 pl-4 border-l-2 border-[#1E202B] group-hover:border-[#8B5CF6]/30 transition-colors">
                    <p className="text-[14px] leading-relaxed text-[#A5A9B6]">{publication.description}</p>
                    <p className="text-[13px] leading-relaxed text-[#6F7482] mt-3">{publication.detailedSummary}</p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {publication.technologies.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-full bg-[#08090D] border border-[#1E202B] text-[11px] text-[#A5A9B6]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center gap-3">
                    <a
                      href={publication.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F5F7FA] text-[#08090D] text-[13px] font-semibold hover:bg-white transition-colors"
                    >
                      Read on IEEE Xplore
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <span className="text-[11px] font-mono text-[#6F7482] hidden sm:inline">
                      Available via institutional access
                    </span>
                  </div>
                </div>

                {/* footer meta like publication */}
                <div className="px-7 md:px-8 py-4 bg-[#0D0E14] border-t border-[#1E202B] flex items-center justify-between text-[11px] font-mono text-[#6F7482]">
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
