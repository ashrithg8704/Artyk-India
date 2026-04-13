import { notFound } from "next/navigation";
import { ProductPageClient } from "@/components/sections/ProductPageClient";
import { getProductBySlug, getRelatedProducts } from "@/lib/sanity";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const relatedProducts = await getRelatedProducts(product.category, slug);
  return <ProductPageClient product={product} relatedProducts={relatedProducts} />;
}
