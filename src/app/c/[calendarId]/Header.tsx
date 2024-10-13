import { FC } from "react";
import * as styles from "./Header.css";
import JingleBells from "./JingleBells";
import { CalendarType, getClientCalendar } from "@/services/calendar";

type Props = {
  calendar: CalendarType;
};

const Header: FC<Props> = ({ calendar }) => {
  return (
    <header className={styles.header}>
      <div className={styles.heading}>{calendar.title}</div>

      <div className={styles.jingleBells}>
        <JingleBells calendar={getClientCalendar(calendar)} />
      </div>
    </header>
  );
};

export default Header;
