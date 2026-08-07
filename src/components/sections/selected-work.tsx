"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/content";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

export function SelectedWorkSection() {
  const selected = projects.filter((p) => p.isSelectedWork);

  return (
    <section id="work" className="py-20 lg:py-28 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#1E202B] to-transparent" />
      <div className="container-max section-padding">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="label-mono text-[#6F7482] mb-3">Selected Work</div>
            <h2 className="heading-section text-[#F5F7FA] max-w-[600px]">
              Two products that show how I
              <span className="text-[#A5A9B6]"> build AI that ships.</span>
            </h2>
          </div>
          <p className="text-[14px] leading-relaxed text-[#A5A9B6] max-w-[380px]">
            Featured case studies from WIS — real production systems with voice AI, document pipelines, and intelligent automation. Full portfolio lives on /work.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {selected.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-[24px] overflow-hidden bg-[#101117] border border-[#1E202B] hover:border-[#2A2D3A] transition-all duration-500 hover:-translate-y-1"
            >
              {/* Media */}
              <div className="relative h-[280px] overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.imageGradient} opacity-90`} />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:28px_28px] opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Mock browser */}
                <div className="absolute inset-5 rounded-[16px] bg-[#0D0E14]/85 backdrop-blur border border-white/10 shadow-2xl overflow-hidden flex flex-col">
                  <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="ml-3 text-[11px] font-mono text-white/40">{project.shortTitle.toLowerCase()}.vercel.app</span>
                    <span className="ml-auto px-2 py-0.5 rounded-full bg-white text-[#08090D] text-[10px] font-bold">LIVE</span>
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
                      <span className="px-2.5 py-1 rounded-full bg-white text-[#08090D] text-[10px] font-bold">AI POWERED</span>
                      <span className="px-2.5 py-1 rounded-full bg-white/10 text-white text-[10px] font-mono border border-white/10">{project.technologies[0]}</span>
                    </div>
                  </div>
                </div>

                <div className="absolute top-5 left-5 px-3 py-1 rounded-full bg-[#F5F7FA] text-[#08090D] text-[11px] font-bold tracking-wide">FEATURED</div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[20px] font-semibold tracking-tight text-[#F5F7FA] leading-tight">{project.shortTitle}</h3>
                  <div className="flex items-center gap-2 shrink-0">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#151720] border border-[#1E202B] flex items-center justify-center text-[#A5A9B6] hover:text-[#F5F7FA] transition-colors">
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <Link href="/work" className="w-8 h-8 rounded-full bg-[#F5F7FA] flex items-center justify-center text-[#08090D]">
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                <p className="text-[14px] leading-relaxed text-[#A5A9B6] mt-3">{project.description}</p>

                {project.outcome && (
                  <div className="mt-4 px-3 py-2 rounded-[12px] bg-[#151720] border border-[#1E202B] text-[12px] text-[#A78BFA]">
                    <span className="text-[#6F7482] font-mono text-[11px] uppercase tracking-widest mr-2">Outcome</span>
                    {project.outcome}
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-full bg-[#151720] border border-[#1E202B] text-[#A5A9B6] text-[12px]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/work" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#101117] border border-[#1E202B] text-[#F5F7FA] text-[14px] font-medium hover:bg-[#151720] hover:border-[#2A2D3A] transition-colors">
            View all projects
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
