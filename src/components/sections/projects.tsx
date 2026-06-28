"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { projects } from "@/data/content";
import { ExternalLink, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

export function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);
  const visibleOtherProjects = showAll ? otherProjects : otherProjects.slice(0, 2);

  return (
    <section id="projects" className="py-24 section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12">
            <span className="text-sm font-mono text-zinc-500 uppercase tracking-widest">Projects</span>
            <h2 className="heading-md mt-2 text-zinc-100">Selected Work</h2>
            <p className="text-zinc-400 mt-2 max-w-xl">
              A curated collection of projects that showcase my engineering skills, problem-solving abilities, and product thinking.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                className="group relative border border-zinc-800 rounded-xl bg-zinc-900/30 overflow-hidden hover:border-zinc-700 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                {/* Screenshot Placeholder */}
                <div className="aspect-video bg-zinc-800/50 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-zinc-700/50 flex items-center justify-center mx-auto mb-3">
                        <ArrowRight className="w-5 h-5 text-zinc-500" />
                      </div>
                      <p className="text-xs text-zinc-500 font-mono">Screenshot</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-medium">
                    Featured
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-zinc-50 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-md text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 transition-all"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-md text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 transition-all"
                          aria-label={`View ${project.title} live demo`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-zinc-400 leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-400 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Details */}
                  <div className="pt-2 border-t border-zinc-800/50">
                    <button
                      onClick={() => setExpandedProject(expandedProject === i ? null : i)}
                      className="flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                      aria-expanded={expandedProject === i}
                    >
                      {expandedProject === i ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                      {expandedProject === i ? "Hide Details" : "Show Details"}
                    </button>

                    <AnimatePresence>
                      {expandedProject === i && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pt-4 space-y-4"
                        >
                          <div>
                            <h4 className="text-sm font-medium text-zinc-300 mb-2">Key Challenges</h4>
                            <ul className="space-y-1">
                              {project.challenges.map((challenge, j) => (
                                <li key={j} className="text-xs text-zinc-500 flex items-start gap-2">
                                  <span className="text-blue-400 mt-0.5">•</span>
                                  {challenge}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-sm font-medium text-zinc-300 mb-2">Engineering Decisions</h4>
                            <ul className="space-y-1">
                              {project.decisions.map((decision, j) => (
                                <li key={j} className="text-xs text-zinc-500 flex items-start gap-2">
                                  <span className="text-violet-400 mt-0.5">•</span>
                                  {decision}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-sm font-medium text-zinc-300 mb-2">What I Learned</h4>
                            <ul className="space-y-1">
                              {project.learnings.map((learning, j) => (
                                <li key={j} className="text-xs text-zinc-500 flex items-start gap-2">
                                  <span className="text-emerald-400 mt-0.5">•</span>
                                  {learning}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-zinc-100">Other Projects</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {visibleOtherProjects.map((project, i) => (
                  <motion.div
                    key={project.title}
                    className="group border border-zinc-800 rounded-xl bg-zinc-900/30 overflow-hidden hover:border-zinc-700 transition-all duration-300 p-5 space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="text-base font-medium text-zinc-100 group-hover:text-zinc-50 transition-colors">
                        {project.title}
                      </h4>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 rounded-md text-zinc-600 hover:text-zinc-400 hover:bg-zinc-800 transition-all"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 rounded-md text-zinc-600 hover:text-zinc-400 hover:bg-zinc-800 transition-all"
                            aria-label={`View ${project.title} live demo`}
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-400 text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md bg-zinc-800/50 text-zinc-500 text-xs font-mono">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {!showAll && otherProjects.length > 2 && (
                <div className="flex justify-center pt-4">
                  <button
                    onClick={() => setShowAll(true)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-700 text-zinc-400 hover:text-zinc-200 hover:border-zinc-600 transition-all text-sm font-medium"
                  >
                    View All Projects
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
