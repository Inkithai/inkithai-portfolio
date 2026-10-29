"use client";

import { useState, useEffect } from "react";
import {
  ArrowUpRight,
  ExternalLink,
  Rocket,
  X,
  FolderOpen,
} from "lucide-react";
import { projects, type ProjectItem } from "@/data/content";
import Link from "next/link";
import { GithubIcon } from "@/components/ui/icons";

function formatCode(index: number) {
  return `CODE_${String(index + 1).padStart(3, "0")} //`;
}

export function SelectedWorkSection() {
  const selected = projects.filter((p) => p.isSelectedWork);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [modalEntry, setModalEntry] = useState<{
    project: ProjectItem;
    code: string;
  } | null>(null);

  useEffect(() => {
    if (!modalEntry) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalEntry(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [modalEntry]);

  return (
    <section id="work" className="section-y relative">
      <div className="container-max section-padding">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-7">
            <div className="label-eyebrow mb-5 flex items-center">
              <span className="eyebrow-bar" />
              <span>02 — Selected Work · The Archive</span>
            </div>
            <h2 className="heading-section max-w-[580px]">
              Products that show how I{" "}
              <span className="text-accent text-gradient-blue">
                build full-stack AI products.
              </span>
            </h2>
            <p className="body-mono mt-4 text-[11.5px] text-muted">
              → Hover a folder to pull it open · click{" "}
              <span className="text-accent-soft">▸ Open file</span> for the full
              case study
            </p>
          </div>
          <div className="lg:col-span-5 lg:pt-12">
            <p className="body-default max-w-[440px]">
              EduFlow, built end to end for client testing, and Draftlee, a
              two-person project — alongside my open-source production systems.
            </p>
          </div>
        </div>

        {/* ====================================================================
            DESKTOP ARCHIVE SHELL (lg+)
            Combines tfamil's vertical spine + tabbed expanding file folders
            with Inkithai's cover-image project cards
        ==================================================================== */}
        <div className="hidden lg:grid lg:grid-cols-[52px_1fr] gap-4 items-stretch">
          {/* Vertical Spine */}
          <div className="flex flex-col items-center justify-between py-3 border-r border-border-subtle/80 pr-3 select-none">
            <span className="archive-spine-vertical font-mono text-[11px] tracking-[0.26em] text-muted uppercase">
              FILE_INDEX
            </span>
            <span className="archive-spine-vertical font-bold text-[26px] tracking-[0.06em] text-primary/90 uppercase leading-none">
              ARCHIVE_01–{String(selected.length).padStart(2, "0")}
            </span>
            <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
          </div>

          {/* Horizontal Expanding Folder Rack + Footer */}
          <div>
            <div className="flex gap-2.5 h-[600px]">
              {selected.map((project, idx) => {
                const isExpanded = activeIndex === idx;
                const code = formatCode(idx);
                const isWork =
                  project.isWorkProject || project.workType === "wis-sri-lanka";
                const hasLive = Boolean(project.liveUrl);
                const linkUrl = project.liveUrl || project.githubUrl || "/work";
                const coverImage = project.thumbnail || project.screenshots?.[0];

                return (
                  <article
                    key={project.title}
                    onMouseEnter={() => setActiveIndex(idx)}
                    onFocus={() => setActiveIndex(idx)}
                    onClick={() => {
                      if (!isExpanded) {
                        setActiveIndex(idx);
                      } else {
                        setModalEntry({ project, code });
                      }
                    }}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        if (!isExpanded) setActiveIndex(idx);
                        else setModalEntry({ project, code });
                      }
                    }}
                    style={{
                      flex: isExpanded ? "4.6 1 0%" : "1 1 0%",
                      transition:
                        "flex 0.55s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.3s ease, background-color 0.3s ease",
                    }}
                    className={`archive-folder-tab relative min-w-0 overflow-hidden rounded-b-[16px] rounded-tr-[14px] border cursor-pointer group flex flex-col ${
                      isExpanded
                        ? isWork
                          ? "bg-[#131922] border-accent/45 shadow-[0_24px_60px_-24px_rgba(59,130,246,0.35)]"
                          : hasLive
                          ? "bg-[#131922] border-success/40 shadow-[0_24px_60px_-24px_rgba(34,197,94,0.25)]"
                          : "bg-[#131922] border-border-strong shadow-[0_24px_60px_-24px_rgba(0,0,0,0.85)]"
                        : "bg-[#10141B] border-border-subtle hover:border-border-strong"
                    }`}
                  >
                    {/* 5x5px tight perforated dot-mesh ("net") texture */}
                    <div
                      className={`absolute inset-0 pointer-events-none bg-net-mesh-tight transition-opacity duration-500 ${
                        isExpanded ? "opacity-65" : "opacity-45 group-hover:opacity-70"
                      }`}
                      aria-hidden="true"
                    />

                    {/* Top folder tab rim highlight */}
                    <div
                      className={`h-[22px] w-full shrink-0 flex items-center justify-end px-3 border-b ${
                        isExpanded
                          ? "bg-accent/[0.08] border-border-subtle/90"
                          : "bg-bg-elevated/70 border-border-subtle/60"
                      }`}
                    >
                      <span className="font-mono text-[9px] tracking-[0.2em] text-muted uppercase truncate">
                        {isExpanded
                          ? `${code} ${project.categories.slice(0, 2).join(" · ")}`
                          : String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {isExpanded ? (
                      /* ================ EXPANDED FOLDER VIEW ================ */
                      <div className="relative z-10 flex-1 flex flex-col min-h-0">
                        {/* Cover Image Frame inside Expanded Folder */}
                        <div className="relative h-[220px] shrink-0 overflow-hidden border-b border-border-subtle bg-bg-elevated">
                          {coverImage ? (
                            <>
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={coverImage}
                                alt={`${project.shortTitle} cover`}
                                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                              />
                              <div
                                className="absolute inset-0 bg-net-mesh-tight opacity-30 mix-blend-overlay pointer-events-none"
                                aria-hidden="true"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#131922] via-black/25 to-black/20" />
                            </>
                          ) : (
                            <div className="absolute inset-0 bg-net-mesh-tight opacity-70" />
                          )}

                          {/* Top-left status pill */}
                          <div className="absolute top-3.5 left-4 flex items-center gap-2 z-10">
                            <span
                              className={`w-5 h-px ${
                                isWork
                                  ? "bg-accent"
                                  : hasLive
                                  ? "bg-success"
                                  : "bg-accent"
                              }`}
                            />
                            <span
                              className={`body-mono uppercase tracking-[0.14em] backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] border ${
                                isWork
                                  ? "bg-bg/80 text-accent-soft border-accent/35"
                                  : hasLive
                                  ? "bg-bg/80 text-success border-success/35"
                                  : "bg-bg/80 text-primary border-border-subtle"
                              }`}
                            >
                              {isWork
                                ? "Client Work"
                                : hasLive
                                ? "Live Demo"
                                : project.categories[0]}
                            </span>
                          </div>

                          {/* Top-right archival barcode + quick action icons */}
                          <div
                            className="absolute top-3 right-3.5 flex items-center gap-2 z-20"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div
                              className="archive-barcode w-6 h-7 opacity-65 rounded-[2px] mr-1 hidden xl:block"
                              aria-hidden="true"
                            />
                            {hasLive && !isWork && (
                              <a
                                href={project.liveUrl!}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-bg/85 backdrop-blur border border-success/35 flex items-center justify-center text-success hover:bg-success hover:text-bg transition-all"
                                aria-label={`Open ${project.shortTitle} live demo`}
                              >
                                <Rocket className="w-3.5 h-3.5" />
                              </a>
                            )}
                            {!isWork && project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-bg/85 backdrop-blur border border-border-strong flex items-center justify-center text-primary hover:border-accent hover:text-accent transition-all"
                                aria-label={`${project.shortTitle} GitHub repository`}
                              >
                                <GithubIcon className="w-3.5 h-3.5" />
                              </a>
                            )}
                            {isWork && linkUrl && (
                              <a
                                href={linkUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-bg/85 backdrop-blur border border-accent/35 flex items-center justify-center text-accent-soft hover:bg-accent hover:text-primary transition-all"
                                aria-label={`${project.shortTitle} product page`}
                              >
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            )}
                            <Link
                              href="/work"
                              className="w-8 h-8 rounded-full bg-bg/85 backdrop-blur border border-border-strong flex items-center justify-center text-secondary hover:text-accent hover:border-accent/50 transition-all"
                              aria-label="View on work page"
                            >
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>

                          {/* File stamp bottom-left of image */}
                          <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-3">
                            <div>
                              <div className="font-mono text-[10px] tracking-[0.2em] text-accent-soft uppercase">
                                {code}
                              </div>
                              <h3 className="heading-sub text-[22px] leading-tight flex items-center gap-2 text-primary">
                                {project.shortTitle}
                                {hasLive && (
                                  <ExternalLink className="w-4 h-4 text-success shrink-0" />
                                )}
                              </h3>
                            </div>
                            {project.company && (
                              <span className="badge !bg-bg/85 backdrop-blur !text-[10px] !py-0.5 !px-2.5 shrink-0">
                                {project.company}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Rich Body Details */}
                        <div className="p-5 flex-1 flex flex-col justify-between min-h-0">
                          <div>
                            <div className="text-[12px] font-mono text-muted truncate">
                              {project.title}
                            </div>

                            {project.role && (
                              <div className="mt-2 text-[12px] leading-snug flex flex-wrap items-center gap-x-2 gap-y-0.5">
                                <span className="text-accent-soft font-medium">
                                  {project.role}
                                </span>
                                {project.status && (
                                  <>
                                    <span className="text-muted">·</span>
                                    <span className="text-secondary">
                                      {project.status}
                                    </span>
                                  </>
                                )}
                              </div>
                            )}

                            <p className="body-default !text-[13.5px] !leading-[1.58] mt-2.5 line-clamp-2">
                              {project.description}
                            </p>

                            {project.outcome && (
                              <div className="mt-3.5 px-3.5 py-2.5 rounded-[10px] border-l-2 border-accent bg-accent/[0.05]">
                                <div className="font-mono uppercase tracking-[0.14em] text-[9.5px] text-accent-soft mb-0.5">
                                  Outcome
                                </div>
                                <div className="text-[12.5px] text-secondary leading-snug line-clamp-2">
                                  {project.outcome}
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Tech stack + Open File trigger */}
                          <div className="pt-3 mt-3 border-t border-border-subtle/70 flex items-center justify-between gap-3">
                            <div className="flex flex-wrap gap-1.5 min-w-0 overflow-hidden max-h-[26px]">
                              {project.technologies.slice(0, 5).map((tech) => (
                                <span
                                  key={tech}
                                  className="badge !text-[10.5px] !py-0.5 !px-2.5"
                                >
                                  {tech}
                                </span>
                              ))}
                              {project.technologies.length > 5 && (
                                <span className="badge !text-[10.5px] !py-0.5 !px-2">
                                  +{project.technologies.length - 5}
                                </span>
                              )}
                            </div>

                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setModalEntry({ project, code });
                              }}
                              className="shrink-0 inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-accent-soft hover:text-primary transition-colors cursor-pointer"
                            >
                              ▸ Open file
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* ================ COLLAPSED FOLDER TAB VIEW ================ */
                      <div className="relative z-10 flex-1 flex flex-col justify-between overflow-hidden">
                        {/* Cover image thumbnail preview at top of collapsed folder */}
                        <div className="relative h-[155px] w-full overflow-hidden border-b border-border-subtle/70 bg-bg-elevated shrink-0">
                          {coverImage && (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img
                              src={coverImage}
                              alt={`${project.shortTitle} thumbnail`}
                              className="w-full h-full object-cover object-top opacity-65 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#10141B] via-[#10141B]/35 to-transparent" />
                          <span
                            className={`absolute top-2.5 left-2.5 w-2 h-2 rounded-full ${
                              isWork
                                ? "bg-accent shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                                : hasLive
                                ? "bg-success shadow-[0_0_8px_rgba(34,197,94,0.8)]"
                                : "bg-secondary"
                            }`}
                          />
                        </div>

                        {/* Middle vertical code + barcode (tfamil archive signature) */}
                        <div className="flex-1 flex items-start justify-between px-3 pt-4">
                          <span className="archive-code-vertical font-mono text-[10px] tracking-[0.22em] text-muted group-hover:text-accent-soft transition-colors uppercase">
                            {code}
                          </span>
                          <div
                            className="archive-barcode w-4 h-12 opacity-40 group-hover:opacity-70 transition-opacity"
                            aria-hidden="true"
                          />
                        </div>

                        {/* Bottom folder title + cue */}
                        <div className="p-3.5 pt-2">
                          <div className="font-semibold text-[15px] leading-tight text-primary group-hover:text-accent-soft transition-colors truncate">
                            {project.shortTitle}
                          </div>
                          <div className="font-mono text-[9.5px] text-muted mt-1 truncate">
                            {project.technologies.slice(0, 2).join(" · ")}
                          </div>
                          <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-accent/80 mt-2.5 opacity-75 group-hover:opacity-100">
                            ▸ Pull
                          </div>
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>

            {/* Archive Catalog Footer Bar */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-border-subtle/70">
              <span className="font-mono text-[10.5px] tracking-[0.2em] text-muted uppercase">
                FILE_01–0{selected.length} {"//"} — CLIENT SYSTEMS · OPEN SOURCE ·
                SHIPPED
              </span>
              <div className="flex items-center gap-1.5">
                {selected.map((p, idx) => (
                  <button
                    key={p.shortTitle}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Expand ${p.shortTitle}`}
                    className={`h-6 px-2 rounded font-mono text-[10px] transition-all cursor-pointer ${
                      activeIndex === idx
                        ? "bg-accent text-primary font-semibold"
                        : "bg-bg-surface border border-border-subtle text-muted hover:text-primary"
                    }`}
                  >
                    0{idx + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ====================================================================
            MOBILE & TABLET FOLDER CARDS (< lg) — Full Cover Image Included
        ==================================================================== */}
        <div className="lg:hidden grid md:grid-cols-2 gap-6">
          {selected.map((project, idx) => {
            const code = formatCode(idx);
            const isWork =
              project.isWorkProject || project.workType === "wis-sri-lanka";
            const hasLive = Boolean(project.liveUrl);
            const linkUrl = project.liveUrl || project.githubUrl || "/work";
            const coverImage = project.thumbnail || project.screenshots?.[0];

            return (
              <article
                key={project.title}
                className={`card card-interactive relative group overflow-hidden h-full flex flex-col ${
                  isWork
                    ? "border-accent/25"
                    : hasLive
                    ? "border-success/25"
                    : ""
                }`}
              >
                <div
                  className="absolute inset-0 pointer-events-none bg-net-mesh-tight opacity-45 group-hover:opacity-75 transition-opacity duration-500"
                  aria-hidden="true"
                />

                {/* Archival folder top strip */}
                <div className="relative z-10 flex items-center justify-between px-4 py-2 border-b border-border-subtle bg-bg/70">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-accent-soft uppercase">
                    {code}
                  </span>
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-[9.5px] text-muted uppercase">
                      {isWork
                        ? "Client Work"
                        : hasLive
                        ? "Live Demo"
                        : project.categories[0]}
                    </span>
                    <div
                      className="archive-barcode w-5 h-3.5 opacity-55"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Cover Image */}
                <div className="relative h-[220px] overflow-hidden border-b border-border-subtle bg-bg-elevated">
                  {coverImage ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={coverImage}
                        alt={`${project.shortTitle} screenshot`}
                        className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                      />
                      <div
                        className="absolute inset-0 bg-net-mesh-tight opacity-35 mix-blend-overlay pointer-events-none"
                        aria-hidden="true"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-net-mesh-tight opacity-70" />
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 relative z-10 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="heading-sub text-[20px] group-hover:text-accent transition-colors flex items-center gap-2">
                          {project.shortTitle}
                          {hasLive && (
                            <ExternalLink className="w-4 h-4 text-success" />
                          )}
                        </h3>
                        <div className="body-mono mt-1 normal-case tracking-normal text-[11px] text-muted">
                          {project.title}
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        {hasLive && !isWork && (
                          <a
                            href={project.liveUrl!}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full border border-success/25 bg-success/10 text-success flex items-center justify-center"
                            aria-label="Live demo"
                          >
                            <Rocket className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {!isWork && project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full border border-border-subtle text-secondary hover:text-primary flex items-center justify-center"
                            aria-label="GitHub"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {isWork && linkUrl && (
                          <a
                            href={linkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full bg-accent/10 border border-accent/25 text-accent flex items-center justify-center"
                            aria-label="Product page"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>

                    {project.role && (
                      <div className="mt-3 text-[12px] leading-relaxed">
                        <p className="text-accent font-medium">{project.role}</p>
                        {project.status && (
                          <p className="text-secondary">{project.status}</p>
                        )}
                      </div>
                    )}

                    <p className="body-default mt-3 line-clamp-3">
                      {project.description}
                    </p>

                    {project.outcome && (
                      <div className="mt-4 px-3.5 py-2.5 rounded-[10px] border-l-2 border-accent bg-accent/[0.05]">
                        <div className="font-mono uppercase tracking-[0.14em] text-[10px] text-accent-soft mb-1">
                          Outcome
                        </div>
                        <div className="text-[13px] text-secondary leading-relaxed line-clamp-2">
                          {project.outcome}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-border-subtle/70 flex items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="badge !text-[10.5px]">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => setModalEntry({ project, code })}
                      className="shrink-0 font-mono text-[10.5px] uppercase tracking-[0.15em] text-accent-soft hover:text-primary cursor-pointer"
                    >
                      ▸ Open file
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ====================================================================
            BOTTOM ACTION BUTTONS — View all projects (/work) + GitHub
        ==================================================================== */}
        <div className="mt-12 flex justify-center items-center gap-3.5 flex-wrap">
          <Link
            href="/work"
            className="btn-primary shadow-[0_0_25px_rgba(59,130,246,0.28)]"
          >
            View all projects
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <a
            href="https://github.com/Inkithai?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <GithubIcon className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>

      {/* ======================================================================
          ARCHIVE CASE-STUDY MODAL (tfamil-style interactive dossier dialog)
      ====================================================================== */}
      {modalEntry && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="archive-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalEntry(null);
          }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeUp"
        >
          <div className="relative w-full max-w-[820px] max-h-[90vh] overflow-y-auto rounded-[20px] bg-bg-surface border border-border-strong shadow-[0_32px_90px_-20px_rgba(0,0,0,0.95)]">
            {/* Close button */}
            <button
              type="button"
              onClick={() => setModalEntry(null)}
              aria-label="Close project dialog"
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-bg/85 backdrop-blur border border-border-strong flex items-center justify-center text-secondary hover:text-primary hover:border-accent transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Cover Media */}
            <div className="relative aspect-[16/8.8] bg-bg-elevated border-b border-border-subtle overflow-hidden">
              {modalEntry.project.thumbnail ||
              modalEntry.project.screenshots?.[0] ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={
                      modalEntry.project.thumbnail ||
                      modalEntry.project.screenshots![0]
                    }
                    alt={`${modalEntry.project.shortTitle} cover`}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-surface via-transparent to-black/25" />
                </>
              ) : (
                <div className="w-full h-full bg-net-mesh flex items-center justify-center">
                  <FolderOpen className="w-10 h-10 text-accent" />
                </div>
              )}

              <div className="absolute bottom-4 left-6 flex items-center gap-2.5">
                <span className="badge-accent">{modalEntry.code}</span>
                {modalEntry.project.company && (
                  <span className="badge !bg-bg/85 backdrop-blur">
                    {modalEntry.project.company}
                  </span>
                )}
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 relative">
              <div
                className="absolute inset-0 pointer-events-none bg-net-mesh-tight opacity-35"
                aria-hidden="true"
              />
              <div className="relative z-10">
                <h3
                  id="archive-modal-title"
                  className="heading-section !text-[clamp(1.4rem,2.8vw,2rem)]"
                >
                  {modalEntry.project.title}
                </h3>

                {modalEntry.project.role && (
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-[13px]">
                    <span className="text-accent-soft font-medium">
                      {modalEntry.project.role}
                    </span>
                    {modalEntry.project.status && (
                      <>
                        <span className="text-muted">·</span>
                        <span className="text-secondary">
                          {modalEntry.project.status}
                        </span>
                      </>
                    )}
                  </div>
                )}

                <p className="body-default mt-4 text-primary/90">
                  {modalEntry.project.longDescription ||
                    modalEntry.project.description}
                </p>

                {modalEntry.project.outcome && (
                  <div className="mt-5 px-4 py-3.5 rounded-[12px] border-l-2 border-accent bg-accent/[0.06]">
                    <div className="font-mono uppercase tracking-[0.16em] text-[10px] text-accent-soft mb-1">
                      Outcome &amp; Impact
                    </div>
                    <p className="text-[13.5px] text-secondary leading-relaxed">
                      {modalEntry.project.outcome}
                    </p>
                  </div>
                )}

                {/* Technologies */}
                <div className="mt-6">
                  <div className="font-mono uppercase tracking-[0.16em] text-[10px] text-muted mb-2.5">
                    Stack &amp; Architecture
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {modalEntry.project.technologies.map((tech) => (
                      <span key={tech} className="badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Action Links */}
                <div className="mt-7 pt-5 border-t border-border-subtle flex flex-wrap items-center gap-3">
                  {modalEntry.project.liveUrl && (
                    <a
                      href={modalEntry.project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      {modalEntry.project.isWorkProject
                        ? "Product page"
                        : "Live preview"}
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                  {!modalEntry.project.isWorkProject &&
                    modalEntry.project.githubUrl && (
                      <a
                        href={modalEntry.project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost"
                      >
                        <GithubIcon className="w-4 h-4" />
                        GitHub ↗
                      </a>
                    )}
                  <Link
                    href="/work"
                    onClick={() => setModalEntry(null)}
                    className="btn-ghost"
                  >
                    Full case studies
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
