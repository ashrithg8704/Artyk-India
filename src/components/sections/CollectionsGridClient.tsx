"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import type { Product } from "@/lib/sanity/types";
import { urlForImage } from "@/lib/sanity/image";
import { sampleImages } from "@/lib/sampleImages";

export function CollectionsGridClient({ products }: { products: Product[] }) {
  const categories = useMemo(() => ["All", ...new Set(products.map((product) => product.category))], [products]);
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = products.filter((product) => activeCategory === "All" || product.category === activeCategory);

  return (
    <section className="bg-ivory px-6 pb-14 pt-8 md:pb-20 md:pt-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap gap-2 md:mb-10 md:gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.18em] md:px-5 md:text-xs md:tracking-[0.2em] ${activeCategory === category ? "border-brass bg-brass text-onyx" : "border-cognac/20 text-cognac"}`}
            >
              {category}
            </button>
          ))}
        </div>
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
          <AnimatePresence>
            {filtered.map((product) => (
              <motion.article key={product._id} layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}>
                <div className="relative h-64 overflow-hidden rounded-[1rem] md:h-80">
                  <Image
                    src={product.images[0] ? urlForImage(product.images[0]).width(700).height(700).url() : sampleImages.collectionLiving}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 text-xs font-extralight uppercase tracking-[0.2em] text-brass">{product.brand?.name}</p>
                <h3 className="mt-2 font-display text-2xl italic leading-none md:text-3xl">{product.title}</h3>
                <Link href={`/collections/${product.slug.current}`} className="mt-3 inline-block text-sm uppercase tracking-[0.2em] text-cognac">
                  Enquire
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
