import { EditorialGridClient } from "@/components/sections/EditorialGridClient";
import { getEditorialPosts } from "@/lib/sanity";

export default async function EditorialPage() {
  const posts = await getEditorialPosts();
  return <EditorialGridClient posts={posts} />;
}
