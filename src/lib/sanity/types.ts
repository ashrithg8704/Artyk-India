export type SanityImage = {
  _type: "image";
  alt?: string;
  asset?: { _ref?: string; url?: string };
};

export type PortableBlock = {
  _type: "block";
  _key: string;
  children?: Array<{ _type: "span"; text?: string }>;
};

export type Brand = {
  _id: string;
  name: string;
  slug: { current: string };
  logo?: SanityImage;
  description?: string;
  heroImage?: SanityImage;
  originCountry?: string;
};

export type Product = {
  _id: string;
  title: string;
  slug: { current: string };
  brand: Brand;
  category: string;
  images: SanityImage[];
  description: PortableBlock[];
  materials?: string;
  finishes?: string;
  featured?: boolean;
};

export type Collection = {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  coverImage?: SanityImage;
  products?: Product[];
};

export type EditorialPost = {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  publishedAt: string;
  coverImage?: SanityImage;
  excerpt?: string;
  body: PortableBlock[];
};

export type Homepage = {
  heroImage?: SanityImage;
  heroHeadline?: string;
  heroCTA?: string;
  featuredCollections?: Collection[];
  featuredBrands?: Brand[];
  editorialPosts?: EditorialPost[];
};

export type SiteSettings = {
  logo?: SanityImage;
  tagline?: string;
  address?: string;
  phone?: string;
  email?: string;
  instagram?: string;
  metaDescription?: string;
};
