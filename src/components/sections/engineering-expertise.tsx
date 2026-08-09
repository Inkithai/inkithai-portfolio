"use client";

import { motion } from "framer-motion";
import { engineeringExpertise } from "@/data/content";
import { TiltCard } from "@/components/amicro/tilt-card";
import { GlareShine } from "@/components/amicro/glare-shine";
import { WordReveal } from "@/components/amicro/text-reveal";

export function EngineeringExpertiseSection() {
  return (
    <section id="expertise" className="section-y relative">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-7">
            <div className="label-eyebrow mb-5 flex items-center">
              <span className="eyebrow-bar" />
              <span>Engineering Expertise</span>
            </div>
            <h2 className="heading-section max-w-[520px]">
              Built for speed, scale{" "}
              <WordReveal
                text="& intelligence."
                className="text-accent text-gradient-blue"
                delay={0.1}
              />
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-12">
            <p className="body-default max-w-[380px]">
              A focused toolkit for shipping from prototype to production. Organized by
              actually-used stacks, not aspirational ones.
            </p>
          </div>
        </div>

        {/* Bento grid with Tilt Card & Spotlight */}
        <div className="grid md:grid-cols-12 gap-4">
          {engineeringExpertise.map((cat, i) => {
            const layout =
              cat.id === "frontend" || cat.id === "ai"
                ? "md:col-span-7"
                : cat.id === "backend"
                ? "md:col-span-5"
                : "md:col-span-4";

            return (
              <motion.div
                key={cat.id}
                initial={{ y: 12, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className={layout}
              >
                <TiltCard tiltIntensity={6} showSpotlight className="card card-interactive p-6 md:p-7 h-full group">
                  <GlareShine />
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-4 h-px bg-accent group-hover:w-6 transition-all" />
                        <span className="body-mono normal-case tracking-normal text-[10.5px] text-muted">
                          {cat.skills.length} tools
                        </span>
                      </div>
                      <h3 className="heading-sub text-[18px] group-hover:text-accent transition-colors">
                        {cat.title}
                      </h3>
                      <p className="body-default text-[13.5px] mt-1.5">{cat.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 z-20 relative">
                    {cat.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className="badge hover:text-primary hover:border-accent/50 hover:bg-accent/10 transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
