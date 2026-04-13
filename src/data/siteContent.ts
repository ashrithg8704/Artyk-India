export type CollectionItem = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export type FeatureItem = {
  title: string;
  body: string;
};

export type ShowcaseItem = {
  title: string;
  subtitle: string;
  image: string;
};

export type TestimonialItem = {
  quote: string;
  author: string;
  role: string;
};

export const siteContent = {
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Collections", href: "/collections" },
    { label: "Lookbook", href: "/lookbook" },
    { label: "Contact", href: "/contact" },
  ],

  collections: [
    {
      title: "Living",
      description:
        "Architectural seating and statement tables curated for conversational, design-led spaces.",
      image: "/images/collections/living.svg",
      href: "/collections#living",
    },
    {
      title: "Dining",
      description:
        "Timeless silhouettes and tactile finishes that shape memorable gatherings with quiet elegance.",
      image: "/images/collections/dining.svg",
      href: "/collections#dining",
    },
    {
      title: "Bedroom",
      description:
        "Calm, materially rich pieces designed for restoration, balance, and enduring comfort.",
      image: "/images/collections/bedroom.svg",
      href: "/collections#bedroom",
    },
    {
      title: "Accents",
      description:
        "Curated forms that complete interiors with individuality, restraint, and artistic clarity.",
      image: "/images/collections/accents.svg",
      href: "/collections#accents",
    },
  ] as CollectionItem[],

  featuredCategories: [
    {
      title: "Signature Sofas",
      subtitle: "Composed lines, elevated comfort",
      image: "/images/featured/sofas.svg",
    },
    {
      title: "Dining Statements",
      subtitle: "Material warmth, generous proportions",
      image: "/images/featured/dining.svg",
    },
    {
      title: "Collector Lighting",
      subtitle: "Soft illumination, sculptural intent",
      image: "/images/featured/lighting.svg",
    },
  ] as ShowcaseItem[],

  showroomMoments: [
    {
      title: "Jubilee Hills Flagship",
      subtitle: "By appointment or walk-in consultation",
      image: "/images/showroom/flagship.svg",
    },
    {
      title: "Material Library",
      subtitle: "Curated wood, fabric, leather, and stone",
      image: "/images/showroom/materials.svg",
    },
    {
      title: "Private Design Desk",
      subtitle: "Personalized guidance for complete spaces",
      image: "/images/showroom/design-desk.svg",
    },
  ] as ShowcaseItem[],

  craftValues: [
    {
      title: "Craftsmanship",
      body: "Each piece is selected for integrity of joinery, tactile finish, and enduring structural quality.",
    },
    {
      title: "Timeless Design",
      body: "Our curation favors proportion, material truth, and forms that transcend seasonal trends.",
    },
    {
      title: "Curated Individuality",
      body: "Artyk creates design-led spaces that reflect the people who live in them—never generic, always personal.",
    },
  ] as FeatureItem[],

  philosophyPillars: [
    {
      title: "Edit Over Excess",
      body: "We believe a room breathes when it holds only what matters. Every Artyk selection earns its place through presence, not volume.",
    },
    {
      title: "Material Honesty",
      body: "From solid hardwood to hand-stitched leather, we champion materials that age with character and tell a story over time.",
    },
    {
      title: "Timeless Proportion",
      body: "Our pieces are chosen for architectural balance—scale, rhythm, and silhouette that feel as right in twenty years as they do today.",
    },
    {
      title: "Quiet Luxury",
      body: "Artyk does not shout. We curate for those who understand that true luxury lives in restraint, texture, and lasting quality.",
    },
  ] as FeatureItem[],

  testimonials: [
    {
      quote:
        "Artyk understood our vision before we could articulate it. The result was a home that feels entirely ours—layered, warm, and composed.",
      author: "Priya Mehta",
      role: "Interior Architect, Hyderabad",
    },
    {
      quote:
        "Working with Artyk is not about shopping. It is about a shared language of quality and space. Every piece in our villa tells that story.",
      author: "Anil Reddy",
      role: "Client, Jubilee Hills Residence",
    },
    {
      quote:
        "The material depth and craftsmanship in their curation is unlike anything else available in India. Artyk is the real standard.",
      author: "Kavitha Rao",
      role: "Design Director, Studio Arai",
    },
  ] as TestimonialItem[],
};