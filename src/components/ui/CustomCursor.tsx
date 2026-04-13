"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [point, setPoint] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const [touch, setTouch] = useState(false);

  useEffect(() => {
    setTouch(window.matchMedia("(pointer: coarse)").matches);
    const move = (event: MouseEvent) => setPoint({ x: event.clientX, y: event.clientY });
    const enter = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      setActive(Boolean(target.closest("a, button")));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", enter);
    };
  }, []);

  if (touch) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[70] rounded-full border border-brass"
      animate={{
        x: point.x - (active ? 20 : 6),
        y: point.y - (active ? 20 : 6),
        width: active ? 40 : 12,
        height: active ? 40 : 12,
        backgroundColor: active ? "rgba(184, 148, 78, 0.2)" : "rgba(0, 0, 0, 0)",
      }}
      transition={{ type: "spring", stiffness: 280, damping: 25 }}
    />
  );
}
