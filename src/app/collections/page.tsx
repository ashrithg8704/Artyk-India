import { CollectionsGridClient } from "@/components/sections/CollectionsGridClient";
import { getProducts } from "@/lib/sanity";

export default async function CollectionsPage() {
  const products = await getProducts();
  return <CollectionsGridClient products={products} />;
}