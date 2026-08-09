import { about, personal } from "@/data/content";

export function AboutSection() {
  const summary = [
    "Software Engineer building production AI products across the full stack — from AI-powered learning platforms and email automation to document processing pipelines. Core stack: React, Next.js, Node.js, Python, OpenAI, Gemini.",
    "Available for freelance and full-time roles where AI meets product. Open to building from scratch or strengthening existing teams.",
  ];

  return (
    <section id="about" className="section-y">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Left — main */}
          <div className="lg:col-span-7">
            <div className="label-eyebrow mb-5 flex items-center">
              <span className="eyebrow-bar" />
              <span>About</span>
            </div>
            <h2 className="heading-section">
              Engineer who{" "}
              <span className="text-accent text-gradient-blue">ships AI</span>{" "}
              that people actually use.
            </h2>

            <div className="mt-6 space-y-4 max-w-[600px]">
              {summary.map((p, i) => (
                <p
                  key={i}
                  className={`text-[15px] leading-[1.75] ${i === 0 ? "text-primary" : "text-secondary"}`}
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Mindset */}
            <div className="mt-10">
              <div className="label-eyebrow mb-5 flex items-center">
                <span className="eyebrow-bar" />
                <span>Engineering Mindset</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {about.mindset.map((item) => (
                  <div key={item} className="card p-4 h-full">
                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span className="text-[13.5px] leading-relaxed text-secondary">
                        {item}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — sidebar */}
          <div className="lg:col-span-5 space-y-4">
            {/* What I bring */}
            <div className="card p-6 overflow-hidden group">
              <div className="label-eyebrow mb-5 flex items-center">
                <span className="eyebrow-bar" />
                <span>What I Bring</span>
              </div>
              <div className="space-y-4">
                {about.highlights.slice(0, 4).map((h, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="shrink-0 body-mono normal-case tracking-normal text-[10.5px] text-accent mt-0.5 font-semibold">
                      0{i + 1}
                    </span>
                    <span className="text-[13.5px] leading-relaxed text-secondary">
                      {h.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location / availability */}
            <div className="card p-5 flex items-center justify-between">
              <div>
                <div className="text-[14px] font-semibold text-primary">
                  Based in {personal.location}
                </div>
                <div className="text-[12px] text-muted mt-0.5">
                  Open to remote worldwide
                </div>
              </div>
              <div className="flex items-center gap-1.5 body-mono normal-case tracking-normal text-[10.5px]">
                <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-soft" />
                <span className="text-success font-medium">Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
