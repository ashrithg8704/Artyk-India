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
    <motion.header initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <div className="glass-panel mx-auto flex max-w-7xl items-center justify-between rounded-full px-6 py-4 text-onyx md:px-8">
        <Link href="/" className="font-display text-4xl leading-none italic tracking-tight">
          artyk.
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="underline-sweep text-[11px] font-medium uppercase tracking-[0.22em] text-[#4d3a2f] transition hover:text-onyx">
              {item.label}
            </Link>
          ))}
        </nav>
        <button onClick={() => setOpen(true)} className="rounded-full border border-[#4d3a2f]/25 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-onyx md:hidden">
          Menu
        </button>
      </div>
      {open ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 subtle-grid bg-[#efe3d7] px-8 py-14 text-onyx md:hidden">
          <button onClick={() => setOpen(false)} className="mb-12 rounded-full border border-[#4d3a2f]/25 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]">
            Close
          </button>
          <motion.nav initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
            {links.map((item) => (
              <motion.div key={item.href} variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }} className="mb-5 border-b border-[#4d3a2f]/15 pb-3">
                <Link href={item.href} className="font-display text-5xl leading-none italic" onClick={() => setOpen(false)}>
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