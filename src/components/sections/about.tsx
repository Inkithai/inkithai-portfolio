import { about, personal } from "@/data/content";

export function AboutSection() {
  const summary = [
    "Software Engineer building production AI products across the full stack — from AI-powered learning platforms and email automation to document processing pipelines. Core stack: React, Next.js, Node.js, Python, OpenAI, Gemini.",
    "Available for freelance and full-time roles where AI meets product. Open to building from scratch or strengthening existing teams.",
  ];

  return (
    <section id="about" className="section-y">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left — who I am */}
          <div className="lg:col-span-7">
            <div className="label-eyebrow mb-5 flex items-center">
              <span className="eyebrow-bar" aria-hidden="true" />
              <span>About</span>
            </div>
            <h2 className="heading-section max-w-[520px]">
              Engineer who ships AI that people actually use.
            </h2>

            <div className="mt-6 space-y-4 max-w-[600px]">
              {summary.map((p, i) => (
                <p
                  key={i}
                  className={`text-[16px] leading-[1.7] ${
                    i === 0 ? "text-primary" : "text-secondary"
                  }`}
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-2.5">
              <span className="badge-dot badge-dot-success" aria-hidden="true" />
              <span className="text-[14px] text-secondary">
                Based in {personal.location} · Open to remote worldwide
              </span>
            </div>
          </div>

          {/* Right — how I work */}
          <div className="lg:col-span-5">
            <h3 className="label-eyebrow mb-6">Engineering philosophy</h3>
            <ul className="space-y-4">
              {about.mindset.map((item) => (
                <li key={item} className="flex gap-3.5">
                  <span
                    className="w-1 h-1 rounded-full bg-muted shrink-0 mt-[10px]"
                    aria-hidden="true"
                  />
                  <span className="text-[15px] leading-relaxed text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
