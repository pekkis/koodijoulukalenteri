import { Calendar } from "@/components/calendar/Calendar";
import { ContentSlot } from "@/components/calendar/ContentSlot";
import { CalendarType } from "@/services/calendar";
import { getTime } from "@/services/time";
import { FC } from "react";
import * as styles from "./CalendarWrapper.css";
import Refresher from "./Refresher";

type Props = {
  calendar: CalendarType;
  isInteractive?: boolean;
};

export const CalendarWrapper: FC<Props> = ({ calendar, isInteractive }) => {
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
    </>
  );
};
