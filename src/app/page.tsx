import Link from "next/link";
import Image from "next/image";
import {
  CollectionGrid,
  EditorialIntro,
  ExperienceSection,
  HeroSection,
} from "@/components/sections/HomeMotion";
import { getHomepageData } from "@/lib/sanity";
import { urlForImage } from "@/lib/sanity/image";
import { sampleImages } from "@/lib/sampleImages";

export default async function HomePage() {
  const homepage = await getHomepageData();
  const collections = homepage?.featuredCollections ?? [];
  const brands = homepage?.featuredBrands ?? [];
  const editorialPosts = homepage?.editorialPosts ?? [];
  const heroImage = homepage?.heroImage
    ? urlForImage(homepage.heroImage).width(1920).height(1080).url()
    : sampleImages.hero;

  return (
    <>
      <section className="relative h-screen overflow-hidden bg-onyx text-ivory">
        <Image src={heroImage} alt="Artyk experience centre" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-onyx/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx/95 via-onyx/70 to-onyx/35" />
        <HeroSection />
      </section>
      <section className="overflow-hidden bg-ivory py-10">
        <div className="brand-marquee flex w-[200%] gap-12 hover:[animation-play-state:paused]">
          {[...brands, ...brands].map((brand, idx) => (
            <p key={`${brand._id}-${idx}`} className="whitespace-nowrap text-4xl font-display italic text-onyx/60 transition hover:text-onyx">
              {brand.name}
            </p>
          ))}
        </div>
      </section>
      <EditorialIntro />
      <CollectionGrid collections={collections} />
      <ExperienceSection />
      <section className="bg-ivory px-6 py-section">
        <div className="mx-auto max-w-7xl md:grid md:grid-cols-2 md:gap-8">
          {editorialPosts.map((post) => (
            <article key={post._id} className="mb-8">
              <div className="relative mb-4 h-80 overflow-hidden">
                <Image
                  src={post.coverImage ? urlForImage(post.coverImage).width(900).height(700).url() : sampleImages.editorial}
                  alt={post.title}
                  fill
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-brass">{new Date(post.publishedAt).toLocaleDateString()}</p>
              <h3 className="mt-2 font-display text-3xl italic">{post.title}</h3>
              <p className="mt-2 max-w-xl text-sm font-light text-cognac/95">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-onyx px-6 py-28 text-center text-ivory">
        <h2 className="font-display text-5xl italic">Come and see it for yourself.</h2>
        <p className="mx-auto mt-5 max-w-2xl font-light text-greige">Plot No. 839/A, Road No. 44, Jubilee Hills, Hyderabad</p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/contact" className="border border-brass bg-brass px-8 py-3 text-xs uppercase tracking-[0.2em] text-onyx">
            Book a Visit
          </Link>
          <a href="https://maps.google.com" className="border border-brass px-8 py-3 text-xs uppercase tracking-[0.2em] text-brass">
            Get Directions
          </a>
        </div>
      </section>
    </>
  );
}