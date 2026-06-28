"use client";

import { motion } from "framer-motion";
import { education, publication, certifications } from "@/data/content";
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-24 section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12">
            <span className="text-sm font-mono text-zinc-500 uppercase tracking-widest">Education</span>
            <h2 className="heading-md mt-2 text-zinc-100">Academic Background</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education Card */}
            <motion.div
              className="border border-zinc-800 rounded-xl bg-zinc-900/30 p-6 space-y-4"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 p-2 rounded-lg bg-zinc-800">
                  <GraduationCap className="w-5 h-5 text-zinc-400" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-zinc-100">{education.degree}</h3>
                  <p className="text-zinc-400 font-medium">{education.institution}</p>
                  {education.specialization && (
                    <p className="text-sm text-zinc-500">Specialization: {education.specialization}</p>
                  )}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {education.period}
                    </span>
                    {education.location && (
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {education.location}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Publication Card */}
            <motion.div
              className="border border-zinc-800 rounded-xl bg-zinc-900/30 p-6 space-y-4"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 p-2 rounded-lg bg-zinc-800">
                  <BookOpen className="w-5 h-5 text-zinc-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-zinc-100">{publication.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{publication.description}</p>
                  <a
                    href={publication.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Publication
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {publication.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-400 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Certifications */}
          {certifications[0]?.name !== "TODO: Add certifications from your CV or LinkedIn" && (
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0 p-2 rounded-lg bg-zinc-800">
                  <Award className="w-5 h-5 text-zinc-400" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-100">Certifications</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="flex flex-wrap items-center gap-4 p-4 rounded-lg border border-zinc-800 bg-zinc-900/30"
                  >
                    <div>
                      <h4 className="text-zinc-200 font-medium">{cert.name}</h4>
                      <p className="text-sm text-zinc-500">
                        {cert.issuer} · {cert.date}
                      </p>
                    </div>
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto text-sm text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        View →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
