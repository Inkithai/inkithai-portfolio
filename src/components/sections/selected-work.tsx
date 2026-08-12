import { ArrowUpRight, ExternalLink, Briefcase, Rocket } from "lucide-react";
import { projects } from "@/data/content";
import Link from "next/link";
import { GithubIcon } from "@/components/ui/icons";

export function SelectedWorkSection() {
  const selected = projects.filter((p) => p.isSelectedWork);

  return (
    <section id="work" className="section-y relative">
      <div className="container-max section-padding">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-7">
            <div className="label-eyebrow mb-5 flex items-center">
              <span className="eyebrow-bar" />
              <span>Selected Work · {selected.length} Projects · {selected.filter(p=>p.isWorkProject).length} Work Live · {selected.filter(p=>p.liveUrl && !p.isWorkProject).length} Live Demo · {selected.filter(p=>!p.liveUrl && !p.isWorkProject).length} Code</span>
            </div>
            <h2 className="heading-section max-w-[580px]">
              Products that show how I{" "}
              <span className="text-accent text-gradient-blue">ship AI & SaaS to production.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-12">
            <p className="body-default max-w-[440px]">
              Work projects from Mortgage AI Toolkit (company.so) — FCA-compliant email automation & CPD tracking — plus open-source SaaS with live demos from GitHub website field (Vercel / GitHub Pages) and code-only S/A Tier engineering. Real users, real impact.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {selected.map((project) => {
            const isWork = project.isWorkProject || project.workType === "company.so";
            const hasLive = !!project.liveUrl;
            const isVercel = project.liveUrl?.includes("vercel.app");
            const isGhPages = project.liveUrl?.includes("github.io");
            const linkUrl = project.liveUrl || project.githubUrl;
            return (
              <article key={project.title} className={`card card-interactive group overflow-hidden h-full ${isWork ? "border-accent/20" : hasLive ? "border-success/20" : ""}`}>
                {/* Visual — mock browser */}
                <div className="relative h-[260px] overflow-hidden border-b border-border-subtle">
                  <div className="absolute inset-0 bg-bg-elevated" />
                  <div className="absolute inset-0 bg-grid opacity-50" />

                  {/* Accent line */}
                  <div className="absolute top-5 left-5 flex items-center gap-2 z-10">
                    <span className={`w-6 h-px ${isWork ? "bg-accent" : hasLive ? "bg-success" : "bg-accent"}`} />
                    <span className={`body-mono uppercase tracking-[0.15em] ${isWork ? "text-accent" : hasLive ? "text-success" : ""}`}>
                      {isWork ? "Work Project · Live" : hasLive ? "Live Demo · Deployed" : "Featured · S/A Tier"}
                    </span>
                    {isWork && (
                      <span className="ml-1 badge-accent !text-[10px] !py-0.5 flex items-center gap-1">
                        <Briefcase className="w-3 h-3" />
                        FCA
                      </span>
                    )}
                    {hasLive && !isWork && (
                      <span className="badge !text-[10px] !py-0.5 !border-success/30 text-success flex items-center gap-1">
                        <Rocket className="w-3 h-3" />
                        {isVercel ? "Vercel" : isGhPages ? "GH Pages" : "Live"}
                      </span>
                    )}
                    {project.title.includes("YGC") && <span className="badge-accent !text-[10px] !py-0.5">589 tests</span>}
                    {project.title.includes("Oyster") && <span className="badge-accent !text-[10px] !py-0.5">SaaS</span>}
                  </div>

                  {/* Mock UI */}
                  <div className="absolute inset-5 top-14 rounded-[12px] bg-bg border border-border-subtle overflow-hidden flex flex-col transition-transform duration-500 group-hover:scale-[1.02]">
                    <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border-subtle">
                      <span className="w-2 h-2 rounded-full bg-[#FF5F57]/70" />
                      <span className="w-2 h-2 rounded-full bg-[#FFBD2E]/70" />
                      <span className="w-2 h-2 rounded-full bg-[#28CA42]/70" />
                      <span className="ml-3 body-mono normal-case tracking-normal text-[10.5px] truncate max-w-[180px]">
                        {hasLive ? project.liveUrl?.replace("https://","") : `${project.shortTitle.toLowerCase().replace(/\s+/g, "")}.app`}
                      </span>
                      <span className={`ml-auto body-mono text-[10px] flex items-center gap-1 ${isWork ? "text-accent" : hasLive ? "text-success" : "text-muted"}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${isWork ? "bg-accent" : hasLive ? "bg-success" : "bg-muted"} animate-pulse`} />
                        {isWork ? "Live" : hasLive ? "Deployed" : "Code"}
                      </span>
                    </div>
                    <div className="flex-1 p-4 flex flex-col gap-3">
                      <div className="h-2.5 w-2/3 rounded-full bg-border-strong" />
                      <div className="h-2.5 w-1/2 rounded-full bg-border-subtle" />
                      <div className="grid grid-cols-3 gap-2 mt-1">
                        <div className="h-14 rounded-[8px] bg-bg-elevated border border-border-subtle" />
                        <div className="h-14 rounded-[8px] bg-bg-elevated/50 border border-border-subtle" />
                        <div className="h-14 rounded-[8px] bg-bg-elevated/50 border border-border-subtle" />
                      </div>
                      <div className="mt-auto flex gap-1.5">
                        <span className={`badge-accent !text-[9.5px] !py-0.5 ${hasLive ? "!border-success/20 !bg-success/10 !text-success" : ""}`}>
                          {isWork ? "Work · " : hasLive ? "Live Demo · " : ""}
                          {project.categories[1] || project.categories[0]} · {project.technologies[0]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="heading-sub text-[20px] group-hover:text-accent transition-colors flex items-center gap-2">
                        {project.shortTitle}
                        {hasLive && <ExternalLink className="w-4 h-4 text-success" />}
                        {isWork && !hasLive && <ExternalLink className="w-4 h-4 text-muted group-hover:text-accent" />}
                      </h3>
                      <div className="body-mono mt-1.5 normal-case tracking-normal text-[11px] text-muted flex items-center gap-2 flex-wrap">
                        <span className="line-clamp-1">{project.title}</span>
                        {project.company && <span className="badge !text-[10px] !py-0 !px-2">{project.company}</span>}
                        {hasLive && <a href={project.liveUrl!} target="_blank" rel="noopener noreferrer" className="badge !text-[10px] !py-0 !border-success/20 text-success truncate max-w-[140px]">{project.liveUrl}</a>}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 z-20">
                      {hasLive && (
                        <a
                          href={project.liveUrl!}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${isWork ? "bg-accent/10 border-accent/20 text-accent hover:text-bg hover:bg-accent" : "bg-success/10 border-success/20 text-success hover:text-bg hover:bg-success"}`}
                          aria-label="View live demo"
                        >
                          <Rocket className="w-4 h-4" />
                        </a>
                      )}
                      {!isWork && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-full border border-border-subtle flex items-center justify-center text-secondary hover:text-primary hover:border-border-strong transition-all"
                          aria-label="View on GitHub"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                      {isWork && !hasLive && (
                        <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent hover:text-bg hover:bg-accent hover:border-accent transition-all" aria-label="View live product">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      <Link href="/work" className="w-9 h-9 rounded-full bg-bg-elevated border border-border-subtle flex items-center justify-center text-secondary hover:text-accent hover:border-accent/40 transition-all" aria-label="View project">
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  <p className="body-default mt-4 line-clamp-3">{project.description}</p>

                  {project.outcome && (
                    <div className="mt-5 px-4 py-3 rounded-[12px] border-l-2 border-accent bg-accent/[0.04] transition-colors group-hover:bg-accent/[0.08]">
                      <div className="body-mono uppercase tracking-[0.15em] text-muted mb-1.5 normal-case text-[10.5px] flex items-center gap-2">
                        <span>Outcome</span>
                        {isWork && <span className="badge-accent !text-[9px]">Work Project · Live</span>}
                        {hasLive && !isWork && <span className="badge !text-[9px] !border-success/20 text-success">Live Demo</span>}
                      </div>
                      <div className="text-[13.5px] text-secondary leading-relaxed line-clamp-3">
                        {project.outcome}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span key={tech} className="badge hover:border-border-strong hover:text-primary transition-colors">
                        {tech}
                      </span>
                    ))}
                    {hasLive && <span className="badge !border-success/20 text-success !text-[10px]">Live: {isVercel ? "Vercel" : isGhPages ? "GH Pages" : "Deployed"}</span>}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center gap-3 flex-wrap">
          <Link href="/work" className="btn-ghost">
            View all {projects.length} projects — {projects.filter(p=>p.liveUrl).length} Live Demos
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <a href="https://github.com/Inkithai?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <GithubIcon className="w-4 h-4" />
            GitHub · 40+ repos
          </a>
        </div>
      </div>
    </section>
  );
}
