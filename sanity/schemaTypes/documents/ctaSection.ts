import { defineField, defineType } from "sanity";

export const ctaSectionType = defineType({
  name: "ctaSection",
  title: "CTA Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().min(8).max(120),
    }),
    defineField({
      name: "supportingText",
      title: "Supporting Text",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(260),
    }),
    defineField({
      name: "primaryButtonLabel",
      title: "Primary Button Label",
      type: "string",
      validation: (rule) => rule.required().max(40),
    }),
    defineField({
      name: "secondaryButtonLabel",
      title: "Secondary Button Label",
      type: "string",
      validation: (rule) => rule.max(40),
    }),
    defineField({
      name: "contactMethods",
      title: "Contact Methods",
      type: "array",
      of: [{ type: "linkItem" }],
      validation: (rule) => rule.max(4),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "primaryButtonLabel",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle ? `Primary CTA: ${subtitle}` : "CTA Section",
      };
    },
  },
});
