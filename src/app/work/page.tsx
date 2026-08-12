"use client";

import { useState } from "react";
import { projects, type ProjectCategory } from "@/data/content";
import { ChevronDown, ArrowLeft, ExternalLink, Briefcase, Rocket, Code2, Image as ImageIcon } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import Link from "next/link";

const categories: ProjectCategory[] = ["All", "Frontend", "Backend", "Full Stack", "AI", "Machine Learning", "Other"];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.categories.includes(activeCategory));
  const workProjects = filtered.filter((p) => p.isWorkProject || p.workType === "wis-sri-lanka");
  const liveDemos = filtered.filter((p) => p.liveUrl && !p.isWorkProject);
  const featured = filtered.filter((p) => p.featured && !p.isWorkProject);
  const rest = filtered.filter((p) => !p.featured);

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
            <span>Work · {projects.length} Projects · {projects.filter(p=>p.isWorkProject).length} Work · {projects.filter(p=>p.liveUrl && !p.isWorkProject).length} Live Demos · {projects.filter(p=>!p.liveUrl && !p.isWorkProject).length} Code Only</span>
          </div>
          <h1 className="heading-section max-w-[680px]">
            Complete portfolio of{" "}
            <span className="text-accent text-gradient-blue">products I&apos;ve shipped.</span>
          </h1>
          <p className="body-large mt-5 max-w-[680px]">
            <span className="text-primary font-medium">2 Work Projects</span> from Mortgage AI Toolkit (WIS Sri Lanka) — Draftlee & EduFlow — FCA-compliant, live, no public code.
            <span className="text-primary font-medium"> {liveDemos.length} Live Demos</span> with deployed URLs from GitHub website field — recruiter can click and test immediately.
            <span className="text-primary font-medium"> {projects.filter(p=>p.featured).length} Featured</span> S/A Tier engineering — multi-tenant, Stripe, RAG, deterministic safety, 589 tests. Every project includes challenges, decisions, learnings.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="badge-accent !text-[11px] py-1.5 px-3.5 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              Work: Mortgage AI Toolkit · WIS Sri Lanka · Live FCA
            </span>
            <span className="badge !text-[11px] py-1.5 px-3.5 flex items-center gap-1.5 border-success/30 text-success">
              <Rocket className="w-3.5 h-3.5" />
              {liveDemos.length} Live Demos — Vercel / GitHub Pages
            </span>
            <span className="badge !text-[11px] py-1.5 px-3.5 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5" />
              {featured.length} Featured S/A Tier
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <a href="https://www.mortgageaitoolkit.com/products/draftlee" target="_blank" rel="noopener noreferrer" className="badge hover:border-accent/40 hover:text-accent transition-colors !text-[11px] py-1 px-3 flex items-center gap-1.5">
              <ExternalLink className="w-3.5 h-3.5" />
              Draftlee Live (Work)
            </a>
            <a href="https://www.mortgageaitoolkit.com/products/eduflow" target="_blank" rel="noopener noreferrer" className="badge hover:border-accent/40 hover:text-accent transition-colors !text-[11px] py-1 px-3 flex items-center gap-1.5">
              <ExternalLink className="w-3.5 h-3.5" />
              EduFlow Live (Work)
            </a>
            {liveDemos.slice(0,4).map(p=>(
              <a key={p.title} href={p.liveUrl!} target="_blank" rel="noopener noreferrer" className="badge hover:border-success/40 hover:text-success transition-colors !text-[11px] py-1 px-3 flex items-center gap-1.5">
                <Rocket className="w-3.5 h-3.5" />
                {p.shortTitle} Live
              </a>
            ))}
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

        {/* 1. Work Projects — Mortgage AI Toolkit */}
        {workProjects.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-7">
              <h2 className="text-[15px] font-semibold text-primary flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-accent" />
                1. Work Projects — Mortgage AI Toolkit (WIS Sri Lanka) — Live Production
              </h2>
              <span className="badge-accent">{workProjects.length}</span>
              <div className="h-px flex-1 bg-border-subtle" />
              <span className="body-mono text-[10.5px] text-muted hidden sm:block">No public code · FCA compliant · Live at mortgageaitoolkit.com</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {workProjects.map((project) => {
                const globalIdx = projects.indexOf(project);
                const isExpanded = expanded === globalIdx;
                const coverImage = (project as any).thumbnail || (project as any).screenshots?.[0];
                const hasScreenshots = !!coverImage;
                return (
                  <article key={project.title} className="card card-interactive overflow-hidden h-full group border-accent/20">
                    <div className="relative h-52 overflow-hidden border-b border-border-subtle">
                      <div className="absolute inset-0 bg-bg-elevated" />
                      <div className="absolute inset-0 bg-grid opacity-50" />
                      <div className="absolute top-5 left-5 flex items-center gap-2 z-10">
                        <span className="w-6 h-px bg-accent" />
                        <span className="body-mono uppercase tracking-[0.15em] text-accent">Work Project · WIS Sri Lanka</span>
                        <span className="badge-accent !text-[10px] !py-0.5 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />Live</span>
                      </div>
                      <div className="absolute top-5 right-5 z-10 flex items-center gap-1.5">
                        <span className="body-mono text-[10.5px] text-success border border-success/20 rounded-full px-2 py-0.5">FCA Ready</span>
                      </div>
                      <div className="absolute inset-5 top-14 rounded-[12px] bg-bg border border-border-subtle overflow-hidden flex flex-col group-hover:scale-[1.02] transition-transform duration-500">
                        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border-subtle">
                          <span className="w-2 h-2 rounded-full bg-[#FF5F57]/70" />
                          <span className="w-2 h-2 rounded-full bg-[#FFBD2E]/70" />
                          <span className="w-2 h-2 rounded-full bg-[#28CA42]/70" />
                          <span className="ml-3 body-mono normal-case tracking-normal text-[10.5px]">
                            {project.shortTitle.toLowerCase().replace(/\s+/g, "")}.mortgageaitoolkit.com
                          </span>
                          <span className="ml-auto badge-accent !text-[9px] !py-0">Live</span>
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
                            <span className="badge-accent !text-[10px] !py-0">WIS Sri Lanka · No Code</span>
                          </div>
                        </div>
                        <a href={project.liveUrl || project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-accent text-bg flex items-center justify-center hover:bg-accent/90 transition-all z-20" aria-label="View live product">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                      <p className="body-default mt-3 line-clamp-3">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5 mt-4 z-20 relative">
                        {project.technologies.slice(0, 5).map((t) => (
                          <span key={t} className="badge">{t}</span>
                        ))}
                      </div>
                      <button onClick={() => setExpanded(isExpanded ? null : globalIdx)} className="btn-link mt-5 cursor-pointer z-20 relative inline-flex items-center gap-2">
                        <span className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all ${isExpanded ? "bg-accent border-accent text-bg" : "border-border-subtle text-secondary"}`}>
                          <ChevronDown className={`w-3.5 h-3.5 ${isExpanded ? "rotate-180" : ""}`} />
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
                                  <li key={idx} className="text-[13px] leading-relaxed text-secondary flex gap-2.5">
                                    <span className="text-muted shrink-0 mt-1.5 w-1 h-1 rounded-full bg-accent" />
                                    {it}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                          {(project as any).screenshots && (project as any).screenshots.length > 0 && (
                            <div className="grid grid-cols-2 gap-3">
                              {(project as any).screenshots.map((src: string, idx: number) => (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img key={idx} src={src} alt={`${project.shortTitle} ${idx+1}`} className="w-full h-36 object-cover object-top rounded-[10px] border border-border-subtle hover:opacity-90 transition-opacity" />
                              ))}
                            </div>
                          )}
                                                    {(project as any).screenshots && (project as any).screenshots.length > 0 && (
                            <div className="grid grid-cols-2 gap-3">
                              {(project as any).screenshots.map((src: string, idx: number) => (
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
                2. Live Demos — Deployed (Vercel / GitHub Pages) — Recruiter can click & test now
              </h2>
              <span className="badge !border-success/30 text-success">{liveDemos.length}</span>
              <div className="h-px flex-1 bg-border-subtle" />
              <span className="body-mono text-[10.5px] text-muted hidden sm:block">From GitHub website field · Vercel · GitHub Pages</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {liveDemos.map((project) => {
                const globalIdx = projects.indexOf(project);
                const isExpanded = expanded === globalIdx;
                const isVercel = project.liveUrl?.includes("vercel.app");
                const coverImage = (project as any).thumbnail || (project as any).screenshots?.[0];
                const hasScreenshots = !!coverImage;
                const isGhPages = project.liveUrl?.includes("github.io");
                return (
                  <article key={project.title} className="card card-interactive overflow-hidden h-full group border-success/20">
                    <div className="relative h-52 overflow-hidden border-b border-border-subtle">
                      <div className="absolute inset-0 bg-bg-elevated" />
                      <div className="absolute inset-0 bg-grid opacity-50" />
                      <div className="absolute top-5 left-5 flex items-center gap-2 z-10">
                        <span className="w-6 h-px bg-success" />
                        <span className="body-mono uppercase tracking-[0.15em] text-success">Live Demo</span>
                        <span className="badge !text-[10px] !py-0.5 !border-success/30 text-success">{isVercel ? "Vercel" : isGhPages ? "GitHub Pages" : "Live"}</span>
                      </div>
                      <div className="absolute top-5 right-5 z-10 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                        <span className="body-mono text-[10.5px] text-success">Deployed</span>
                      </div>
                      <div className="absolute inset-5 top-14 rounded-[12px] bg-bg border border-border-subtle overflow-hidden flex flex-col group-hover:scale-[1.02] transition-transform duration-500">
                        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border-subtle">
                          <span className="w-2 h-2 rounded-full bg-[#FF5F57]/70" />
                          <span className="w-2 h-2 rounded-full bg-[#FFBD2E]/70" />
                          <span className="w-2 h-2 rounded-full bg-[#28CA42]/70" />
                          <span className="ml-3 body-mono normal-case tracking-normal text-[10.5px] truncate max-w-[200px]">
                            {project.liveUrl?.replace("https://","").replace("http://","")}
                          </span>
                          <span className="ml-auto badge !text-[9px] !py-0 border-success/20 text-success">Live</span>
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
                        <span className="badge !border-success/20 text-success !text-[10px]">Live: {project.liveUrl?.includes("vercel") ? "Vercel" : project.liveUrl?.includes("github.io") ? "GH Pages" : "Deployed"}</span>
                      </div>
                      <button onClick={() => setExpanded(isExpanded ? null : globalIdx)} className="btn-link mt-5 cursor-pointer z-20 relative inline-flex items-center gap-2">
                        <span className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all ${isExpanded ? "bg-success border-success text-bg" : "border-border-subtle text-secondary"}`}>
                          <ChevronDown className={`w-3.5 h-3.5 ${isExpanded ? "rotate-180" : ""}`} />
                        </span>
                        {isExpanded ? "Hide details" : "View build journey + live link"}
                      </button>
                      {isExpanded && (
                        <div className="pt-5 mt-5 border-t border-border-subtle space-y-5">
                          <div className="flex flex-wrap gap-2">
                            <a href={project.liveUrl!} target="_blank" rel="noopener noreferrer" className="badge-accent !text-[11px] py-1.5 px-3 flex items-center gap-1.5">
                              <Rocket className="w-3.5 h-3.5" />
                              Open Live Demo: {project.liveUrl}
                            </a>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="badge !text-[11px] py-1.5 px-3 flex items-center gap-1.5">
                              <GithubIcon className="w-3.5 h-3.5" />
                              GitHub Code
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
                          {(project as any).screenshots && (project as any).screenshots.length > 0 && (
                            <div className="grid grid-cols-2 gap-3">
                              {(project as any).screenshots.map((src: string, idx: number) => (
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

        {/* 3. Featured Engineering S/A Tier */}
        {featured.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-7">
              <h2 className="text-[15px] font-semibold text-primary flex items-center gap-2">
                <Code2 className="w-4 h-4 text-accent" />
                3. Featured Engineering — S/A Tier (Strongest code, production-ready, 589 tests, multi-tenant, RAG)
              </h2>
              <span className="badge">{featured.length}</span>
              <div className="h-px flex-1 bg-border-subtle" />
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {featured.map((project) => {
                const globalIdx = projects.indexOf(project);
                const isExpanded = expanded === globalIdx;
                const hasLiveDemo = !!project.liveUrl;
                const coverImage = (project as any).thumbnail || (project as any).screenshots?.[0];
                const hasScreenshots = !!coverImage;
                return (
                  <article key={project.title} className="card card-interactive overflow-hidden h-full group">
                    <div className="relative h-52 overflow-hidden border-b border-border-subtle">
                      <div className="absolute inset-0 bg-bg-elevated" />
                      <div className="absolute inset-0 bg-grid opacity-50" />
                      <div className="absolute top-5 left-5 flex items-center gap-2 z-10">
                        <span className="w-6 h-px bg-accent" />
                        <span className="body-mono uppercase tracking-[0.15em]">Featured · S/A Tier</span>
                        {project.title.includes("YGC") && <span className="badge-accent !text-[10px] !py-0.5">S-Tier · 589 tests · Deterministic Safety</span>}
                        {project.title.includes("Oyster") && <span className="badge-accent !text-[10px] !py-0.5">S-Tier · SaaS · Multi-tenant</span>}
                        {hasLiveDemo && <span className="badge !text-[10px] !py-0.5 !border-success/30 text-success">Live Demo</span>}
                      </div>
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
                        {hasLiveDemo && <span className="badge !border-success/20 text-success !text-[10px]">Live Demo Available</span>}
                      </div>
                      <button onClick={() => setExpanded(isExpanded ? null : globalIdx)} className="btn-link mt-5 cursor-pointer z-20 relative inline-flex items-center gap-2">
                        <span className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all ${isExpanded ? "bg-accent border-accent text-bg" : "border-border-subtle text-secondary"}`}>
                          <ChevronDown className={`w-3.5 h-3.5 ${isExpanded ? "rotate-180" : ""}`} />
                        </span>
                        {isExpanded ? "Hide details" : "View build journey"}
                      </button>
                      {isExpanded && (
                        <div className="pt-5 mt-5 border-t border-border-subtle space-y-5">
                          {hasLiveDemo && (
                            <div className="flex flex-wrap gap-2">
                              <a href={project.liveUrl!} target="_blank" rel="noopener noreferrer" className="badge-accent !text-[11px] py-1.5 px-3 flex items-center gap-1.5 border-success/30">
                                <Rocket className="w-3.5 h-3.5" />
                                Live: {project.liveUrl}
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
                          {(project as any).screenshots && (project as any).screenshots.length > 0 && (
                            <div className="grid grid-cols-2 gap-3">
                              {(project as any).screenshots.map((src: string, idx: number) => (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img key={idx} src={src} alt={`${project.shortTitle} ${idx+1}`} className="w-full h-36 object-cover object-top rounded-[10px] border border-border-subtle hover:opacity-90 transition-opacity" />
                              ))}
                            </div>
                          )}
                                                    {(project as any).screenshots && (project as any).screenshots.length > 0 && (
                            <div className="grid grid-cols-2 gap-3">
                              {(project as any).screenshots.map((src: string, idx: number) => (
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

        {/* More builds */}
        {rest.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-7">
              <h2 className="text-[15px] font-semibold text-primary flex items-center gap-2">
                <GithubIcon className="w-4 h-4" />
                4. More builds — B/C Tier hobby & supporting (GitHub code, some with live demos)
              </h2>
              <span className="badge">{rest.length}</span>
              <div className="h-px flex-1 bg-border-subtle" />
            </div>
            <div className="card divide-y divide-border-subtle overflow-hidden">
              {rest.map((project, i) => (
                <div key={project.title} className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 hover:bg-bg-elevated/60 transition-colors group cursor-default">
                  <div className="flex items-center gap-3 sm:w-[260px] shrink-0">
                    <span className="text-[12px] font-mono text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                    <span className="badge">{project.categories[0]}</span>
                    {project.liveUrl && <span className="badge !border-success/30 text-success !text-[10px]">Live</span>}
                    {project.isWorkProject && <span className="badge-accent !text-[10px]">Work</span>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[15px] font-medium text-primary group-hover:text-accent transition-colors flex items-center gap-2">
                      {project.title}
                      {project.liveUrl ? <ExternalLink className="w-3.5 h-3.5 text-success" /> : null}
                    </h3>
                    <p className="text-[13px] text-secondary mt-1 line-clamp-2">{project.description}</p>
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-[11px] text-success hover:text-accent mt-1 inline-flex items-center gap-1">
                        <Rocket className="w-3 h-3" />
                        {project.liveUrl}
                      </a>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex flex-wrap gap-1.5 max-w-[200px]">
                      {project.technologies.slice(0, 3).map((t) => (
                        <span key={t} className="badge !text-[10.5px]">{t}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-success/10 border border-success/20 flex items-center justify-center text-success hover:text-bg hover:bg-success transition-all shrink-0" title="Live demo">
                          <Rocket className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-border-subtle flex items-center justify-center text-secondary hover:text-primary transition-all shrink-0" title="GitHub">
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    </div>
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

        <div className="mt-16 pt-8 border-t border-border-subtle">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="px-4 py-3 rounded-[12px] border border-accent/20 bg-accent/[0.03]">
              <div className="flex items-center gap-2 mb-1.5">
                <Briefcase className="w-4 h-4 text-accent" />
                <span className="text-[13px] font-medium text-primary">Work Projects (WIS Sri Lanka)</span>
              </div>
              <div className="text-[12px] text-secondary leading-relaxed">Production at Mortgage AI Toolkit — no public code, live at mortgageaitoolkit.com/products/* — FCA compliant email & CPD tracking.</div>
            </div>
            <div className="px-4 py-3 rounded-[12px] border border-success/20 bg-success/[0.03]">
              <div className="flex items-center gap-2 mb-1.5">
                <Rocket className="w-4 h-4 text-success" />
                <span className="text-[13px] font-medium text-primary">Live Demos (Vercel / GitHub Pages)</span>
              </div>
              <div className="text-[12px] text-secondary leading-relaxed">From GitHub repo homepage field — medimind, RouteIQ BusGo, ConvertLab, DigiBeat, Liya, VoucherRush — recruiter can click & test immediately. Vercel / GH Pages deployed.</div>
            </div>
            <div className="px-4 py-3 rounded-[12px] border border-border-subtle bg-bg-elevated/50">
              <div className="flex items-center gap-2 mb-1.5">
                <Code2 className="w-4 h-4 text-muted" />
                <span className="text-[13px] font-medium text-primary">Code Only — S/A Tier</span>
              </div>
              <div className="text-[12px] text-secondary leading-relaxed">Oyster360, YGC, BookWise — strongest engineering, Docker, multi-tenant, RAG, 589 tests, Stripe — GitHub only but production-ready, audit in PORTFOLIO_AUDIT.md</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="body-mono text-[11px] text-muted">
              Portfolio audit — see PORTFOLIO_AUDIT.md for full ranking S/A/B/C/D/F tiers, 40+ repos inspected. Live links from GitHub homepage field + README deployment.
            </div>
            <Link href="/" className="text-[13px] text-accent hover:text-primary transition-colors inline-flex items-center gap-1.5">
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to selected work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
