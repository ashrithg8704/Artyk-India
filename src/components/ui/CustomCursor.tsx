"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const dotX = useSpring(cursorX, { stiffness: 700, damping: 40, mass: 0.2 });
  const dotY = useSpring(cursorY, { stiffness: 700, damping: 40, mass: 0.2 });
  const ringX = useSpring(cursorX, { stiffness: 280, damping: 30, mass: 0.8 });
  const ringY = useSpring(cursorY, { stiffness: 280, damping: 30, mass: 0.8 });

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(media.matches);
    if (media.matches) {
      document.body.classList.add("custom-cursor-enabled");
    }

    const move = (event: MouseEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };
    const enter = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      setActive(Boolean(target.closest("a, button, input, textarea, select, [role='button']")));
    };

    const update = () => {
      const isEnabled = media.matches;
      setEnabled(isEnabled);
      if (isEnabled) {
        document.body.classList.add("custom-cursor-enabled");
      } else {
        document.body.classList.remove("custom-cursor-enabled");
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", enter);
    media.addEventListener("change", update);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", enter);
      media.removeEventListener("change", update);
      document.body.classList.remove("custom-cursor-enabled");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-3 w-3 rounded-full bg-[#f8e4d3]"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: active ? 1.15 : 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border border-[#6d4b39]/65"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: active ? 40 : 28,
          height: active ? 40 : 28,
          opacity: active ? 0.92 : 0.8,
          backgroundColor: active ? "rgba(195, 143, 112, 0.12)" : "rgba(255, 255, 255, 0.03)",
        }}
        transition={{ type: "spring", stiffness: 240, damping: 24 }}
      />
    </>
  );
}
