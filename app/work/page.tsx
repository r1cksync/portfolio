import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Selected Work — Sagnik Mukherjee",
  description:
    "All nine production projects — agentic AI, real-time ML, RL environments, distributed-systems visualisations and geospatial pipelines.",
};

export default function WorkPage() {
  return (
    <div className="pb-24 pt-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="mb-16 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-pink-400">
            <span className="h-px w-8 bg-pink-500" />
            all work
          </div>
          <h1 className="font-display text-5xl font-medium leading-[0.95] tracking-tight text-cream sm:text-6xl lg:text-7xl">
            Every piece, end-to-end:
            <br />
            <span className="aurora-text">models, infra, UI</span>
            <span className="text-pink-500">.</span>
          </h1>
          <p className="mt-8 text-[16px] leading-relaxed text-ash sm:text-[17px]">
            Nine projects spanning agentic AI, computer-vision, reinforcement learning, distributed
            systems and geospatial data. Click any card to read the full case.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
