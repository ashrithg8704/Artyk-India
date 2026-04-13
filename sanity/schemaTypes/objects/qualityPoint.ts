import { defineField, defineType } from "sanity";

export const qualityPointType = defineType({
  name: "qualityPoint",
  title: "Material / Quality Point",
  type: "object",
  fields: [
    defineField({
      name: "material",
      title: "Material / Attribute",
      type: "string",
      validation: (rule) => rule.required().min(2).max(60),
    }),
    defineField({
      name: "note",
      title: "Detail",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(220),
    }),
    defineField({
      name: "displayOrder",
      title: "Display Order",
      type: "number",
      initialValue: 1,
      validation: (rule) => rule.required().integer().min(1),
    }),
  ],
  preview: {
    select: {
      title: "material",
      subtitle: "note",
    },
  },
});
