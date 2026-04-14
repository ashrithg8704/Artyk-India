 "use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { sampleImages } from "@/lib/sampleImages";

function Counter({ target, label }: { target: number; label: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => {
      setValue((current) => {
        const next = current + Math.ceil(target / 40);
        if (next >= target) {
          clearInterval(id);
          return target;
        }
        return next;
      });
    }, 30);
    return () => clearInterval(id);
  }, [inView, target]);

  return (
    <div ref={ref}>
      <p className="font-display text-4xl italic text-brass md:text-5xl">{value}{label.includes("sq.ft.") ? " sq.ft." : label.includes("+") ? "+" : ""}</p>
      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-greige">{label.replace(" sq.ft.", "").replace("+", "")}</p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-ivory pb-14 pt-8 md:pb-20 md:pt-12">
      <section className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-10 md:grid-cols-2 md:gap-10 md:py-16">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-brass">About Artyk</p>
          <h1 className="font-display text-4xl italic leading-none md:text-5xl">Avinash & Prachi Agarwal</h1>
          <p className="mt-5 text-base font-light text-cognac">Artyk was founded to redefine how India experiences luxury design through a deeply curated and tactile environment that balances European craft with Indian sensibilities.</p>
          <p className="mt-7 font-display text-3xl italic leading-tight text-brass md:text-4xl">We want to redefine the way people engage with design.</p>
        </div>
        <div className="relative h-[340px] overflow-hidden rounded-[1rem] md:h-[500px]"><Image src={sampleImages.hero} alt="Artyk space" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-4 px-6 md:grid-cols-3 md:gap-6">
        <div className="relative h-64 overflow-hidden rounded-[1rem] md:h-72"><Image src={sampleImages.founder} alt="Artyk founder portrait" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" /></div>
        <div className="relative h-64 overflow-hidden rounded-[1rem] md:h-72"><Image src={sampleImages.brands} alt="Artyk interior 2" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" /></div>
        <div className="relative h-64 overflow-hidden rounded-[1rem] md:h-72"><Image src={sampleImages.editorial} alt="Artyk interior 3" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" /></div>
      </section>
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mx-auto mt-10 grid max-w-7xl gap-6 bg-onyx px-6 py-10 md:mt-14 md:grid-cols-3 md:gap-8 md:px-8 md:py-12">
        <Counter target={25000} label="sq.ft." />
        <Counter target={3} label="Floors" />
        <Counter target={7} label="Global Brands+" />
      </motion.section>
    </div>
  );
}