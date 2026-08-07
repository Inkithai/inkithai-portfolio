"use client";

import { personal } from "@/data/content";
import { Mail, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export function FinalCTASection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="container-max section-padding">
        <div className="rounded-[28px] overflow-hidden bg-[#101117] border border-[#1E202B] relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 via-transparent to-[#60A5FA]/[0.06] pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative p-8 md:p-12 lg:p-14 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] text-[#08090D] text-[11px] font-bold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" /> AVAILABLE FOR FREELANCE & NEW ROLES
              </div>
              <h2 className="heading-section text-[#F5F7FA] mt-6">
                Let's build
                <span className="block text-[#A5A9B6]">something great.</span>
              </h2>
              <p className="text-[14px] leading-relaxed text-[#A5A9B6] mt-4 max-w-[480px]">
                I'm available for freelance projects and full-time Software Engineering roles — especially where AI meets product. Whether you need a product built or a team strengthened, drop a message and I'll get back within hours.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F5F7FA] text-[#08090D] text-[14px] font-semibold hover:bg-white transition-colors"
                >
                  <Mail className="w-4 h-4" /> Email me directly <ArrowUpRight className="w-4 h-4" />
                </a>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#151720] border border-[#1E202B] text-[#F5F7FA] text-[14px] font-medium hover:bg-[#1E202B] transition-colors"
                >
                  {copied ? "Copied ✓" : "Copy email"}
                </button>
              </div>

              <div className="mt-6 flex items-center gap-3 text-[11px] font-mono text-[#6F7482]">
                <span>{personal.location}</span>
                <span className="w-1 h-1 rounded-full bg-[#1E202B]" />
                <span>UTC+5:30 • Flexible hours • Response &lt; 3h</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[20px] bg-[#08090D] border border-[#1E202B] p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F5F7FA] text-[#08090D] flex items-center justify-center font-bold text-[14px]">IM</div>
                  <div>
                    <div className="text-[13px] font-semibold text-[#F5F7FA] flex items-center gap-2">
                      Inkithai Meiyalagan <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
                    </div>
                    <div className="text-[11px] text-[#6F7482]">Replies usually within 2 hours</div>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="rounded-[16px] bg-[#F5F7FA] text-[#08090D] p-4 text-[13px] leading-relaxed">
                    Hey! I'm interested in your AI work — especially EduFlow & Drafty.AI. Are you open to a quick chat this week?
                    <div className="text-[11px] text-[#6F7482] mt-1">Typical recruiter • 9:41 AM</div>
                  </div>
                  <div className="rounded-[16px] bg-[#151720] border border-[#1E202B] p-4 text-[13px] leading-relaxed text-[#A5A9B6] ml-6">
                    Absolutely — I'd love to connect! Available for calls and can share architecture details & demos.
                    <div className="text-[11px] text-[#6F7482] mt-1">You • just now</div>
                  </div>
                </div>

                <div className="mt-5 flex gap-2">
                  <a href={personal.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 py-2.5 rounded-full bg-[#0A66C2] text-white text-[13px] font-semibold text-center hover:bg-[#0958a8] transition-colors">
                    LinkedIn
                  </a>
                  <a href={personal.socials.github} target="_blank" rel="noopener noreferrer" className="flex-1 py-2.5 rounded-full bg-[#F5F7FA] text-[#08090D] text-[13px] font-semibold text-center hover:bg-white transition-colors">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
