import Image from "next/image";
import { getBrands } from "@/lib/sanity";
import { urlForImage } from "@/lib/sanity/image";
import { sampleImages } from "@/lib/sampleImages";

export default async function BrandsPage() {
  const brands = await getBrands();
  return (
    <section className="bg-onyx pb-14 pt-8 text-ivory md:pb-20 md:pt-14">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="font-display text-4xl italic leading-none md:text-6xl">Our Curated Partners</h1>
        <div className="mt-8 space-y-4 md:mt-14 md:space-y-6">
          {brands.map((brand) => (
            <article key={brand._id} className="group relative overflow-hidden border border-cognac/50 p-5 md:p-8">
              <div className="absolute inset-0 opacity-20 transition group-hover:opacity-45">
                <Image src={brand.heroImage ? urlForImage(brand.heroImage).width(1200).height(500).url() : sampleImages.brands} alt={brand.name} fill sizes="100vw" className="object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-onyx/90 via-onyx/75 to-onyx/60" />
              <div className="relative grid items-center gap-6 md:grid-cols-2">
                <h2 className="font-display text-3xl italic leading-none text-ivory md:text-4xl">{brand.name}</h2>
                <p className="max-w-xl font-light text-mist/95">{brand.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
