"use client";

import { motion } from "framer-motion";
import { about } from "@/data/content";
import { Code2, Brain, Rocket, Cloud, Database, Users, Sparkles, ArrowUpRight, Zap } from "lucide-react";

const iconMap: Record<string, typeof Code2> = {
  code: Code2,
  brain: Brain,
  rocket: Rocket,
  cloud: Cloud,
  database: Database,
  users: Users,
};

const gradients = [
  "from-violet-600 to-indigo-600",
  "from-blue-600 to-cyan-500",
  "from-fuchsia-600 to-pink-600",
  "from-cyan-600 to-teal-500",
  "from-amber-500 to-orange-600",
  "from-emerald-600 to-teal-600",
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 section-padding relative overflow-hidden">
      {/* subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.03] to-transparent pointer-events-none" />

      <div className="container-max relative">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-mono tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              About Me
            </div>
            <h2 className="heading-md text-white max-w-2xl">
              Product-minded engineer
              <span className="block text-zinc-500">who ships AI that people actually use.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="lg:text-right"
          >
            <p className="text-zinc-500 max-w-md lg:ml-auto text-sm leading-relaxed">
              From voice-enabled LMS to email automation — I combine full-stack craft with LLM reasoning to turn complex ideas into delightful products.
            </p>
            <a href="#projects" className="inline-flex items-center gap-1.5 text-sm font-medium text-white mt-3 group">
              Explore my work
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left: Story card */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-full rounded-[24px] bg-zinc-900 border border-white/[0.08] overflow-hidden p-6 sm:p-8">
              {/* glow */}
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-zinc-500 mb-4">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  The journey
                </div>

                <h3 className="text-[22px] font-display font-bold tracking-tight text-white leading-tight mb-4">
                  {about.headline}
                </h3>

                <div className="space-y-4 text-[15px] leading-relaxed text-zinc-400">
                  {about.summary.split("\n\n").map((paragraph, i) => (
                    <p key={i} className={i === 0 ? "text-zinc-300" : ""}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Quote / highlight bar */}
                <div className="mt-8 flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">AI-assisted, product-driven</div>
                    <div className="text-zinc-500 text-xs">Rapid prototyping with Cursor, shipping weekly iterations.</div>
                  </div>
                  <div className="ml-auto hidden sm:block text-right">
                    <div className="text-emerald-400 font-mono text-xs font-bold">● OPEN TO WORK</div>
                    <div className="text-zinc-600 text-[11px]">Sri Lanka · Remote</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Bento highlights */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 auto-rows-fr">
            {about.highlights.map((highlight, i) => {
              const Icon = iconMap[highlight.icon] ?? Code2;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative rounded-2xl bg-zinc-900 border border-white/[0.06] p-[1px] overflow-hidden card-hover"
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 from-white/[0.06] to-transparent pointer-events-none" />
                  <div className="relative h-full rounded-[15px] bg-zinc-900 p-5 flex flex-col">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center shadow-lg mb-3`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-sm leading-relaxed text-zinc-300 flex-1">{highlight.text}</p>
                    <div className="mt-3 flex items-center gap-2 text-[11px] font-mono tracking-wide text-zinc-600 uppercase">
                      <span className="w-6 h-px bg-zinc-700 group-hover:bg-zinc-600 transition-colors" />
                      0{i + 1} · Expertise
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats bar */}
        <motion.div
          className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {[
            { value: "2+", label: "Years building", sub: "production apps" },
            { value: "15+", label: "Technologies", sub: "across the stack" },
            { value: "6", label: "Major products", sub: "shipped & live" },
            { value: "1", label: "IEEE Paper", sub: "ICAC 2024" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-zinc-900 border border-white/[0.06] p-5 flex flex-col items-center text-center">
              <div className="text-3xl font-display font-bold text-white">{stat.value}</div>
              <div className="text-sm font-medium text-zinc-300 mt-1">{stat.label}</div>
              <div className="text-xs text-zinc-600">{stat.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
