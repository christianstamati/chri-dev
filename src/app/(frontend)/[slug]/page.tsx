import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import React, { cache } from "react";
import type { Page as PageType } from "@/payload-types";
import { notFound } from "next/navigation";
import { RenderBlocks } from "@/utils/render-blocks";

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const parsedSlug = decodeURIComponent(slug);
  const payload = await getPayloadHMR({ config });
  const result = await payload.find({
    collection: "pages",
    limit: 1,
    where: {
      slug: {
        equals: parsedSlug,
      },
    },
  });
  return result.docs?.[0] || null;
});

export async function generateStaticParams() {
  const payload = await getPayloadHMR({ config });
  const pages = await payload.find({
    collection: "pages",
    draft: false,
    limit: 1000,
  });

  return pages.docs
    ?.filter((doc) => {
      return doc.slug !== "index";
    })
    .map(({ slug }) => slug);
}

export default async function Page({ params: { slug = "index" } }) {
  const page: PageType | null = await queryPageBySlug({
    slug,
  });
  if (!page) {
    return notFound();
  }
  return (
    <div>
      <RenderBlocks blocks={page.layout} />
    </div>
  );
}