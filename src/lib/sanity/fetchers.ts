import { cache } from "react";
import {
  brandsQuery,
  collectionBySlugQuery,
  collectionsQuery,
  editorialQuery,
  homepageQuery,
  productBySlugQuery,
  productsQuery,
  relatedProductsQuery,
  siteSettingsQuery,
} from "./queries";
import { isSanityConfigured, sanityServerClient } from "./client";
import type { Brand, Collection, EditorialPost, Homepage, Product, SiteSettings } from "./types";

async function safeFetch<T>(query: string, params?: Record<string, string>): Promise<T | null> {
  if (!isSanityConfigured) {
    return null;
  }

  try {
    return await sanityServerClient.fetch<T>(query, params ?? {}, { next: { revalidate: 60 } });
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return null;
  }
}

export const getHomepageData = cache(async (): Promise<Homepage | null> => safeFetch<Homepage>(homepageQuery));
export const getSiteSettings = cache(async (): Promise<SiteSettings | null> => safeFetch<SiteSettings>(siteSettingsQuery));
export const getCollections = cache(async (): Promise<Collection[]> => (await safeFetch<Collection[]>(collectionsQuery)) ?? []);
export const getCollectionBySlug = cache(async (slug: string): Promise<Collection | null> => safeFetch<Collection>(collectionBySlugQuery, { slug }));
export const getProducts = cache(async (): Promise<Product[]> => (await safeFetch<Product[]>(productsQuery)) ?? []);
export const getProductBySlug = cache(async (slug: string): Promise<Product | null> => safeFetch<Product>(productBySlugQuery, { slug }));
export const getRelatedProducts = cache(async (category: string, slug: string): Promise<Product[]> =>
  (await safeFetch<Product[]>(relatedProductsQuery, { category, slug })) ?? [],
);
export const getBrands = cache(async (): Promise<Brand[]> => (await safeFetch<Brand[]>(brandsQuery)) ?? []);
export const getEditorialPosts = cache(async (): Promise<EditorialPost[]> => (await safeFetch<EditorialPost[]>(editorialQuery)) ?? []);
