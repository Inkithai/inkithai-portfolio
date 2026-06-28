"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { personal } from "@/data/content";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function HeroSection() {
  const [emailCopied, setEmailCopied] = useState(false);

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
      className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(99,102,241,0.1),_transparent_50%)]" />

      <div className="container-max relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {personal.status.looking && (
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              {personal.status.label}
            </motion.div>
          )}

          <h1 className="heading-lg mb-4">
            <span className="text-zinc-100">{personal.name}</span>
          </h1>

          <motion.p
            className="text-xl sm:text-2xl text-zinc-400 mb-4 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {personal.title}
          </motion.p>

          <motion.p
            className="text-body text-zinc-500 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {personal.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href={personal.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-100 text-zinc-900 font-medium hover:bg-zinc-200 transition-all duration-200 hover:scale-[1.02]"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
            <button
              onClick={handleCopyEmail}
              className={cn(
                "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border font-medium transition-all duration-200 hover:scale-[1.02]",
                emailCopied
                  ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                  : "border-zinc-700 bg-zinc-800/50 text-zinc-300 hover:border-zinc-600 hover:bg-zinc-800"
              )}
            >
              <Mail className="w-4 h-4" />
              {emailCopied ? "Copied!" : "Contact Me"}
            </button>
            <a
              href="https://github.com/Inkithai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-700 bg-zinc-800/50 text-zinc-300 font-medium hover:border-zinc-600 hover:bg-zinc-800 transition-all duration-200 hover:scale-[1.02]"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/inkithai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-700 bg-zinc-800/50 text-zinc-300 font-medium hover:border-zinc-600 hover:bg-zinc-800 transition-all duration-200 hover:scale-[1.02]"
            >
              <LinkedinIcon className="w-4 h-4" />
              LinkedIn
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-zinc-600" />
        </motion.div>
      </div>
    </section>
  );
}
