"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CursorFollower() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor='hover']")) setHover(true);
      else setHover(false);
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseleave", leave);
    };
  }, [visible]);

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            className="pointer-events-none fixed z-[100] hidden md:block"
            style={{ left: pos.x, top: pos.y, translateX: "-50%", translateY: "-50%" }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              scale: hover ? 2.4 : 1,
            }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.4 }}
          >
            <div className="h-6 w-6 rounded-full border border-pink-400/70 mix-blend-difference" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {visible && (
          <motion.div
            className="pointer-events-none fixed z-[99] hidden md:block"
            style={{ left: pos.x, top: pos.y, translateX: "-50%", translateY: "-50%" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "linear", duration: 0.08 }}
          >
            <div className="h-[400px] w-[400px] rounded-full bg-pink-500/20 blur-[120px]" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
