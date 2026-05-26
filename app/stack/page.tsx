import type { Metadata } from "next";
import { stack } from "@/lib/stack";

export const metadata: Metadata = {
  title: "Stack — Sagnik Mukherjee",
  description:
    "The full set of languages, frameworks and tools I reach for — across frontend, backend, ML, MLOps, SRE and distributed systems.",
};

export default function StackPage() {
  return (
    <div className="pb-24 pt-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="mb-16 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-pink-400">
            <span className="h-px w-8 bg-pink-500" />
            the full stack
          </div>
          <h1 className="font-display text-5xl font-medium leading-[0.95] tracking-tight text-cream sm:text-6xl lg:text-7xl">
            Everything
            <br />
            <span className="aurora-text">I reach for</span>
            <span className="text-pink-500">.</span>
          </h1>
          <p className="mt-8 text-[16px] leading-relaxed text-ash sm:text-[17px]">
            Some of these are on the resume. Most have been shipped, broken and re-shipped in
            production — across nine real projects and six internships.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((g, i) => (
            <div
              key={g.title}
              className="group rounded-2xl border border-line bg-graphite/40 p-6 transition-colors hover:border-pink-500/40"
            >
              <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.22em] text-pink-400">
                {String(i + 1).padStart(2, "0")} / {String(stack.length).padStart(2, "0")}
              </div>
              <h2 className="font-display text-2xl font-medium text-cream">{g.title}</h2>
              <p className="mt-1 text-xs text-ashDim">{g.caption}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {g.items.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-line bg-ink/40 px-2.5 py-1 font-mono text-[11px] text-bone/85 transition-colors hover:border-pink-500/40 hover:text-pink-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
