import groq from "groq";

const brandFields = `{
  _id, name, slug, logo, description, heroImage, originCountry
}`;

const productFields = `{
  _id, title, slug, category, images, description, materials, finishes, featured,
  brand->${brandFields}
}`;

const collectionFields = `{
  _id, title, slug, category, coverImage,
  products[]->${productFields}
}`;

const editorialFields = `{
  _id, title, slug, category, publishedAt, coverImage, excerpt, body
}`;

export const homepageQuery = groq`*[_type == "homepage"][0]{
  heroImage, heroHeadline, heroCTA,
  featuredCollections[]->${collectionFields},
  featuredBrands[]->${brandFields},
  editorialPosts[]->${editorialFields}
}`;

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  logo, tagline, address, phone, email, instagram, metaDescription
}`;

export const collectionsQuery = groq`*[_type == "collection"] | order(title asc) ${collectionFields}`;
export const collectionBySlugQuery = groq`*[_type == "collection" && slug.current == $slug][0] ${collectionFields}`;
export const productsQuery = groq`*[_type == "product"] | order(title asc) ${productFields}`;
export const productBySlugQuery = groq`*[_type == "product" && slug.current == $slug][0] ${productFields}`;
export const relatedProductsQuery = groq`*[_type == "product" && category == $category && slug.current != $slug][0...6] ${productFields}`;
export const brandsQuery = groq`*[_type == "brand"] | order(name asc) ${brandFields}`;
export const editorialQuery = groq`*[_type == "editorialPost"] | order(publishedAt desc) ${editorialFields}`;
