import { ReactNode } from "react";
import * as styles from "./Container.css";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  as?: "div" | "section" | "main";
  wide?: boolean;
};

export const Container = ({ children, as = "div", wide = false }: Props) => {
  const Component = as;

  const classes = clsx(styles.container, {
    [styles.wide]: wide
  });

  return <Component className={classes}>{children}</Component>;
};
