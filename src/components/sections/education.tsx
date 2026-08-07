"use client";

import { motion } from "framer-motion";
import { education, publication, certifications } from "@/data/content";
import { GraduationCap, Calendar, MapPin, BookOpen, Award, ExternalLink, Sparkles, Quote } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-20 lg:py-28 section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.03] to-transparent pointer-events-none" />
      <div className="container-max relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-mono tracking-widest uppercase mb-4">
              <GraduationCap className="w-3 h-3" />
              Academic Foundation
            </div>
            <h2 className="heading-md text-white">Learning that compounds</h2>
          </div>
          <p className="text-sm text-zinc-500 max-w-md leading-relaxed">Formal education blended with continuous shipping — theory meets production.</p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Education Card - larger */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-full rounded-[24px] bg-zinc-900 border border-white/[0.08] overflow-hidden relative group hover:border-white/15 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-violet-600/10 to-transparent opacity-60 pointer-events-none" />
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-600/15 transition-colors" />

              <div className="relative p-6 sm:p-8 h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-wide">GRADUATED 2025</span>
                </div>

                <div className="space-y-3 flex-1">
                  <div className="inline-flex px-2.5 py-1 rounded-full bg-white text-zinc-900 text-xs font-bold">SLIIT · Sri Lanka</div>
                  <h3 className="text-xl font-display font-bold text-white leading-tight">
                    {education.degree}
                  </h3>
                  <p className="text-zinc-400 font-medium text-sm">Specialization: {education.specialization}</p>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Core foundation in systems design, algorithms, and software engineering — augmented by hands-on AI research and production shipping.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 pt-6 border-t border-white/[0.06]">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-950 border border-white/10 text-zinc-300 text-xs font-mono">
                    <Calendar className="w-3 h-3" /> {education.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-950 border border-white/10 text-zinc-300 text-xs font-mono">
                    <MapPin className="w-3 h-3" /> {education.location}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Publication Card */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <div className="h-full rounded-[24px] bg-zinc-900 border border-white/[0.08] overflow-hidden relative group hover:border-white/15 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-transparent pointer-events-none" />
              <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative p-6 sm:p-8 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-mono tracking-widest uppercase text-amber-300 flex items-center gap-1.5">
                        <Award className="w-3 h-3" /> IEEE Publication
                      </div>
                      <div className="text-sm font-semibold text-white">ICAC 2024 Conference</div>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white text-zinc-900 text-xs font-bold">
                    <Sparkles className="w-3 h-3" /> PEER REVIEWED
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-display font-bold text-white leading-tight">
                  {publication.title}
                </h3>

                <div className="mt-3 relative pl-4 border-l-2 border-amber-500/30">
                  <Quote className="absolute -top-1 -left-1.5 w-3 h-3 text-amber-500 bg-zinc-900" />
                  <p className="text-sm text-zinc-400 leading-relaxed">{publication.description}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-5">
                  {publication.technologies.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.06] text-zinc-300 text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <a
                    href={publication.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-zinc-900 font-semibold text-sm hover:bg-zinc-100 transition-colors shadow-lg"
                  >
                    Read on IEEE Xplore
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <span className="text-xs text-zinc-600 font-mono hidden sm:inline">DOI: 10.1109/ICAC • 2024</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Certifications */}
        {certifications[0]?.name !== "TODO: Add certifications from your CV or LinkedIn" && (
          <motion.div
            className="mt-6 rounded-[24px] bg-zinc-900 border border-white/[0.06] p-6 sm:p-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-display font-bold text-white">Certifications</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {certifications.map((cert, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-950 border border-white/[0.06] hover:border-white/10 transition-colors">
                  <div>
                    <h4 className="text-white font-medium text-sm">{cert.name}</h4>
                    <p className="text-xs text-zinc-500">
                      {cert.issuer} · {cert.date}
                    </p>
                  </div>
                  {cert.url && (
                    <a href={cert.url} target="_blank" rel="noopener noreferrer" className="ml-auto w-8 h-8 rounded-full bg-white text-zinc-900 flex items-center justify-center">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
