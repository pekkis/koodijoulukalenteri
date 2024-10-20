import Image from "next/image";
import notFoundImg from "./404.webp";
import * as styles from "./not-found.css";

export default function notFound() {
  return (
    <div className={styles.container}>
      <Image className={styles.image} src={notFoundImg} width="800" alt="404" />
    </div>
  );
}
