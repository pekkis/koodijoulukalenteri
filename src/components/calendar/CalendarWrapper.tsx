import { Calendar } from "@/components/calendar/Calendar";
import { ContentSlot } from "@/components/calendar/ContentSlot";
import { CalendarType } from "@/services/calendar";
import { getTime } from "@/services/time";
import { FC, memo, ReactNode } from "react";
import * as styles from "./CalendarWrapper.css";
import Refresher from "./Refresher";

type Props = {
  children: ReactNode;
  calendar: CalendarType;
  isInteractive?: boolean;
};

const CalendarWrapper: FC<Props> = ({ calendar, isInteractive, children }) => {
  return (
    <>
      <Refresher serverTime={getTime().toISO() as string} />
      <div className={styles.instructions}>
        <ContentSlot slot="instructions" calendar={calendar} />
      </div>

      <div>
        <ContentSlot slot="controls" calendar={calendar} />
      </div>

      <Calendar calendar={calendar} isInteractive={isInteractive} />
      {children}
    </>
  );
};

export default memo(CalendarWrapper);
