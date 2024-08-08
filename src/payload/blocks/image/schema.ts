import { Block } from "payload";

export const image: Block = {
  slug: "image",
  fields: [
    {
      name: "image",
      label: "Image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};
