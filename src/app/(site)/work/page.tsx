"use client";

import { useState } from "react";
import { projects, type ProjectCategory } from "@/data/content";
import { ChevronDown, ArrowLeft, ExternalLink, Briefcase, Rocket, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import Link from "next/link";

const categories: ProjectCategory[] = ["All", "Frontend", "Backend", "Full Stack", "AI", "Machine Learning", "Other"];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.categories.includes(activeCategory));
  const isWork = (p: (typeof projects)[number]) => p.isWorkProject || p.workType === "wis-sri-lanka";
  const workProjects = filtered.filter(isWork);
  const liveDemos = filtered.filter((p) => !isWork(p) && p.liveUrl);
  const featured = filtered.filter((p) => !isWork(p) && !p.liveUrl && p.featured);
  const rest = filtered.filter((p) => !isWork(p) && !p.liveUrl && !p.featured);

  return (
    <div className="pt-32 pb-24">
      <div className="container-max section-padding">
        <div className="max-w-[800px] mb-14">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13.5px] text-secondary hover:text-primary mb-7 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to home
          </Link>
          <div className="label-eyebrow mb-5 flex items-center">
            <span className="eyebrow-bar" />
            <span>Work</span>
          </div>
          <h1 className="heading-section max-w-[680px]">
            Complete portfolio of{" "}
            <span className="text-accent text-gradient-blue">products I&apos;ve built.</span>
          </h1>
          <p className="body-large mt-5 max-w-[680px]">
            Client work for Mortgage AI Toolkit (WIS Sri Lanka), open-source builds with
            public code, and live demos you can try. Each entry includes the challenges,
            decisions, and learnings behind it.
          </p>
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

        {/* 1. Work Projects — Mortgage AI Toolkit */}
        {workProjects.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-7">
              <h2 className="text-[15px] font-semibold text-primary flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-accent" />
                Work Projects
              </h2>
              <div className="h-px flex-1 bg-border-subtle" />
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {workProjects.map((project) => {
                const globalIdx = projects.indexOf(project);
                const isExpanded = expanded === globalIdx;
                const coverImage = project.thumbnail || project.screenshots?.[0];
                const hasScreenshots = !!coverImage;
                return (
                  <article key={project.title} className="card card-interactive overflow-hidden h-full group border-accent/20">
                    <div className="relative h-52 overflow-hidden border-b border-border-subtle">
                      <div className="absolute inset-0 bg-bg-elevated" />
                      <div className="absolute inset-0 bg-grid opacity-50" />
                      <div className="absolute top-5 left-5 flex items-center gap-2 z-10">
                        <span className="w-6 h-px bg-accent" />
                        <span className="body-mono uppercase tracking-[0.15em] text-accent">Work Project</span>
                      </div>
                      {hasScreenshots ? (
                        <>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={coverImage}
                            alt={`${project.shortTitle} screenshot`}
                            className="absolute inset-0 z-[1] h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                          />
                          <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/55 via-black/5 to-black/15" />
                        </>
                      ) : (
                        <div className="absolute inset-5 top-14 rounded-[12px] bg-bg border border-border-subtle overflow-hidden flex flex-col group-hover:scale-[1.02] transition-transform duration-500">
                        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border-subtle">
                          <span className="w-2 h-2 rounded-full bg-[#FF5F57]/70" />
                          <span className="w-2 h-2 rounded-full bg-[#FFBD2E]/70" />
                          <span className="w-2 h-2 rounded-full bg-[#28CA42]/70" />
                          <span className="ml-3 body-mono normal-case tracking-normal text-[10.5px]">
                            {project.shortTitle.toLowerCase().replace(/\s+/g, "")}.mortgageaitoolkit.com
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
                      )}
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
                            {project.company && <span className="badge !text-[10px] !py-0">{project.company}</span>}
                          </div>
                        </div>
                        <a href={project.liveUrl || project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-accent text-bg flex items-center justify-center hover:bg-accent/90 transition-all z-20" aria-label="View product page">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                      <div className="mt-3 space-y-1 text-[12px] leading-relaxed">
                        <p className="text-accent font-medium">{project.role}</p>
                        <p className="text-secondary">{project.status}</p>
                      </div>
                      <p className="body-default mt-3 line-clamp-3">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5 mt-4 z-20 relative">
                        {project.technologies.slice(0, 5).map((t) => (
                          <span key={t} className="badge">{t}</span>
                        ))}
                      </div>
                      <button aria-expanded={isExpanded} onClick={() => setExpanded(isExpanded ? null : globalIdx)} className="btn-link mt-5 cursor-pointer z-20 relative inline-flex items-center gap-2">
                        <span className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all ${isExpanded ? "bg-accent border-accent text-bg" : "border-border-subtle text-secondary"}`}>
                          <ChevronDown className={`w-3.5 h-3.5 ${isExpanded ? "rotate-180" : ""}`} />
                        </span>
                        {isExpanded ? "Hide details" : "View details"}
                      </button>
                      {isExpanded && (
                        <div className="pt-5 mt-5 border-t border-border-subtle space-y-5">
                          <p className="body-default">{project.longDescription}</p>
                          {[
                            { label: "My contributions", items: project.challenges },
                            { label: "Platform capabilities", items: project.features ?? [] },
                            { label: "Technology stack", items: project.technologies },
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
                          {project.screenshots && project.screenshots.length > 0 && (
                            <div className="grid grid-cols-2 gap-3">
                              {project.screenshots.map((src: string, idx: number) => (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img key={idx} src={src} alt={`${project.shortTitle} ${idx+1}`} className="w-full h-36 object-cover object-top rounded-[10px] border border-border-subtle hover:opacity-90 transition-opacity" />
                              ))}
                            </div>
                          )}
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

        {/* 2. Live Demos — Open Source with deployed URLs */}
        {liveDemos.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-7">
              <h2 className="text-[15px] font-semibold text-primary flex items-center gap-2">
                <Rocket className="w-4 h-4 text-success" />
                Live Demos
              </h2>
              <div className="h-px flex-1 bg-border-subtle" />
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {liveDemos.map((project) => {
                const globalIdx = projects.indexOf(project);
                const isExpanded = expanded === globalIdx;
                const coverImage = project.thumbnail || project.screenshots?.[0];
                const hasScreenshots = !!coverImage;
                return (
                  <article key={project.title} className="card card-interactive overflow-hidden h-full group border-success/20">
                    <div className="relative h-52 overflow-hidden border-b border-border-subtle">
                      <div className="absolute inset-0 bg-bg-elevated" />
                      <div className="absolute inset-0 bg-grid opacity-50" />
                      <div className="absolute top-5 left-5 flex items-center gap-2 z-10">
                        <span className="w-6 h-px bg-success" />
                        <span className="body-mono uppercase tracking-[0.15em] text-success">Live Demo</span>
                      </div>
                      {hasScreenshots ? (
                        <>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={coverImage}
                            alt={`${project.shortTitle} screenshot`}
                            className="absolute inset-0 z-[1] h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                          />
                          <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/55 via-black/5 to-black/15" />
                        </>
                      ) : (
                        <div className="absolute inset-5 top-14 rounded-[12px] bg-bg border border-border-subtle overflow-hidden flex flex-col group-hover:scale-[1.02] transition-transform duration-500">
                        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border-subtle">
                          <span className="w-2 h-2 rounded-full bg-[#FF5F57]/70" />
                          <span className="w-2 h-2 rounded-full bg-[#FFBD2E]/70" />
                          <span className="w-2 h-2 rounded-full bg-[#28CA42]/70" />
                          <span className="ml-3 body-mono normal-case tracking-normal text-[10.5px] truncate max-w-[200px]">
                            {project.liveUrl?.replace("https://","").replace("http://","")}
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
                      )}
                    </div>
                    <div className="p-6 md:p-7">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-[18px] font-semibold text-primary group-hover:text-accent transition-colors flex items-center gap-2">
                            {project.shortTitle}
                            <ExternalLink className="w-4 h-4 text-success" />
                          </h3>
                          <div className="body-mono normal-case tracking-normal text-[11px] text-muted mt-1 flex items-center gap-2 flex-wrap">
                            <span className="line-clamp-1">{project.title}</span>
                            <a href={project.liveUrl!} target="_blank" rel="noopener noreferrer" className="badge !text-[10px] !py-0 !border-success/30 text-success truncate max-w-[160px]">{project.liveUrl}</a>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 z-20">
                          <a href={project.liveUrl!} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-success/10 border border-success/20 flex items-center justify-center text-success hover:text-bg hover:bg-success hover:border-success transition-all" aria-label="Live demo">
                            <Rocket className="w-4 h-4" />
                          </a>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-border-subtle flex items-center justify-center text-secondary hover:text-primary hover:border-border-strong transition-all" aria-label="GitHub">
                            <GithubIcon className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                      <p className="body-default mt-3 line-clamp-3">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5 mt-4 z-20 relative">
                        {project.technologies.slice(0, 4).map((t) => (
                          <span key={t} className="badge">{t}</span>
                        ))}
                      </div>
                      <button aria-expanded={isExpanded} onClick={() => setExpanded(isExpanded ? null : globalIdx)} className="btn-link mt-5 cursor-pointer z-20 relative inline-flex items-center gap-2">
                        <span className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all ${isExpanded ? "bg-success border-success text-bg" : "border-border-subtle text-secondary"}`}>
                          <ChevronDown className={`w-3.5 h-3.5 ${isExpanded ? "rotate-180" : ""}`} />
                        </span>
                        {isExpanded ? "Hide details" : "View details"}
                      </button>
                      {isExpanded && (
                        <div className="pt-5 mt-5 border-t border-border-subtle space-y-5">
                          <div className="flex flex-wrap gap-2">
                            <a href={project.liveUrl!} target="_blank" rel="noopener noreferrer" className="badge-accent !text-[11px] py-1.5 px-3 flex items-center gap-1.5">
                              <Rocket className="w-3.5 h-3.5" />
                              Live demo
                            </a>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="badge !text-[11px] py-1.5 px-3 flex items-center gap-1.5">
                              <GithubIcon className="w-3.5 h-3.5" />
                              GitHub
                            </a>
                          </div>
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
                                    <span className="text-muted shrink-0 mt-1.5 w-1 h-1 rounded-full bg-success" />
                                    {it}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                          {project.screenshots && project.screenshots.length > 0 && (
                            <div className="grid grid-cols-2 gap-3">
                              {project.screenshots.map((src: string, idx: number) => (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img key={idx} src={src} alt={`${project.shortTitle} ${idx+1}`} className="w-full h-36 object-cover object-top rounded-[10px] border border-border-subtle hover:opacity-90 transition-opacity" />
                              ))}
                            </div>
                          )}
                          {project.outcome && (
                            <div className="px-3.5 py-2.5 rounded-[10px] border-l-2 border-success/60 bg-success/[0.05]">
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

        {/* Open source projects */}
        {featured.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-7">
              <h2 className="text-[15px] font-semibold text-primary flex items-center gap-2">
                <Code2 className="w-4 h-4 text-accent" />
                Open Source Projects
              </h2>
              <div className="h-px flex-1 bg-border-subtle" />
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {featured.map((project) => {
                const globalIdx = projects.indexOf(project);
                const isExpanded = expanded === globalIdx;
                const hasLiveDemo = !!project.liveUrl;
                const coverImage = project.thumbnail || project.screenshots?.[0];
                const hasScreenshots = !!coverImage;
                return (
                  <article key={project.title} className="card card-interactive overflow-hidden h-full group">
                    <div className="relative h-52 overflow-hidden border-b border-border-subtle">
                      <div className="absolute inset-0 bg-bg-elevated" />
                      <div className="absolute inset-0 bg-grid opacity-50" />
                      <div className="absolute top-5 left-5 flex items-center gap-2 z-10">
                        <span className="w-6 h-px bg-accent" />
                        <span className="body-mono uppercase tracking-[0.15em]">{project.categories[0]}</span>
                        {hasLiveDemo && <span className="badge !text-[10px] !py-0.5 !border-success/30 text-success">Live Demo</span>}
                      </div>
                      {hasScreenshots ? (
                        <>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={coverImage}
                            alt={`${project.shortTitle} screenshot`}
                            className="absolute inset-0 z-[1] h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                          />
                          <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/55 via-black/5 to-black/15" />
                        </>
                      ) : (
                        <div className="absolute inset-5 top-14 rounded-[12px] bg-bg border border-border-subtle overflow-hidden flex flex-col group-hover:scale-[1.02] transition-transform duration-500">
                        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border-subtle">
                          <span className="w-2 h-2 rounded-full bg-[#FF5F57]/70" />
                          <span className="w-2 h-2 rounded-full bg-[#FFBD2E]/70" />
                          <span className="w-2 h-2 rounded-full bg-[#28CA42]/70" />
                          <span className="ml-3 body-mono normal-case tracking-normal text-[10.5px]">{project.shortTitle.toLowerCase().replace(/\s+/g, "")}.app</span>
                          {hasLiveDemo && <span className="ml-auto badge !text-[9px] !py-0 border-success/20 text-success">Live</span>}
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
                      )}
                    </div>
                    <div className="p-6 md:p-7">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-[18px] font-semibold text-primary group-hover:text-accent transition-colors">{project.shortTitle}</h3>
                          <div className="body-mono normal-case tracking-normal text-[11px] text-muted mt-1 line-clamp-1">{project.title}</div>
                        </div>
                        <div className="flex items-center gap-1.5 z-20">
                          {hasLiveDemo && (
                            <a href={project.liveUrl!} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-success/10 border border-success/20 flex items-center justify-center text-success hover:text-bg hover:bg-success transition-all" aria-label="Live">
                              <Rocket className="w-4 h-4" />
                            </a>
                          )}
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-border-subtle flex items-center justify-center text-secondary hover:text-primary hover:border-border-strong transition-all" aria-label="GitHub">
                            <GithubIcon className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                      <p className="body-default mt-3 line-clamp-3">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5 mt-4 z-20 relative">
                        {project.technologies.slice(0, 4).map((t) => (
                          <span key={t} className="badge">{t}</span>
                        ))}
                      </div>
                      <button aria-expanded={isExpanded} onClick={() => setExpanded(isExpanded ? null : globalIdx)} className="btn-link mt-5 cursor-pointer z-20 relative inline-flex items-center gap-2">
                        <span className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all ${isExpanded ? "bg-accent border-accent text-bg" : "border-border-subtle text-secondary"}`}>
                          <ChevronDown className={`w-3.5 h-3.5 ${isExpanded ? "rotate-180" : ""}`} />
                        </span>
                        {isExpanded ? "Hide details" : "View details"}
                      </button>
                      {isExpanded && (
                        <div className="pt-5 mt-5 border-t border-border-subtle space-y-5">
                          {hasLiveDemo && (
                            <div className="flex flex-wrap gap-2">
                              <a href={project.liveUrl!} target="_blank" rel="noopener noreferrer" className="badge-accent !text-[11px] py-1.5 px-3 flex items-center gap-1.5 border-success/30">
                                <Rocket className="w-3.5 h-3.5" />
                                Live demo
                              </a>
                            </div>
                          )}
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
                          {project.screenshots && project.screenshots.length > 0 && (
                            <div className="grid grid-cols-2 gap-3">
                              {project.screenshots.map((src: string, idx: number) => (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img key={idx} src={src} alt={`${project.shortTitle} ${idx+1}`} className="w-full h-36 object-cover object-top rounded-[10px] border border-border-subtle hover:opacity-90 transition-opacity" />
                              ))}
                            </div>
                          )}
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

        {/* More projects */}
        {rest.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-7">
              <h2 className="text-[15px] font-semibold text-primary flex items-center gap-2">
                <GithubIcon className="w-4 h-4" />
                More Projects
              </h2>
              <div className="h-px flex-1 bg-border-subtle" />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {rest.map((project) => {
                const coverImage = project.thumbnail || project.screenshots?.[0];
                return (
                  <article key={project.title} className="card card-interactive group overflow-hidden h-full">
                    <div className="relative h-52 overflow-hidden border-b border-border-subtle bg-bg-elevated">
                      {coverImage ? (
                        <>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={coverImage}
                            alt={`${project.shortTitle} screenshot`}
                            className="absolute inset-0 z-[1] h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                          />
                          <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/60 via-black/5 to-black/20" />
                        </>
                      ) : (
                        <>
                          <div className={`absolute inset-0 bg-gradient-to-br ${project.imageGradient}`} />
                          <div className="absolute inset-0 bg-grid opacity-40" />
                          <div className="absolute inset-5 top-14 rounded-[12px] border border-white/10 bg-black/20 p-5 backdrop-blur-sm">
                            <Code2 className="h-6 w-6 text-white/70" />
                            <div className="mt-4 h-2.5 w-2/3 rounded-full bg-white/25" />
                            <div className="mt-2 h-2.5 w-1/2 rounded-full bg-white/15" />
                          </div>
                        </>
                      )}
                      <div className="absolute left-4 top-4 z-10 flex items-center gap-2">
                        <span className="badge border-white/20 bg-black/60 text-white backdrop-blur">
                          {project.categories[0]}
                        </span>
                        {project.liveUrl && <span className="badge !border-success/30 bg-black/60 text-success backdrop-blur">Live</span>}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <h3 className="text-[17px] font-semibold text-primary transition-colors group-hover:text-accent">
                            {project.title}
                          </h3>
                          <p className="mt-2 line-clamp-3 text-[13px] leading-relaxed text-secondary">{project.description}</p>
                        </div>
                        <div className="flex shrink-0 items-center gap-1.5">
                          {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-success/10 border border-success/20 flex items-center justify-center text-success hover:text-bg hover:bg-success transition-all" aria-label={`Open ${project.shortTitle} live demo`}>
                              <Rocket className="w-4 h-4" />
                            </a>
                          )}
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-border-subtle flex items-center justify-center text-secondary hover:text-primary hover:border-border-strong transition-all" aria-label={`Open ${project.shortTitle} on GitHub`}>
                            <GithubIcon className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map((technology) => (
                          <span key={technology} className="badge">{technology}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="py-24 text-center">
            <div className="body-default">No projects in this category. Try another filter.</div>
          </div>
        )}

        <div className="mt-16 pt-8 border-t border-border-subtle">
          <Link href="/" className="text-[13px] text-accent hover:text-primary transition-colors inline-flex items-center gap-1.5">
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
