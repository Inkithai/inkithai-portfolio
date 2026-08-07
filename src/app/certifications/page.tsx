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
        <div className="max-w-[800px] mb-10">
          <Link href="/" className="inline-flex items-center gap-2 text-[13px] text-[#6F7482] hover:text-[#F5F7FA] mb-6">
            ← Back to home
          </Link>
          <div className="label-mono text-[#6F7482] mb-3">CERTIFICATIONS • {certifications.length} Items • Continuous Learning</div>
          <h1 className="heading-section text-[#F5F7FA]">Learning that compounds over time.</h1>
          <p className="text-[15px] leading-relaxed text-[#A5A9B6] mt-4 max-w-[600px]">
            Curated collection of certifications, research publication, and learning milestones that reflect production work and continuous development. Filter by category.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10 p-1 rounded-full bg-[#101117] border border-[#1E202B] w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all ${
                active === cat ? "bg-[#F5F7FA] text-[#08090D]" : "text-[#A5A9B6] hover:text-[#F5F7FA] hover:bg-[#151720]"
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
                initial={{ scale: 0.98, y: 10 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.98, y: 10 }}
                transition={{ delay: i * 0.03, duration: 0.3 }}
                className="group rounded-[16px] bg-[#101117] border border-[#1E202B] p-5 hover:border-[#2A2D3A] hover:bg-[#151720] transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="px-2.5 py-1 rounded-full bg-[#151720] border border-[#1E202B] text-[10px] font-mono tracking-widest uppercase text-[#A5A9B6]">
                    {cert.category}
                  </span>
                  <span className="text-[11px] font-mono text-[#6F7482]">{cert.date}</span>
                </div>

                <h3 className="text-[14px] font-semibold tracking-tight text-[#F5F7FA] mt-4 leading-tight group-hover:text-white transition-colors">
                  {cert.name}
                </h3>
                <div className="text-[12px] text-[#6F7482] mt-1">{cert.issuer}</div>
                {cert.description && <div className="text-[12px] text-[#A5A9B6] mt-2 leading-relaxed">{cert.description}</div>}

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {cert.skills.map((s) => (
                    <span key={s} className="px-2 py-1 rounded-full bg-[#08090D] border border-[#1E202B] text-[10px] text-[#A5A9B6]">
                      {s}
                    </span>
                  ))}
                </div>

                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-medium text-[#A5A9B6] hover:text-[#F5F7FA] transition-colors"
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
            <div className="text-[14px] text-[#6F7482]">No certifications in this category.</div>
          </div>
        )}

        <div className="mt-16 rounded-[20px] bg-[#101117] border border-[#1E202B] p-6 md:p-8">
          <h3 className="text-[14px] font-semibold text-[#F5F7FA]">Continuous Development Approach</h3>
          <p className="text-[13px] leading-relaxed text-[#A5A9B6] mt-2 max-w-[700px]">
            This collection represents verified learning through production shipping, research publication (IEEE ICAC 2024), entrepreneurship award (SPARK 101), and platform-based learning. Each item maps to real project work — not just course completion. For recruiters: check project case studies on /work to see applied skills.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link href="/work" className="px-4 py-2 rounded-full bg-[#F5F7FA] text-[#08090D] text-[12px] font-semibold">
              View projects →
            </Link>
            <Link href="/#experience" className="px-4 py-2 rounded-full bg-[#151720] border border-[#1E202B] text-[#A5A9B6] text-[12px] font-medium">
              Experience
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
