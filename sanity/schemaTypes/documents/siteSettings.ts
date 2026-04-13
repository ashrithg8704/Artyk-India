import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "logo", type: "image", options: { hotspot: true } }),
    defineField({ name: "tagline", type: "string" }),
    defineField({ name: "address", type: "text" }),
    defineField({ name: "phone", type: "string" }),
    defineField({ name: "email", type: "string" }),
    defineField({ name: "instagram", type: "string" }),
    defineField({ name: "metaDescription", type: "text" }),
  ],
});
