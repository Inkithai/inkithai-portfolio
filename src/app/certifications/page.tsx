"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certifications, type CertificationCategory } from "@/data/content";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const categories: CertificationCategory[] = ["All", "Frontend", "Backend", "AI", "Machine Learning", "Cloud", "Tools"];

export default function CertificationsPage() {
  const [active, setActive] = useState<CertificationCategory>("All");

  const filtered = active === "All" ? certifications : certifications.filter((c) => c.category === active);

  return (
    <div className="pt-28 pb-20">
      <div className="container-max section-padding">
        <div className="max-w-[800px] mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-[13px] text-[#64748B] hover:text-[#F8FAFC] mb-6 transition-colors">
            ← Back to home
          </Link>
          <div className="label-mono text-[#34D399] mb-4 flex items-center gap-2">
            <span className="w-6 h-px bg-[#34D399]" />
            CERTIFICATIONS • {certifications.length} Items • Continuous Learning
          </div>
          <h1 className="heading-section text-[#F8FAFC]">Learning that compounds over time.</h1>
          <p className="text-[15px] leading-relaxed text-[#94A3B8] mt-4 max-w-[600px]">
            Curated collection of certifications, research publication, and learning milestones that reflect production work and continuous development. Filter by category.
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-12 p-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] w-fit backdrop-blur-xl">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200 ${
                active === cat
                  ? "bg-gradient-to-r from-[#10B981] to-[#34D399] text-white shadow-lg shadow-[#10B981]/20"
                  : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/[0.06]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((cert, i) => (
              <motion.div
                key={`${cert.name}-${i}`}
                layout
                initial={{ scale: 0.98, y: 10, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.98, y: 10, opacity: 0 }}
                transition={{ delay: i * 0.03, duration: 0.3 }}
                className="group rounded-[16px] bg-[#0F172A]/50 backdrop-blur-xl border border-white/[0.06] p-5 hover:border-[#34D399]/20 hover:bg-[#0F172A]/80 transition-all duration-300 hover:shadow-[0_8px_30px_-8px_rgba(52,211,153,0.1)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-[10px] font-mono tracking-widest uppercase text-[#94A3B8]">
                    {cert.category}
                  </span>
                  <span className="text-[11px] font-mono text-[#64748B]">{cert.date}</span>
                </div>

                <h3 className="text-[14px] font-semibold tracking-tight text-[#F8FAFC] mt-4 leading-tight group-hover:text-white transition-colors">
                  {cert.name}
                </h3>
                <div className="text-[12px] text-[#64748B] mt-1">{cert.issuer}</div>
                {cert.description && <div className="text-[12px] text-[#94A3B8] mt-2 leading-relaxed">{cert.description}</div>}

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {cert.skills.map((s) => (
                    <span key={s} className="px-2 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[10px] text-[#94A3B8]">
                      {s}
                    </span>
                  ))}
                </div>

                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-medium text-[#94A3B8] hover:text-[#34D399] transition-colors"
                  >
                    View credential <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <div className="text-[14px] text-[#64748B]">No certifications in this category.</div>
          </div>
        )}

        <div className="mt-16 rounded-[20px] bg-[#0F172A]/50 backdrop-blur-xl border border-white/[0.06] p-6 md:p-8">
          <h3 className="text-[14px] font-semibold text-[#F8FAFC]">Continuous Development Approach</h3>
          <p className="text-[13px] leading-relaxed text-[#94A3B8] mt-2 max-w-[700px]">
            This collection represents verified learning through production shipping, research publication (IEEE ICAC 2024), entrepreneurship award (SPARK 101), and platform-based learning. Each item maps to real project work — not just course completion. For recruiters: check project case studies on /work to see applied skills.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link href="/work" className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#10B981] to-[#34D399] text-white text-[12px] font-semibold shadow-lg shadow-[#10B981]/20">
              View projects →
            </Link>
            <Link href="/#experience" className="px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#94A3B8] text-[12px] font-medium hover:bg-white/[0.08] transition-all">
              Experience
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
