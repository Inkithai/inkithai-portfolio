"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/content";
import { useState } from "react";
import { cn } from "@/lib/utils";

const skillCategories = [
  skills.frontend,
  skills.backend,
  skills.ai,
  skills.cloud,
  skills.databases,
  skills.languages,
  skills.tools,
];

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <section id="skills" className="py-24 section-padding bg-zinc-950/50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12">
            <span className="text-sm font-mono text-zinc-500 uppercase tracking-widest">Skills</span>
            <h2 className="heading-md mt-2 text-zinc-100">Technologies & Tools</h2>
            <p className="text-zinc-400 mt-2 max-w-xl">
              My technical toolkit across the full stack, from frontend interfaces to cloud infrastructure.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {skillCategories.map((category, i) => (
              <button
                key={category.category}
                onClick={() => setSelectedCategory(i)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  selectedCategory === i
                    ? "bg-zinc-100 text-zinc-900"
                    : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-zinc-200"
                )}
              >
                {category.category}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
            key={selectedCategory}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {skillCategories[selectedCategory]?.items.map((skill, i) => (
              <motion.div
                key={skill}
                className={cn(
                  "flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-zinc-800 bg-zinc-900/30",
                  "transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900/50 cursor-default"
                )}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.03, duration: 0.2 }}
              >
                <span className="text-sm text-zinc-300 font-medium">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
