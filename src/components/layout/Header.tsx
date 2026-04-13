"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Collections" },
  { href: "/brands", label: "Brands" },
  { href: "/editorial", label: "Editorial" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header className="fixed inset-x-0 top-0 z-50 border-b border-brass/15 bg-onyx/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-ivory">
        <Link href="/" className="font-display text-3xl italic">
          Artyk
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="underline-sweep text-xs uppercase tracking-[0.2em]">
              {item.label}
            </Link>
          ))}
        </nav>
        <button onClick={() => setOpen(true)} className="text-xs uppercase tracking-[0.2em] md:hidden">
          Menu
        </button>
      </div>
      {open ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 bg-onyx p-10 text-ivory md:hidden">
          <button onClick={() => setOpen(false)} className="mb-14 text-xs uppercase tracking-[0.2em]">
            Close
          </button>
          <motion.nav initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
            {links.map((item) => (
              <motion.div key={item.href} variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }} className="mb-6">
                <Link href={item.href} className="font-display text-4xl italic" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        </motion.div>
      ) : null}
    </motion.header>
  );
}