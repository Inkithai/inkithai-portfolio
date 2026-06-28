"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { about } from "@/data/content";
import { Code2, Brain, Rocket, Cloud, Database, Users } from "lucide-react";

const iconMap: Record<string, typeof Code2> = {
  code: Code2,
  brain: Brain,
  rocket: Rocket,
  cloud: Cloud,
  database: Database,
  users: Users,
};

export function AboutSection() {
  return (
    <section id="about" className="py-24 section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="mb-12">
            <span className="text-sm font-mono text-zinc-500 uppercase tracking-widest">About</span>
            <h2 className="heading-md mt-2 text-zinc-100">{about.headline}</h2>
          </div>

          {/* Summary */}
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3 space-y-6">
              {about.summary.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-body text-zinc-400 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Highlights */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {about.highlights.map((highlight, i) => {
                  const Icon = iconMap[highlight.icon] ?? Code2;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className={cn(
                        "flex items-start gap-3 p-4 rounded-lg border border-zinc-800 bg-zinc-900/50",
                        "transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900"
                      )}
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-zinc-500" />
                      </div>
                      <p className="text-sm text-zinc-400 leading-relaxed">{highlight.text}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
