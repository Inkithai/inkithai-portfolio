"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type ProjectCategory } from "@/data/content";
import { ChevronDown, ArrowLeft } from "lucide-react";
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
    <div className="pt-32 pb-24">
      <div className="container-max section-padding">
        <div className="max-w-[760px] mb-14">
          <Link href="/" className="inline-flex items-center gap-2 text-[13.5px] text-secondary hover:text-primary mb-7 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
          <div className="label-eyebrow mb-5 flex items-center">
            <span className="eyebrow-bar" />
            <span>Work · {projects.length} Projects</span>
          </div>
          <h1 className="heading-section max-w-[640px]">
            Complete portfolio of <span className="text-accent">products I&apos;ve shipped.</span>
          </h1>
          <p className="body-large mt-5 max-w-[600px]">
            From AI LMS to email automation, RAG study assistants, and multilingual chatbots.
            Every project includes challenges, decisions, and learnings — not just screenshots.
          </p>
        </div>

        {/* Filters — quiet, single-color active */}
        <div className="flex flex-wrap gap-1.5 mb-14 p-1.5 rounded-full bg-bg-surface border border-border-subtle w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-accent text-bg"
                  : "text-secondary hover:text-primary hover:bg-bg-elevated"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured */}
        {featured.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-7">
              <h2 className="text-[15px] font-semibold text-primary">Featured</h2>
              <span className="badge">{featured.length}</span>
              <div className="h-px flex-1 bg-border-subtle" />
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {featured.map((project, i) => {
                const isExpanded = expanded === i;
                return (
                  <motion.article
                    key={project.title}
                    layout
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="card card-interactive overflow-hidden"
                  >
                    <div className="relative h-52 overflow-hidden border-b border-border-subtle">
                      <div className="absolute inset-0 bg-bg-elevated" />
                      <div className="absolute inset-0 bg-grid opacity-50" />

                      <div className="absolute top-5 left-5 flex items-center gap-2 z-10">
                        <span className="w-6 h-px bg-accent" />
                        <span className="body-mono uppercase tracking-[0.15em]">Featured</span>
                      </div>

                      <div className="absolute inset-5 top-14 rounded-[12px] bg-bg border border-border-subtle overflow-hidden flex flex-col">
                        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border-subtle">
                          <span className="w-2 h-2 rounded-full bg-[#FF5F57]/70" />
                          <span className="w-2 h-2 rounded-full bg-[#FFBD2E]/70" />
                          <span className="w-2 h-2 rounded-full bg-[#28CA42]/70" />
                          <span className="ml-3 body-mono normal-case tracking-normal text-[10.5px]">
                            {project.shortTitle.toLowerCase()}.app
                          </span>
                        </div>
                        <div className="flex-1 p-3 flex flex-col gap-2">
                          <div className="h-2 w-2/3 rounded-full bg-border-strong" />
                          <div className="h-2 w-1/2 rounded-full bg-border-subtle" />
                          <div className="grid grid-cols-3 gap-2 pt-1">
                            <div className="h-9 rounded-[6px] bg-bg-elevated" />
                            <div className="h-9 rounded-[6px] bg-bg-elevated/50" />
                            <div className="h-9 rounded-[6px] bg-bg-elevated/50" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 md:p-7">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-[18px] font-semibold text-primary">{project.shortTitle}</h3>
                          <div className="body-mono normal-case tracking-normal text-[11px] text-muted mt-1">
                            {project.title}
                          </div>
                        </div>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-full border border-border-subtle flex items-center justify-center text-secondary hover:text-primary hover:border-border-strong transition-all"
                          aria-label="View on GitHub"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      </div>

                      <p className="body-default mt-3">{project.description}</p>

                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {project.technologies.slice(0, 4).map((t) => (
                          <span key={t} className="badge">{t}</span>
                        ))}
                      </div>

                      <button
                        onClick={() => setExpanded(isExpanded ? null : i)}
                        className="btn-link mt-5"
                      >
                        <span
                          className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all ${
                            isExpanded
                              ? "bg-accent border-accent text-bg"
                              : "border-border-subtle"
                          }`}
                        >
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
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
                            <div className="pt-5 mt-5 border-t border-border-subtle space-y-5">
                              {[
                                { label: "Challenges", items: project.challenges },
                                { label: "Decisions", items: project.decisions },
                                { label: "Learnings", items: project.learnings },
                              ].map((sec) => (
                                <div key={sec.label}>
                                  <div className="label-eyebrow flex items-center mb-2.5">
                                    <span className="eyebrow-bar" />
                                    <span>{sec.label}</span>
                                  </div>
                                  <ul className="space-y-2">
                                    {sec.items.map((it, idx) => (
                                      <li key={idx} className="text-[13px] leading-relaxed text-secondary flex gap-2.5">
                                        <span className="text-muted shrink-0 mt-1.5 w-1 h-1 rounded-full bg-accent" />
                                        {it}
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
                  </motion.article>
                );
              })}
            </div>
          </div>
        )}

        {/* Rest — compact list */}
        {rest.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-7">
              <h2 className="text-[15px] font-semibold text-primary">More builds</h2>
              <span className="badge">{rest.length}</span>
              <div className="h-px flex-1 bg-border-subtle" />
            </div>
            <div className="card divide-y divide-border-subtle">
              {rest.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                  className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 hover:bg-bg-elevated/40 transition-colors"
                >
                  <div className="flex items-center gap-3 sm:w-[200px] shrink-0">
                    <span className="text-[12px] font-mono text-muted tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="badge">{project.categories[0]}</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-[15px] font-medium text-primary">{project.title}</h3>
                    <p className="text-[13px] text-secondary mt-1 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 max-w-[280px]">
                    {project.technologies.slice(0, 3).map((t) => (
                      <span key={t} className="badge !text-[10.5px]">{t}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="py-24 text-center">
            <div className="body-default">No projects in this category. Try another filter.</div>
          </div>
        )}
      </div>
    </div>
  );
}
