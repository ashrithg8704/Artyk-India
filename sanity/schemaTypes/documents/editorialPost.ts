import { defineArrayMember, defineField, defineType } from "sanity";

export const editorialPostType = defineType({
  name: "editorialPost",
  title: "Editorial Post",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
    defineField({ name: "category", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "publishedAt", type: "datetime", validation: (rule) => rule.required() }),
    defineField({ name: "coverImage", type: "image", options: { hotspot: true } }),
    defineField({ name: "excerpt", type: "text" }),
    defineField({ name: "body", type: "array", of: [defineArrayMember({ type: "block" })] }),
  ],
});
