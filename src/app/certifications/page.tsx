"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certifications, type CertificationCategory } from "@/data/content";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FilterTabs } from "@/components/amicro/filter-tabs";
import { TiltCard } from "@/components/amicro/tilt-card";
import { GlareShine } from "@/components/amicro/glare-shine";
import { WordReveal } from "@/components/amicro/text-reveal";
import { FocusBlurContainer, FocusBlurItem } from "@/components/amicro/focus-blur";
import { AnimatedArrow } from "@/components/amicro/icon-morph";

const categories: CertificationCategory[] = ["All", "Frontend", "Backend", "AI", "Machine Learning", "Cloud", "Tools"];

export default function CertificationsPage() {
  const [active, setActive] = useState<CertificationCategory>("All");

  const filtered = active === "All" ? certifications : certifications.filter((c) => c.category === active);

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
            <span>Certifications · {certifications.length} Items</span>
          </div>
          <h1 className="heading-section max-w-[600px]">
            Learning that{" "}
            <WordReveal
              text="compounds over time."
              className="text-accent text-gradient-blue"
              delay={0.1}
            />
          </h1>
          <p className="body-large mt-5 max-w-[600px]">
            Curated collection of certifications, research publication, and learning
            milestones that reflect production work and continuous development.
          </p>
        </div>

        {/* FilterTabs with layoutId */}
        <div className="mb-12">
          <FilterTabs
            categories={categories}
            activeCategory={active}
            onSelect={(cat) => setActive(cat)}
            layoutId="certCategoryPill"
          />
        </div>

        {/* Certifications list with FocusBlur */}
        <div className="card divide-y divide-border-subtle overflow-hidden">
          <FocusBlurContainer>
            {({ hoveredIndex, setHoveredIndex }) => (
              <AnimatePresence mode="popLayout">
                {filtered.map((cert, i) => (
                  <FocusBlurItem
                    key={`${cert.name}-${i}`}
                    index={i}
                    hoveredIndex={hoveredIndex}
                    setHoveredIndex={setHoveredIndex}
                  >
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: i * 0.02, duration: 0.25 }}
                      className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-5 sm:p-6 hover:bg-bg-elevated/60 transition-colors group cursor-default"
                    >
                      <div className="flex items-center gap-3 sm:w-[180px] shrink-0">
                        <span className="text-[12px] font-mono text-muted tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="badge">{cert.category}</span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-[15px] font-medium text-primary leading-tight group-hover:text-accent transition-colors">
                          {cert.name}
                        </h3>
                        <div className="text-[12.5px] text-muted mt-1">{cert.issuer}</div>
                        {cert.description && (
                          <div className="text-[13px] text-secondary mt-1.5 line-clamp-1">
                            {cert.description}
                          </div>
                        )}
                      </div>

                      <div className="hidden md:flex flex-wrap gap-1.5 max-w-[260px]">
                        {cert.skills.slice(0, 3).map((s) => (
                          <span key={s} className="badge !text-[10.5px]">
                            {s}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3 shrink-0 sm:flex-col sm:items-end sm:gap-1.5">
                        <div className="body-mono normal-case tracking-normal text-[11.5px] text-muted">
                          {cert.date}
                        </div>
                        {cert.url && (
                          <a
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-link !text-[12px] z-20"
                          >
                            View <AnimatedArrow type="external" className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  </FocusBlurItem>
                ))}
              </AnimatePresence>
            )}
          </FocusBlurContainer>
        </div>

        {filtered.length === 0 && (
          <div className="py-24 text-center">
            <div className="body-default">No certifications in this category.</div>
          </div>
        )}

        <TiltCard tiltIntensity={6} showSpotlight className="mt-16 card p-7 md:p-8 overflow-hidden group">
          <GlareShine />
          <div className="label-eyebrow mb-4 flex items-center">
            <span className="eyebrow-bar" />
            <span>Continuous Development Approach</span>
          </div>
          <p className="body-default max-w-[720px]">
            This collection represents verified learning through production shipping,
            research publication (IEEE ICAC 2024), entrepreneurship award (SPARK 101),
            and platform-based learning. Each item maps to real project work — not just
            course completion.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 z-20 relative">
            <Link href="/work" className="btn-primary">
              View projects
              <AnimatedArrow type="external" className="w-3.5 h-3.5" />
            </Link>
            <Link href="/#experience" className="btn-ghost">
              Experience
            </Link>
          </div>
        </TiltCard>
      </div>
    </div>
  );
}
