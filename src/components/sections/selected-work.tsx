"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/content";
import Link from "next/link";
import { GithubIcon } from "@/components/ui/icons";
import { WordReveal } from "@/components/amicro/text-reveal";
import { TiltCard } from "@/components/amicro/tilt-card";
import { GlareShine } from "@/components/amicro/glare-shine";
import { MagneticButton } from "@/components/amicro/magnetic-button";
import { AnimatedArrow } from "@/components/amicro/icon-morph";

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
              <span>Selected Work</span>
            </div>
            <h2 className="heading-section max-w-[520px]">
              Two products that show how I{" "}
              <WordReveal
                text="ship AI to production."
                className="text-accent text-gradient-blue"
                delay={0.1}
              />
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-12">
            <p className="body-default max-w-[380px]">
              Production AI systems — voice assistants, document pipelines, and intelligent
              automation built at WIS. Real users, real impact, real engineering.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {selected.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard tiltIntensity={8} showSpotlight className="card card-interactive group overflow-hidden h-full">
                <GlareShine />
                {/* Visual — mock browser */}
                <div className="relative h-[260px] overflow-hidden border-b border-border-subtle">
                  <div className="absolute inset-0 bg-bg-elevated" />
                  <div className="absolute inset-0 bg-grid opacity-50" />

                  {/* Accent line */}
                  <div className="absolute top-5 left-5 flex items-center gap-2 z-10">
                    <span className="w-6 h-px bg-accent" />
                    <span className="body-mono uppercase tracking-[0.15em]">Featured</span>
                  </div>

                  {/* Mock UI */}
                  <div className="absolute inset-5 top-14 rounded-[12px] bg-bg border border-border-subtle overflow-hidden flex flex-col transition-transform duration-500 group-hover:scale-[1.02]">
                    <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border-subtle">
                      <span className="w-2 h-2 rounded-full bg-[#FF5F57]/70" />
                      <span className="w-2 h-2 rounded-full bg-[#FFBD2E]/70" />
                      <span className="w-2 h-2 rounded-full bg-[#28CA42]/70" />
                      <span className="ml-3 body-mono normal-case tracking-normal text-[10.5px]">
                        {project.shortTitle.toLowerCase()}.app
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
                        <span className="badge-accent !text-[9.5px] !py-0.5">
                          AI · {project.technologies[0]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="heading-sub text-[20px] group-hover:text-accent transition-colors">
                        {project.shortTitle}
                      </h3>
                      <div className="body-mono mt-1.5 normal-case tracking-normal text-[11px] text-muted">
                        {project.title}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 z-20">
                      <motion.a
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full border border-border-subtle flex items-center justify-center text-secondary hover:text-primary hover:border-border-strong transition-all"
                        aria-label="View on GitHub"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </motion.a>
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <Link
                          href="/work"
                          className="w-9 h-9 rounded-full bg-bg-elevated border border-border-subtle flex items-center justify-center text-secondary hover:text-accent hover:border-accent/40 transition-all"
                          aria-label="View project"
                        >
                          <AnimatedArrow type="up-right" className="w-4 h-4" />
                        </Link>
                      </motion.div>
                    </div>
                  </div>

                  <p className="body-default mt-4">{project.description}</p>

                  {project.outcome && (
                    <div className="mt-5 px-4 py-3 rounded-[12px] border-l-2 border-accent bg-accent/[0.04] transition-colors group-hover:bg-accent/[0.08]">
                      <div className="body-mono uppercase tracking-[0.15em] text-muted mb-1.5 normal-case text-[10.5px]">
                        Outcome
                      </div>
                      <div className="text-[13.5px] text-secondary leading-relaxed">
                        {project.outcome}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="badge hover:border-border-strong hover:text-primary transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <MagneticButton strength={0.25}>
            <Link href="/work" className="btn-ghost">
              View all projects
              <AnimatedArrow type="up-right" className="w-4 h-4" />
            </Link>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
