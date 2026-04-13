"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import dynamic from "next/dynamic";
import type { Product } from "@/lib/sanity/types";
import { urlForImage } from "@/lib/sanity/image";
import { PortableTextContent } from "@/components/ui/PortableTextContent";
import { sampleImages } from "@/lib/sampleImages";

const EnquiryDrawer = dynamic(() => import("./EnquiryDrawer").then((mod) => mod.EnquiryDrawer));

export function ProductPageClient({ product, relatedProducts }: { product: Product; relatedProducts: Product[] }) {
  const [selected, setSelected] = useState(product.images[0]);
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-ivory px-6 pb-20 pt-32">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <div>
          <div className="relative h-[540px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div key={selected?.asset?._ref} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
                <Image src={selected ? urlForImage(selected).width(1000).height(1200).url() : sampleImages.collectionBedroom} alt={product.title} fill className="object-cover" />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-4 flex gap-3">
            {product.images.map((image) => (
              <button key={image.asset?._ref} onClick={() => setSelected(image)} className="relative h-20 w-20 overflow-hidden">
                <Image src={urlForImage(image).width(150).height(150).url()} alt={product.title} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-brass">{product.brand?.name}</p>
          <h1 className="mt-3 font-display text-6xl italic text-onyx">{product.title}</h1>
          <p className="mt-6 text-sm font-light text-cognac">Materials: {product.materials ?? "Available on request"}</p>
          <p className="mt-2 text-sm font-light text-cognac">Finishes: {product.finishes ?? "Available on request"}</p>
          <div className="mt-6">
            <PortableTextContent value={product.description} />
          </div>
          <button onClick={() => setOpen(true)} className="mt-8 border border-brass px-8 py-3 text-xs uppercase tracking-[0.2em] text-brass">
            Request a Quote
          </button>
        </div>
      </div>
      <div className="mx-auto mt-20 max-w-7xl">
        <h2 className="mb-8 font-display text-4xl italic">Related Products</h2>
        <div className="flex gap-6 overflow-x-auto">
          {relatedProducts.map((item) => (
            <article key={item._id} className="min-w-72">
              <div className="relative h-64">
                <Image src={item.images[0] ? urlForImage(item.images[0]).width(500).height(500).url() : sampleImages.collectionDining} alt={item.title} fill className="object-cover" />
              </div>
              <p className="mt-3 font-display text-2xl italic">{item.title}</p>
            </article>
          ))}
        </div>
      </div>
      <EnquiryDrawer open={open} onClose={() => setOpen(false)} productTitle={product.title} />
    </section>
  );
}
