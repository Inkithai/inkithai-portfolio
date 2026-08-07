"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/content";
import { ExternalLink, ChevronDown, Sparkles, Layers, Eye } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

const categoryStyles: Record<string, { gradient: string; accent: string }> = {
  "EduFlow - WIS": { gradient: "from-violet-600 via-indigo-600 to-blue-600", accent: "text-violet-400" },
  "Drafty.AI - WIS": { gradient: "from-blue-600 via-cyan-600 to-teal-600", accent: "text-blue-400" },
  "CRM System": { gradient: "from-emerald-600 via-teal-600 to-cyan-600", accent: "text-emerald-400" },
  "StudyPal": { gradient: "from-fuchsia-600 via-purple-600 to-indigo-600", accent: "text-fuchsia-400" },
  "Sri Lankan SMART-GPT": { gradient: "from-orange-500 via-pink-600 to-violet-600", accent: "text-orange-400" },
  "Legal Docs Summarization": { gradient: "from-amber-600 via-orange-600 to-red-600", accent: "text-amber-400" },
};

export function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState<"all" | "featured" | "ai" >("all");

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const filteredFeatured = featuredProjects;
  const filteredOther = otherProjects;
  const visibleOtherProjects = showAll ? filteredOther : filteredOther.slice(0, 3);

  return (
    <section id="projects" className="py-20 lg:py-28 section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.02] to-transparent pointer-events-none" />

      <div className="container-max relative">
        {/* Header */}
        <div className="flex flex-col gap-8 mb-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-300 text-xs font-mono tracking-widest uppercase mb-4">
                <Layers className="w-3 h-3" />
                Selected Work
              </div>
              <h2 className="heading-md text-white">
                Ideas turned into
                <span className="block text-gradient-accent">products people love</span>
              </h2>
              <p className="text-zinc-500 mt-3 max-w-xl text-sm leading-relaxed">
                From AI LMS serving thousands of learners to RAG study assistants — each project blends clean engineering with intelligent UX.
              </p>
            </motion.div>

            {/* Filter pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 p-1 rounded-full bg-zinc-900 border border-white/[0.06] w-fit"
            >
              {[
                { id: "all", label: "All" },
                { id: "featured", label: "Featured" },
                { id: "ai", label: "AI Focus" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id as any)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${filter === tab.id ? "bg-white text-zinc-900 shadow" : "text-zinc-400 hover:text-white"}`}
                >
                  {tab.label}
                </button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Featured - Bento grid */}
        <div className="grid lg:grid-cols-2 gap-5 lg:gap-6 mb-10">
          {filteredFeatured.map((project, i) => {
            const style = categoryStyles[project.title] || { gradient: "from-zinc-700 to-zinc-800", accent: "text-zinc-400" };
            const isExpanded = expandedProject === i;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col rounded-[24px] bg-zinc-900 border border-white/[0.07] overflow-hidden hover:border-white/[0.12] transition-all duration-500 hover:shadow-[0_25px_60px_-20px_rgba(0,0,0,0.6)] hover:-translate-y-1"
              >
                {/* Media header */}
                <div className="relative h-52 sm:h-56 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-90`} />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.15),transparent_60%)]" />
                  {/* Grid */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />
                  {/* Glow orb */}
                  <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/20 rounded-full blur-3xl" />

                  {/* Browser mock */}
                  <div className="absolute inset-4 sm:inset-5 rounded-2xl bg-zinc-950/90 backdrop-blur border border-white/10 shadow-2xl overflow-hidden flex flex-col">
                    <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-white/10 bg-white/[0.03]">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                      <span className="ml-3 text-[11px] font-mono text-zinc-500 truncate">{project.title.toLowerCase().replace(/\s+/g, "-")}.vercel.app</span>
                      <span className="ml-auto hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-bold">LIVE</span>
                    </div>
                    <div className="flex-1 p-4 flex flex-col gap-2">
                      <div className="h-3 w-3/4 rounded-full bg-white/10 animate-pulse" />
                      <div className="h-3 w-1/2 rounded-full bg-white/5" />
                      <div className="grid grid-cols-3 gap-2 mt-2">
                        <div className="h-14 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10" />
                        <div className="h-14 rounded-xl bg-white/5 border border-white/5" />
                        <div className="h-14 rounded-xl bg-white/5 border border-white/5" />
                      </div>
                      <div className="mt-auto flex gap-2">
                        <span className="px-2 py-1 rounded-full bg-white text-zinc-900 text-[10px] font-bold">✦ AI Powered</span>
                        <span className="px-2 py-1 rounded-full bg-white/10 text-white text-[10px] font-mono border border-white/10">{project.technologies[0]}</span>
                      </div>
                    </div>
                  </div>

                  <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-white text-zinc-900 text-xs font-bold shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Featured
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg font-display font-bold text-white leading-tight group-hover:text-zinc-100 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/[0.06] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-white text-zinc-900 flex items-center justify-center hover:bg-zinc-100 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : (
                        <span className="w-8 h-8 rounded-full bg-zinc-800 border border-white/5 flex items-center justify-center text-zinc-600">
                          <Eye className="w-4 h-4" />
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-zinc-400 leading-relaxed flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-full bg-zinc-800 border border-white/[0.06] text-zinc-300 text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/[0.06]">
                    <button
                      onClick={() => setExpandedProject(isExpanded ? null : i)}
                      className="group/btn flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                      aria-expanded={isExpanded}
                    >
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all ${isExpanded ? "bg-white text-zinc-900 border-white rotate-180" : "bg-zinc-800 text-zinc-400 border-white/10 group-hover/btn:bg-zinc-700 group-hover/btn:text-white"}`}>
                        <ChevronDown className="w-4 h-4" />
                      </span>
                      {isExpanded ? "Hide journey" : "View build journey"}
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-5 grid gap-5">
                            {[
                              { title: "Key Challenges", items: project.challenges, dot: "bg-blue-400" },
                              { title: "Engineering Decisions", items: project.decisions, dot: "bg-violet-400" },
                              { title: "What I Learned", items: project.learnings, dot: "bg-emerald-400" },
                            ].map((section) => (
                              <div key={section.title}>
                                <h4 className="text-xs font-mono tracking-widest uppercase text-zinc-500 mb-2 flex items-center gap-2">
                                  <span className={`w-1.5 h-1.5 rounded-full ${section.dot}`} />
                                  {section.title}
                                </h4>
                                <ul className="space-y-1.5">
                                  {section.items.map((item, j) => (
                                    <li key={j} className="text-xs leading-relaxed text-zinc-400 flex gap-2">
                                      <span className="text-zinc-600 mt-0.5">—</span>
                                      <span>{item}</span>
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
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Other Projects */}
        {filteredOther.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-display font-bold text-lg flex items-center gap-2">
                More builds
                <span className="px-2 py-0.5 rounded-full bg-zinc-800 border border-white/5 text-zinc-400 text-xs font-mono">{filteredOther.length}</span>
              </h3>
              {!showAll && filteredOther.length > 3 && (
                <button
                  onClick={() => setShowAll(true)}
                  className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-900 border border-white/10 text-white text-sm font-medium hover:bg-zinc-800 transition-colors"
                >
                  View all <ChevronDown className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {visibleOtherProjects.map((project, i) => {
                const style = categoryStyles[project.title] || { gradient: "from-zinc-700 to-zinc-800", accent: "text-zinc-400" };
                return (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    className="group relative rounded-2xl bg-zinc-900 border border-white/[0.06] overflow-hidden hover:border-white/10 hover:-translate-y-1 transition-all duration-300 p-5 flex flex-col"
                  >
                    <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${style.gradient} opacity-60`} />
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h4 className="text-[15px] font-semibold text-white leading-tight pr-2">{project.title}</h4>
                      <div className="flex gap-1 shrink-0">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-white/[0.06] flex items-center justify-center text-zinc-500 hover:text-white transition-colors">
                          <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-white text-zinc-900 flex items-center justify-center">
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-zinc-500 leading-relaxed line-clamp-3 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-1 rounded-full bg-zinc-800 text-zinc-400 text-xs font-medium border border-white/5">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 rounded-full bg-white text-zinc-900 text-xs font-bold">+{project.technologies.length - 3}</span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {!showAll && filteredOther.length > 3 && (
              <div className="flex justify-center pt-2 sm:hidden">
                <button onClick={() => setShowAll(true)} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-zinc-900 font-semibold text-sm">
                  View All Projects <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
