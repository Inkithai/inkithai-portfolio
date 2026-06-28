"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { experience } from "@/data/content";
import { BadgeCheck, Calendar, MapPin, Briefcase } from "lucide-react";
import { useState } from "react";

export function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-24 section-padding bg-zinc-950/50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12">
            <span className="text-sm font-mono text-zinc-500 uppercase tracking-widest">Experience</span>
            <h2 className="heading-md mt-2 text-zinc-100">Professional Journey</h2>
            <p className="text-zinc-400 mt-2 max-w-xl">
              A timeline of my engineering roles, highlighting the products I've built and the impact I've delivered.
            </p>
          </div>

          <div className="relative space-y-8">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-zinc-800" aria-hidden="true" />

            {experience.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                className="relative pl-12 md:pl-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-6 top-1.5 w-3 h-3 rounded-full bg-zinc-700 border-2 border-zinc-950 ring-2 ring-zinc-800" />

                {/* Card */}
                <div className="group border border-zinc-800 rounded-xl bg-zinc-900/30 hover:border-zinc-700 hover:bg-zinc-900/50 transition-all duration-300 overflow-hidden">
                  {/* Header */}
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                    className="w-full text-left p-5 md:p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl"
                    aria-expanded={expandedIndex === i}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-zinc-100">{exp.role}</h3>
                        <p className="text-zinc-400 font-medium">{exp.company}</p>
                      </div>
                      <span
                        className={cn(
                          "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium",
                          exp.type === "Internship"
                            ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                            : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        )}
                      >
                        <BadgeCheck className="w-3 h-3" />
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      {exp.location && (
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      )}
                    </div>
                  </button>

                  {/* Expanded content */}
                  {expandedIndex === i && (
                    <motion.div
                      className="border-t border-zinc-800/50 p-5 md:p-6 space-y-6"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {exp.achievements.map((achievement, j) => (
                        <div key={j} className="space-y-2">
                          <h4 className="text-zinc-200 font-medium">{achievement.title}</h4>
                          <p className="text-sm text-zinc-400 leading-relaxed">{achievement.description}</p>
                          <p className="text-sm text-zinc-500 italic">
                            <span className="text-zinc-400 font-medium">Impact: </span>
                            {achievement.impact}
                          </p>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {achievement.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-400 text-xs font-mono"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
