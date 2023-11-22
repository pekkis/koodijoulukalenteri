import * as styles from "./page.css";
import Hatch from "@/components/hatch/Hatch";

export const metadata = {
  title: "Pekkiksen koodijoulukalenteri"
};

export default async function IndexPage() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <Hatch
          day={1}
          position={{
            top: 38,
            left: 13,
            width: 5,
            height: 5
          }}
        >
          Rubals
        </Hatch>
        <Hatch
          day={22}
          position={{
            top: 28,
            left: 13,
            width: 5,
            height: 5
          }}
        >
          Rubals
        </Hatch>

        <Hatch
          day={23}
          position={{
            top: 18,
            left: 13,
            width: 5,
            height: 5
          }}
        >
          Rubals
        </Hatch>

        <Hatch
          day={24}
          position={{
            top: 15,
            left: 33,
            width: 10,
            height: 10
          }}
        >
          Rubals
        </Hatch>
      </div>
    </div>
  );
}
