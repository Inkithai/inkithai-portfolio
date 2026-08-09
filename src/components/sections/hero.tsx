import { personal } from "@/data/content";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[680px] flex items-center pt-36 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="container-max section-padding w-full">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-16 items-center">
          {/* LEFT — Identity · Value · CTA */}
          <div className="lg:col-span-7 max-w-[620px]">
            {/* Role */}
            <p className="label-eyebrow flex items-center mb-6">
              <span className="eyebrow-bar" aria-hidden="true" />
              {personal.headlineRole}
            </p>

            {/* Headline — the product is the person, keep it clean */}
            <h1 className="heading-hero">
              I build software people actually use.
            </h1>

            {/* Value */}
            <p className="body-large mt-7 max-w-[540px]">
              {personal.heroDescription}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mt-9">
              <Link href="/work" className="btn-primary">
                View my work
              </Link>
              <a href="#contact" className="btn-ghost">
                Let&apos;s talk
              </a>
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link"
              >
                Download resume →
              </a>
            </div>

            {/* Stack — one quiet line, no badge wall */}
            <p className="tech-line mt-10 font-mono text-[13px]">{personal.heroStack}</p>
          </div>

          {/* RIGHT — Editorial portrait */}
          <div className="lg:col-span-5">
            <div className="max-w-[360px] mx-auto lg:mx-0 lg:ml-auto">
              <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden border border-border-subtle bg-bg-surface">
                <Image
                  src="/images/inkithai.jpg"
                  alt={`Portrait of ${personal.name}, ${personal.title}`}
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover object-top"
                  preload
                />
              </div>

              {/* Caption — supports identity, never competes with the headline */}
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <div className="text-[16px] font-semibold tracking-tight text-primary">
                    {personal.name}
                  </div>
                  <div className="text-[14px] text-secondary mt-0.5">{personal.title}</div>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <span className="badge-dot badge-dot-success" aria-hidden="true" />
                  <span className="text-[13px] text-muted whitespace-nowrap">Open to work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
