"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  variants: Variants;
  viewport?: { once?: boolean; amount?: number };
  className?: string;
};

export default function RevealOnScroll({
  children,
  variants,
  viewport = { once: true, amount: 0.2 },
  className,
}: RevealOnScrollProps) {
  return (
    <motion.div
      initial={false}
      whileInView="visible"
      viewport={viewport}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}