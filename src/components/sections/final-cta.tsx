"use client";

import { personal } from "@/data/content";
import { Mail, ArrowUpRight, MessageCircle } from "lucide-react";
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
    <section id="contact" className="py-24 lg:py-32">
      <div className="container-max section-padding">
        <div className="relative rounded-[28px] overflow-hidden bg-[#0F172A]/60 backdrop-blur-xl border border-white/[0.08]">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/10 via-[#06B6D4]/5 to-[#14B8A6]/[0.06] pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#3B82F6]/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#06B6D4]/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative p-8 md:p-12 lg:p-14 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white text-[11px] font-bold tracking-wide shadow-lg shadow-[#3B82F6]/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                </span>
                AVAILABLE FOR FREELANCE & NEW ROLES
              </div>
              <h2 className="heading-section text-[#F8FAFC] mt-6">
                Let&apos;s build
                <span className="block text-gradient-blue">something great.</span>
              </h2>
              <p className="text-[15px] leading-relaxed text-[#94A3B8] mt-5 max-w-[480px]">
                I&apos;m available for freelance projects and full-time Software Engineering roles — especially where AI meets product. Whether you need a product built or a team strengthened, drop a message and I&apos;ll get back within hours.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${personal.email}`}
                  className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold text-white overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#14B8A6]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#14B8A6] opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                  <span className="relative flex items-center gap-2">
                    <Mail className="w-4 h-4" /> Email me directly <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl text-[#F8FAFC] text-[14px] font-medium hover:bg-white/[0.08] hover:border-white/[0.12] transition-all"
                >
                  {copied ? "Copied ✓" : "Copy email"}
                </button>
              </div>

              <div className="mt-6 flex items-center gap-3 text-[11px] font-mono text-[#64748B]">
                <span>{personal.location}</span>
                <span className="w-1 h-1 rounded-full bg-[#334155]" />
                <span>UTC+5:30 • Flexible hours • Response &lt; 3h</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[20px] bg-[#0B1120]/80 border border-white/[0.06] p-5 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] text-white flex items-center justify-center font-bold text-[14px] shadow-lg shadow-[#3B82F6]/20">IM</div>
                  <div>
                    <div className="text-[13px] font-semibold text-[#F8FAFC] flex items-center gap-2">
                      Inkithai Meiyalagan <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" /></span>
                    </div>
                    <div className="text-[11px] text-[#64748B]">Replies usually within 2 hours</div>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="rounded-[16px] bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] p-4 text-[13px] leading-relaxed text-white shadow-lg">
                    <MessageCircle className="w-4 h-4 mb-2 opacity-70" />
                    Hey! I&apos;m interested in your AI work — especially EduFlow & Drafty.AI. Are you open to a quick chat this week?
                    <div className="text-[11px] text-white/60 mt-1">Typical recruiter • 9:41 AM</div>
                  </div>
                  <div className="rounded-[16px] bg-white/[0.04] border border-white/[0.08] p-4 text-[13px] leading-relaxed text-[#94A3B8] ml-6">
                    Absolutely — I&apos;d love to connect! Available for calls and can share architecture details & demos.
                    <div className="text-[11px] text-[#64748B] mt-1">You • just now</div>
                  </div>
                </div>

                <div className="mt-5 flex gap-2">
                  <a href={personal.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 py-3 rounded-full bg-[#0A66C2] text-white text-[13px] font-semibold text-center hover:bg-[#0958a8] transition-colors shadow-lg shadow-[#0A66C2]/20">
                    LinkedIn
                  </a>
                  <a href={personal.socials.github} target="_blank" rel="noopener noreferrer" className="flex-1 py-3 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white text-[13px] font-semibold text-center hover:shadow-lg hover:shadow-[#3B82F6]/20 transition-all">
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
