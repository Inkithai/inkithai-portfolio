"use client";

import { useState } from "react";
import { projects, type ProjectCategory } from "@/data/content";
import { ChevronDown, ArrowLeft, ExternalLink, Briefcase } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import Link from "next/link";

const categories: ProjectCategory[] = ["All", "Frontend", "Backend", "Full Stack", "AI", "Machine Learning", "Other"];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.categories.includes(activeCategory));
  const workProjects = filtered.filter((p) => p.isWorkProject || p.workType === "company.so");
  const featured = filtered.filter((p) => p.featured && !p.isWorkProject);
  const openSourceFeatured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <div className="pt-32 pb-24">
      <div className="container-max section-padding">
        <div className="max-w-[760px] mb-14">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13.5px] text-secondary hover:text-primary mb-7 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to home
          </Link>
          <div className="label-eyebrow mb-5 flex items-center">
            <span className="eyebrow-bar" />
            <span>Work · {projects.length} Projects · {projects.filter(p=>p.isWorkProject).length} Work + {projects.filter(p=>!p.isWorkProject).length} Open Source</span>
          </div>
          <h1 className="heading-section max-w-[640px]">
            Complete portfolio of{" "}
            <span className="text-accent text-gradient-blue">products I&apos;ve shipped.</span>
          </h1>
          <p className="body-large mt-5 max-w-[640px]">
            Work projects from <span className="text-primary font-medium">Mortgage AI Toolkit (company.so)</span> — Draftlee AI Email Assistant and EduFlow CPD Tracking — FCA-compliant, production, no public code.
            Plus open-source SaaS: Oyster360 multi-tenant farm SaaS, YGC medical safety 589 tests, BookWise double-entry accounting, medimind anonymous medical RAG, RouteIQ realtime transit. Every project includes challenges, decisions, learnings.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="badge-accent !text-[11px] py-1 px-3 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              Work Projects · Mortgage AI Toolkit · company.so
            </span>
            <a href="https://www.mortgageaitoolkit.com/products/draftlee" target="_blank" rel="noopener noreferrer" className="badge hover:border-accent/40 hover:text-accent transition-colors !text-[11px] py-1 px-3 flex items-center gap-1.5">
              <ExternalLink className="w-3.5 h-3.5" />
              Draftlee Live
            </a>
            <a href="https://www.mortgageaitoolkit.com/products/eduflow" target="_blank" rel="noopener noreferrer" className="badge hover:border-accent/40 hover:text-accent transition-colors !text-[11px] py-1 px-3 flex items-center gap-1.5">
              <ExternalLink className="w-3.5 h-3.5" />
              EduFlow Live
            </a>
          </div>
        </div>

        {/* Category filter */}
        <div className="mb-14">
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-full bg-bg-surface border border-border-subtle w-fit">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-[13px] font-medium transition-colors duration-200 cursor-pointer ${
                    isActive ? "bg-accent text-bg font-semibold" : "text-secondary hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Work Projects — Mortgage AI Toolkit */}
        {workProjects.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-7">
              <h2 className="text-[15px] font-semibold text-primary flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-accent" />
                Work Projects — Mortgage AI Toolkit (company.so)
              </h2>
              <span className="badge-accent">{workProjects.length}</span>
              <div className="h-px flex-1 bg-border-subtle" />
              <span className="body-mono text-[10.5px] text-muted hidden sm:block">No public code — work project · FCA compliant</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {workProjects.map((project, i) => {
                const globalIdx = projects.indexOf(project);
                const isExpanded = expanded === globalIdx;
                return (
                  <article key={project.title} className="card card-interactive overflow-hidden h-full group border-accent/20">
                    <div className="relative h-52 overflow-hidden border-b border-border-subtle">
                      <div className="absolute inset-0 bg-bg-elevated" />
                      <div className="absolute inset-0 bg-grid opacity-50" />

                      <div className="absolute top-5 left-5 flex items-center gap-2 z-10">
                        <span className="w-6 h-px bg-accent" />
                        <span className="body-mono uppercase tracking-[0.15em] text-accent">Work Project</span>
                        <span className="badge-accent !text-[10px] !py-0.5">Live</span>
                      </div>
                      <div className="absolute top-5 right-5 z-10 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                        <span className="body-mono text-[10.5px] text-success">FCA</span>
                      </div>

                      <div className="absolute inset-5 top-14 rounded-[12px] bg-bg border border-border-subtle overflow-hidden flex flex-col group-hover:scale-[1.02] transition-transform duration-500">
                        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border-subtle">
                          <span className="w-2 h-2 rounded-full bg-[#FF5F57]/70" />
                          <span className="w-2 h-2 rounded-full bg-[#FFBD2E]/70" />
                          <span className="w-2 h-2 rounded-full bg-[#28CA42]/70" />
                          <span className="ml-3 body-mono normal-case tracking-normal text-[10.5px]">
                            {project.shortTitle.toLowerCase().replace(/\s+/g, "")}.mortgageaitoolkit.com
                          </span>
                          <span className="ml-auto badge-accent !text-[9px] !py-0">{project.company?.split(" ")[0]}</span>
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
                          <h3 className="text-[18px] font-semibold text-primary group-hover:text-accent transition-colors flex items-center gap-2">
                            {project.shortTitle}
                            <ExternalLink className="w-4 h-4 text-muted" />
                          </h3>
                          <div className="body-mono normal-case tracking-normal text-[11px] text-muted mt-1 flex items-center gap-2 flex-wrap">
                            <span>{project.title}</span>
                            <span className="badge-accent !text-[10px] !py-0">company.so</span>
                          </div>
                        </div>
                        <a
                          href={project.liveUrl || project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent hover:text-bg hover:bg-accent hover:border-accent transition-all z-20"
                          aria-label="View live product"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>

                      <p className="body-default mt-3 line-clamp-3">{project.description}</p>

                      <div className="flex flex-wrap gap-1.5 mt-4 z-20 relative">
                        {project.technologies.slice(0, 5).map((t) => (
                          <span key={t} className="badge">
                            {t}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => setExpanded(isExpanded ? null : globalIdx)}
                        className="btn-link mt-5 cursor-pointer z-20 relative inline-flex items-center gap-2"
                      >
                        <span
                          className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all ${
                            isExpanded
                              ? "bg-accent border-accent text-bg"
                              : "border-border-subtle text-secondary"
                          }`}
                        >
                          <ChevronDown
                            className={`w-3.5 h-3.5 ${isExpanded ? "rotate-180" : ""}`}
                          />
                        </span>
                        {isExpanded ? "Hide details" : "View build journey (Work Project)"}
                      </button>

                      {isExpanded && (
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
                                  <li
                                    key={idx}
                                    className="text-[13px] leading-relaxed text-secondary flex gap-2.5"
                                  >
                                    <span className="text-muted shrink-0 mt-1.5 w-1 h-1 rounded-full bg-accent" />
                                    {it}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                          {project.outcome && (
                            <div className="px-3.5 py-2.5 rounded-[10px] border-l-2 border-accent/60 bg-accent/[0.03]">
                              <span className="body-mono normal-case tracking-normal text-[10.5px] uppercase text-muted mr-2">Outcome</span>
                              <span className="text-[13px] text-secondary">{project.outcome}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}

        {/* Featured open-source */}
        {featured.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-7">
              <h2 className="text-[15px] font-semibold text-primary">Featured Open Source · S/A Tier</h2>
              <span className="badge">{featured.length}</span>
              <div className="h-px flex-1 bg-border-subtle" />
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {featured.map((project) => {
                const globalIdx = projects.indexOf(project);
                const isExpanded = expanded === globalIdx;
                return (
                  <article key={project.title} className="card card-interactive overflow-hidden h-full group">
                    <div className="relative h-52 overflow-hidden border-b border-border-subtle">
                      <div className="absolute inset-0 bg-bg-elevated" />
                      <div className="absolute inset-0 bg-grid opacity-50" />

                      <div className="absolute top-5 left-5 flex items-center gap-2 z-10">
                        <span className="w-6 h-px bg-accent" />
                        <span className="body-mono uppercase tracking-[0.15em]">Featured</span>
                        {project.title.includes("YGC") && <span className="badge-accent !text-[10px] !py-0.5">S-Tier · 589 tests</span>}
                        {project.title.includes("Oyster") && <span className="badge-accent !text-[10px] !py-0.5">S-Tier · SaaS</span>}
                      </div>

                      <div className="absolute inset-5 top-14 rounded-[12px] bg-bg border border-border-subtle overflow-hidden flex flex-col group-hover:scale-[1.02] transition-transform duration-500">
                        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border-subtle">
                          <span className="w-2 h-2 rounded-full bg-[#FF5F57]/70" />
                          <span className="w-2 h-2 rounded-full bg-[#FFBD2E]/70" />
                          <span className="w-2 h-2 rounded-full bg-[#28CA42]/70" />
                          <span className="ml-3 body-mono normal-case tracking-normal text-[10.5px]">
                            {project.shortTitle.toLowerCase().replace(/\s+/g, "")}.app
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
                          <h3 className="text-[18px] font-semibold text-primary group-hover:text-accent transition-colors">
                            {project.shortTitle}
                          </h3>
                          <div className="body-mono normal-case tracking-normal text-[11px] text-muted mt-1 line-clamp-1">
                            {project.title}
                          </div>
                        </div>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-full border border-border-subtle flex items-center justify-center text-secondary hover:text-primary hover:border-border-strong transition-all z-20"
                          aria-label="View on GitHub"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      </div>

                      <p className="body-default mt-3 line-clamp-3">{project.description}</p>

                      <div className="flex flex-wrap gap-1.5 mt-4 z-20 relative">
                        {project.technologies.slice(0, 4).map((t) => (
                          <span key={t} className="badge">
                            {t}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => setExpanded(isExpanded ? null : globalIdx)}
                        className="btn-link mt-5 cursor-pointer z-20 relative inline-flex items-center gap-2"
                      >
                        <span
                          className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all ${
                            isExpanded
                              ? "bg-accent border-accent text-bg"
                              : "border-border-subtle text-secondary"
                          }`}
                        >
                          <ChevronDown
                            className={`w-3.5 h-3.5 ${isExpanded ? "rotate-180" : ""}`}
                          />
                        </span>
                        {isExpanded ? "Hide details" : "View build journey"}
                      </button>

                      {isExpanded && (
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
                                  <li
                                    key={idx}
                                    className="text-[13px] leading-relaxed text-secondary flex gap-2.5"
                                  >
                                    <span className="text-muted shrink-0 mt-1.5 w-1 h-1 rounded-full bg-accent" />
                                    {it}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                          {project.outcome && (
                            <div className="px-3.5 py-2.5 rounded-[10px] border-l-2 border-accent/60 bg-accent/[0.03]">
                              <span className="body-mono normal-case tracking-normal text-[10.5px] uppercase text-muted mr-2">Outcome</span>
                              <span className="text-[13px] text-secondary">{project.outcome}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}

        {/* More builds */}
        {rest.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-7">
              <h2 className="text-[15px] font-semibold text-primary">More builds — B/C tier hobby & supporting</h2>
              <span className="badge">{rest.length}</span>
              <div className="h-px flex-1 bg-border-subtle" />
            </div>
            <div className="card divide-y divide-border-subtle overflow-hidden">
              {rest.map((project, i) => (
                <div
                  key={project.title}
                  className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 hover:bg-bg-elevated/60 transition-colors group cursor-default"
                >
                  <div className="flex items-center gap-3 sm:w-[240px] shrink-0">
                    <span className="text-[12px] font-mono text-muted tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="badge">{project.categories[0]}</span>
                    {project.isWorkProject && <span className="badge-accent !text-[10px]">Work</span>}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-[15px] font-medium text-primary group-hover:text-accent transition-colors flex items-center gap-2">
                      {project.title}
                      {project.isWorkProject ? <ExternalLink className="w-3.5 h-3.5 text-muted" /> : null}
                    </h3>
                    <p className="text-[13px] text-secondary mt-1 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex flex-wrap gap-1.5 max-w-[200px]">
                      {project.technologies.slice(0, 3).map((t) => (
                        <span key={t} className="badge !text-[10.5px]">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.liveUrl || project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full border border-border-subtle flex items-center justify-center text-secondary hover:text-primary transition-all shrink-0"
                    >
                      {project.isWorkProject ? <ExternalLink className="w-3.5 h-3.5" /> : <GithubIcon className="w-3.5 h-3.5" />}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="py-24 text-center">
            <div className="body-default">No projects in this category. Try another filter.</div>
          </div>
        )}

        <div className="mt-16 pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="body-mono text-[11px] text-muted">
            Portfolio audit — see <span className="text-primary">PORTFOLIO_AUDIT.md</span> for full technical ranking S/A/B/C/D/F tiers, 40+ repos inspected, scoring methodology.
          </div>
          <Link href="/" className="text-[13px] text-accent hover:text-primary transition-colors inline-flex items-center gap-1.5">
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to selected work
          </Link>
        </div>
      </div>
    </div>
  );
}
