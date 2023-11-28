import { MarkdownBlockType } from "@/services/hatch";
import { FC } from "react";
import ReactMarkdown from "react-markdown";

type Props = {
  block: MarkdownBlockType;
};

const MarkdownBlock: FC<Props> = ({ block }) => {
  return (
    <>
      <ReactMarkdown
        components={{
          a: ({ children, href, ...rest }) => {
            if (href?.startsWith("http")) {
              return (
                <a {...rest} href={href} target="_blank">
                  {children}
                </a>
              );
            }

            return (
              <a {...rest} href={href}>
                {children}
              </a>
            );
          }
        }}
      >
        {block.text}
      </ReactMarkdown>
    </>
  );
};

export default MarkdownBlock;
