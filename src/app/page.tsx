import Link from "next/link";
import Image from "next/image";
import { HomeScrollExperience } from "@/components/sections/HomeScrollExperience";
import { HeroIntroMedia } from "@/components/sections/HeroIntroMedia";
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

  const visualCollections = collections.slice(0, 3).map((collection, index) => ({
    id: collection._id,
    title: collection.title,
    category: collection.category,
    href: `/collections/${collection.slug.current}`,
    image: collection.coverImage
      ? urlForImage(collection.coverImage).width(1200).height(1400).url()
      : [sampleImages.collectionLounge, sampleImages.collectionAccent, sampleImages.collectionStudio][index] ?? sampleImages.collectionLiving,
  }));

  const visualEditorials = editorialPosts.slice(0, 3).map((post) => ({
    id: post._id,
    title: post.title,
    excerpt: post.excerpt ?? "Discover curated ideas and design perspectives from the Artyk journal.",
    image: post.coverImage ? urlForImage(post.coverImage).width(1000).height(700).url() : sampleImages.editorial,
    date: new Date(post.publishedAt).toLocaleDateString(),
  }));

  while (visualCollections.length < 3) {
    const idx = visualCollections.length;
    visualCollections.push({
      id: `fallback-collection-${idx}`,
      title: ["Living Edit", "Dining Edit", "Bedroom Edit"][idx] ?? "Artyk Edit",
      category: "Signature Selection",
      href: "/collections",
      image: [sampleImages.collectionLounge, sampleImages.collectionAccent, sampleImages.collectionStudio][idx] ?? sampleImages.collectionLiving,
    });
  }

  while (visualEditorials.length < 3) {
    const idx = visualEditorials.length;
    visualEditorials.push({
      id: `fallback-editorial-${idx}`,
      title: ["Crafted Silence", "Luxury With Restraint", "Future Heritage"][idx] ?? "Artyk Journal",
      excerpt: "Discover curated ideas and design perspectives from the Artyk journal.",
      image: [sampleImages.journalA, sampleImages.journalB, sampleImages.journalC][idx] ?? sampleImages.editorial,
      date: new Date().toLocaleDateString(),
    });
  }

  return (
    <>
      <section className="grain relative mx-4 min-h-[82vh] overflow-hidden rounded-[2.2rem] bg-[#201813] text-[#f5ede5] md:mx-8 md:min-h-[88vh]">
        <HeroIntroMedia fallbackPoster={heroImage} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/0" />

        <div className="relative z-10 flex min-h-[82vh] flex-col justify-end px-6 pb-10 pt-24 md:min-h-[88vh] md:px-12 md:pb-12">
          <p className="reveal-in mb-5 text-[11px] uppercase tracking-[0.24em] text-[#d7ad8d]">Hyderabad · 25,000 sq.ft. design destination</p>
          <h1 className="hero-display max-w-5xl text-[#f8efe7]">Where Design Feels Cinematic.</h1>
          <div className="reveal-in mt-8 flex flex-wrap gap-3" style={{ animationDelay: "0.2s" }}>
            <Link href="/collections" className="rounded-full bg-[#f1e2d4] px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2f2219] transition hover:bg-white">
              Explore Collections
            </Link>
            <Link href="/contact" className="rounded-full border border-white/40 px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10">
              Book A Visit
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 md:px-8">
        <div className="glass-panel mx-auto grid max-w-7xl gap-5 rounded-[1.6rem] p-5 md:grid-cols-3 md:p-7">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#8d6148]">Curated Brands</p>
            <p className="mt-2 text-4xl font-semibold leading-none md:text-5xl">{String(brands.length || 7).padStart(2, "0")}</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#8d6148]">Showroom Surface</p>
            <p className="mt-2 text-4xl font-semibold leading-none md:text-5xl">25k</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#8d6148]">Design Partners</p>
            <p className="mt-2 text-4xl font-semibold leading-none md:text-5xl">Global</p>
          </div>
        </div>
      </section>

      <section className="overflow-hidden py-8">
        <div className="scroll-track flex w-[200%] gap-10 text-[#523d31] hover:[animation-play-state:paused]">
          {[...brands, ...brands].map((brand, idx) => (
            <p key={`${brand._id}-${idx}`} className="whitespace-nowrap font-display text-3xl italic opacity-85 transition hover:opacity-100 md:text-6xl">
              {brand.name}
            </p>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="relative min-h-[420px] overflow-hidden rounded-[1.8rem]">
            <Image src={sampleImages.journalA} alt="Editorial" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#8d6148]">The Artyk Lens</p>
            <h2 className="section-title mt-4">Material. Light. Emotion.</h2>
            <p className="mt-5 max-w-xl text-[#4d3a2f]">Each setting is composed like a cinematic frame. We present furniture as an experience of proportion, tactility, and calm confidence.</p>
            <Link href="/editorial" className="mt-8 inline-flex rounded-full border border-[#4d3a2f]/30 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2a1f18] transition hover:bg-[#2a1f18] hover:text-white">
              Read Editorial Stories
            </Link>
          </div>
        </div>
      </section>

      <HomeScrollExperience collections={visualCollections} editorials={visualEditorials} />

      <section className="subtle-grid px-6 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex items-end justify-between gap-6">
            <h2 className="section-title">Featured Collections</h2>
            <Link href="/collections" className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6f4a35]">
              View All
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {collections.slice(0, 3).map((collection, index) => (
              <article key={collection._id} className={index === 1 ? "md:-mt-8" : ""}>
                <Link href={`/collections/${collection.slug.current}`} className="group block">
                  <div className="relative h-[390px] overflow-hidden rounded-[1.4rem]">
                    <Image
                      src={collection.coverImage ? urlForImage(collection.coverImage).width(880).height(1080).url() : sampleImages.collectionLiving}
                      alt={collection.title}
                      fill
                      loading="lazy"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-[#8d6148]">{collection.category}</p>
                  <p className="mt-1 font-display text-4xl italic leading-none text-[#20160f]">{collection.title}</p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-8">
        <div className="mx-auto max-w-7xl md:grid md:grid-cols-2 md:gap-8">
          {editorialPosts.map((post) => (
            <article key={post._id} className="mb-10 rounded-[1.2rem] bg-[#f6efe7]/70 p-4 md:p-6">
              <div className="relative mb-5 h-80 overflow-hidden rounded-[1rem]">
                <Image
                  src={post.coverImage ? urlForImage(post.coverImage).width(900).height(700).url() : sampleImages.editorial}
                  alt={post.title}
                  fill
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#8d6148]">{new Date(post.publishedAt).toLocaleDateString()}</p>
              <h3 className="mt-2 font-display text-4xl italic leading-none text-[#20160f]">{post.title}</h3>
              <p className="mt-3 max-w-xl text-sm text-[#4d3a2f]">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-4 mb-12 rounded-[2rem] bg-[#241912] px-6 py-20 text-center text-[#f3e6d9] md:mx-8">
        <h2 className="section-title text-[#f6ece2]">Come and feel the scale in person.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-[#cda88b]">Plot No. 839/A, Road No. 44, Jubilee Hills, Hyderabad</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="rounded-full bg-[#f3e4d6] px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#20160f]">
            Book a Visit
          </Link>
          <a href="https://maps.google.com" className="rounded-full border border-[#cda88b]/70 px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#cda88b]">
            Get Directions
          </a>
        </div>
      </section>
    </>
  );
}