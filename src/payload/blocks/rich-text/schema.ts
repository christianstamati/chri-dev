import { Block } from "payload";

export const richText: Block = {
  slug: "richText",
  fields: [
    {
      name: "content",
      label: "Content",
      type: "richText",
      required: true,
    },
  ],
};
