import { defineField, defineType } from "sanity";

export const showroomSectionType = defineType({
  name: "showroomSection",
  title: "Showroom Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
      validation: (rule) => rule.required().min(6).max(90),
    }),
    defineField({
      name: "location",
      title: "Location Label",
      type: "string",
      validation: (rule) => rule.required().max(90),
      initialValue: "Jubilee Hills, Hyderabad",
    }),
    defineField({
      name: "galleryImages",
      title: "Gallery Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (rule) => rule.required().min(3).max(10),
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(220),
    }),
    defineField({
      name: "contact",
      title: "Contact Details",
      type: "contactDetails",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "mapLink",
      title: "Map Link",
      type: "url",
      validation: (rule) => rule.uri({ scheme: ["http", "https"] }),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "location",
      media: "galleryImages.0",
    },
  },
});
