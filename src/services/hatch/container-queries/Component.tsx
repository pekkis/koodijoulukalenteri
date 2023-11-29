import { FC } from "react";
import * as styles from "./Component.css";

const Component: FC = () => {
  return (
    <div className={styles.component}>
      <div className={styles.inside}>
        Minä poika muutun kun äitielementtini muuttuu!
      </div>
    </div>
  );
};

export default Component;
