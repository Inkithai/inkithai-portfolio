"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personal } from "@/data/content";
import { Mail, Copy, Check, Phone, ArrowUpRight, Sparkles, MessageCircle, MapPin, Clock } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/ui/icons";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${personal.email}`;
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-zinc-900/40 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-max relative">
        {/* Hero CTA */}
        <div className="relative rounded-[32px] overflow-hidden bg-zinc-900 border border-white/[0.08] mb-10">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/15 via-indigo-600/10 to-cyan-600/15" />
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />

          <div className="relative grid lg:grid-cols-12 gap-8 p-6 sm:p-10 lg:p-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-zinc-900 text-xs font-bold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                AVAILABLE FOR NEW ROLES
                <span className="hidden sm:inline-flex items-center gap-1 ml-1 px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[10px]">RESPONDS IN ~2H</span>
              </div>

              <div>
                <h2 className="heading-display text-[36px] sm:text-[44px] lg:text-[52px] text-white leading-[0.9] tracking-[-0.03em]">
                  Let&apos;s build
                  <span className="block text-gradient-accent">something great.</span>
                </h2>
                <p className="text-zinc-400 mt-4 max-w-xl text-[15px] leading-relaxed">
                  Actively exploring Software Engineering roles — especially where AI meets product. Drop a message, I&apos;ll get back within hours.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-zinc-900 font-semibold hover:bg-zinc-100 transition-colors shadow-xl shadow-white/10 group"
                >
                  <Mail className="w-4 h-4" />
                  Email me directly
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-zinc-800 border border-white/10 text-white font-medium hover:bg-zinc-700 transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  {copied ? "Copied!" : "Copy email"}
                </button>
              </div>

              <div className="flex items-center gap-4 text-xs text-zinc-500 font-mono pt-2">
                <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" /> {personal.location}</span>
                <span className="w-1 h-1 rounded-full bg-zinc-700" />
                <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> UTC+5:30 • Flexible hours</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[20px] bg-zinc-950 border border-white/[0.06] p-5 space-y-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold">IM</div>
                  <div>
                    <div className="text-white font-semibold text-sm flex items-center gap-2">
                      Inkithai Meiyalagan
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <div className="text-zinc-500 text-xs">Replies usually within 2 hours</div>
                  </div>
                  <Sparkles className="w-4 h-4 text-amber-400 ml-auto" />
                </div>

                <div className="space-y-3">
                  <div className="rounded-2xl bg-white text-zinc-900 p-4 text-sm leading-relaxed shadow">
                    Hey! I&apos;m interested in your AI work — especially EduFlow & Drafty.AI. Are you open to a quick chat this week?
                    <div className="text-[11px] text-zinc-500 mt-1">Typical recruiter message • 9:41 AM</div>
                  </div>
                  <div className="rounded-2xl bg-zinc-800 border border-white/10 p-4 text-sm leading-relaxed text-zinc-300 ml-6">
                    Absolutely — I&apos;d love to connect! I&apos;m available for calls and can share architecture details & demos. What timezone works for you?
                    <div className="text-[11px] text-zinc-500 mt-1">You • just now</div>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <a href={personal.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#0A66C2] text-white text-sm font-semibold hover:bg-[#0958a8] transition-colors">
                    <LinkedinIcon className="w-4 h-4" /> LinkedIn
                  </a>
                  <a href={personal.socials.github} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-full bg-white text-zinc-900 text-sm font-semibold hover:bg-zinc-100 transition-colors">
                    <GithubIcon className="w-4 h-4" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: Mail,
              label: "Email",
              value: personal.email,
              sub: "Fastest response",
              href: `mailto:${personal.email}`,
              cta: copied ? "Copied ✓" : "Copy",
              action: handleCopyEmail,
              gradient: "from-violet-600 to-indigo-600",
            },
            {
              icon: GithubIcon,
              label: "GitHub",
              value: "github.com/Inkithai",
              sub: "Code & contributions",
              href: personal.socials.github,
              cta: "Visit",
              gradient: "from-zinc-700 to-zinc-900",
            },
            {
              icon: LinkedinIcon,
              label: "LinkedIn",
              value: "linkedin.com/in/inkithai",
              sub: "Let’s connect",
              href: personal.socials.linkedin,
              cta: "Connect",
              gradient: "from-blue-600 to-sky-600",
            },
            {
              icon: Phone,
              label: "Phone",
              value: personal.phone,
              sub: "Available 9AM–9PM LK",
              href: `tel:${personal.phone}`,
              cta: "Call",
              gradient: "from-emerald-600 to-teal-600",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            const isEmail = item.label === "Email";
            return (
              <motion.a
                key={item.label}
                href={!isEmail ? item.href : undefined}
                target={!isEmail ? "_blank" : undefined}
                rel={!isEmail ? "noopener noreferrer" : undefined}
                onClick={isEmail ? (e) => { e.preventDefault(); item.action?.(); } : undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="group relative rounded-2xl bg-zinc-900 border border-white/[0.06] p-5 hover:border-white/10 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4 cursor-pointer overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity`} />
                <div className="relative flex items-center justify-between">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white text-zinc-900 text-xs font-bold group-hover:bg-zinc-900 group-hover:text-white border border-transparent group-hover:border-white/10 transition-colors">
                    {item.cta} <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
                <div className="relative">
                  <div className="text-xs font-mono tracking-widest uppercase text-zinc-500">{item.label}</div>
                  <div className="text-sm font-semibold text-white mt-1 break-all">{item.value}</div>
                  <div className="text-xs text-zinc-600 mt-1">{item.sub}</div>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          className="mt-8 text-center flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-white/[0.06] text-xs text-zinc-500">
            <MessageCircle className="w-3.5 h-3.5" />
            Prefer async? Email works best — I check it every 2 hours.
          </div>
          <p className="text-xs text-zinc-600">Based in {personal.location} • Open to remote worldwide • Response time &lt; 3 hours</p>
        </motion.div>
      </div>
    </section>
  );
}
