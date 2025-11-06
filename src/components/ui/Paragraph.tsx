import { FC, ReactNode } from "react";
import * as styles from "./Paragraph.css";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  justify?: boolean;
};

export const Paragraph: FC<Props> = ({ children, justify = false }: Props) => {
  return (
    <p className={clsx(styles.paragraph, justify && styles.justify)}>
      {children}
    </p>
  );
};
