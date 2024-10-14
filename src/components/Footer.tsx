import { FC, ReactNode } from "react";
import * as styles from "./Footer.css";

type Props = {
  children: ReactNode;
};

const Footer: FC<Props> = ({ children }) => {
  return <footer className={styles.footer}>{children}</footer>;
};

export default Footer;
