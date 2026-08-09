"use client";

import { useState } from "react";
import { certifications, type CertificationCategory } from "@/data/content";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

const categories: CertificationCategory[] = ["All", "Frontend", "Backend", "AI", "Machine Learning", "Cloud", "Tools"];

export default function CertificationsPage() {
  const [active, setActive] = useState<CertificationCategory>("All");

  const filtered = active === "All" ? certifications : certifications.filter((c) => c.category === active);

  return (
    <div className="pt-32 pb-24">
      <div className="container-max section-padding">
        <div className="max-w-[760px] mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[14px] text-secondary hover:text-primary mb-7 transition-colors group min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
            Back to home
          </Link>
          <div className="label-eyebrow mb-5 flex items-center">
            <span className="eyebrow-bar" aria-hidden="true" />
            <span>Certifications · {certifications.length} Items</span>
          </div>
          <h1 className="heading-section max-w-[600px]">
            Learning that compounds over time.
          </h1>
          <p className="body-large mt-5 max-w-[600px]">
            Certifications, research, and learning milestones — mapped to real
            production work, not just course completion.
          </p>
        </div>

        {/* Category filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-full bg-bg-surface border border-border-subtle w-fit max-w-full">
            {categories.map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  aria-pressed={isActive}
                  className={`px-4 py-2 rounded-full text-[13.5px] font-medium transition-colors duration-200 cursor-pointer ${
                    isActive ? "bg-accent text-bg font-semibold" : "text-secondary hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Certifications list */}
        <div className="card divide-y divide-border-subtle overflow-hidden">
          {filtered.map((cert) => (
            <div
              key={`${cert.name}`}
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 px-6 py-5"
            >
              <div className="sm:w-[130px] shrink-0">
                <span className="badge">{cert.category}</span>
              </div>

              <div className="flex-1 min-w-0">
                <h2 className="text-[16px] font-medium text-primary leading-snug">
                  {cert.name}
                </h2>
                <div className="text-[13.5px] text-muted mt-1">{cert.issuer}</div>
                {cert.description && (
                  <div className="text-[14px] text-secondary mt-1.5">
                    {cert.description}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <div className="body-mono">{cert.date}</div>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-link !min-h-0 !text-[13.5px]"
                  >
                    View <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-24 text-center">
            <p className="body-default">No certifications in this category.</p>
          </div>
        )}

        <div className="mt-16 max-w-[720px]">
          <h2 className="label-eyebrow mb-4">Continuous development approach</h2>
          <p className="body-default">
            This collection represents verified learning through production shipping,
            a peer-reviewed research publication (IEEE ICAC 2024), an entrepreneurship
            award (SPARK 101), and platform-based learning. Each item maps to real
            project work.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/work" className="btn-primary">
              View projects
            </Link>
            <Link href="/#experience" className="btn-ghost">
              Experience
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
