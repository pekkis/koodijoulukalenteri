import { FC, ReactNode } from "react";
import * as styles from "./Paragraph.css";

type Props = {
  children: ReactNode;
};

export const Paragraph: FC<Props> = ({ children }: Props) => {
  return <p className={styles.paragraph}>{children}</p>;
};
