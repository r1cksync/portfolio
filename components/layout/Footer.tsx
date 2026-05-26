import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-line bg-ink">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-[1200px] bg-gradient-to-r from-transparent via-pink-500/60 to-transparent" />

      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="font-display text-5xl leading-[0.9] tracking-tight text-cream sm:text-6xl lg:text-7xl">
              build
              <br />
              <span className="aurora-text">something real</span>
              <span className="text-pink-500">.</span>
            </div>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ash">
              Got an agent that should be production-grade? A model that needs to live on real infra?
              A frontend that should feel <em className="text-pink-300 not-italic">expensive</em>? Let's talk.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`mailto:${site.email}`}
                className="group inline-flex items-center gap-2 rounded-full bg-pink-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_30px_-8px_rgba(255,45,135,0.8)] transition-all hover:shadow-[0_0_40px_-4px_rgba(255,45,135,1)]"
              >
                {site.email}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.2em] text-ashDim">Navigate</div>
            <ul className="mt-4 space-y-2.5">
              {site.nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-[15px] text-bone transition-colors hover:text-pink-300"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.2em] text-ashDim">Elsewhere</div>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href={site.github}
                  target="_blank"
                  className="group inline-flex items-center gap-2 text-[15px] text-bone transition-colors hover:text-pink-300"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                  <ArrowUpRight className="h-3 w-3 opacity-50 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
              <li>
                <Link
                  href={site.linkedin}
                  target="_blank"
                  className="group inline-flex items-center gap-2 text-[15px] text-bone transition-colors hover:text-pink-300"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                  <ArrowUpRight className="h-3 w-3 opacity-50 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
              <li>
                <Link
                  href={`mailto:${site.email}`}
                  className="group inline-flex items-center gap-2 text-[15px] text-bone transition-colors hover:text-pink-300"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-ashDim">
            © {new Date().getFullYear()} {site.name} · Designed & built from scratch in Next.js + Framer Motion.
          </div>
          <div className="flex items-center gap-2 text-xs text-ashDim">
            <span className="live-dot" />
            <span>{site.status}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
