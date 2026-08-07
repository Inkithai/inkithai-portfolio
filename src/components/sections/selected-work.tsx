"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/content";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

export function SelectedWorkSection() {
  const selected = projects.filter((p) => p.isSelectedWork);

  return (
    <section id="work" className="py-24 lg:py-32 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#1E293B] to-transparent" />
      <div className="container-max section-padding">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="label-mono text-[#D4AF37] mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-[#D4AF37]" />
              Selected Work
            </div>
            <h2 className="heading-section text-[#F8FAFC] max-w-[600px]">
              Two products that show how I
              <span className="text-gradient-blue"> build AI that ships.</span>
            </h2>
          </div>
          <p className="text-[14px] leading-relaxed text-[#94A3B8] max-w-[380px]">
            Production AI systems — voice assistants, document pipelines, and intelligent automation built at WIS.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {selected.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-[24px] overflow-hidden bg-[#0F172A]/60 border border-white/[0.06] hover:border-[#D4AF37]/20 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(16,185,129,0.15)]"
            >
              {/* Media */}
              <div className="relative h-[280px] overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.imageGradient} opacity-90`} />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:28px_28px] opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Mock browser */}
                <div className="absolute inset-5 rounded-[16px] bg-[#0B1120]/85 backdrop-blur border border-white/10 shadow-2xl overflow-hidden flex flex-col">
                  <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="ml-3 text-[11px] font-mono text-white/40">{project.shortTitle.toLowerCase()}.vercel.app</span>
                    <span className="ml-auto px-2 py-0.5 rounded-full bg-white text-[#030712] text-[10px] font-bold">LIVE</span>
                  </div>
                  <div className="flex-1 p-4 flex flex-col gap-3">
                    <div className="h-3 w-2/3 rounded-full bg-white/15" />
                    <div className="h-3 w-1/2 rounded-full bg-white/10" />
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      <div className="h-16 rounded-xl bg-white/10 border border-white/10" />
                      <div className="h-16 rounded-xl bg-white/[0.06] border border-white/5" />
                      <div className="h-16 rounded-xl bg-white/[0.06] border border-white/5" />
                    </div>
                    <div className="mt-auto flex gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-white text-[#030712] text-[10px] font-bold">AI POWERED</span>
                      <span className="px-2.5 py-1 rounded-full bg-white/10 text-white text-[10px] font-mono border border-white/10">{project.technologies[0]}</span>
                    </div>
                  </div>
                </div>

                <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E8C547] text-white text-[11px] font-bold tracking-wide shadow-lg">FEATURED</div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[20px] font-semibold tracking-tight text-[#F8FAFC] leading-tight">{project.shortTitle}</h3>
                  <div className="flex items-center gap-2 shrink-0">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#94A3B8] hover:text-[#F8FAFC] hover:border-white/[0.15] transition-all">
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <Link href="/work" className="w-9 h-9 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E8C547] flex items-center justify-center text-white shadow-lg shadow-[#D4AF37]/20">
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                <p className="text-[14px] leading-relaxed text-[#94A3B8] mt-3">{project.description}</p>

                {project.outcome && (
                  <div className="mt-4 px-4 py-2.5 rounded-[12px] bg-[#D4AF37]/[0.06] border border-[#D4AF37]/10 text-[12px] text-[#F0D77B]">
                    <span className="text-[#64748B] font-mono text-[11px] uppercase tracking-widest mr-2">Outcome</span>
                    {project.outcome}
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-[#94A3B8] text-[12px]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/work" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#F8FAFC] text-[14px] font-medium hover:bg-white/[0.08] hover:border-white/[0.12] transition-all backdrop-blur-xl">
            View all projects
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
