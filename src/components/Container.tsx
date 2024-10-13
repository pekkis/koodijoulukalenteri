import { ReactNode } from "react";
import * as styles from "./Container.css";

type Props = {
  children: ReactNode;
};

export const Container = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>;
};
