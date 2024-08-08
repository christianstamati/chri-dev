import { Block } from "payload";

export const cover: Block = {
  slug: "cover",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "subtitle",
      label: "Subtitle",
      type: "textarea",
      required: true,
    },
  ],
};
