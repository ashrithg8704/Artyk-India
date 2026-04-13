import { defineField, defineType } from "sanity";

export const brandStoryType = defineType({
  name: "brandStory",
  title: "Brand Story",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
      validation: (rule) => rule.required().min(6).max(90),
    }),
    defineField({
      name: "bodyCopy",
      title: "Body Copy",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "highlightPoints",
      title: "Highlight Points",
      type: "array",
      of: [{ type: "highlightPoint" }],
      validation: (rule) => rule.required().min(2).max(6),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: "Brand Story Section",
        media,
      };
    },
  },
});
