"use client";

import { motion } from "framer-motion";
import { flatStack } from "@/lib/stack";

export default function TechMarquee() {
  const items = [...flatStack, ...flatStack];

  return (
    <div className="relative w-full overflow-hidden border-y border-line bg-ink/40 py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-ink to-transparent" />
      <motion.div
        className="flex w-max gap-10 whitespace-nowrap will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 60, repeat: Infinity }}
      >
        {items.map((t, i) => (
          <div key={`${t}-${i}`} className="flex items-center gap-10 text-sm">
            <span className="font-display tracking-tight text-bone/70 transition-colors hover:text-pink-300">
              {t}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-pink-500/60" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
