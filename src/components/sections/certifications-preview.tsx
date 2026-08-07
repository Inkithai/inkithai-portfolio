"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/content";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CertificationsPreviewSection() {
  const featured = certifications.filter((c) => c.featured).slice(0, 6);

  return (
    <section id="certifications-preview" className="py-20 lg:py-28">
      <div className="container-max section-padding">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="label-mono text-[#6F7482] mb-3">Certifications & Continuous Learning</div>
            <h2 className="heading-section text-[#F5F7FA] max-w-[520px]">Learning that compounds.</h2>
          </div>
          <Link
            href="/certifications"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-[#A5A9B6] hover:text-[#F5F7FA] transition-colors"
          >
            View all certifications <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((cert, i) => (
            <motion.div
              key={`${cert.name}-${i}`}
              initial={{ y: 12 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-[16px] bg-[#101117] border border-[#1E202B] p-5 hover:border-[#2A2D3A] hover:bg-[#151720] transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="px-2 py-1 rounded-full bg-[#151720] border border-[#1E202B] text-[10px] font-mono tracking-widest uppercase text-[#A5A9B6]">
                  {cert.category}
                </span>
                <span className="text-[11px] font-mono text-[#6F7482]">{cert.date}</span>
              </div>
              <h3 className="text-[14px] font-semibold tracking-tight text-[#F5F7FA] mt-4 leading-tight">{cert.name}</h3>
              <div className="text-[12px] text-[#6F7482] mt-1">{cert.issuer}</div>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {cert.skills.slice(0, 3).map((s) => (
                  <span key={s} className="px-2 py-1 rounded-full bg-[#08090D] border border-[#1E202B] text-[10px] text-[#A5A9B6]">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/certifications"
            className="px-6 py-3 rounded-full bg-[#101117] border border-[#1E202B] text-[#F5F7FA] text-[14px] font-medium hover:bg-[#151720] transition-colors inline-flex items-center gap-2"
          >
            View all certifications <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
