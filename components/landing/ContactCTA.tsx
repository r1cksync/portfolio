"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Linkedin, Github } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import { site } from "@/lib/site";

export default function ContactCTA() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-pink-500/40 bg-gradient-to-br from-graphite/80 via-ink to-graphite/80 px-8 py-20 sm:px-16 sm:py-28"
        >
          {/* glow */}
          <div className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-pink-500/30 blur-[120px]" />
          <div className="pointer-events-none absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-pink-400/20 blur-[120px]" />

          <div className="relative grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="mb-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-pink-300">
                <span className="live-dot" />
                let's build
              </div>
              <h2 className="font-display text-5xl font-medium leading-[0.95] tracking-tight text-cream sm:text-6xl lg:text-7xl">
                Have something
                <br />
                <span className="aurora-text">worth shipping?</span>
              </h2>
              <p className="mt-8 max-w-xl text-[16px] leading-relaxed text-ash sm:text-[17px]">
                I'm open to <span className="text-pink-300">full-time MLE / MLOps / AIE</span> and{" "}
                <span className="text-pink-300">SDE / SRE</span> roles, and selectively to interesting
                contract work. Drop a line — I read everything.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <MagneticButton href={`mailto:${site.email}`} variant="primary">
                  {site.email}
                  <ArrowUpRight className="h-4 w-4" />
                </MagneticButton>
                <MagneticButton href={site.linkedin} variant="outline" target="_blank">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </MagneticButton>
                <MagneticButton href={site.github} variant="outline" target="_blank">
                  <Github className="h-4 w-4" />
                  GitHub
                </MagneticButton>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="space-y-5 rounded-2xl border border-line bg-ink/50 p-6 backdrop-blur-md">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-pink-400">currently</div>
                  <div className="mt-1 text-sm text-cream">{site.status}</div>
                </div>
                <div className="shimmer-divider" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-pink-400">based in</div>
                  <div className="mt-1 text-sm text-cream">{site.location}</div>
                </div>
                <div className="shimmer-divider" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-pink-400">response time</div>
                  <div className="mt-1 text-sm text-cream">usually within 24h</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
