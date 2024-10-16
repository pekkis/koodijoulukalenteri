import { FC } from "react";
import * as styles from "./Header.css";

import { CalendarType } from "@/services/calendar";

type Props = {
  calendar: CalendarType;
  isInteractive?: boolean;
};

const Header: FC<Props> = ({ calendar }) => {
  return (
    <header className={styles.header}>
      <div className={styles.heading}>{calendar.title}</div>
    </header>
  );
};

export default Header;
