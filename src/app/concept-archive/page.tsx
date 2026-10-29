import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowDownToLine, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, MediumIcon } from "@/components/ui/icons";
import {
  personal,
  about,
  projects,
  skills,
  experience,
  education,
  publication,
  certifications,
} from "@/data/content";

/* ---------------------------------------------------------------------------
   Data shaping — the archive reads like a catalog, so every entry gets a
   stable file code and a year.
--------------------------------------------------------------------------- */

const selected = projects.filter((p) => p.isSelectedWork).slice(0, 8);

const stackGroups = [
  { label: "Frontend", items: skills.frontend.items.slice(0, 7) },
  { label: "Backend", items: skills.backend.items.slice(0, 7) },
  { label: "AI / ML", items: skills.ai.items.slice(0, 7) },
  { label: "Data", items: skills.databases.items.slice(0, 5) },
  { label: "Cloud", items: skills.cloud.items.slice(0, 6) },
];

const marquee = [
  "Full-Stack Engineering",
  "AI Product Builds",
  "React · Next.js",
  "Node · Python",
  "LLM Pipelines",
  "Colombo, Sri Lanka",
];

function fileCode(i: number) {
  return `FILE_${String(i + 1).padStart(2, "0")}`;
}

export default function ConceptArchivePage() {
  return (
    <div className="min-h-screen">
      {/* ==================================================================
          MASTHEAD — catalog bar
      ================================================================== */}
      <header className="ap-masthead sticky top-0 z-40 border-b border-[var(--line)]">
        <div className="ap-wrap flex items-center justify-between gap-4 py-3">
          <div className="flex items-center gap-3">
            <span className="ap-display text-[15px] tracking-[0.04em] leading-none">
              I·M
            </span>
            <span className="hidden sm:inline ap-mono !text-[9px] !tracking-[0.2em]">
              Dossier 001 · Rev. 2026
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {[
              ["01", "Who I Am", "#who"],
              ["02", "Archive", "#archive"],
              ["03", "Record", "#record"],
              ["04", "Contact", "#contact"],
            ].map(([n, label, href]) => (
              <a
                key={label}
                href={href}
                className="ap-mono !text-[10px] hover:!text-[var(--maroon)] transition-colors ap-focus"
              >
                <span className="text-[var(--maroon)] font-bold">{n}</span>{" "}
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <span className="ap-stamp !text-[8px] !px-2 !py-1">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--red)]" />
              Open to work
            </span>
            <Link
              href="/"
              className="ap-mono !text-[10px] hover:!text-[var(--maroon)] transition-colors ap-focus"
            >
              Live site ↗
            </Link>
          </div>
        </div>
      </header>

      {/* ==================================================================
          HERO — masthead of the dossier
      ================================================================== */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24">
        <div className="ap-wrap">
          <div className="grid lg:grid-cols-[1.35fr_0.9fr] gap-12 lg:gap-14 items-start">
            {/* ---- Left column ---- */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="ap-mono !text-[10px] !tracking-[0.28em] !text-[var(--maroon)]">
                  Engineering Dossier
                </span>
                <span className="flex-1 h-px bg-[var(--line)] max-w-[80px]" />
                <span className="ap-mono !text-[10px]">
                  Colombo · LK
                </span>
              </div>

              {/* Display name — the anchor of the whole layout */}
              <h1 className="ap-display text-[clamp(3.4rem,10.5vw,7.6rem)] leading-[0.8]">
                <span className="block">Inkithai</span>
                <span className="block text-[var(--maroon)]">Meiyalagan</span>
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="ap-mono !text-[10px]">
                  Full Stack &amp; AI Engineer
                </span>
                <span className="text-[var(--ink-faint)]">/</span>
                <span className="ap-mono !text-[10px]">
                  BSc (Hons) IT · SLIIT &apos;25
                </span>
                <span className="text-[var(--ink-faint)]">/</span>
                <span className="ap-mono !text-[10px]">
                  IEEE ICAC 2024
                </span>
              </div>

              <p className="mt-7 max-w-[50ch] text-[15px] leading-[1.72] text-[var(--ink-soft)]">
                I build software people actually use — AI-powered products,
                scalable backends, and modern frontends. From prototype to
                production, React and Python to LLM pipelines.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#archive" className="ap-btn ap-focus">
                  Open the archive
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ap-btn ap-btn--ghost ap-focus"
                >
                  <ArrowDownToLine className="w-3.5 h-3.5" />
                  CV / PDF
                </a>
              </div>

              {/* Contact strip */}
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
                {[
                  [personal.email, `mailto:${personal.email}`],
                  ["GitHub", personal.socials.github],
                  ["LinkedIn", personal.socials.linkedin],
                  ["Medium", personal.socials.medium],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="ap-mono !text-[10px] !text-[var(--ink-soft)] hover:!text-[var(--maroon)] border-b border-[var(--line)] pb-0.5 transition-colors ap-focus"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* ---- Right column: clipped specimen photo ---- */}
            <div className="relative mx-auto w-full max-w-[340px] lg:max-w-none lg:mt-2">
              <div className="relative">
                <span className="ap-tape rotate-[-6deg] -top-3 left-6" />
                <span className="ap-tape ap-tape--maroon rotate-[4deg] -top-2 right-8 w-[92px]" />

                <div className="ap-card p-2 pb-10 shadow-[6px_6px_0_rgba(29,21,18,0.1)]">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[var(--paper-3)]">
                    <Image
                      src="/images/inkithai.jpg"
                      alt="Inkithai Meiyalagan"
                      width={800}
                      height={1000}
                      priority
                      className="ap-portrait w-full h-full object-cover object-top"
                    />
                  </div>
                  {/* caption in the printed margin */}
                  <div className="absolute inset-x-0 bottom-0 px-3 py-2 flex items-center justify-between">
                    <span className="ap-mono !text-[8px] !tracking-[0.18em]">
                      PLATE 01
                    </span>
                    <span className="ap-hand text-[15px] rotate-[-1deg]">
                      that&apos;s me →
                    </span>
                  </div>
                </div>
              </div>

              {/* Handwritten margin note */}
              <p className="ap-hand text-[19px] mt-5 leading-[1.15] max-w-[240px] rotate-[-1.5deg]">
                ships fast, documents
                <br />
                carefully, tests first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================
          MARQUEE
      ================================================================== */}
      <div className="ap-marquee">
        <div className="ap-marquee-track">
          {marquee.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
        <div className="ap-marquee-track" aria-hidden="true">
          {marquee.map((m) => (
            <span key={`${m}-b`}>{m}</span>
          ))}
        </div>
      </div>

      {/* ==================================================================
          01 — WHO I AM
      ================================================================== */}
      <section id="who" className="ap-sec">
        <div className="ap-wrap">
          <div className="ap-sec-head">
            <span className="ap-sec-num">01</span>
            <h2 className="ap-sec-title">Who I Am</h2>
            <span className="ap-sec-note">Specimen Sheet · Personality</span>
          </div>

          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14">
            <div>
              <p className="ap-dropcap text-[16px] leading-[1.75] text-[var(--ink-soft)]">
                {about.summary.split("\n\n")[0]}
              </p>
              <p className="mt-5 text-[15px] leading-[1.75] text-[var(--ink-soft)]">
                {about.summary.split("\n\n")[1]}
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {stackGroups.map((g) => (
                  <div key={g.label}>
                    <div className="ap-mono !text-[9px] !tracking-[0.2em] !text-[var(--maroon)] pb-1.5 mb-2 border-b border-[var(--line)]">
                      {g.label}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {g.items.map((it) => (
                        <span key={it} className="ap-chip">
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Field notes card */}
            <aside className="relative">
              <span className="ap-tape ap-tape--olive rotate-[-3deg] -top-2 left-10" />
              <div className="ap-card p-6 shadow-[5px_5px_0_rgba(29,21,18,0.08)]">
                <div className="ap-mono !text-[9px] !tracking-[0.2em] pb-2 mb-3 border-b border-[var(--line)]">
                  Field Notes
                </div>
                <ol className="space-y-3.5">
                  {about.mindset.map((m, i) => (
                    <li key={m} className="flex gap-3 text-[13.5px] leading-[1.55] text-[var(--ink-soft)]">
                      <span className="ap-index-num pt-0.5 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ol>

                <div className="mt-5 pt-4 border-t border-dotted border-[var(--line)]">
                  <div className="ap-mono !text-[9px] !tracking-[0.2em] mb-2">
                    Currently
                  </div>
                  <p className="text-[13.5px] leading-[1.55] text-[var(--ink-soft)]">
                    Available for freelance builds and software engineering
                    roles. {personal.location}.
                  </p>
                </div>
              </div>

              <p className="ap-hand text-[18px] mt-4 rotate-[1deg]">
                open the file cabinet below ↓
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* ==================================================================
          02 — THE ARCHIVE
      ================================================================== */}
      <section id="archive" className="ap-sec bg-[var(--paper-2)] border-y border-[var(--line)]">
        <div className="ap-wrap">
          <div className="ap-sec-head">
            <span className="ap-sec-num">02</span>
            <h2 className="ap-sec-title">The Archive</h2>
            <span className="ap-sec-note">Selected Work · {String(selected.length).padStart(2, "0")} Files</span>
          </div>

          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <p className="max-w-[52ch] text-[14px] leading-[1.65] text-[var(--ink-soft)]">
              Production systems, client work, and independent builds. Hover a
              file to pull it from the drawer.
            </p>
            <Link
              href="/work"
              className="ap-mono !text-[10px] !text-[var(--maroon)] border-b border-[var(--maroon)] pb-0.5 hover:opacity-70 transition-opacity"
            >
              Full index →
            </Link>
          </div>

          <div className="border-b border-[var(--line)]">
            {selected.map((p, i) => {
              const href = p.liveUrl || p.githubUrl || "/work";
              const external = href.startsWith("http");
              return (
                <a
                  key={p.title}
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="ap-file ap-focus group"
                >
                  <span className="ap-file-code">{fileCode(i)}</span>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="ap-file-name">{p.shortTitle}</span>
                      {p.isWorkProject && (
                        <span className="ap-file-chip">Client work</span>
                      )}
                    </div>
                    <p className="ap-file-desc line-clamp-2">{p.description}</p>
                  </div>

                  <div className="hidden sm:flex items-center gap-4 shrink-0">
                    <div className="hidden lg:flex items-center gap-1.5 max-w-[280px] flex-wrap justify-end">
                      {p.technologies.slice(0, 3).map((t) => (
                        <span key={t} className="ap-file-chip">
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="ap-file-year">
                      {p.categories[0]}
                    </span>
                    <ArrowUpRight className="ap-file-arrow w-4 h-4" />
                  </div>
                </a>
              );
            })}
          </div>

          <p className="ap-hand text-[18px] mt-5 rotate-[-0.8deg]">
            every entry has a full write-up on the work page.
          </p>
        </div>
      </section>

      {/* ==================================================================
          03 — THE RECORD
      ================================================================== */}
      <section id="record" className="ap-sec">
        <div className="ap-wrap">
          <div className="ap-sec-head">
            <span className="ap-sec-num">03</span>
            <h2 className="ap-sec-title">The Record</h2>
            <span className="ap-sec-note">Employment · Education · Publication</span>
          </div>

          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-start">
            {/* Receipt */}
            <div className="ap-receipt">
              <div className="text-center pb-3 mb-3 border-b border-dotted border-[var(--line)]">
                <div className="ap-display text-[17px] tracking-[0.06em]">
                  Record of Service
                </div>
                <div className="ap-mono !text-[8px] mt-1.5 !tracking-[0.22em]">
                  Inkithai Meiyalagan · No. IM-2026
                </div>
              </div>

              {experience.map((e) => (
                <div key={e.company + e.role} className="mb-4 last:mb-0">
                  <div className="ap-receipt-row !text-[9px] !tracking-[0.16em] !text-[var(--ink-faint)]">
                    <span>{e.period}</span>
                    <span className="ap-receipt-dots" />
                    <span>{e.location}</span>
                  </div>
                  <div className="ap-display text-[19px] leading-[1.05] mt-1">
                    {e.role}
                  </div>
                  <div className="ap-receipt-row !text-[11px] !font-bold !text-[var(--maroon)]">
                    {e.company}
                  </div>
                  <p className="text-[11.5px] leading-[1.5] text-[var(--ink-faint)] mt-1 max-w-[46ch]">
                    {e.summary}
                  </p>
                </div>
              ))}

              <div className="mt-4 pt-3 border-t border-dotted border-[var(--line)] flex items-baseline justify-between">
                <span className="ap-mono !text-[9px] !tracking-[0.2em] !text-[var(--ink)] !font-bold">
                  Status
                </span>
                <span className="ap-receipt-dots" />
                <span className="ap-mono !text-[9px] !text-[var(--maroon)] !font-bold">
                  Available
                </span>
              </div>

              <div className="text-center mt-4 ap-mono !text-[8px] !tracking-[0.24em] !text-[var(--ink-faint)]">
                —— thank you · build something ✦ ——
              </div>
            </div>

            {/* Education + publication + certs */}
            <div className="space-y-5">
              <div className="ap-card p-5 relative">
                <span className="ap-tape rotate-[-3deg] -top-2 right-10 w-[78px]" />
                <div className="ap-mono !text-[9px] !tracking-[0.2em] !text-[var(--maroon)] pb-2 mb-2 border-b border-[var(--line)]">
                  Education
                </div>
                <div className="ap-display text-[22px] leading-[1.05]">
                  {education.degree}
                </div>
                <p className="text-[13px] text-[var(--ink-soft)] mt-1.5">
                  {education.institution}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <span className="ap-chip">{education.period}</span>
                  <span className="ap-chip">{education.grade}</span>
                  <span className="ap-chip ap-chip--spec">{education.location}</span>
                </div>
              </div>

              <div className="ap-card p-5 relative">
                <div className="flex items-start justify-between gap-3">
                  <div className="ap-mono !text-[9px] !tracking-[0.2em] !text-[var(--maroon)] pb-2 mb-2 border-b border-[var(--line)] flex-1">
                    Publication · IEEE Xplore
                  </div>
                  <span className="ap-stamp !text-[7px] !px-1.5 !py-0.5 shrink-0">
                    {publication.year}
                  </span>
                </div>
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ap-display text-[16px] leading-[1.2] block hover:text-[var(--maroon)] transition-colors"
                >
                  {publication.title}
                </a>
                <p className="text-[12px] text-[var(--ink-faint)] mt-2">
                  {publication.conference}
                </p>
              </div>

              <div className="ap-card p-5">
                <div className="ap-mono !text-[9px] !tracking-[0.2em] !text-[var(--maroon)] pb-2 mb-3 border-b border-[var(--line)]">
                  Certifications · Selected
                </div>
                <ul className="space-y-2.5">
                  {certifications.slice(0, 4).map((c) => (
                    <li
                      key={c.name}
                      className="flex items-baseline gap-2 text-[12.5px]"
                    >
                      <span className="text-[var(--maroon)] shrink-0 text-[9px]">
                        ✦
                      </span>
                      <span className="text-[var(--ink-soft)] flex-1">
                        {c.name}
                      </span>
                      <span className="ap-mono !text-[8px] shrink-0">
                        {c.date}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================
          04 — CONTACT
      ================================================================== */}
      <section id="contact" className="relative bg-[var(--ink)] text-[var(--paper)] overflow-hidden">
        <div className="ap-wrap py-16 md:py-24 relative">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-end">
            <div>
              <div className="ap-mono !text-[10px] !tracking-[0.26em] !text-[var(--gold)] mb-5">
                04 — Let&apos;s Build
              </div>
              <h2 className="ap-display text-[clamp(2.8rem,8vw,5.8rem)] leading-[0.84]">
                Have a problem
                <br />
                <span className="text-[var(--gold)]">worth building?</span>
              </h2>
              <p className="mt-6 max-w-[48ch] text-[14.5px] leading-[1.7] text-[rgba(244,236,221,0.72)]">
                I&apos;m available for freelance builds and software engineering
                roles. If you&apos;re shipping something real, I&apos;d like to
                hear about it.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${personal.email}`}
                  className="ap-btn !bg-[var(--gold)] !text-[var(--ink)] !border-[var(--gold)] hover:!bg-[var(--paper)] hover:!border-[var(--paper)]"
                >
                  {personal.email}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ap-btn !bg-transparent !text-[var(--paper)] !border-[rgba(244,236,221,0.35)] hover:!bg-[rgba(244,236,221,0.08)] hover:!border-[rgba(244,236,221,0.5)]"
                >
                  <ArrowDownToLine className="w-3.5 h-3.5" />
                  Download CV
                </a>
              </div>
            </div>

            <div className="lg:text-right">
              <div className="ap-mono !text-[9px] !tracking-[0.22em] !text-[rgba(244,236,221,0.45)] mb-3">
                Elsewhere
              </div>
              <div className="flex lg:justify-end flex-wrap gap-x-5 gap-y-2">
                {[
                  ["GitHub", personal.socials.github, GithubIcon],
                  ["LinkedIn", personal.socials.linkedin, LinkedinIcon],
                  ["Medium", personal.socials.medium, MediumIcon],
                ].map(([label, href, Icon]) => {
                  const I = Icon as React.ComponentType<{ className?: string }>;
                  return (
                    <a
                      key={label as string}
                      href={href as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[12.5px] text-[rgba(244,236,221,0.8)] hover:text-[var(--gold)] transition-colors ap-focus"
                    >
                      <I className="w-4 h-4" />
                      {label as string}
                    </a>
                  );
                })}
              </div>

              <p className="ap-hand text-[21px] !text-[var(--gold)] mt-8 lg:mt-12 rotate-[-1deg]">
                give me a problem worth building for.
              </p>
            </div>
          </div>

          {/* colophon */}
          <div className="mt-14 pt-5 border-t border-[rgba(244,236,221,0.15)] flex flex-wrap items-center justify-between gap-3">
            <span className="ap-mono !text-[9px] !tracking-[0.2em] !text-[rgba(244,236,221,0.45)]">
              Inkithai Meiyalagan · Colombo, Sri Lanka · © 2026
            </span>
            <span className="ap-mono !text-[9px] !tracking-[0.2em] !text-[rgba(244,236,221,0.45)]">
              Archival Press — design direction
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
