import { FC, ReactNode } from "react";
import * as styles from "./Backdrop.css";

type Props = {
  children: ReactNode;
};

const Backdrop: FC<Props> = ({ children }) => {
  return <div className={styles.backdrop}>{children}</div>;
};

export default Backdrop;
