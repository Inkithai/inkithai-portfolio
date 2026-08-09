"use client";

import { useState } from "react";
import { projects, type ProjectCategory, type ProjectItem } from "@/data/content";
import { ChevronDown, ArrowLeft } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import Link from "next/link";

const categories: ProjectCategory[] = ["All", "Frontend", "Backend", "Full Stack", "AI", "Machine Learning", "Other"];

function ProjectVisual({ project }: { project: ProjectItem }) {
  return (
    <div
      className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.imageGradient}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-bg/30" />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-white/70 mb-1.5">
          {project.categories[0]}
        </span>
        <span className="text-[30px] font-semibold tracking-tight text-white leading-none">
          {project.shortTitle}
        </span>
      </div>
    </div>
  );
}

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.categories.includes(activeCategory));
  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <div className="pt-32 pb-24">
      <div className="container-max section-padding">
        <div className="max-w-[760px] mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[14px] text-secondary hover:text-primary mb-7 transition-colors group min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
            Back to home
          </Link>
          <div className="label-eyebrow mb-5 flex items-center">
            <span className="eyebrow-bar" aria-hidden="true" />
            <span>Work · {projects.length} Projects</span>
          </div>
          <h1 className="heading-section max-w-[640px]">
            Products I&apos;ve shipped, end to end.
          </h1>
          <p className="body-large mt-5 max-w-[600px]">
            From AI learning platforms to email automation, RAG assistants, and
            multilingual chatbots — each with the challenges, decisions, and
            learnings behind it.
          </p>
        </div>

        {/* Category filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-full bg-bg-surface border border-border-subtle w-fit max-w-full">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={isActive}
                  className={`px-4 py-2 rounded-full text-[13.5px] font-medium transition-colors duration-200 cursor-pointer ${
                    isActive ? "bg-accent text-bg font-semibold" : "text-secondary hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured projects */}
        {featured.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-7">
              <h2 className="text-[16px] font-semibold text-primary">Featured</h2>
              <div className="h-px flex-1 bg-border-subtle" aria-hidden="true" />
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {featured.map((project, i) => {
                const isExpanded = expanded === i;
                return (
                  <article key={project.title} className="card overflow-hidden h-full flex flex-col">
                    <ProjectVisual project={project} />

                    <div className="p-6 md:p-7 flex-1 flex flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-[20px] font-semibold tracking-tight text-primary">
                            {project.shortTitle}
                          </h3>
                          <div className="text-[13px] text-muted mt-1">{project.title}</div>
                        </div>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center text-secondary hover:text-primary hover:border-border-strong transition-colors"
                          aria-label={`${project.shortTitle} on GitHub`}
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      </div>

                      <p className="body-small mt-3">{project.description}</p>

                      {project.outcome && (
                        <p className="text-[14px] text-primary/90 mt-3 leading-relaxed">
                          {project.outcome}
                        </p>
                      )}

                      <p className="tech-line mt-4 font-mono text-[12.5px]">
                        {project.technologies.slice(0, 5).join(" · ")}
                      </p>

                      <div className="mt-auto pt-5">
                        <button
                          onClick={() => setExpanded(isExpanded ? null : i)}
                          aria-expanded={isExpanded}
                          className="btn-link cursor-pointer"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                            aria-hidden="true"
                          />
                          {isExpanded ? "Hide build journey" : "View build journey"}
                        </button>

                        {isExpanded && (
                          <div className="pt-5 mt-2 border-t border-border-subtle space-y-5">
                            {[
                              { label: "Challenges", items: project.challenges },
                              { label: "Decisions", items: project.decisions },
                              { label: "Learnings", items: project.learnings },
                            ].map((sec) => (
                              <div key={sec.label}>
                                <h4 className="label-eyebrow mb-3">{sec.label}</h4>
                                <ul className="space-y-2">
                                  {sec.items.map((it, idx) => (
                                    <li
                                      key={idx}
                                      className="text-[14px] leading-relaxed text-secondary flex gap-3"
                                    >
                                      <span className="text-muted shrink-0 mt-[9px] w-1 h-1 rounded-full bg-muted" aria-hidden="true" />
                                      {it}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}

        {/* More builds — compact rows */}
        {rest.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-7">
              <h2 className="text-[16px] font-semibold text-primary">More builds</h2>
              <div className="h-px flex-1 bg-border-subtle" aria-hidden="true" />
            </div>
            <div className="card divide-y divide-border-subtle overflow-hidden">
              {rest.map((project) => (
                <div
                  key={project.title}
                  className="p-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8"
                >
                  <div className="sm:w-[150px] shrink-0">
                    <span className="badge">{project.categories[0]}</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-[16px] font-medium text-primary">
                      {project.title}
                    </h3>
                    <p className="text-[14px] text-secondary mt-1 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <p className="tech-line font-mono text-[12.5px] sm:max-w-[260px] shrink-0">
                    {project.technologies.slice(0, 3).join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="py-24 text-center">
            <p className="body-default">No projects in this category. Try another filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}
