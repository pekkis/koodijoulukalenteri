import { FC } from "react";
import * as styles from "./Calendar.css";

import { sortBy } from "remeda";
import { CalendarType, getClientCalendar } from "@/services/calendar";
import { CalendarBackground } from "@/components/calendar/CalendarBackground";
import { CalendarHatch } from "@/components/calendar/CalendarHatch";

type Props = {
  calendar: CalendarType;
  isInteractive?: boolean;
};

export const Calendar: FC<Props> = async ({
  calendar,
  isInteractive = false
}) => {
  const clientCalendar = getClientCalendar(calendar);

  const sortedHatches = sortBy(calendar.hatches, (hatch) => {
    return hatch.position.left;
  });

  return (
    <div className={calendar.themeClassName}>
      <CalendarBackground calendar={clientCalendar}>
        <div className={styles.grid}>
          {sortedHatches.map((config) => {
            return (
              <CalendarHatch
                key={config.day}
                isInteractive={isInteractive}
                calendar={calendar}
                config={config}
              />
            );
          })}
        </div>
      </CalendarBackground>
    </div>
  );
};
