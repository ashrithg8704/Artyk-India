"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { sampleImages } from "@/lib/sampleImages";

type VisualCollection = {
  id: string;
  title: string;
  category: string;
  href: string;
  image: string;
};

type VisualEditorial = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
};

type Props = {
  collections: VisualCollection[];
  editorials: VisualEditorial[];
};

export function HomeScrollExperience({ collections, editorials }: Props) {
  const morphRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll();

  const cardOneY = useTransform(scrollYProgress, [0.1, 0.6], [120, -40]);
  const cardTwoY = useTransform(scrollYProgress, [0.1, 0.6], [180, 12]);
  const cardThreeY = useTransform(scrollYProgress, [0.1, 0.6], [220, 70]);
  const cardOneRotate = useTransform(scrollYProgress, [0.1, 0.6], [-7, -1]);
  const cardTwoRotate = useTransform(scrollYProgress, [0.1, 0.6], [4, 0]);
  const cardThreeRotate = useTransform(scrollYProgress, [0.1, 0.6], [8, 2]);
  const textOpacity = useTransform(scrollYProgress, [0.26, 0.4, 0.58, 0.72], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.26, 0.4, 0.72], [36, 0, -26]);

  return (
    <>
      <section ref={morphRef} className="subtle-grid relative px-6 pb-4 pt-8 md:px-8 md:pb-6 md:pt-10">
        <div className="mx-auto max-w-7xl md:hidden">
          <div className="grid gap-4">
            <div className="relative h-[220px] overflow-hidden rounded-[1.2rem] shadow-xl">
              <Image src={collections[0]?.image ?? editorials[0]?.image ?? sampleImages.collectionLounge} alt={collections[0]?.title ?? "Artyk visual"} fill sizes="100vw" className="object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[180px] overflow-hidden rounded-[1.1rem] shadow-xl">
                <Image src={collections[1]?.image ?? editorials[1]?.image ?? sampleImages.collectionAccent} alt={collections[1]?.title ?? "Artyk visual"} fill sizes="50vw" className="object-cover" />
              </div>
              <div className="relative h-[180px] overflow-hidden rounded-[1.1rem] shadow-xl">
                <Image src={collections[2]?.image ?? editorials[2]?.image ?? sampleImages.collectionStudio} alt={collections[2]?.title ?? "Artyk visual"} fill sizes="50vw" className="object-cover" />
              </div>
            </div>
          </div>

          <div className="glass-panel mt-5 rounded-[1.2rem] p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8d6148]">Spatial Choreography</p>
            <h2 className="section-title mt-2">Layouts That Evolve As You Scroll.</h2>
            <p className="mt-3 text-[#4d3a2f]">Inspired by editorial storytelling websites, we orchestrate image layers and typography in stages, so the visual rhythm changes as you move through the page.</p>
            <Link href="/about" className="mt-6 inline-flex rounded-full border border-[#4d3a2f]/30 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2a1f18] transition hover:bg-[#2a1f18] hover:text-white">
              Discover Our Approach
            </Link>
          </div>
        </div>

        <div className="relative mx-auto hidden min-h-[560px] max-w-7xl items-center gap-8 overflow-hidden rounded-[2rem] bg-[#f5ece3]/75 p-8 md:grid md:grid-cols-2">
          <div className="relative h-full min-h-[360px]">
            <motion.div style={{ y: cardOneY, rotate: cardOneRotate }} className="absolute left-0 top-3 h-[58%] w-[62%] overflow-hidden rounded-[1.2rem] shadow-2xl">
              <Image src={collections[0]?.image ?? editorials[0]?.image ?? sampleImages.collectionLounge} alt={collections[0]?.title ?? "Artyk visual"} fill sizes="(max-width: 768px) 90vw, 40vw" className="object-cover" />
            </motion.div>
            <motion.div style={{ y: cardTwoY, rotate: cardTwoRotate }} className="absolute right-4 top-[18%] h-[56%] w-[48%] overflow-hidden rounded-[1.2rem] shadow-2xl">
              <Image src={collections[1]?.image ?? editorials[1]?.image ?? collections[0]?.image ?? sampleImages.collectionAccent} alt={collections[1]?.title ?? "Artyk visual"} fill sizes="(max-width: 768px) 70vw, 30vw" className="object-cover" />
            </motion.div>
            <motion.div style={{ y: cardThreeY, rotate: cardThreeRotate }} className="absolute bottom-0 left-[18%] h-[56%] w-[58%] overflow-hidden rounded-[1.2rem] shadow-2xl">
              <Image src={collections[2]?.image ?? editorials[2]?.image ?? collections[1]?.image ?? sampleImages.collectionStudio} alt={collections[2]?.title ?? "Artyk visual"} fill sizes="(max-width: 768px) 75vw, 35vw" className="object-cover" />
            </motion.div>
          </div>

          <motion.div style={{ opacity: textOpacity, y: textY }} className="glass-panel rounded-[1.4rem] p-6 md:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8d6148]">Spatial Choreography</p>
            <h2 className="section-title mt-3">Layouts That Evolve As You Scroll.</h2>
            <p className="mt-4 text-[#4d3a2f]">
              Inspired by editorial storytelling websites, we orchestrate image layers and typography in stages, so the visual rhythm changes as you move through the page.
            </p>
            <Link href="/about" className="mt-7 inline-flex rounded-full border border-[#4d3a2f]/30 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2a1f18] transition hover:bg-[#2a1f18] hover:text-white">
              Discover Our Approach
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-16 pt-8 md:px-8 md:pb-20 md:pt-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="section-title max-w-4xl">Project Highlights</h2>
          <p className="mt-4 max-w-2xl text-[#4d3a2f]">A longer landing journey with alternating compositions and soft transitions, designed to feel premium and deliberate.</p>

          <div className="mt-10 space-y-10">
            {collections.slice(0, 3).map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="grid gap-5 rounded-[1.5rem] bg-[#f6eee6]/75 p-4 md:grid-cols-2 md:items-center md:gap-8 md:p-6"
              >
                <div className={`${index % 2 === 1 ? "md:order-2" : ""} relative h-[300px] overflow-hidden rounded-[1rem] md:h-[360px]`}>
                  <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#8d6148]">0{index + 1} / Collection</p>
                  <h3 className="mt-2 font-display text-5xl italic leading-none text-[#20160f]">{item.title}</h3>
                  <p className="mt-3 text-[#4d3a2f]">{item.category} made for contemporary Indian spaces with globally collected craftsmanship details.</p>
                  <Link href={item.href} className="underline-sweep mt-5 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6f4a35]">
                    Open Collection
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-8 md:px-8 md:pb-16">
        <div className="mx-auto max-w-7xl rounded-[1.8rem] bg-[#221912] p-6 text-[#f7ebde] md:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#d3a688]">Journal Notes</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {editorials.slice(0, 3).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
              >
                <div className="relative h-52 overflow-hidden rounded-[1rem]">
                  <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, 30vw" className="object-cover" />
                </div>
                <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-[#d3a688]">{post.date}</p>
                <h3 className="mt-2 font-display text-4xl italic leading-none">{post.title}</h3>
                <p className="mt-3 text-sm text-[#d8c1ad]">{post.excerpt}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
