"use client";

import { motion, AnimatePresence } from "framer-motion";
import { skills } from "@/data/content";
import { useState } from "react";
import { Code2, Server, Brain, Cloud, Database, Languages, Wrench, Sparkles, Zap, Star } from "lucide-react";

const skillCategories = [
  { data: skills.frontend, icon: Code2, gradient: "from-violet-600 to-indigo-600", accent: "violet" },
  { data: skills.backend, icon: Server, gradient: "from-blue-600 to-cyan-600", accent: "blue" },
  { data: skills.ai, icon: Brain, gradient: "from-fuchsia-600 to-pink-600", accent: "fuchsia" },
  { data: skills.cloud, icon: Cloud, gradient: "from-emerald-600 to-teal-600", accent: "emerald" },
  { data: skills.databases, icon: Database, gradient: "from-amber-500 to-orange-600", accent: "amber" },
  { data: skills.languages, icon: Languages, gradient: "from-red-500 to-pink-600", accent: "red" },
  { data: skills.tools, icon: Wrench, gradient: "from-zinc-600 to-zinc-800", accent: "zinc" },
];

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const active = skillCategories[selectedCategory];

  return (
    <section id="skills" className="py-20 lg:py-28 section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-zinc-900/20 pointer-events-none" />
      <div className="container-max relative">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono tracking-widest uppercase mb-4">
              <Zap className="w-3 h-3" />
              Stack & Tools
            </div>
            <h2 className="heading-md text-white">
              Crafted for
              <span className="block text-zinc-500">speed, scale & intelligence</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm text-zinc-500 max-w-md leading-relaxed"
          >
            A deliberately chosen toolkit — modern frameworks, AI platforms, and infrastructure that lets me ship from prototype to production without friction.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Category selector - vertical on desktop */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {skillCategories.map((cat, i) => {
                const Icon = cat.icon;
                const isActive = selectedCategory === i;
                return (
                  <motion.button
                    key={cat.data.category}
                    onClick={() => setSelectedCategory(i)}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className={`relative text-left p-4 rounded-2xl border transition-all duration-300 overflow-hidden group ${isActive ? "bg-white border-white text-zinc-900 shadow-xl shadow-white/10 scale-[1.02]" : "bg-zinc-900 border-white/[0.06] text-white hover:border-white/10 hover:bg-zinc-800"}`}
                  >
                    {!isActive && <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity`} />}
                    <div className="flex items-center gap-3 relative">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${isActive ? "bg-zinc-900 text-white" : `bg-gradient-to-br ${cat.gradient} text-white shadow-lg`}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className={`text-sm font-semibold leading-none ${isActive ? "text-zinc-900" : "text-white"}`}>{cat.data.category}</div>
                        <div className={`text-xs mt-1 ${isActive ? "text-zinc-600" : "text-zinc-500"}`}>{cat.data.items.length} tools • Click to explore</div>
                      </div>
                      <div className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all ${isActive ? "bg-zinc-900 border-zinc-900 text-white" : "bg-zinc-800 border-white/10 text-zinc-500 group-hover:bg-zinc-700 group-hover:text-white"}`}>
                        <Star className={`w-3.5 h-3.5 ${isActive ? "fill-white" : ""}`} />
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Skills display */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-[24px] bg-zinc-900 border border-white/[0.08] overflow-hidden"
              >
                {/* Header */}
                <div className={`h-28 relative overflow-hidden bg-gradient-to-br ${active.gradient} p-6 flex flex-col justify-end`}>
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30" />
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl" />
                  <div className="relative flex items-end justify-between">
                    <div>
                      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur border border-white/20 text-white text-xs font-bold tracking-wide">
                        <Sparkles className="w-3 h-3" />
                        {active.data.category.toUpperCase()}
                      </div>
                      <h3 className="text-white font-display font-bold text-xl mt-2">{active.data.category}</h3>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-950/40 backdrop-blur border border-white/20 text-white text-xs font-mono">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      {active.data.items.length} mastered
                    </div>
                  </div>
                </div>

                {/* Grid */}
                <div className="p-5 sm:p-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {active.data.items.map((skill, i) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9, y: 8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: i * 0.03, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="group relative rounded-2xl bg-zinc-950 border border-white/[0.06] p-4 hover:border-white/15 hover:bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                      >
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${active.gradient} opacity-0 group-hover:opacity-[0.08] transition-opacity`} />
                        <div className="relative flex flex-col gap-2">
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${active.gradient} flex items-center justify-center text-white text-xs font-bold shadow`}>
                            {skill.slice(0, 2).toUpperCase()}
                          </div>
                          <span className="text-sm font-medium text-white leading-tight">{skill}</span>
                          <span className="text-[11px] font-mono tracking-wide text-zinc-600 uppercase flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-emerald-500" />
                            Production ready
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/[0.06] text-xs text-zinc-600 font-mono">
                    <span>Tap any skill to see projects using it →</span>
                    <a href="#projects" className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-zinc-900 font-semibold hover:bg-zinc-100 transition-colors">
                      View projects <span>→</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom marquee-ish tech cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 rounded-2xl bg-zinc-900/50 border border-white/[0.06] p-4 flex flex-wrap gap-2 justify-center"
        >
          {["React", "Next.js", "Node.js", "OpenAI", "Gemini", "RAG", "PostgreSQL", "Docker", "AWS", "TypeScript", "Tailwind", "Framer Motion"].map((t) => (
            <span key={t} className="px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.06] text-zinc-300 text-xs font-medium hover:bg-white hover:text-zinc-900 hover:scale-105 transition-all cursor-default">
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
