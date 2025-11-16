import { blockS, marginsClass } from "@/components/ui/Margins.css";
import clsx from "clsx";
import { FC, HTMLElementType, ReactNode } from "react";

type Props = {
  block?: 0 | "s" | "m";
  inline?: 0 | "s" | "m";
  as?: HTMLElementType;
  children?: ReactNode;
};

export const Margins: FC<Props> = ({
  block = 0,
  inline = 0,
  as = "div",
  children
}) => {
  const Component = as;

  const classes = clsx(marginsClass, {
    [blockS]: block === "s"
  });

  return <Component className={classes}>{children}</Component>;
};
