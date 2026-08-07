"use client";

import { motion } from "framer-motion";
import { about, personal, continuousLearning } from "@/data/content";

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#101117]/30 border-t border-[#101117]">
      <div className="container-max section-padding">
        <div className="max-w-[1100px]">
          <div className="label-mono text-[#6F7482] mb-3">About</div>
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <h2 className="heading-section text-[#F5F7FA]">Product-minded engineer who ships AI that people actually use.</h2>
              <div className="mt-6 space-y-4 text-[14px] leading-relaxed text-[#A5A9B6]">
                {about.summary.split("\n\n").map((p, i) => (
                  <p key={i} className={i === 0 ? "text-[#F5F7FA]" : ""}>
                    {p}
                  </p>
                ))}
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                {about.mindset.map((item) => (
                  <div key={item} className="rounded-[14px] bg-[#08090D] border border-[#1E202B] p-4">
                    <div className="text-[13px] leading-relaxed text-[#A5A9B6]">{item}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-[20px] bg-[#08090D] border border-[#1E202B] p-6">
                <div className="text-[11px] font-mono tracking-widest uppercase text-[#6F7482]">Highlights</div>
                <div className="mt-4 space-y-3">
                  {about.highlights.slice(0, 4).map((h, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-[#151720] border border-[#1E202B] flex items-center justify-center text-[10px] font-mono text-[#A5A9B6]">
                        0{i + 1}
                      </span>
                      <span className="text-[13px] leading-relaxed text-[#A5A9B6]">{h.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[20px] bg-[#101117] border border-[#1E202B] p-6">
                <div className="text-[11px] font-mono tracking-widest uppercase text-[#6F7482]">Recent Learning</div>
                <div className="mt-4 space-y-4">
                  {continuousLearning.map((item) => (
                    <div key={item.title} className="pl-4 border-l border-[#1E202B]">
                      <div className="text-[13px] font-semibold text-[#F5F7FA]">{item.title}</div>
                      <div className="text-[12px] text-[#A5A9B6] mt-1 leading-relaxed">{item.description}</div>
                      <div className="text-[11px] font-mono text-[#6F7482] mt-2">{item.period}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[20px] bg-[#151720] border border-[#1E202B] p-4 flex items-center justify-between">
                <div className="text-[12px]">
                  <div className="font-semibold text-[#F5F7FA]">Based in {personal.location}</div>
                  <div className="text-[#6F7482]">Open to remote worldwide</div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#34D399]/10 border border-[#34D399]/20 text-[#34D399] text-[11px] font-bold">● OPEN TO WORK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
