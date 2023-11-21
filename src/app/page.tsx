import Hatch24 from "@/components/hatch/Hatch24";
import * as styles from "./page.css";
import Hatch1 from "@/components/hatch/Hatch1";

export const metadata = {
  title: "Pekkiksen koodijoulukalenteri"
};

export default async function IndexPage() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <Hatch1 />
        <Hatch24 />
      </div>
    </div>
  );
}
