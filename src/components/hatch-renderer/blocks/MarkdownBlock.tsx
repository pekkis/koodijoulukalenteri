import { Markdown } from "@/components/Markdown";
import { MarkdownBlockType } from "@/services/hatch";
import { FC } from "react";

type Props = {
  block: MarkdownBlockType;
};

const MarkdownBlock: FC<Props> = ({ block }) => {
  return (
    <>
      <Markdown>{block.text}</Markdown>
    </>
  );
};

export default MarkdownBlock;
