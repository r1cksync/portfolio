"use client";

import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const ringRef = useRef<HTMLDivElement | null>(null);
  const hoverRef = useRef(false);
  const targetX = useRef(-100);
  const targetY = useRef(-100);
  const currentX = useRef(-100);
  const currentY = useRef(-100);

  useEffect(() => {
    // Skip on touch / coarse-pointer devices entirely
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: none), (pointer: coarse), (max-width: 767px)");
    if (mq.matches) return;

    const ring = ringRef.current;
    if (!ring) return;

    const onMove = (e: MouseEvent) => {
      targetX.current = e.clientX;
      targetY.current = e.clientY;
      ring.style.opacity = "1";
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      hoverRef.current = !!t.closest("a, button, [data-cursor='hover']");
    };
    const onLeave = () => {
      ring.style.opacity = "0";
    };

    let raf = 0;
    const tick = () => {
      currentX.current += (targetX.current - currentX.current) * 0.22;
      currentY.current += (targetY.current - currentY.current) * 0.22;
      const s = hoverRef.current ? 2.2 : 1;
      ring.style.transform = `translate3d(${currentX.current}px, ${currentY.current}px, 0) translate(-50%, -50%) scale(${s})`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ringRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-6 w-6 rounded-full border border-pink-400/70 opacity-0 mix-blend-difference transition-[opacity] duration-200 md:block"
      style={{ willChange: "transform", transform: "translate3d(-100px,-100px,0)" }}
    />
  );
}

