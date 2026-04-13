import { defineField, defineType } from "sanity";

export const socialLinkType = defineType({
  name: "socialLink",
  title: "Social Link",
  type: "object",
  fields: [
    defineField({
      name: "platform",
      title: "Platform",
      type: "string",
      options: {
        list: ["Instagram", "Pinterest", "LinkedIn", "YouTube", "Facebook"],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "url",
      title: "Profile URL",
      type: "url",
      validation: (rule) => rule.required().uri({ scheme: ["http", "https"] }),
    }),
  ],
  preview: {
    select: {
      title: "platform",
      subtitle: "url",
    },
  },
});
