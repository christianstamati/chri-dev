import React from "react";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import config from "@payload-config";
import Image from "next/image";
import Link from "next/link";

async function Header() {
  const payload = await getPayloadHMR({ config });
  const header = await payload.findGlobal({ slug: "header" });
  return (
    <div className="flex items-center justify-between border-gray-500 p-4">
      <Link href={"/"}>
        <div className="relative h-10 w-14">
          <Image
            src={typeof header.logo === "number" ? "" : header.logo.url || ""}
            alt={typeof header.logo === "number" ? "" : header.logo.alt}
            className="object-contain"
            fill
          />
        </div>
      </Link>
      <div className="flex gap-4 font-bold">
        {header.nav.map((x, idx) => (
          <Link key={idx} href={x.link ? x.link : ""}>
            {x.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;
