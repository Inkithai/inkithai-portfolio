"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Zap, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon, MediumIcon } from "@/components/ui/icons";
import { ParticleField } from "@/components/ui/particle-field";
import { personal } from "@/data/content";
import Link from "next/link";
import Image from "next/image";
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
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Ambient backdrop */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-grid-fade" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#D4AF37]/15 via-[#E8C547]/5 to-transparent rounded-full blur-[100px] animate-aurora" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#F0D77B]/8 rounded-full blur-[120px] animate-aurora-slow" />
        <ParticleField className="absolute inset-0 opacity-80" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#030712]" />
      </div>

      <div className="container-max section-padding w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Content */}
          <div className="lg:col-span-7">
            {/* Mobile Portrait - visible only on mobile/tablet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:hidden mb-8 flex justify-start"
            >
              <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-br from-[#D4AF37]/30 via-[#E8C547]/20 to-[#F0D77B]/20 rounded-[24px] blur-xl opacity-70" />
                <div className="relative w-[132px] h-[168px] rounded-[20px] overflow-hidden border border-white/[0.10] bg-black shadow-2xl">
                  <Image
                    src="/images/inkithai.jpg"
                    alt="Inkithai Meiyalagan"
                    width={264}
                    height={336}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.08] rounded-[20px]" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-[#D4AF37] to-[#E8C547] text-white px-3 py-1 rounded-full text-[10px] font-bold shadow-lg">
                  ✨ SLIIT
                </div>
              </div>
            </motion.div>

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl mb-8"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D4AF37]" />
              </span>
              <span className="text-[11.5px] font-mono tracking-wider uppercase text-[#94A3B8]">
                {personal.status.label}
              </span>
            </motion.div>

            <div className="space-y-7">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="label-mono text-[#64748B] mb-5 tracking-[0.2em] flex items-center gap-2"
                >
                  <Terminal className="w-3.5 h-3.5" />
                  {personal.headlineRole}
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="heading-hero text-[#F8FAFC]"
                >
                  I build software
                  <span className="block text-gradient-hero">people actually use.</span>
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="text-[17px] leading-[1.75] text-[#94A3B8] max-w-[560px] font-[450]"
              >
                {personal.heroDescription}
              </motion.p>

              {/* Primary CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex flex-wrap items-center gap-3 pt-2"
              >
                <Link
                  href="/work"
                  className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold text-white overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#E8C547] to-[#F0D77B]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#E8C547] to-[#F0D77B] opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                  <span className="relative flex items-center gap-2">
                    View my work
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </Link>
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl text-[#F8FAFC] text-[14px] font-medium hover:bg-white/[0.08] hover:border-white/[0.12] transition-all"
                >
                  <Zap className="w-4 h-4 text-[#F59E0B]" />
                  Download Resume
                </a>
              </motion.div>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="flex flex-wrap items-center gap-2.5 pt-2"
              >
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-white/[0.12] hover:bg-white/[0.06] text-[13px] transition-all"
                >
                  <GithubIcon className="w-4 h-4" /> GitHub
                </a>
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-white/[0.12] hover:bg-white/[0.06] text-[13px] transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" /> LinkedIn
                </a>
                <a
                  href={personal.socials.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-white/[0.12] hover:bg-white/[0.06] text-[13px] transition-all"
                >
                  <MediumIcon className="w-4 h-4" /> Medium
                </a>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-white/[0.12] text-[13px] transition-all"
                >
                  <Mail className="w-4 h-4" />
                  {copied ? "Copied ✓" : personal.email}
                </button>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-14 pt-8 border-t border-white/[0.06] grid grid-cols-3 max-w-[420px] gap-8"
            >
              {[
                { k: "6+", v: "Projects shipped" },
                { k: "2 yr", v: "Experience" },
                { k: "IEEE", v: "Published" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="text-[26px] font-bold tracking-tight text-gradient-blue">{s.k}</div>
                  <div className="text-[12px] text-[#64748B] mt-1 font-medium">{s.v}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column: Portrait + Code visual */}
          <div className="lg:col-span-5 lg:pl-4">
            <div className="flex flex-col gap-6 max-w-[400px] mx-auto lg:mx-0 lg:ml-auto">
              {/* Portrait Card - Inkithai's Image with black background */}
              <motion.div
                initial={{ opacity: 0, y: 24, rotateY: -6 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="relative hidden lg:block"
              >
                {/* Glow behind portrait */}
                <div className="absolute -inset-5 bg-gradient-to-br from-[#D4AF37]/20 via-[#E8C547]/10 to-[#F0D77B]/15 rounded-[32px] blur-[32px] opacity-70" />
                
                {/* Portrait container */}
                <div className="relative rounded-[24px] overflow-hidden border border-white/[0.08] bg-black shadow-2xl shadow-[#000]/50 aspect-[4/5]">
                  {/* Subtle top highlight */}
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
                  
                  <Image
                    src="/images/inkithai.jpg"
                    alt="Inkithai Meiyalagan - Full Stack & AI Engineer"
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                  
                  {/* Inner ring */}
                  <div className="absolute inset-0 rounded-[24px] ring-1 ring-inset ring-white/[0.08] pointer-events-none" />
                  
                  {/* Bottom gradient with info */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent pt-20 pb-5 px-5">
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-white font-semibold text-[15px] tracking-tight">Inkithai Meiyalagan</div>
                        <div className="text-[#94A3B8] text-[12px] mt-0.5 font-medium">Full Stack & AI Engineer</div>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-2.5 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                        Available
                      </div>
                    </div>
                  </div>

                  {/* Subtle vignette for passport studio feel */}
                  <div className="absolute inset-0 bg-radial-fade pointer-events-none opacity-40" />
                </div>

                {/* Floating badge */}
                {mounted ? (
                  <motion.div
                    initial={{ y: 0, rotate: 2 }}
                    animate={{ y: [0, -8, 0], rotate: [2, -1, 2] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-3 -right-3 bg-gradient-to-r from-[#D4AF37] to-[#E8C547] text-white px-4 py-2 rounded-full text-[11px] font-bold shadow-xl shadow-[#D4AF37]/30 will-change-transform"
                  >
                    ✨ AI Engineer • SLIIT
                  </motion.div>
                ) : (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#D4AF37] to-[#E8C547] text-white px-4 py-2 rounded-full text-[11px] font-bold shadow-xl">
                    ✨ AI Engineer • SLIIT
                  </div>
                )}

                {/* Decorative dots */}
                <div className="absolute -bottom-4 -left-4 w-20 h-20 opacity-20 pointer-events-none">
                  <div className="w-full h-full bg-dot-pattern" />
                </div>
              </motion.div>

              {/* Code visual card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Glow behind card */}
                <div className="absolute -inset-6 bg-gradient-to-br from-[#D4AF37]/10 via-[#E8C547]/5 to-[#F0D77B]/10 rounded-[32px] blur-3xl opacity-40 hidden lg:block" />

                <div className="relative rounded-[20px] overflow-hidden border border-white/[0.08] bg-[#0B1120]/80 backdrop-blur-xl shadow-2xl shadow-[#000]/40">
                  {/* Window header */}
                  <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06] bg-white/[0.02]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                      <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                      <span className="w-3 h-3 rounded-full bg-[#28CA42]" />
                    </div>
                    <span className="text-[11px] font-mono text-[#64748B]">engineer.ts — ~/portfolio</span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                      LIVE
                    </span>
                  </div>

                  {/* Code content */}
                  <div className="p-5 font-mono text-[12.5px] leading-[1.9]">
                    <div className="text-[#64748B]">// Full-stack & AI engineer profile</div>
                    <div className="mt-3">
                      <span className="text-[#C084FC]">const</span>{" "}
                      <span className="text-[#F0D77B]">engineer</span>{" "}
                      <span className="text-[#64748B]">=</span>{" "}
                      <span className="text-[#94A3B8]">{"{"}</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-[#E8C547]">role</span>:{" "}
                      <span className="text-[#FBBF24]">&quot;Full Stack & AI&quot;</span>
                      <span className="text-[#64748B]">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-[#E8C547]">stack</span>:{" "}
                      <span className="text-[#94A3B8]">[</span>
                      <span className="text-[#FBBF24]">&quot;Next.js&quot;</span>
                      <span className="text-[#64748B]">,</span>{" "}
                      <span className="text-[#FBBF24]">&quot;Node&quot;</span>
                      <span className="text-[#64748B]">,</span>{" "}
                      <span className="text-[#FBBF24]">&quot;OpenAI&quot;</span>
                      <span className="text-[#94A3B8]">]</span>
                      <span className="text-[#64748B]">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-[#E8C547]">focus</span>:{" "}
                      <span className="text-[#FBBF24]">&quot;AI products that ship&quot;</span>
                      <span className="text-[#64748B]">,</span>
                    </div>
                    <div className="pl-4 flex items-center gap-2">
                      <span className="text-[#E8C547]">shipping</span>:{" "}
                      <span className="text-[#C084FC]">true</span>
                      <span className="text-[#64748B]">,</span>
                      <span className="w-2 h-5 bg-[#D4AF37] inline-block animate-pulse ml-1 rounded-sm" />
                    </div>
                    <div className="text-[#94A3B8]">{"}"}</div>

                    {/* Mini bento badges */}
                    <div className="mt-5 grid grid-cols-3 gap-2.5">
                      {[
                        { k: "AI Native", v: "RAG · LLMs", from: "#D4AF37", to: "#B8860B" },
                        { k: "Full Stack", v: "Next · Node", from: "#E8C547", to: "#B8860B" },
                        { k: "Product", v: "UX · Ship", from: "#F0D77B", to: "#8B6914" },
                      ].map((b) => (
                        <div
                          key={b.k}
                          className="rounded-[14px] p-[1px]"
                          style={{ background: `linear-gradient(135deg, ${b.from}, ${b.to})` }}
                        >
                          <div className="rounded-[13px] bg-[#0B1120]/90 p-3 text-center">
                            <div className="text-[12px] font-bold text-[#F8FAFC]">{b.k}</div>
                            <div className="text-[10px] text-[#64748B] mt-0.5">{b.v}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="px-5 py-3 border-t border-white/[0.06] bg-white/[0.02] flex items-center justify-between text-[11px] font-mono">
                    <span className="text-[#64748B] flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]" />
                      </span>
                      Available for work
                    </span>
                    <span className="text-[#94A3B8]">Colombo → Remote</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
