import { Paragraph } from "@/components/ui/Paragraph";
import { FC } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  children: string;
};

export const Markdown: FC<Props> = ({ children }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        p: ({ children, ...rest }) => {
          return <Paragraph>{children}</Paragraph>;
        },

        a: ({ children, href, ...rest }) => {
          if (href?.startsWith("http")) {
            return (
              <a {...rest} rel="noreferrer" href={href} target="_blank">
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
      {children}
    </ReactMarkdown>
  );
};
