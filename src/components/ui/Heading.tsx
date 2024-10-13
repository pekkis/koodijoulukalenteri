import { ReactNode } from "react";
import * as styles from "./Heading.css";

type Props = {
  level: 1 | 2 | 3 | 4 | 5;
  children: ReactNode;
};

export const Heading = ({ level, children }: Props) => {
  const Tag = `h${level}` as const;

  return <Tag className={styles[Tag]}>{children}</Tag>;
};
