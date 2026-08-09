import { certifications } from "@/data/content";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CertificationsPreviewSection() {
  const featured = certifications.filter((c) => c.featured).slice(0, 6);

  return (
    <section id="certifications-preview" className="section-y">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-7">
            <div className="label-eyebrow mb-5 flex items-center">
              <span className="eyebrow-bar" />
              <span>Certifications &amp; Learning</span>
            </div>
            <h2 className="heading-section max-w-[480px]">
              Continuous{" "}
              <span className="text-accent text-gradient-blue">technical development.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-12">
            <p className="body-default max-w-[380px]">
              Certifications, research, and learning milestones — all mapped to real
              production work, not just course completion.
            </p>
          </div>
        </div>

        <div className="card divide-y divide-border-subtle overflow-hidden">
          {featured.map((cert, i) => (
            <div
              key={`${cert.name}-${i}`}
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-5 sm:p-6 hover:bg-bg-elevated/60 transition-colors group cursor-default"
            >
              <div className="flex items-center gap-3 sm:w-[170px] shrink-0">
                <span className="text-[12px] font-mono text-muted tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="badge">{cert.category}</span>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-[15px] font-medium text-primary leading-tight group-hover:text-accent transition-colors">
                  {cert.name}
                </h3>
                <div className="text-[13px] text-secondary mt-1">{cert.issuer}</div>
              </div>

              <div className="hidden md:flex flex-wrap gap-1.5 max-w-[260px]">
                {cert.skills.slice(0, 3).map((s) => (
                  <span key={s} className="badge !text-[10.5px]">
                    {s}
                  </span>
                ))}
              </div>

              <div className="body-mono normal-case tracking-normal text-[11.5px] text-muted shrink-0 sm:text-right">
                {cert.date}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/certifications" className="btn-ghost">
            View all certifications
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
