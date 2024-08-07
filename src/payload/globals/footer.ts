import { GlobalConfig } from "payload";

export const footer: GlobalConfig = {
  slug: "footer",
  fields: [
    {
      name: "copyrightNotice",
      label: "Copyright Notice",
      type: "text",
      required: true,
    },
  ],
};
