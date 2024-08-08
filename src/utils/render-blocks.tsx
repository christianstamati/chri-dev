import { Page } from "@/payload-types";
import React, { Fragment } from "react";
import CoverServer from "@/payload/blocks/cover/server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const blockComponents: { [key: string]: any } = {
  cover: CoverServer,
};

export const RenderBlocks: React.FC<{
  blocks: Page["layout"][0][];
}> = (props) => {
  const { blocks } = props;

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockName, blockType } = block;
          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType];
            if (Block) {
              return (
                <div className="my-16" key={index}>
                  <Block id={blockName} {...block} />
                </div>
              );
            }
          }
          return (
            <div
              className="m-1 flex items-center justify-center rounded-md border-4 border-dashed border-gray-200 p-4"
              key={index}
            >
              <span className="text-2xl font-bold">
                Block type {blockType} not found
              </span>
            </div>
          );
        })}
      </Fragment>
    );
  }

  return null;
};
