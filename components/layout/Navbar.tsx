"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Github } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-line/60 bg-ink/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="group flex items-center gap-2.5" aria-label="Home">
          <motion.span
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 90 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="grid h-9 w-9 place-items-center rounded-lg border border-pink-500/40 bg-pink-500/10"
          >
            <span className="font-display text-lg font-semibold text-pink-300">s</span>
          </motion.span>
          <div className="hidden sm:block">
            <div className="font-display text-[15px] font-medium leading-tight tracking-tight text-cream">
              sagnik mukherjee
            </div>
            <div className="text-[10.5px] uppercase tracking-[0.18em] text-ash">
              Pre-Final @ IIIT-NR
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-sm text-bone/80 transition-colors hover:text-pink-300"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-pink-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="hidden h-9 items-center gap-2 rounded-full border border-line bg-graphite/60 px-3 text-xs font-medium text-bone transition-all hover:border-pink-500/60 hover:text-pink-300 sm:flex"
          >
            <Github className="h-3.5 w-3.5" />
            r1cksync
          </Link>
          <Link
            href="/#contact"
            className="group relative hidden h-9 items-center gap-2 overflow-hidden rounded-full bg-pink-500 px-4 text-xs font-semibold text-white shadow-[0_0_30px_-8px_rgba(255,45,135,0.8)] transition-all hover:shadow-[0_0_40px_-4px_rgba(255,45,135,1)] sm:inline-flex"
          >
            <span className="relative z-10">let's talk</span>
            <span className="relative z-10 transition-transform group-hover:translate-x-0.5">→</span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-line bg-graphite/60 text-bone lg:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden border-t border-line bg-ink/95 backdrop-blur-xl lg:hidden"
          >
            <div className="space-y-1 px-5 py-5">
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm font-medium text-bone hover:bg-pink-500/10 hover:text-pink-300"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-lg bg-pink-500 px-3 py-3 text-center text-sm font-semibold text-white"
              >
                let's talk →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
