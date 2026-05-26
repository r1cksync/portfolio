"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/experience";

export default function ExperienceTimeline() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="mb-16 grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-pink-400"
            >
              <span className="h-px w-8 bg-pink-500" />
              experience / 02
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-5xl font-medium leading-[0.95] tracking-tight text-cream sm:text-6xl lg:text-7xl"
            >
              Seven internships
              <br />
              <span className="aurora-text">across the stack</span>
              <span className="text-pink-500">.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[15px] leading-relaxed text-ash lg:col-span-4 lg:text-right"
          >
            From <span className="text-cream">CSIDC</span> govt-scale fullstack to{" "}
            <span className="text-cream">Samsung R&D</span> applied ML — RAG wins, GAN wins,
            infra wins, all real.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-pink-500 via-pink-500/30 to-transparent md:left-1/2 md:block" />

          <div className="space-y-12">
            {experience.map((e, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={`${e.company}-${e.period}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="relative md:grid md:grid-cols-2 md:gap-16"
                >
                  {/* dot */}
                  <div className="absolute left-4 top-2 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-ink bg-pink-500 shadow-[0_0_20px_4px_rgba(255,45,135,0.5)] md:left-1/2 md:block" />

                  <div className={left ? "md:pr-8 md:text-right" : "md:col-start-2 md:pl-8"}>
                    <div className="rounded-2xl border border-line bg-graphite/40 p-7 backdrop-blur-sm transition-colors hover:border-pink-500/40">
                      <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-pink-300">
                        <span className="rounded-full border border-pink-500/40 bg-pink-500/10 px-2 py-0.5">
                          {e.tag}
                        </span>
                        <span className="text-ashDim">{e.period}</span>
                      </div>
                      <h3 className="mt-3 font-display text-2xl font-medium leading-tight text-cream">
                        {e.role}
                      </h3>
                      <div className="mt-1 text-sm text-bone/90">{e.company}</div>
                      <div className="mt-0.5 text-xs text-ashDim">{e.location}</div>
                      <ul className="mt-5 space-y-2">
                        {e.bullets.map((b) => (
                          <li
                            key={b}
                            className={
                              "relative pl-5 text-[13.5px] leading-relaxed text-bone/80 before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-pink-400 " +
                              (left ? "md:text-right md:pl-0 md:pr-5 md:before:left-auto md:before:right-0" : "")
                            }
                          >
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
