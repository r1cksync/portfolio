"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 20, suffix: "+", label: "Production projects" },
  { value: 6, suffix: "", label: "Industry internships" },
  { value: 3, suffix: "×", label: "Hackathon wins" },
  { value: 200, suffix: "", label: "AI agents shipped" },
  { value: 400, suffix: "+", label: "RL scenarios trained" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [v, setV] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {v}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="relative border-y border-line bg-ink/60">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-px bg-line sm:grid-cols-3 lg:grid-cols-5">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="group relative bg-ink px-6 py-10 transition-colors hover:bg-graphite/40"
          >
            <div className="font-display text-4xl font-medium leading-none tracking-tight text-cream sm:text-5xl">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-3 text-[11px] uppercase tracking-[0.18em] text-ash">
              {s.label}
            </div>
            <div className="absolute bottom-0 left-0 h-px w-0 bg-pink-500 transition-all duration-500 group-hover:w-full" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
