import { engineeringExpertise } from "@/data/content";

export function EngineeringExpertiseSection() {
  return (
    <section id="expertise" className="section-y relative">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-7">
            <div className="label-eyebrow mb-5 flex items-center">
              <span className="eyebrow-bar" aria-hidden="true" />
              <span>Engineering Expertise</span>
            </div>
            <h2 className="heading-section max-w-[520px]">
              Capabilities, not just technologies.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-11">
            <p className="body-default max-w-[400px]">
              Organized by what I actually ship with — the stacks behind every
              production system on this page.
            </p>
          </div>
        </div>

        {/* Compact taxonomy — one visual unit per capability */}
        <div className="card divide-y divide-border-subtle overflow-hidden">
          {engineeringExpertise.map((cat) => (
            <div
              key={cat.id}
              className="grid md:grid-cols-[240px_1fr] gap-3 md:gap-10 px-6 md:px-8 py-6 md:py-7"
            >
              <div>
                <h3 className="heading-sub text-[17px]">{cat.title}</h3>
                <p className="text-[14px] text-muted mt-1">{cat.description}</p>
              </div>
              <p className="tech-line font-mono text-[13px] md:pt-1 self-center md:self-start">
                {cat.skills.slice(0, 8).join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
