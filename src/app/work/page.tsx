"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type ProjectCategory } from "@/data/content";
import { ChevronDown } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import Link from "next/link";

const categories: ProjectCategory[] = ["All", "Frontend", "Backend", "Full Stack", "AI", "Machine Learning", "Other"];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.categories.includes(activeCategory));
  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <div className="pt-28 pb-20">
      <div className="container-max section-padding">
        <div className="max-w-[800px] mb-10">
          <Link href="/" className="inline-flex items-center gap-2 text-[13px] text-[#6F7482] hover:text-[#F5F7FA] mb-6">
            ← Back to home
          </Link>
          <div className="label-mono text-[#6F7482] mb-3">WORK • {projects.length} Projects</div>
          <h1 className="heading-section text-[#F5F7FA]">Complete portfolio of products I've shipped.</h1>
          <p className="text-[15px] leading-relaxed text-[#A5A9B6] mt-4 max-w-[600px]">
            From AI LMS to email automation, RAG study assistants, and multilingual chatbots. Every project includes challenges, decisions, and learnings — not just screenshots.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10 p-1 rounded-full bg-[#101117] border border-[#1E202B] w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all ${
                activeCategory === cat ? "bg-[#F5F7FA] text-[#08090D]" : "text-[#A5A9B6] hover:text-[#F5F7FA] hover:bg-[#151720]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured */}
        {featured.length > 0 && (
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-[14px] font-semibold tracking-tight text-[#F5F7FA]">Featured</h2>
              <span className="px-2 py-0.5 rounded-full bg-[#151720] border border-[#1E202B] text-[11px] font-mono text-[#A5A9B6]">{featured.length}</span>
              <div className="h-px flex-1 bg-[#101117]" />
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {featured.map((project, i) => {
                const isExpanded = expanded === i;
                return (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ y: 12 }}
                    animate={{ y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="rounded-[20px] bg-[#101117] border border-[#1E202B] overflow-hidden hover:border-[#2A2D3A] transition-colors group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.imageGradient} opacity-80`} />
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
                      <div className="absolute inset-4 rounded-[14px] bg-[#0D0E14]/80 backdrop-blur border border-white/10 p-3 flex flex-col">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-red-500" />
                          <span className="w-2 h-2 rounded-full bg-yellow-500" />
                          <span className="w-2 h-2 rounded-full bg-green-500" />
                          <span className="ml-2 text-[10px] font-mono text-white/30">{project.shortTitle.toLowerCase()}.app</span>
                        </div>
                        <div className="mt-4 space-y-2">
                          <div className="h-2 w-2/3 bg-white/20 rounded-full" />
                          <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                          <div className="grid grid-cols-3 gap-2 pt-2">
                            <div className="h-10 rounded-lg bg-white/10" />
                            <div className="h-10 rounded-lg bg-white/5" />
                            <div className="h-10 rounded-lg bg-white/5" />
                          </div>
                        </div>
                      </div>
                      <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-[#F5F7FA] text-[#08090D] text-[10px] font-bold">FEATURED</span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-[16px] font-semibold text-[#F5F7FA]">{project.title}</h3>
                        <div className="flex gap-1.5 shrink-0">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#151720] border border-[#1E202B] flex items-center justify-center text-[#A5A9B6] hover:text-[#F5F7FA]">
                            <GithubIcon className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                      <p className="text-[13px] leading-relaxed text-[#A5A9B6] mt-2">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {project.technologies.slice(0, 4).map((t) => (
                          <span key={t} className="px-2.5 py-1 rounded-full bg-[#151720] border border-[#1E202B] text-[11px] text-[#A5A9B6]">
                            {t}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => setExpanded(isExpanded ? null : i)}
                        className="mt-5 flex items-center gap-2 text-[13px] font-medium text-[#A5A9B6] hover:text-[#F5F7FA] transition-colors"
                      >
                        <span className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all ${isExpanded ? "bg-[#F5F7FA] text-[#08090D] border-[#F5F7FA] rotate-180" : "bg-[#151720] border-[#1E202B]"}`}>
                          <ChevronDown className="w-4 h-4" />
                        </span>
                        {isExpanded ? "Hide details" : "View build journey"}
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-5 mt-5 border-t border-[#1E202B] space-y-5">
                              {[
                                { label: "Challenges", items: project.challenges },
                                { label: "Decisions", items: project.decisions },
                                { label: "Learnings", items: project.learnings },
                              ].map((sec) => (
                                <div key={sec.label}>
                                  <div className="text-[11px] font-mono tracking-widest uppercase text-[#6F7482]">{sec.label}</div>
                                  <ul className="mt-2 space-y-1.5">
                                    {sec.items.map((it, idx) => (
                                      <li key={idx} className="text-[12px] leading-relaxed text-[#A5A9B6] flex gap-2">
                                        <span className="text-[#6F7482]">—</span> {it}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* Rest */}
        {rest.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-[14px] font-semibold tracking-tight text-[#F5F7FA]">More builds</h2>
              <span className="px-2 py-0.5 rounded-full bg-[#151720] border border-[#1E202B] text-[11px] font-mono text-[#A5A9B6]">{rest.length}</span>
              <div className="h-px flex-1 bg-[#101117]" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {rest.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ y: 10 }}
                  animate={{ y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="rounded-[16px] bg-[#101117] border border-[#1E202B] p-5 hover:border-[#2A2D3A] transition-colors"
                >
                  <div className={`h-1 -mx-5 -mt-5 mb-5 rounded-t-[16px] bg-gradient-to-r ${project.imageGradient}`} />
                  <h3 className="text-[14px] font-semibold text-[#F5F7FA]">{project.title}</h3>
                  <p className="text-[12px] leading-relaxed text-[#A5A9B6] mt-2 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.technologies.slice(0, 3).map((t) => (
                      <span key={t} className="px-2 py-1 rounded-full bg-[#151720] border border-[#1E202B] text-[10px] text-[#A5A9B6]">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <div className="text-[14px] text-[#6F7482]">No projects in this category. Try another filter.</div>
          </div>
        )}
      </div>
    </div>
  );
}
