"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { stack } from "@/lib/stack";

export default function StackPreview() {
  const groups = stack.slice(0, 6);

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
              stack / 03
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-5xl font-medium leading-[0.95] tracking-tight text-cream sm:text-6xl lg:text-7xl"
            >
              The tools
              <br />
              <span className="aurora-text">I actually reach for</span>
              <span className="text-pink-500">.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4 lg:text-right"
          >
            <p className="mb-5 text-[15px] leading-relaxed text-ash">
              A few are listed on my resume. The rest are things I've shipped, broken and re-shipped in production.
            </p>
            <Link
              href="/stack"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-pink-300 hover:text-pink-400"
            >
              full breakdown
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group rounded-2xl border border-line bg-graphite/40 p-6 transition-colors hover:border-pink-500/40"
            >
              <div className="mb-1 text-[10px] uppercase tracking-[0.22em] text-pink-400">
                0{i + 1}
              </div>
              <h3 className="font-display text-xl font-medium text-cream">{g.title}</h3>
              <p className="mt-1 text-xs text-ashDim">{g.caption}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {g.items.slice(0, 8).map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-line bg-ink/40 px-2 py-0.5 font-mono text-[10.5px] text-bone/80 transition-colors group-hover:border-pink-500/30"
                  >
                    {t}
                  </span>
                ))}
                {g.items.length > 8 && (
                  <span className="px-2 py-0.5 font-mono text-[10.5px] text-ashDim">
                    +{g.items.length - 8}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
