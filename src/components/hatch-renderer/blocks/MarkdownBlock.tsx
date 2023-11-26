import { MarkdownBlockType } from "@/services/hatch";
import { FC } from "react";
import ReactMarkdown from "react-markdown";

type Props = {
  block: MarkdownBlockType;
};

const MarkdownBlock: FC<Props> = ({ block }) => {
  return (
    <>
      <ReactMarkdown>{block.text}</ReactMarkdown>
    </>
  );
};

export default MarkdownBlock;
