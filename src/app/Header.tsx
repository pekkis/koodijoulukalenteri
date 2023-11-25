import { FC } from "react";
import * as styles from "./Header.css";
import JingleBells from "./JingleBells";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.heading}>
        Pekkiksen koodi&shy;joulu&shy;kalenteri 2023
      </div>

      <div className={styles.jingleBells}>
        <JingleBells />
      </div>
    </header>
  );
};

export default Header;
