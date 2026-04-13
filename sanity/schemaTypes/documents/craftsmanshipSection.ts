import { defineField, defineType } from "sanity";

export const craftsmanshipSectionType = defineType({
  name: "craftsmanshipSection",
  title: "Craftsmanship Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
      validation: (rule) => rule.required().min(6).max(90),
    }),
    defineField({
      name: "description",
      title: "Section Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(240),
    }),
    defineField({
      name: "visual",
      title: "Icon / Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "qualityPoints",
      title: "Materials / Quality Points",
      type: "array",
      of: [{ type: "qualityPoint" }],
      validation: (rule) => rule.required().min(3).max(8),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      media: "visual",
    },
  },
});
