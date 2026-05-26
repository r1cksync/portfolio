"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "ghost" | "outline";
  target?: string;
  rel?: string;
};

export default function MagneticButton({
  href,
  onClick,
  children,
  className,
  variant = "primary",
  target,
  rel,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 250, damping: 18, mass: 0.4 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    x.set((e.clientX - cx) * 0.25);
    y.set((e.clientY - cy) * 0.35);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const styles =
    variant === "primary"
      ? "bg-pink-500 text-white shadow-[0_0_30px_-8px_rgba(255,45,135,0.7)] hover:shadow-[0_0_40px_-4px_rgba(255,45,135,1)] border border-pink-400"
      : variant === "outline"
      ? "border border-line bg-graphite/60 text-bone hover:border-pink-400 hover:text-pink-300"
      : "text-bone hover:text-pink-300";

  const inner = (
    <span className={cn(
      "relative z-10 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all",
      styles,
    )}>
      {children}
    </span>
  );

  const Content = (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn("relative inline-block", className)}
    >
      {inner}
    </motion.div>
  );

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <Link href={href} target={target ?? (isExternal ? "_blank" : undefined)} rel={rel ?? (isExternal ? "noreferrer" : undefined)} className="inline-block">
        {Content}
      </Link>
    );
  }
  return (
    <button type="button" onClick={onClick} className="inline-block">
      {Content}
    </button>
  );
}
