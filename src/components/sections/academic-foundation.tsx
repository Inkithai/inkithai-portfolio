import { education } from "@/data/content";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function AcademicFoundationSection() {
  return (
    <section id="education" className="section-y relative">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left — heading */}
          <div className="lg:col-span-5">
            <div className="label-eyebrow mb-5 flex items-center">
              <span className="eyebrow-bar" />
              <span>Academic Foundation</span>
            </div>
            <h2 className="heading-section">
              Learning that{" "}
              <span className="text-accent text-gradient-blue">compounds over time.</span>
            </h2>
            <p className="body-default mt-5 max-w-[420px]">
              Systems design, algorithms, and software engineering — paired with production
              shipping and IEEE research.
            </p>

            <div className="mt-8 flex flex-wrap gap-1.5">
              {education.focus.slice(0, 5).map((f) => (
                <span key={f} className="badge">
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* Right — degree card */}
          <div className="lg:col-span-7">
            <div className="card p-7 md:p-8 overflow-hidden group">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-[12px] bg-bg-elevated border border-border-subtle flex items-center justify-center text-accent">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="body-mono normal-case tracking-normal text-[10.5px] uppercase text-muted">
                      Bachelor&apos;s Degree
                    </div>
                    <div className="text-[14px] text-primary font-medium mt-0.5">
                      {education.institution}
                    </div>
                  </div>
                </div>
                <span className="badge-accent">
                  Graduated 2025
                </span>
              </div>

              <h3 className="text-[20px] md:text-[22px] font-semibold tracking-tight text-primary leading-tight group-hover:text-accent transition-colors">
                {education.degree}
              </h3>
              <p className="text-[14px] text-secondary mt-2 leading-relaxed">
                {education.description}
              </p>

              <div className="mt-7 pt-6 border-t border-border-subtle grid sm:grid-cols-3 gap-5">
                <div>
                  <div className="body-mono normal-case tracking-normal text-[10.5px] uppercase text-muted flex items-center gap-1.5 mb-1.5">
                    <Calendar className="w-3 h-3 text-accent" /> Period
                  </div>
                  <div className="text-[13.5px] text-primary font-medium">{education.period}</div>
                </div>
                <div>
                  <div className="body-mono normal-case tracking-normal text-[10.5px] uppercase text-muted flex items-center gap-1.5 mb-1.5">
                    <MapPin className="w-3 h-3 text-accent" /> Location
                  </div>
                  <div className="text-[13.5px] text-primary font-medium">{education.location}</div>
                </div>
                <div>
                  <div className="body-mono normal-case tracking-normal text-[10.5px] uppercase text-muted mb-1.5">
                    Class
                  </div>
                  <div className="text-[13.5px] text-primary font-medium">{education.grade}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
