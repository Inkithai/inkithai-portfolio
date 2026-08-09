"use client";

import { useState } from "react";
import { publication } from "@/data/content";
import { FileText, ChevronDown, ExternalLink } from "lucide-react";

export function ResearchSection() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section id="research" className="section-y">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left — label and short meta */}
          <div className="lg:col-span-4">
            <div className="label-eyebrow mb-5 flex items-center">
              <span className="eyebrow-bar" />
              <span>Research</span>
            </div>
            <h2 className="heading-section">
              IEEE Publication
            </h2>
            <p className="body-default mt-5">
              Peer-reviewed research on educational technology and student well-being.
              Published in IEEE Xplore.
            </p>
            <div className="mt-6 body-mono normal-case tracking-normal text-[11.5px]">
              <div className="mb-1 text-primary">{publication.conference}</div>
              <div className="text-muted">{publication.year}</div>
            </div>
          </div>

          {/* Right — editorial publication card */}
          <div className="lg:col-span-8">
            <div className="card p-7 md:p-8 group overflow-hidden">
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[10px] bg-bg-elevated border border-border-subtle flex items-center justify-center text-accent">
                    <FileText className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <div className="body-mono normal-case tracking-normal text-[10.5px] uppercase text-muted">
                      {publication.type}
                    </div>
                    <div className="text-[12.5px] text-secondary mt-0.5">
                      {publication.publisher}
                    </div>
                  </div>
                </div>
                <span className="badge-accent">
                  Peer Reviewed
                </span>
              </div>

              <h3 className="text-[18px] md:text-[20px] font-semibold tracking-tight leading-snug text-primary group-hover:text-accent transition-colors">
                {publication.title}
              </h3>

              <p className="text-[14px] leading-relaxed text-secondary mt-4">
                {publication.description}
              </p>

              {showDetails && (
                <div className="mt-5 pt-5 border-t border-border-subtle space-y-4">
                  <p className="text-[13px] leading-relaxed text-secondary">
                    {publication.detailedSummary}
                  </p>
                  <div className="body-mono normal-case tracking-normal text-[11px] text-muted">
                    DOI: {publication.doi}
                  </div>
                  <div className="flex flex-wrap gap-1.5 z-20 relative">
                    {publication.technologies.map((tech) => (
                      <span key={tech} className="badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6 flex flex-wrap items-center gap-4 z-20 relative">
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Read on IEEE Xplore
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="btn-link cursor-pointer inline-flex items-center gap-1.5"
                >
                  <span className={`inline-block ${showDetails ? "rotate-180" : ""}`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                  {showDetails ? "Less details" : "More details"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
