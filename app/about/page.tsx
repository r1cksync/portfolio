import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { site } from "@/lib/site";
import { experience } from "@/lib/experience";

export const metadata: Metadata = {
  title: "About — Sagnik Mukherjee",
  description:
    "About Sagnik Mukherjee — final year at IIIT Naya Raipur, 3× hackathon winner.",
};

export default function AboutPage() {
  return (
    <div className="pb-24 pt-36">
      <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
        <div className="mb-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-pink-400">
          <span className="h-px w-8 bg-pink-500" />
          about
        </div>

        <h1 className="font-display text-5xl font-medium leading-[0.95] tracking-tight text-cream sm:text-6xl lg:text-7xl">
          Sagnik
          <br />
          <span className="aurora-text">Mukherjee</span>
          <span className="text-pink-500">.</span>
        </h1>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-8">
            <p className="text-balance text-[18px] leading-[1.8] text-bone/90">
              I'm a final year CSE student at the{" "}
              <span className="text-pink-300">International Institute of Information Technology, Naya Raipur</span>,
              a <span className="text-pink-300">3× hackathon winner</span>, a Codeforces Specialist, and an
              ex-NTSE scholar. I build at the seam where machine learning meets production — agents that
              survive real users, models that ship behind real infra.
            </p>
            <p className="text-[16px] leading-[1.8] text-ash">
              The thread running through my work is the same: take an idea that usually dies as a notebook
              and turn it into something that actually runs. That has meant a TensorFlow CNN watching a live
              video classroom, an LLM-driven SRE agent diagnosing real Chaos-Mesh failures on a 5-microservice
              k3s cluster, an 18-agent credit-underwriting system with a regulator-ready audit trail, and a
              D3 knowledge graph stitching together a thousand documents.
            </p>
            <p className="text-[16px] leading-[1.8] text-ash">
              Currently I'm an MLOps + Full-Stack Intern at <span className="text-cream">CSIDC</span>{" "}
              (Chhattisgarh State Industrial Development Corporation), fresh off a{" "}
              Machine Learning internship at <span className="text-cream">Samsung R&D Institute India</span>, with prior internships
              across <span className="text-cream">AmbujaNeotia</span>,{" "}
              <span className="text-cream">MetroMax</span>,{" "}
              <span className="text-cream">Ayatrio</span> and <span className="text-cream">SOFI</span>. I'm
              comfortable from CSS subpixel debugging to GRPO training, and I prefer working at companies
              where both halves of that range matter.
            </p>

            <div className="grid grid-cols-1 gap-3 pt-4 sm:grid-cols-2">
              {site.resumes.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  target="_blank"
                  className="group flex items-center justify-between rounded-xl border border-line bg-graphite/40 p-5 transition-colors hover:border-pink-500/40"
                >
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-pink-400">resume</div>
                    <div className="mt-1 text-sm font-medium text-cream">{r.label.split("— ")[1]}</div>
                  </div>
                  <Download className="h-4 w-4 text-ash transition-colors group-hover:text-pink-300" />
                </Link>
              ))}
            </div>
          </div>

          <aside className="space-y-6 lg:col-span-4">
            {site.badges.map((b) => (
              <div key={b} className="border-l border-pink-500/40 pl-4">
                <div className="text-[10px] uppercase tracking-[0.22em] text-pink-400">·</div>
                <div className="mt-1 text-sm text-cream">{b}</div>
              </div>
            ))}
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 pt-4 text-sm font-semibold text-pink-300 hover:text-pink-400"
            >
              say hi
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </aside>
        </div>

        {/* Quick timeline */}
        <section className="mt-24">
          <h2 className="font-display text-3xl font-medium text-cream sm:text-4xl">
            Experience, in order
            <span className="text-pink-500">.</span>
          </h2>
          <div className="mt-10 space-y-3">
            {experience.map((e) => (
              <div
                key={e.role + e.company}
                className="grid grid-cols-12 items-center gap-4 rounded-xl border border-line bg-graphite/30 p-5 transition-colors hover:border-pink-500/40"
              >
                <div className="col-span-12 sm:col-span-3 text-[11px] uppercase tracking-[0.18em] text-ash">
                  {e.period}
                </div>
                <div className="col-span-12 sm:col-span-6">
                  <div className="font-display text-lg text-cream">{e.role}</div>
                  <div className="text-sm text-bone/80">{e.company}</div>
                </div>
                <div className="col-span-12 sm:col-span-3 text-right">
                  <span className="rounded-full border border-pink-500/40 bg-pink-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-pink-300">
                    {e.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
