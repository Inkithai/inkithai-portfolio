"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Zap, Terminal } from "lucide-react";
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
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Hero-specific glow orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#3B82F6]/15 via-[#06B6D4]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#14B8A6]/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-max section-padding w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Content */}
          <div className="lg:col-span-7">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl mb-8"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]" />
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
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#14B8A6]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#14B8A6] opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
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

          {/* Code visual card */}
          <div className="lg:col-span-5 lg:pl-4">
            <motion.div
              initial={{ opacity: 0, y: 20, rotateY: -5 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Glow behind card */}
              <div className="absolute -inset-6 bg-gradient-to-br from-[#3B82F6]/20 via-[#06B6D4]/10 to-[#14B8A6]/15 rounded-[32px] blur-3xl opacity-60" />

              <div className="relative rounded-[20px] overflow-hidden border border-white/[0.08] bg-[#0B1120]/80 backdrop-blur-xl shadow-2xl shadow-[#000]/40">
                {/* Window header */}
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06] bg-white/[0.02]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <span className="w-3 h-3 rounded-full bg-[#28CA42]" />
                  </div>
                  <span className="text-[11px] font-mono text-[#64748B]">engineer.ts — ~/portfolio</span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                    LIVE
                  </span>
                </div>

                {/* Code content */}
                <div className="p-5 font-mono text-[12.5px] leading-[1.9]">
                  <div className="text-[#64748B]">// Full-stack & AI engineer profile</div>
                  <div className="mt-3">
                    <span className="text-[#C084FC]">const</span>{" "}
                    <span className="text-[#38BDF8]">engineer</span>{" "}
                    <span className="text-[#64748B]">=</span>{" "}
                    <span className="text-[#94A3B8]">{"{"}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[#34D399]">role</span>:{" "}
                    <span className="text-[#FBBF24]">&quot;Full Stack & AI&quot;</span>
                    <span className="text-[#64748B]">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[#34D399]">stack</span>:{" "}
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
                    <span className="text-[#34D399]">focus</span>:{" "}
                    <span className="text-[#FBBF24]">&quot;AI products that ship&quot;</span>
                    <span className="text-[#64748B]">,</span>
                  </div>
                  <div className="pl-4 flex items-center gap-2">
                    <span className="text-[#34D399]">shipping</span>:{" "}
                    <span className="text-[#C084FC]">true</span>
                    <span className="text-[#64748B]">,</span>
                    <span className="w-2 h-5 bg-[#3B82F6] inline-block animate-pulse ml-1 rounded-sm" />
                  </div>
                  <div className="text-[#94A3B8]">{"}"}</div>

                  {/* Mini bento badges */}
                  <div className="mt-5 grid grid-cols-3 gap-2.5">
                    {[
                      { k: "AI Native", v: "RAG · LLMs", from: "#3B82F6", to: "#2563EB" },
                      { k: "Full Stack", v: "Next · Node", from: "#06B6D4", to: "#0891B2" },
                      { k: "Product", v: "UX · Ship", from: "#14B8A6", to: "#0D9488" },
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
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
                    </span>
                    Available for work
                  </span>
                  <span className="text-[#94A3B8]">Colombo → Remote</span>
                </div>
              </div>

              {/* Floating badge */}
              {mounted && (
                <motion.div
                  initial={{ y: 0, rotate: 2 }}
                  animate={{ y: [0, -8, 0], rotate: [2, -1, 2] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-3 -right-2 md:-right-4 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white px-4 py-2 rounded-full text-[11px] font-bold shadow-xl shadow-[#3B82F6]/30 will-change-transform"
                >
                  ✨ AI Engineer • SLIIT
                </motion.div>
              )}
              {!mounted && (
                <div className="absolute -top-3 -right-2 md:-right-4 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white px-4 py-2 rounded-full text-[11px] font-bold shadow-xl">
                  ✨ AI Engineer • SLIIT
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
