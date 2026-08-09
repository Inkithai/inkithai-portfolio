import { ArrowUpRight } from "lucide-react";
import { projects, type ProjectItem } from "@/data/content";
import Link from "next/link";
import { GithubIcon } from "@/components/ui/icons";

function ProjectVisual({ project, compact = false }: { project: ProjectItem; compact?: boolean }) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${project.imageGradient} ${
        compact ? "h-44" : "aspect-[16/7] min-h-[240px]"
      }`}
      aria-hidden="true"
    >
      {/* Quiet depth layer instead of fake UI chrome */}
      <div className="absolute inset-0 bg-bg/30" />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="absolute inset-0 flex flex-col justify-end p-7">
        <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-white/70 mb-2">
          {project.categories[0]}
        </span>
        <span
          className={`font-semibold tracking-tight text-white leading-none ${
            compact ? "text-[26px]" : "text-[38px] md:text-[44px]"
          }`}
        >
          {project.shortTitle}
        </span>
      </div>
    </div>
  );
}

export function SelectedWorkSection() {
  const featured = projects.find((p) => p.isSelectedWork && p.featured) ?? projects[0];
  const secondaryTitles = ["Draftly", "StudyPal"];
  const secondary = projects.filter((p) => secondaryTitles.includes(p.shortTitle));

  return (
    <section id="work" className="section-y relative">
      <div className="container-max section-padding">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-7">
            <div className="label-eyebrow mb-5 flex items-center">
              <span className="eyebrow-bar" aria-hidden="true" />
              <span>Selected Work</span>
            </div>
            <h2 className="heading-section max-w-[520px]">
              Products I&apos;ve shipped to production.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-11">
            <p className="body-default max-w-[400px]">
              AI platforms, automation tools, and full-stack systems with real users —
              built at WIS, XYGen.ai, and independently.
            </p>
          </div>
        </div>

        {/* Featured project — the visual centerpiece */}
        <article className="card overflow-hidden">
          <ProjectVisual project={featured} />
          <div className="p-7 md:p-10">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8">
                <h3 className="heading-sub text-[24px] md:text-[26px]">{featured.title}</h3>
                {featured.outcome && (
                  <p className="text-[16px] text-primary/90 mt-3 leading-relaxed">
                    {featured.outcome}
                  </p>
                )}
                <p className="body-default mt-4 max-w-[600px]">{featured.description}</p>
                <p className="tech-line mt-5 font-mono text-[13px]">
                  {featured.technologies.join(" · ")}
                </p>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end items-center gap-3">
                <Link href="/work" className="btn-primary">
                  View case study
                </Link>
                <a
                  href={featured.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-border-subtle flex items-center justify-center text-secondary hover:text-primary hover:border-border-strong transition-colors"
                  aria-label={`${featured.shortTitle} on GitHub`}
                >
                  <GithubIcon className="w-[18px] h-[18px]" />
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Secondary projects — less weight, same clarity */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {secondary.map((project) => (
            <article key={project.title} className="card card-interactive overflow-hidden h-full flex flex-col">
              <ProjectVisual project={project} compact />
              <div className="p-7 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="heading-sub text-[19px]">{project.title}</h3>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 shrink-0 rounded-full border border-border-subtle flex items-center justify-center text-secondary hover:text-primary hover:border-border-strong transition-colors"
                    aria-label={`${project.shortTitle} on GitHub`}
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
                <p className="body-small mt-3 flex-1">{project.description}</p>
                <p className="tech-line mt-4 font-mono text-[12.5px]">
                  {project.technologies.slice(0, 4).join(" · ")}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/work" className="btn-ghost">
            View all projects
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
