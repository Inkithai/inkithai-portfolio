"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { personal } from "@/data/content";
import Link from "next/link";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${personal.email}`;
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-[#8B5CF6]/[0.08] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-[#60A5FA]/[0.06] rounded-full blur-[100px] pointer-events-none" />

      <div className="container-max section-padding w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Content - always visible, enhanced with motion after mount */}
          <div className="lg:col-span-7">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101117] border border-[#1E202B] mb-8 transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-100 translate-y-0"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#A5A9B6]">
                {personal.status.label}
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <div className="label-mono text-[#6F7482] mb-4 tracking-[0.18em]">{personal.headlineRole}</div>
                <h1 className="heading-hero text-[#F5F7FA]">
                  I build software
                  <span className="block text-[#A5A9B6] font-medium">people actually use.</span>
                </h1>
              </div>

              <p className="text-[17px] leading-[1.7] text-[#A5A9B6] max-w-[560px] font-[450]">
                {personal.heroDescription}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F5F7FA] text-[#08090D] text-[14px] font-semibold hover:bg-white transition-colors"
                >
                  View my work
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#101117] border border-[#1E202B] text-[#F5F7FA] text-[14px] font-medium hover:bg-[#151720] hover:border-[#2A2D3A] transition-colors"
                >
                  Download Resume
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#101117] border border-[#1E202B] text-[#A5A9B6] hover:text-[#F5F7FA] hover:border-[#2A2D3A] text-[13px] transition-colors"
                >
                  <GithubIcon className="w-4 h-4" /> GitHub
                </a>
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#101117] border border-[#1E202B] text-[#A5A9B6] hover:text-[#F5F7FA] text-[13px] transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" /> LinkedIn
                </a>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#101117] border border-[#1E202B] text-[#A5A9B6] hover:text-[#F5F7FA] text-[13px] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {copied ? "Copied ✓" : personal.email}
                </button>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-[#101117] grid grid-cols-3 max-w-[420px] gap-6">
              {[
                { k: "6+", v: "Projects shipped" },
                { k: "2 yr", v: "Experience" },
                { k: "IEEE", v: "Published" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="text-[22px] font-bold tracking-tight text-[#F5F7FA]">{s.k}</div>
                  <div className="text-[12px] text-[#6F7482] mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Code visual - motion only for floating effect, content always visible */}
          <div className="lg:col-span-5 lg:pl-6">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#8B5CF6]/20 to-[#60A5FA]/10 rounded-[24px] blur-2xl -z-10" />
              <div className="rounded-[20px] overflow-hidden bg-[#101117] border border-[#1E202B]">
                {/* window header */}
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#1E202B] bg-[#0F1016]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <span className="w-3 h-3 rounded-full bg-[#28CA42]" />
                  </div>
                  <span className="text-[11px] font-mono text-[#6F7482]">engineer.ts — ~/portfolio</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#34D399]/10 text-[#34D399] border border-[#34D399]/20">LIVE</span>
                </div>

                <div className="p-5 font-mono text-[12.5px] leading-[1.8] bg-[#0D0E14]">
                  <div className="text-[#6F7482]">// Full-stack & AI engineer profile</div>
                  <div className="mt-3">
                    <span className="text-[#A78BFA]">const</span> <span className="text-[#60A5FA]">engineer</span> <span className="text-[#6F7482]">=</span> <span className="text-[#A5A9B6]">{"{"}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[#34D399]">role</span>: <span className="text-[#FBBF24]">"Full Stack & AI"</span><span className="text-[#6F7482]">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[#34D399]">stack</span>: <span className="text-[#A5A9B6]">[</span><span className="text-[#FBBF24]">"Next.js"</span><span className="text-[#6F7482]">,</span> <span className="text-[#FBBF24]">"Node"</span><span className="text-[#6F7482]">,</span> <span className="text-[#FBBF24]">"OpenAI"</span><span className="text-[#A5A9B6]">]</span><span className="text-[#6F7482]">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[#34D399]">focus</span>: <span className="text-[#FBBF24]">"AI products that ship"</span><span className="text-[#6F7482]">,</span>
                  </div>
                  <div className="pl-4 flex items-center gap-2">
                    <span className="text-[#34D399]">shipping</span>: <span className="text-[#A78BFA]">true</span><span className="text-[#6F7482]">,</span>
                    <span className="w-2 h-5 bg-[#8B5CF6] inline-block animate-pulse ml-1" />
                  </div>
                  <div className="text-[#A5A9B6]">{"}"}</div>

                  <div className="mt-5 grid grid-cols-3 gap-2.5">
                    {[
                      { k: "AI Native", v: "RAG · LLMs", c: "from-[#8B5CF6] to-[#7C3AED]" },
                      { k: "Full Stack", v: "Next · Node", c: "from-[#60A5FA] to-[#3B82F6]" },
                      { k: "Product", v: "UX · Ship", c: "from-[#34D399] to-[#10B981]" },
                    ].map((b) => (
                      <div key={b.k} className={`rounded-[14px] bg-gradient-to-br ${b.c} p-[1px]`}>
                        <div className="rounded-[13px] bg-[#101117] p-3 text-center">
                          <div className="text-[12px] font-bold text-[#F5F7FA]">{b.k}</div>
                          <div className="text-[10px] text-[#6F7482] mt-0.5">{b.v}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-5 py-3 border-t border-[#1E202B] bg-[#101117] flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#6F7482] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" /> Available for work
                  </span>
                  <span className="text-[#A5A9B6]">Colombo → Remote</span>
                </div>
              </div>

              {/* Floating badge - only this uses motion, safe to hide if JS fails */}
              {mounted && (
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-3 -right-2 md:-right-4 bg-[#F5F7FA] text-[#08090D] px-3 py-1.5 rounded-full text-[11px] font-bold shadow-xl rotate-2 will-change-transform"
                >
                  AI Engineer • SLIIT
                </motion.div>
              )}
              {!mounted && (
                <div className="absolute -top-3 -right-2 md:-right-4 bg-[#F5F7FA] text-[#08090D] px-3 py-1.5 rounded-full text-[11px] font-bold shadow-xl rotate-2">
                  AI Engineer • SLIIT
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
