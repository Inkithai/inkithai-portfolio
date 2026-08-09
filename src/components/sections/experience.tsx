import { experience, education } from "@/data/content";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-y">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-7">
            <div className="label-eyebrow mb-5 flex items-center">
              <span className="eyebrow-bar" aria-hidden="true" />
              <span>Experience</span>
            </div>
            <h2 className="heading-section max-w-[520px]">
              Where I&apos;ve made measurable impact.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-11">
            <p className="body-default max-w-[400px]">
              AI platforms, automation tools, and full-stack systems in production —
              from intern to shipping products used daily.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-[820px]">
          {experience.map((exp, idx) => (
            <div key={`${exp.company}-${exp.role}-${idx}`} className="relative pl-9 pb-12">
              <div
                className={`timeline-rail ${idx === 0 ? "timeline-rail-start" : ""}`}
                aria-hidden="true"
              />
              <span
                className={`timeline-dot absolute left-0 top-[7px] ${
                  idx === 0 ? "timeline-dot-active" : ""
                }`}
                aria-hidden="true"
              />

              <div className="body-mono mb-2">{exp.period}</div>

              <h3 className="heading-sub text-[20px]">{exp.role}</h3>
              <p className="text-[15px] text-secondary mt-1">
                {exp.company} · {exp.location}
              </p>
              <p className="body-default mt-3 max-w-[640px]">{exp.summary}</p>

              {/* 2–3 achievement bullets, no nested dashboards */}
              <ul className="mt-4 space-y-2.5 max-w-[640px]">
                {exp.achievements.slice(0, 3).map((ach) => (
                  <li key={ach.title} className="flex gap-3">
                    <span
                      className="w-1 h-1 rounded-full bg-muted shrink-0 mt-[10px]"
                      aria-hidden="true"
                    />
                    <p className="text-[15px] leading-relaxed text-secondary">
                      <span className="text-primary font-medium">{ach.title}.</span>{" "}
                      {ach.impact}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Education as the final timeline entry */}
          <div id="education" className="relative pl-9">
            <div className="timeline-rail timeline-rail-end" aria-hidden="true" />
            <span className="timeline-dot absolute left-0 top-[7px]" aria-hidden="true" />
            <div className="body-mono mb-2">{education.period}</div>
            <h3 className="heading-sub text-[20px]">{education.degree}</h3>
            <p className="text-[15px] text-secondary mt-1">
              {education.institution} · {education.grade}
            </p>
            <p className="body-default mt-3 max-w-[640px]">{education.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
