import { FC } from "react";
import * as styles from "./Header.css";
import JingleBells from "./JingleBells";
import { FaSkull } from "react-icons/fa";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.heading}>
        Pekkiksen koodi&shy;joulu&shy;kalenteri 2023
      </div>

      <div className={styles.instructions}>
        <p>
          Hou, hou, ja vielä kerran hou, tervetuloa koodijoulukalenteriin.
          Huomaathan, että avattuasi luukun pääset klikkaamalla syvemmälle
          luukun syövereihin.
        </p>

        <p>
          <FaSkull /> Varoitus: tontut huomaavat välittömästi, jos luukkuihin
          kurkitaan etukäteen. Joulun taika lataa sivun uusiksi joka aamu kello{" "}
          <strong>05:00</strong>, kun uusi luukku on avattavissa!
        </p>
      </div>

      <div className={styles.jingleBells}>
        <JingleBells />
      </div>
    </header>
  );
};

export default Header;
