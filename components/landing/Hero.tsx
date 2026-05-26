"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden pb-24 pt-28">
      {/* Animated gradient mesh */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          aria-hidden
          className="absolute -left-40 top-10 h-[600px] w-[600px] rounded-full bg-pink-600/30 blur-[140px]"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-pink-500/20 blur-[160px]"
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute bottom-10 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-pink-400/10 blur-[140px]"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid backdrop */}
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10 opacity-50" />

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-center gap-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-pink-500/40 bg-pink-500/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-pink-300 backdrop-blur-md">
            <span className="live-dot" />
            available for sde / sre / mle / mlops roles
          </span>
          <span className="hidden items-center gap-1.5 rounded-full border border-line bg-graphite/40 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-bone backdrop-blur-md sm:inline-flex">
            <Sparkles className="h-3 w-3 text-pink-400" />
            new: incident commander · meta openenv hackathon
          </span>
        </motion.div>

        {/* Title */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <h1 className="font-display text-[clamp(3rem,9vw,8rem)] font-medium leading-[0.92] tracking-[-0.04em] text-cream">
              {["sagnik", " mukherjee."].map((line, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 60, filter: "blur(20px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  {i === 1 ? (
                    <>
                      <span className="aurora-text">mukherjee</span>
                      <span className="text-pink-500">.</span>
                    </>
                  ) : (
                    line
                  )}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 max-w-2xl text-balance text-[17px] leading-relaxed text-bone/80 sm:text-[19px]"
            >
              I build <span className="text-pink-300">agentic AI</span>, real-time computer-vision systems and the{" "}
              <span className="text-pink-300">MLOps + SRE infrastructure</span> that keeps them honest in
              production. Pre-final year at IIIT Naya Raipur — currently shipping for{" "}
              <span className="text-cream">Samsung R&D</span> and{" "}
              <span className="text-cream">SmartMe</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <MagneticButton href="/work" variant="primary">
                see selected work
                <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton href="/stack" variant="outline">
                the full stack
              </MagneticButton>
              <MagneticButton href={site.resumes[0].href} variant="ghost" target="_blank">
                resume ↓
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right meta column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="hidden lg:col-span-3 lg:block"
          >
            <div className="space-y-6">
              <Meta label="role" value="builder · researcher" />
              <Meta label="based in" value="IIIT Naya Raipur" />
              <Meta label="cf rating" value="Specialist" />
              <Meta label="hackathons" value="3× winner" />
              <Meta label="stack" value="next.js · pytorch · k8s" />
              <Meta label="open to" value="MLE · MLOps · SRE · SDE" />
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-ashDim"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            scroll
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l border-pink-500/40 pl-4">
      <div className="text-[10px] uppercase tracking-[0.2em] text-ashDim">{label}</div>
      <div className="mt-1 text-sm text-bone">{value}</div>
    </div>
  );
}
