"use client";

import Image from "next/image";
import { useState } from "react";
import type { EditorialPost } from "@/lib/sanity/types";
import { urlForImage } from "@/lib/sanity/image";
import { sampleImages } from "@/lib/sampleImages";

const options = ["All", "Design Stories", "New Arrivals", "Brand Features"];

export function EditorialGridClient({ posts }: { posts: EditorialPost[] }) {
  const [filter, setFilter] = useState("All");
  const filtered = posts.filter((post) => filter === "All" || post.category === filter);

  return (
    <section className="bg-ivory pb-24 pt-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-wrap gap-3">
          {options.map((option) => (
            <button key={option} onClick={() => setFilter(option)} className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.2em] ${filter === option ? "border-brass bg-brass text-onyx" : "border-cognac/30 text-cognac"}`}>
              {option}
            </button>
          ))}
        </div>
        <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
          {filtered.map((post) => (
            <article key={post._id} className="mb-6 break-inside-avoid">
              <div className="relative h-96 overflow-hidden">
                <Image src={post.coverImage ? urlForImage(post.coverImage).width(700).height(900).url() : sampleImages.editorial} alt={post.title} fill className="object-cover" />
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-brass">{post.category}</p>
              <h2 className="mt-2 font-display text-3xl italic text-onyx">{post.title}</h2>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
