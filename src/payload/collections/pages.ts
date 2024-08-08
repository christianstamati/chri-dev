import { CollectionConfig } from "payload";
import { cover } from "@/payload/blocks/cover/schema";
import { image } from "@/payload/blocks/image/schema";
import { richText } from "@/payload/blocks/rich-text/schema";

export const pages: CollectionConfig = {
  slug: "pages",
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "layout",
      label: "Layout",
      type: "blocks",
      required: true,
      blocks: [cover, image, richText],
    },
  ],
};
