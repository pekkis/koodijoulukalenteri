import { Calendar } from "@/components/calendar/Calendar";
import { ContentSlot } from "@/components/calendar/ContentSlot";
import { CalendarType } from "@/services/calendar";

import { FC, memo, ReactNode } from "react";
import * as styles from "./CalendarWrapper.css";

type Props = {
  children: ReactNode;
  calendar: CalendarType;
  isInteractive?: boolean;
};

const CalendarWrapper: FC<Props> = ({ calendar, isInteractive, children }) => {
  return (
    <>
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
