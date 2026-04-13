import { defineField, defineType } from "sanity";

export const featuredProductType = defineType({
  name: "featuredProduct",
  title: "Featured Product",
  type: "document",
  fields: [
    defineField({
      name: "productName",
      title: "Product Name",
      type: "string",
      validation: (rule) => rule.required().min(2).max(90),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          "Sofa",
          "Coffee Table",
          "Dining Table",
          "Dining Chair",
          "Bed",
          "Accent Chair",
          "Lighting",
          "Storage",
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(220),
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (rule) => rule.required().min(1).max(8),
    }),
    defineField({
      name: "premiumTags",
      title: "Premium Tags",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule) => rule.max(6),
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "isFeatured",
      title: "Featured on Homepage",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "displayOrder",
      title: "Display Order",
      type: "number",
      initialValue: 1,
      validation: (rule) => rule.required().integer().min(1),
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "displayOrderAsc",
      by: [{ field: "displayOrder", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "productName",
      subtitle: "category",
      media: "images.0",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle ? `${subtitle} • Featured Product` : "Featured Product",
      };
    },
  },
});
