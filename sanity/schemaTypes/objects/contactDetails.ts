import { defineField, defineType } from "sanity";

export const contactDetailsType = defineType({
  name: "contactDetails",
  title: "Contact Details",
  type: "object",
  fields: [
    defineField({
      name: "email",
      title: "Primary Email",
      type: "string",
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: "phone",
      title: "Primary Phone",
      type: "string",
      validation: (rule) => rule.required().min(7).max(20),
    }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp",
      type: "string",
      validation: (rule) => rule.min(7).max(20),
    }),
    defineField({
      name: "businessHours",
      title: "Business Hours",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(180),
    }),
  ],
  preview: {
    select: {
      title: "email",
      subtitle: "phone",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Contact details",
        subtitle,
      };
    },
  },
});
