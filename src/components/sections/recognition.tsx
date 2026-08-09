import { publication, entrepreneurshipStories, certifications } from "@/data/content";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function RecognitionSection() {
  const spark = entrepreneurshipStories[0];
  const thalir = entrepreneurshipStories[1];
  const featuredCerts = certifications.filter((c) => c.featured).slice(0, 4);

  const achievements = [
    {
      year: publication.year,
      title: "IEEE ICAC Publication",
      detail: `${publication.title} — peer-reviewed ML research published in IEEE Xplore.`,
      href: publication.url,
      linkLabel: "IEEE Xplore",
    },
    {
      year: thalir.year,
      title: `${thalir.title} — LKR 500,000`,
      detail:
        "Top 4 Startup Idea Champions among 100+ applications. First funding pitch, first stage speech, early-stage validation.",
      href: thalir.link,
      linkLabel: "Ceremony post",
    },
    {
      year: spark.year,
      title: `${spark.title} — ${spark.subtitle}`,
      detail:
        "National-level recognition at the SPARK Grand Finale, powered by the Ceylon Chamber of Commerce, ILO, and U.S. Embassy.",
      href: spark.link,
      linkLabel: "Organization",
    },
  ];

  return (
    <section id="recognition" className="section-y">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-7">
            <div className="label-eyebrow mb-5 flex items-center">
              <span className="eyebrow-bar" aria-hidden="true" />
              <span>Recognition &amp; Research</span>
            </div>
            <h2 className="heading-section max-w-[520px]">
              Proof that travels with the work.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-11">
            <p className="body-default max-w-[400px]">
              A published paper, seed funding, and national recognition — milestones
              earned outside the job description.
            </p>
          </div>
        </div>

        {/* Editorial achievement list */}
        <div className="border-t border-border-subtle">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="grid sm:grid-cols-[90px_1fr_auto] gap-3 sm:gap-8 items-start py-7 border-b border-border-subtle"
            >
              <div className="body-mono pt-1">{item.year}</div>
              <div className="max-w-[640px]">
                <h3 className="heading-sub text-[18px]">{item.title}</h3>
                <p className="body-small mt-2">{item.detail}</p>
              </div>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link !min-h-0 whitespace-nowrap sm:pt-1"
              >
                {item.linkLabel}
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          ))}
        </div>

        {/* Certifications — compact, linked to the full page */}
        <div className="mt-14 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <h3 className="heading-sub text-[18px]">Certifications &amp; learning</h3>
            <p className="body-small mt-2 max-w-[300px]">
              Learning milestones mapped to real production work.
            </p>
            <Link href="/certifications" className="btn-link mt-4">
              View all certifications
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
          <div className="lg:col-span-8">
            <div className="card divide-y divide-border-subtle overflow-hidden">
              {featuredCerts.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center justify-between gap-6 px-6 py-4"
                >
                  <div className="min-w-0">
                    <div className="text-[15px] font-medium text-primary leading-snug">
                      {cert.name}
                    </div>
                    <div className="text-[13px] text-muted mt-0.5">{cert.issuer}</div>
                  </div>
                  <div className="body-mono shrink-0">{cert.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
