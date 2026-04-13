import { defineArrayMember, defineField, defineType } from "sanity";

export const homepageType = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({ name: "heroImage", type: "image", options: { hotspot: true } }),
    defineField({ name: "heroHeadline", type: "string" }),
    defineField({ name: "heroCTA", type: "string" }),
    defineField({ name: "featuredCollections", type: "array", of: [defineArrayMember({ type: "reference", to: [{ type: "collection" }] })] }),
    defineField({ name: "featuredBrands", type: "array", of: [defineArrayMember({ type: "reference", to: [{ type: "brand" }] })] }),
    defineField({ name: "editorialPosts", type: "array", of: [defineArrayMember({ type: "reference", to: [{ type: "editorialPost" }] })] }),
  ],
});
