import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github, Globe } from "lucide-react";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const p = getProject(params.slug);
  if (!p) return { title: "Not found" };
  return {
    title: `${p.title} — Sagnik Mukherjee`,
    description: p.subtitle,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = getProject(params.slug);
  if (!p) notFound();

  const others = projects.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <article className="pb-24 pt-36">
      <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ash hover:text-pink-300"
        >
          <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-0.5" />
          all work
        </Link>

        <div className="mt-10">
          <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.18em]">
            <span className="rounded-full border border-pink-500/40 bg-pink-500/10 px-2.5 py-1 text-pink-300">
              {p.category}
            </span>
            <span className="rounded-full border border-line bg-graphite/40 px-2.5 py-1 text-bone">
              {p.year}
            </span>
            {p.live && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-graphite/40 px-2.5 py-1 text-bone">
                <span className="live-dot" />
                Live
              </span>
            )}
          </div>

          <h1 className="mt-6 font-display text-5xl font-medium leading-[0.95] tracking-tight text-cream sm:text-6xl lg:text-7xl">
            {p.title}
            <span className="text-pink-500">.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-[17px] leading-relaxed text-ash sm:text-[19px]">
            {p.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-line bg-graphite/60 px-5 py-2.5 text-sm font-semibold text-bone transition-all hover:border-pink-400 hover:text-pink-300"
              >
                <Github className="h-4 w-4" />
                view code
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            )}
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-pink-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_30px_-8px_rgba(255,45,135,0.8)] transition-all hover:shadow-[0_0_40px_-4px_rgba(255,45,135,1)]"
              >
                <Globe className="h-4 w-4" />
                live demo
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            )}
          </div>
        </div>

        {/* Cover */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-line bg-carbon">
          <div className="relative aspect-[16/9] w-full">
            <img
              src={p.cover}
              alt={p.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
          </div>
        </div>

        {/* Highlights */}
        <section className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.22em] text-pink-400">highlights</div>
          </div>
          <div className="space-y-3 lg:col-span-8">
            {p.highlights.map((h, i) => (
              <div
                key={i}
                className="rounded-xl border border-line bg-graphite/40 p-5 transition-colors hover:border-pink-500/40"
              >
                <div className="flex gap-4">
                  <div className="font-mono text-[10px] text-pink-400">0{i + 1}</div>
                  <p className="text-[15px] leading-relaxed text-bone">{h}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Description */}
        <section className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.22em] text-pink-400">the work</div>
          </div>
          <div className="lg:col-span-8">
            <p className="text-balance text-[16px] leading-[1.8] text-bone/90 sm:text-[17px]">
              {p.description}
            </p>
          </div>
        </section>

        {/* Stack */}
        <section className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.22em] text-pink-400">stack</div>
          </div>
          <div className="flex flex-wrap gap-2 lg:col-span-8">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-md border border-line bg-graphite/40 px-3 py-1.5 font-mono text-xs text-bone"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Others */}
        <section className="mt-24 border-t border-line pt-12">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="font-display text-3xl font-medium text-cream sm:text-4xl">
              More work
            </h2>
            <Link
              href="/work"
              className="text-xs uppercase tracking-[0.2em] text-pink-300 hover:text-pink-400"
            >
              all →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/work/${o.slug}`}
                className="group block overflow-hidden rounded-xl border border-line bg-graphite/40 transition-colors hover:border-pink-500/40"
              >
                <div className="relative aspect-[16/10] w-full bg-carbon">
                  <img
                    src={o.cover}
                    alt={o.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                </div>
                <div className="p-4">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-pink-300">{o.category}</div>
                  <h3 className="mt-1 font-display text-lg leading-tight text-cream group-hover:text-pink-300">
                    {o.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
