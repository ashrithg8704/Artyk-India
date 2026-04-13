import { defineField, defineType } from "sanity";

export const heroSectionType = defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "badge",
      title: "Badge / Small Caption",
      type: "string",
      validation: (rule) => rule.max(80),
      initialValue: "Luxury Furniture • Jubilee Hills",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (rule) => rule.required().min(10).max(120),
    }),
    defineField({
      name: "subheading",
      title: "Subheading",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(260),
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "primaryCtaLabel",
      title: "Primary CTA Label",
      type: "string",
      validation: (rule) => rule.required().max(40),
      initialValue: "Book A Consultation",
    }),
    defineField({
      name: "secondaryCtaLabel",
      title: "Secondary CTA Label",
      type: "string",
      validation: (rule) => rule.required().max(40),
      initialValue: "Explore Collections",
    }),
  ],
  preview: {
    select: {
      title: "heading",
      subtitle: "badge",
      media: "heroImage",
    },
  },
});
