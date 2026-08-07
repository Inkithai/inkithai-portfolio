"use client";

import { motion, AnimatePresence } from "framer-motion";
import { experience } from "@/data/content";
import { Calendar, MapPin, Briefcase, Sparkles, ChevronDown, ExternalLink, Layers } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const companyColors: Record<string, string> = {
  "WIS": "from-violet-600 to-indigo-600",
  "XYGen.ai": "from-blue-600 to-cyan-600",
};

export function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-20 lg:py-28 section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-zinc-900/30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

      <div className="container-max relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-mono tracking-widest uppercase mb-4">
              <Briefcase className="w-3 h-3" />
              Experience
            </div>
            <h2 className="heading-md text-white">Where I&apos;ve made impact</h2>
            <p className="text-zinc-500 mt-2 max-w-xl text-sm leading-relaxed">
              Two intense years shipping AI platforms, automation tools, and full-stack systems in agile, high-velocity teams.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:flex items-center gap-2 text-xs font-mono text-zinc-600"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Click any role to explore details
          </motion.div>
        </div>

        <div className="relative">
          {/* Timeline spine - desktop */}
          <div className="hidden lg:block absolute left-[220px] top-6 bottom-6 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent" />

          <div className="space-y-6">
            {experience.map((exp, i) => {
              const isExpanded = expandedIndex === i;
              const isXYGenJr = exp.role.includes("Junior") && exp.company === "XYGen.ai";
              // hide duplicate entry visually? We'll keep but mark as promotion
              return (
                <motion.div
                  key={`${exp.company}-${exp.role}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative grid lg:grid-cols-[200px_1fr] gap-4 lg:gap-8 group"
                >
                  {/* Left meta */}
                  <div className="hidden lg:block pt-5">
                    <div className="sticky top-24 space-y-3">
                      <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r shadow-lg", companyColors[exp.company] || "from-zinc-700 to-zinc-800")}>
                        <Layers className="w-3 h-3" />
                        {exp.company}
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
                          <Calendar className="w-3 h-3" /> {exp.period}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
                          <MapPin className="w-3 h-3" /> {exp.location}
                        </div>
                      </div>
                      <div className={cn("inline-flex px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide border", exp.type === "Internship" ? "bg-blue-500/10 text-blue-400 border-blue-500/20" : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20")}>
                        {exp.type.toUpperCase()}
                      </div>
                    </div>
                  </div>

                  {/* Connector dot */}
                  <div className="hidden lg:block absolute left-[214px] top-7 w-3 h-3 rounded-full bg-zinc-950 border-2 border-white/20 group-hover:border-violet-500/50 group-hover:bg-violet-500 transition-colors shadow-[0_0_20px_rgba(139,92,246,0.3)] z-10" />

                  {/* Card */}
                  <div className={cn("relative rounded-[20px] border overflow-hidden transition-all duration-500", isExpanded ? "bg-zinc-900 border-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]" : "bg-zinc-900/60 border-white/[0.06] hover:border-white/10 hover:bg-zinc-900")}>
                    {/* Top accent */}
                    <div className={cn("absolute top-0 left-0 right-0 h-px bg-gradient-to-r opacity-60", companyColors[exp.company] || "from-zinc-700 to-zinc-800")} />

                    <button
                      onClick={() => setExpandedIndex(isExpanded ? null : i)}
                      className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4"
                      aria-expanded={isExpanded}
                    >
                      <div className="min-w-0 flex-1">
                        {/* Mobile meta */}
                        <div className="flex flex-wrap items-center gap-2 mb-3 lg:hidden">
                          <span className={cn("px-2.5 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r", companyColors[exp.company] || "from-zinc-700 to-zinc-800")}>{exp.company}</span>
                          <span className={cn("px-2 py-1 rounded-full text-[11px] font-semibold border", exp.type === "Internship" ? "bg-blue-500/10 text-blue-400 border-blue-500/20" : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20")}>{exp.type}</span>
                          <span className="text-xs text-zinc-500 font-mono ml-auto flex items-center gap-1"><Calendar className="w-3 h-3" />{exp.period}</span>
                        </div>

                        <h3 className="text-[17px] sm:text-lg font-display font-bold text-white leading-tight flex items-center gap-2">
                          {exp.role}
                          {i === 0 && <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/20 text-amber-300 text-[11px] font-bold tracking-wide"><Sparkles className="w-3 h-3" /> CURRENT</span>}
                        </h3>
                        <p className="text-sm text-zinc-400 mt-1 line-clamp-2 lg:line-clamp-none">{exp.achievements[0]?.title} • {exp.achievements[0]?.description.slice(0, 90)}...</p>

                        <div className="hidden sm:flex items-center gap-3 mt-3">
                          <span className="text-xs font-mono text-zinc-500 flex items-center gap-1.5"><MapPin className="w-3 h-3" />{exp.location}</span>
                          <span className="w-1 h-1 rounded-full bg-zinc-700" />
                          <span className="text-xs text-zinc-500">{exp.achievements.length} key contributions</span>
                        </div>
                      </div>

                      <div className={cn("shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all mt-1", isExpanded ? "bg-white text-zinc-900 border-white rotate-180" : "bg-zinc-800 text-zinc-400 border-white/10 group-hover:bg-zinc-700 group-hover:text-white")}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-6 pb-6 space-y-5 border-t border-white/[0.06] pt-6">
                            {exp.achievements.map((achievement, j) => (
                              <div key={j} className="group/item relative pl-4 border-l-2 border-white/[0.06] hover:border-violet-500/30 transition-colors">
                                <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-zinc-700 group-hover/item:bg-violet-500 transition-colors" />
                                <h4 className="text-white font-semibold text-[14px] flex items-center gap-2">
                                  {achievement.title}
                                  <ExternalLink className="w-3 h-3 text-zinc-600 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                </h4>
                                <p className="text-sm text-zinc-400 leading-relaxed mt-1">{achievement.description}</p>
                                <div className="mt-3 p-3 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/10 flex gap-2">
                                  <span className="text-emerald-400 mt-0.5">↳</span>
                                  <p className="text-xs text-zinc-400 leading-relaxed">
                                    <span className="text-emerald-300 font-semibold">Impact: </span>
                                    {achievement.impact}
                                  </p>
                                </div>
                                <div className="flex flex-wrap gap-1.5 mt-3">
                                  {achievement.technologies.map((tech) => (
                                    <span key={tech} className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.06] text-zinc-300 text-xs font-medium hover:bg-white/10 transition-colors">
                                      {tech}
                                    </span>
                                  ))}
                                </div>
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
      </div>
    </section>
  );
}
