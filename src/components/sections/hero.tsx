"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Download, Mail, Sparkles, Code2, Cpu, Layers, MapPin } from "lucide-react";
import { personal } from "@/data/content";
import { useState, useRef } from "react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function HeroSection() {
  const [emailCopied, setEmailCopied] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${personal.email}`;
    }
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[100vh] flex items-center overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0">
        {/* Mesh gradients */}
        <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-violet-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-violet-600/10 via-transparent to-cyan-600/10 blur-3xl pointer-events-none" />
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_60%,transparent_110%)]" />
      </div>

      <div className="container-max section-padding relative z-10 w-full pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            className="lg:col-span-7 space-y-7"
            style={{ y, opacity }}
          >
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 rounded-full bg-zinc-900 border border-white/[0.08] backdrop-blur"
            >
              <span className="flex h-7 items-center gap-1.5 px-2.5 rounded-full bg-emerald-500 text-white text-xs font-bold tracking-wide">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                </span>
                AVAILABLE
              </span>
              <span className="text-sm text-zinc-300 font-medium">Open to new opportunities</span>
              <span className="hidden sm:inline-flex w-1 h-1 rounded-full bg-zinc-600" />
              <span className="hidden sm:inline text-xs text-zinc-500 font-mono flex items-center gap-1">
                <MapPin className="w-3 h-3" /> Colombo, LK
              </span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="heading-display text-[42px] sm:text-[56px] lg:text-[64px] xl:text-[72px] text-white leading-[0.9] tracking-[-0.04em]">
                  <span className="block font-light text-zinc-500 text-[0.42em] tracking-[0.15em] font-sans uppercase mb-3">Full Stack & AI Engineer</span>
                  <span className="block">Inkithai</span>
                  <span className="block text-gradient-accent">Meiyalagan</span>
                </h1>
              </motion.div>

              <motion.p
                className="text-[17px] sm:text-lg text-zinc-400 leading-relaxed max-w-[560px] font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Building <span className="text-white font-medium">AI-powered products</span> and modern web experiences. I craft scalable systems with <span className="text-zinc-200">React, Next.js, Node.js</span> and ship intelligent features with OpenAI & Gemini.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <a
                href={personal.resumeUrl}
                download
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-zinc-900 font-semibold text-[14px] hover:bg-zinc-100 transition-all hover:scale-[1.02] shadow-[0_10px_30px_-10px_rgba(255,255,255,0.4)]"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                Download CV
                <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-zinc-900 border border-white/[0.08] text-white font-medium text-[14px] hover:bg-zinc-800 hover:border-white/15 transition-all hover:scale-[1.02]"
              >
                <Mail className="w-4 h-4" />
                {emailCopied ? "Copied ✓" : personal.email}
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-zinc-900 border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/15 hover:bg-zinc-800 transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white hover:scale-105 transition-transform shadow-lg shadow-violet-600/20"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Social proof / metrics strip */}
            <motion.div
              className="flex flex-wrap items-center gap-6 pt-2 border-t border-white/[0.06] mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 border-2 border-zinc-950 flex items-center justify-center text-[10px] font-bold text-white">AI</div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 border-2 border-zinc-950 flex items-center justify-center text-[10px] font-bold text-white">FS</div>
                  <div className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-zinc-950 flex items-center justify-center">
                    <Code2 className="w-4 h-4 text-zinc-400" />
                  </div>
                </div>
                <div className="text-xs leading-tight">
                  <div className="text-white font-semibold">Trusted by startups</div>
                  <div className="text-zinc-500">WIS · XYGen.ai · Freelance</div>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-6 text-sm">
                <div>
                  <div className="text-white font-bold text-lg leading-none">6+</div>
                  <div className="text-zinc-500 text-xs">Projects shipped</div>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <div className="text-white font-bold text-lg leading-none">2 yr</div>
                  <div className="text-zinc-500 text-xs">Experience</div>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <div className="text-white font-bold text-lg leading-none">IEEE</div>
                  <div className="text-zinc-500 text-xs">Published</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="lg:col-span-5 relative lg:pl-4"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Glow behind */}
            <div className="absolute -inset-4 bg-gradient-to-br from-violet-600/20 via-indigo-600/15 to-cyan-600/20 rounded-[2rem] blur-2xl -z-10" />

            {/* Main card - Code Window */}
            <div className="relative rounded-[24px] overflow-hidden bg-zinc-900 border border-white/[0.08] shadow-[0_25px_80px_-20px_rgba(0,0,0,0.7)]">
              {/* Window header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06] bg-zinc-900/50 backdrop-blur">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                  <span className="hidden sm:inline">inkithai.dev — zsh</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-700 sm:hidden" />
                  <span className="px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 text-[11px] font-semibold tracking-wide">● LIVE</span>
                </div>
              </div>

              {/* Code content */}
              <div className="p-5 sm:p-6 space-y-4 bg-gradient-to-b from-zinc-900 to-zinc-950">
                <div className="space-y-3 font-mono text-xs sm:text-[13px] leading-relaxed">
                  <div className="flex gap-3">
                    <span className="text-zinc-600 select-none">01</span>
                    <span><span className="text-violet-400">const</span> <span className="text-cyan-300">engineer</span> <span className="text-zinc-500">=</span> <span className="text-zinc-400">{"{"}</span></span>
                  </div>
                  <div className="flex gap-3 pl-6">
                    <span className="text-zinc-600 select-none">02</span>
                    <span><span className="text-emerald-400">role:</span> <span className="text-amber-300">&quot;Full Stack & AI&quot;</span><span className="text-zinc-500">,</span></span>
                  </div>
                  <div className="flex gap-3 pl-6">
                    <span className="text-zinc-600 select-none">03</span>
                    <span><span className="text-emerald-400">stack:</span> <span className="text-zinc-400">[</span><span className="text-amber-300">&quot;Next.js&quot;</span><span className="text-zinc-500">,</span> <span className="text-amber-300">&quot;Node&quot;</span><span className="text-zinc-500">,</span> <span className="text-amber-300">&quot;OpenAI&quot;</span><span className="text-zinc-400">]</span><span className="text-zinc-500">,</span></span>
                  </div>
                  <div className="flex gap-3 pl-6">
                    <span className="text-zinc-600 select-none">04</span>
                    <span><span className="text-emerald-400">focus:</span> <span className="text-amber-300">&quot;AI products that ship&quot;</span><span className="text-zinc-500">,</span></span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-zinc-600 select-none">05</span>
                    <span className="text-zinc-400">{"}"}</span>
                  </div>
                  <div className="flex items-center gap-2 pt-2 text-emerald-400">
                    <span className="text-zinc-600 select-none">›</span>
                    <span className="w-2 h-3 bg-emerald-400 animate-pulse inline-block" />
                    <span className="text-zinc-500 text-[11px]">building...</span>
                  </div>
                </div>

                {/* Mini bento inside */}
                <div className="grid grid-cols-3 gap-3 pt-4">
                  <div className="rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 p-[1px]">
                    <div className="rounded-[15px] bg-zinc-900 p-3 text-center">
                      <Cpu className="w-5 h-5 text-violet-400 mx-auto mb-1.5" />
                      <div className="text-white font-bold text-sm">AI Native</div>
                      <div className="text-[10px] text-zinc-500">RAG · LLMs</div>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-[1px]">
                    <div className="rounded-[15px] bg-zinc-900 p-3 text-center">
                      <Layers className="w-5 h-5 text-cyan-400 mx-auto mb-1.5" />
                      <div className="text-white font-bold text-sm">Full Stack</div>
                      <div className="text-[10px] text-zinc-500">Next · Node</div>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-pink-500 to-orange-500 p-[1px]">
                    <div className="rounded-[15px] bg-zinc-900 p-3 text-center">
                      <Sparkles className="w-5 h-5 text-pink-400 mx-auto mb-1.5" />
                      <div className="text-white font-bold text-sm">Product</div>
                      <div className="text-[10px] text-zinc-500">UX · Ship</div>
                    </div>
                  </div>
                </div>

                {/* Bottom bar */}
                <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs">
                  <span className="text-zinc-500 font-mono flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Available for work
                  </span>
                  <span className="text-zinc-400">Sri Lanka → Remote 🌍</span>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              className="absolute -top-3 -right-3 sm:top-2 sm:-right-6 bg-white text-zinc-900 px-3 py-2 rounded-full shadow-xl flex items-center gap-2 text-xs font-semibold rotate-2"
              animate={{ y: [0, -6, 0], rotate: [2, 1, 2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="w-7 h-7 rounded-full bg-zinc-900 flex items-center justify-center text-white text-[10px]">✦</span>
              AI Engineer
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-2 sm:-left-6 bg-zinc-900 border border-white/[0.08] px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 rotate-[-1deg]"
              animate={{ y: [0, 6, 0], rotate: [-1, -0.5, -1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-sm">✓</div>
              <div>
                <div className="text-white font-semibold text-sm leading-none">IEEE Published</div>
                <div className="text-zinc-500 text-xs">ICAC 2024 Conference</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom tech marquee hint */}
        <motion.div
          className="mt-16 lg:mt-20 relative overflow-hidden rounded-2xl bg-zinc-900/40 border border-white/[0.06] backdrop-blur py-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="flex items-center gap-3 px-4 text-xs font-mono tracking-widest text-zinc-500 uppercase whitespace-nowrap overflow-hidden">
            <span className="shrink-0 text-zinc-300 font-semibold flex items-center gap-2"><Sparkles className="w-3 h-3 text-violet-400" /> Stack in production</span>
            <span className="w-1 h-1 rounded-full bg-zinc-700 shrink-0" />
            <div className="flex gap-6 animate-marquee shrink-0">
              <span>React</span><span>•</span><span>Next.js</span><span>•</span><span>TypeScript</span><span>•</span><span>Node.js</span><span>•</span><span>OpenAI</span><span>•</span><span>Gemini</span><span>•</span><span>RAG</span><span>•</span><span>PostgreSQL</span><span>•</span><span>Docker</span><span>•</span><span>AWS</span>
              <span>React</span><span>•</span><span>Next.js</span><span>•</span><span>TypeScript</span><span>•</span><span>Node.js</span><span>•</span><span>OpenAI</span><span>•</span><span>Gemini</span><span>•</span><span>RAG</span><span>•</span><span>PostgreSQL</span><span>•</span><span>Docker</span><span>•</span><span>AWS</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="text-[10px] font-mono tracking-[0.2em] text-zinc-600 uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-600 to-transparent" />
      </motion.div>
    </section>
  );
}
