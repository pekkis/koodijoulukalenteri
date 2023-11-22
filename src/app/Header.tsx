/* eslint-disable jsx-a11y/media-has-caption */

import { FC } from "react";
import * as styles from "./Header.css";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div>Peksun koodi&shy;joulukalenteri</div>
      <div>
        <audio controls src="/jingle-bells.ogg" />
      </div>
    </header>
  );
};

export default Header;
