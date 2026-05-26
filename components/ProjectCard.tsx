"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Github, Globe } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: none), (pointer: coarse)");
    const update = () => setIsTouch(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [4, -4]), { stiffness: 200, damping: 22 });
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-4, 4]), { stiffness: 200, damping: 22 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isTouch) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const handleLeave = () => {
    mx.set(0);
    my.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1200 }}
      className="group relative"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseEnter={() => !isTouch && setHovered(true)}
        onMouseLeave={handleLeave}
        whileTap={isTouch ? { scale: 0.985 } : undefined}
        style={isTouch ? undefined : { rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
        className="relative overflow-hidden rounded-2xl border border-line bg-carbon/80 transition-colors duration-300 hover:border-pink-500/50 active:border-pink-500/60"
      >
        {/* gradient glow ring */}
        <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/20 via-transparent to-pink-400/10 blur-xl" />
        </div>

        <Link href={`/work/${project.slug}`} className="block">
          {/* Image */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-carbon">
            <motion.img
              src={project.cover}
              alt={project.title}
              className="absolute inset-0 h-full w-full object-cover"
              style={{ transform: "translateZ(20px)" }}
              animate={{ scale: hovered ? 1.06 : 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
            {/* corner badge */}
            <div className="absolute left-4 top-4 flex items-center gap-2">
              <span className="rounded-full border border-pink-500/40 bg-ink/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-pink-300 backdrop-blur-md">
                {project.category}
              </span>
              <span className="rounded-full border border-line bg-ink/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-bone backdrop-blur-md">
                {project.year}
              </span>
            </div>
            {project.live && (
              <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-line bg-ink/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-bone backdrop-blur-md">
                <span className="live-dot" />
                Live
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6" style={{ transform: "translateZ(10px)" }}>
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-2xl font-medium leading-tight tracking-tight text-cream transition-colors group-hover:text-pink-300">
                {project.title}
              </h3>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-ashDim transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-pink-400" />
            </div>
            <p className="mt-2 text-[14px] leading-snug text-ash">{project.subtitle}</p>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.tags.slice(0, 6).map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-line bg-ink/40 px-2 py-0.5 font-mono text-[10.5px] text-bone/80"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 6 && (
                <span className="px-2 py-0.5 font-mono text-[10.5px] text-ashDim">
                  +{project.tags.length - 6}
                </span>
              )}
            </div>
          </div>
        </Link>

        {/* Quick actions */}
        <div className="flex items-center gap-2 border-t border-line bg-ink/40 px-6 py-3" style={{ transform: "translateZ(15px)" }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[11.5px] uppercase tracking-[0.15em] text-ash hover:text-pink-300"
            >
              <Github className="h-3.5 w-3.5" />
              Code
            </a>
          )}
          {project.live && (
            <>
              {project.github && <span className="h-3 w-px bg-line" />}
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[11.5px] uppercase tracking-[0.15em] text-ash hover:text-pink-300"
              >
                <Globe className="h-3.5 w-3.5" />
                Live
              </a>
            </>
          )}
          <span className="ml-auto text-[11.5px] uppercase tracking-[0.15em] text-ashDim">
            Read case →
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
