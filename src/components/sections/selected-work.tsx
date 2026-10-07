import { ArrowUpRight, ExternalLink, Briefcase, Rocket, Image as ImageIcon } from "lucide-react";
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
              <span>Selected Work · {selected.length} Projects · {selected.filter(p=>p.isWorkProject).length} Work · {selected.filter(p=>p.liveUrl && !p.isWorkProject).length} Live Demo · {selected.filter(p=>!p.liveUrl && !p.isWorkProject).length} Code</span>
            </div>
            <h2 className="heading-section max-w-[580px]">
              Products that show how I{" "}
              <span className="text-accent text-gradient-blue">build full-stack AI products.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-12">
            <p className="body-default max-w-[440px]">
              EduFlow, developed end to end and being deployed for client testing, and Draftlee, a two-person project with my contributions in voice input, inline summaries, advanced filtering, and calendar integration — alongside my open-source work.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {selected.map((project) => {
            const isWork = project.isWorkProject || project.workType === "wis-sri-lanka";
            const hasLive = !!project.liveUrl;
            const isVercel = project.liveUrl?.includes("vercel.app");
            const isGhPages = project.liveUrl?.includes("github.io");
            const linkUrl = project.liveUrl || project.githubUrl;
            const coverImage = project.thumbnail || project.screenshots?.[0];
            const hasScreenshots = !!coverImage;
            return (
              <article key={project.title} className={`card card-interactive group overflow-hidden h-full ${isWork ? "border-accent/20" : hasLive ? "border-success/20" : ""}`}>
                {/* Visual — cover photo if available, else mock preview */}
                <div className="relative h-[260px] overflow-hidden border-b border-border-subtle bg-bg-elevated">
                  {hasScreenshots ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={coverImage} alt={`${project.shortTitle} screenshot`} className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5">
                        <span className="badge !text-[10px] !py-0.5 bg-black/60 text-white border-white/20 backdrop-blur flex items-center gap-1">
                          <ImageIcon className="w-3 h-3" />
                          {project.screenshots?.length || 1} screenshot{project.screenshots && project.screenshots.length > 1 ? 's' : ''}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-bg-elevated" />
                      <div className="absolute inset-0 bg-grid opacity-50" />
                      <div className="absolute inset-5 top-14 rounded-[12px] bg-bg border border-border-subtle overflow-hidden flex flex-col transition-transform duration-500 group-hover:scale-[1.02]">
                        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border-subtle">
                          <span className="w-2 h-2 rounded-full bg-[#FF5F57]/70" />
                          <span className="w-2 h-2 rounded-full bg-[#FFBD2E]/70" />
                          <span className="w-2 h-2 rounded-full bg-[#28CA42]/70" />
                          <span className="ml-3 body-mono normal-case tracking-normal text-[10.5px] truncate max-w-[180px]">
                            {hasLive ? project.liveUrl?.replace("https://","") : `${project.shortTitle.toLowerCase().replace(/\s+/g, "")}.app`}
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
                      <div className="absolute bottom-3 left-5 right-5 flex items-center justify-between z-10">
                        <span className="body-mono text-[10px] text-muted">Add screenshots: /screenshots/{project.shortTitle.toLowerCase()}/ — see /screenshots/README.md</span>
                      </div>
                    </>
                  )}

                  {/* Top badges */}
                  <div className="absolute top-5 left-5 flex items-center gap-2 z-10">
                    <span className={`w-6 h-px ${isWork ? "bg-accent" : hasLive ? "bg-success" : "bg-accent"}`} />
                    <span className={`body-mono uppercase tracking-[0.15em] backdrop-blur px-2 py-0.5 rounded-full text-[10px] border ${isWork ? "bg-accent/10 text-accent border-accent/20" : hasLive ? "bg-success/10 text-success border-success/20" : "bg-bg/80 text-primary border-border-subtle"}`}>
                      {isWork ? "Client Work" : hasLive ? "Live Demo · Deployed" : "Featured · S/A Tier"}
                    </span>
                    {isWork && (
                      <span className="badge-accent !text-[10px] !py-0.5 flex items-center gap-1 backdrop-blur">
                        <Briefcase className="w-3 h-3" />
                        AI
                      </span>
                    )}
                    {hasLive && !isWork && (
                      <span className="badge !text-[10px] !py-0.5 !border-success/30 text-success flex items-center gap-1 backdrop-blur bg-success/10">
                        <Rocket className="w-3 h-3" />
                        {isVercel ? "Vercel" : isGhPages ? "GH Pages" : "Live"}
                      </span>
                    )}
                  </div>
                  <div className="absolute top-5 right-5 z-10 flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${isWork ? "bg-accent" : hasLive ? "bg-success" : "bg-muted"} animate-pulse`} />
                    <span className={`body-mono text-[10px] backdrop-blur px-2 py-0.5 rounded-full border ${isWork ? "text-accent border-accent/20 bg-accent/10" : hasLive ? "text-success border-success/20 bg-success/10" : "text-muted"}`}>
                      {isWork ? "Client Project" : hasLive ? "Deployed" : "Code"}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="heading-sub text-[20px] group-hover:text-accent transition-colors flex items-center gap-2">
                        {project.shortTitle}
                        {hasLive && <ExternalLink className="w-4 h-4 text-success" />}
                      </h3>
                      <div className="body-mono mt-1.5 normal-case tracking-normal text-[11px] text-muted flex items-center gap-2 flex-wrap">
                        <span className="line-clamp-1">{project.title}</span>
                        {project.company && <span className="badge !text-[10px] !py-0 !px-2">{project.company}</span>}
                        {hasLive && <a href={project.liveUrl!} target="_blank" rel="noopener noreferrer" className="badge !text-[10px] !py-0 !border-success/20 text-success truncate max-w-[140px]">{project.liveUrl}</a>}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 z-20">
                      {hasLive && !isWork && (
                        <a href={project.liveUrl!} target="_blank" rel="noopener noreferrer" className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${isWork ? "bg-accent/10 border-accent/20 text-accent hover:text-bg hover:bg-accent" : "bg-success/10 border-success/20 text-success hover:text-bg hover:bg-success"}`} aria-label="Live demo">
                          <Rocket className="w-4 h-4" />
                        </a>
                      )}
                      {!isWork && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-border-subtle flex items-center justify-center text-secondary hover:text-primary hover:border-border-strong transition-all" aria-label="GitHub">
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                      {isWork && (
                        <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent hover:text-bg hover:bg-accent hover:border-accent transition-all" aria-label="Product page">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      <Link href="/work" className="w-9 h-9 rounded-full bg-bg-elevated border border-border-subtle flex items-center justify-center text-secondary hover:text-accent hover:border-accent/40 transition-all" aria-label="View project">
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {project.role && (
                    <div className="mt-4 space-y-1 text-[12px] leading-relaxed">
                      <p className="text-accent font-medium">{project.role}</p>
                      <p className="text-secondary">{project.status}</p>
                    </div>
                  )}
                  <p className="body-default mt-4 line-clamp-3">{project.description}</p>

                  {project.outcome && (
                    <div className="mt-5 px-4 py-3 rounded-[12px] border-l-2 border-accent bg-accent/[0.04] transition-colors group-hover:bg-accent/[0.08]">
                      <div className="body-mono uppercase tracking-[0.15em] text-muted mb-1.5 normal-case text-[10.5px] flex items-center gap-2">
                        <span>Outcome</span>
                        {isWork && <span className="badge-accent !text-[9px]">Client Work</span>}
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
                    {hasLive && !isWork && <span className="badge !border-success/20 text-success !text-[10px]">Live: {isVercel ? "Vercel" : isGhPages ? "GH Pages" : "Deployed"}</span>}
                    {hasScreenshots && <span className="badge !text-[10px] !border-accent/20 text-accent">+{project.screenshots?.length} screenshots</span>}
                  </div>

                  {project.screenshots && project.screenshots.length > 1 && (
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {project.screenshots.slice(1,4).map((src, idx)=>(
                        // eslint-disable-next-line @next/next/no-img-element
                        <img key={idx} src={src} alt={`${project.shortTitle} ${idx+2}`} className="h-16 w-full object-cover object-top rounded-[8px] border border-border-subtle hover:opacity-90 transition-opacity" />
                      ))}
                    </div>
                  )}
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
