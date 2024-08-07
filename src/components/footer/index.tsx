import React from "react";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import config from "@payload-config";

async function Footer() {
  const payload = await getPayloadHMR({ config });
  const footer = await payload.findGlobal({ slug: "footer" });
  return (
    <div className="flex items-center justify-center bg-gray-100 p-4">
      <span>{footer.copyrightNotice}</span>
    </div>
  );
}

export default Footer;
