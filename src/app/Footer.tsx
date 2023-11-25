import { FC } from "react";
import * as styles from "./Footer.css";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      Copyright &copy; 2023 Mikko &quot;Pekkis&quot; Forsström |{" "}
      <Link href="/">Kalenteri</Link> | <Link href="/about">Lisätiedot</Link>
    </footer>
  );
};

export default Footer;
