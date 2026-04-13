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
    <section className="bg-ivory px-6 pb-20 pt-36">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.2em] ${activeCategory === category ? "border-brass bg-brass text-onyx" : "border-cognac/20 text-cognac"}`}
            >
              {category}
            </button>
          ))}
        </div>
        <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filtered.map((product) => (
              <motion.article key={product._id} layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}>
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={product.images[0] ? urlForImage(product.images[0]).width(700).height(700).url() : sampleImages.collectionLiving}
                    alt={product.title}
                    fill
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 text-xs font-extralight uppercase tracking-[0.2em] text-brass">{product.brand?.name}</p>
                <h3 className="mt-2 font-display text-3xl italic">{product.title}</h3>
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
