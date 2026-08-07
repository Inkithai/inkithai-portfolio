"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/content";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CertificationsPreviewSection() {
  const featured = certifications.filter((c) => c.featured).slice(0, 6);

  return (
    <section id="certifications-preview" className="py-24 lg:py-32">
      <div className="container-max section-padding">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="label-mono text-[#34D399] mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-[#34D399]" />
              Certifications & Continuous Learning
            </div>
            <h2 className="heading-section text-[#F8FAFC] max-w-[520px]">Learning that compounds.</h2>
          </div>
          <Link
            href="/certifications"
            className="group inline-flex items-center gap-2 text-[13px] font-medium text-[#94A3B8] hover:text-[#34D399] transition-colors"
          >
            View all certifications <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((cert, i) => (
            <motion.div
              key={`${cert.name}-${i}`}
              initial={{ y: 12, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-[16px] bg-[#0F172A]/50 backdrop-blur-xl border border-white/[0.06] p-5 hover:border-[#34D399]/20 hover:bg-[#0F172A]/80 transition-all duration-300 hover:shadow-[0_8px_30px_-8px_rgba(52,211,153,0.1)]"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-[10px] font-mono tracking-widest uppercase text-[#94A3B8]">
                  {cert.category}
                </span>
                <span className="text-[11px] font-mono text-[#64748B]">{cert.date}</span>
              </div>
              <h3 className="text-[14px] font-semibold tracking-tight text-[#F8FAFC] mt-4 leading-tight">{cert.name}</h3>
              <div className="text-[12px] text-[#64748B] mt-1">{cert.issuer}</div>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {cert.skills.slice(0, 3).map((s) => (
                  <span key={s} className="px-2 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[10px] text-[#94A3B8]">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/certifications"
            className="group px-7 py-3.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#F8FAFC] text-[14px] font-medium hover:bg-white/[0.08] hover:border-white/[0.12] transition-all inline-flex items-center gap-2 backdrop-blur-xl"
          >
            View all certifications <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
