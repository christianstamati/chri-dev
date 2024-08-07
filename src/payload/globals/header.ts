import { GlobalConfig } from "payload";

export const header: GlobalConfig = {
  slug: "header",
  fields: [
    {
      name: "logo",
      type: "upload",
      label: "Logo",
      relationTo: "media",
      required: true,
    },
    {
      name: "nav",
      label: "Navigation",
      type: "array",
      required: true,
      fields: [
        {
          name: "label",
          label: "Label",
          type: "text",
        },
        {
          name: "link",
          label: "Link",
          type: "text",
        },
      ],
      minRows: 1,
      maxRows: 5,
    },
  ],
};
