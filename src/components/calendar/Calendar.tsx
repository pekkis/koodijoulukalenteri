import { FC, useMemo } from "react";
import CalendarWall from "../hatch/CalendarWall";
import Hatch from "../hatch/Hatch";
import * as styles from "./Calendar.css";
import { isHatchOpenable } from "@/services/time";
import { sortBy } from "remeda";
import { CalendarType, getClientCalendar } from "@/services/calendar";
import { CalendarBackground } from "@/components/calendar/CalendarBackground";

type Props = {
  calendar: CalendarType;
  isInteractive?: boolean;
};

export const Calendar: FC<Props> = ({ calendar, isInteractive = false }) => {
  const clientCalendar = useMemo(() => getClientCalendar(calendar), [calendar]);

  const sortedHatches = sortBy(calendar.hatches, (hatch) => {
    return hatch.position.left;
  });

  return (
    <div className={calendar.themeClassName}>
      <CalendarBackground calendar={clientCalendar}>
        <div className={styles.grid}>
          {sortedHatches.map((config) => {
            const { day, position } = config;

            const HatchComponent = config.hatchComponent ?? Hatch;

            return (
              <HatchComponent
                isInteractive={isInteractive}
                calendar={clientCalendar}
                key={config.day}
                isOpenable={isHatchOpenable(config)}
                day={day}
                position={position}
              >
                <CalendarWall calendar={calendar} hatch={config} />
              </HatchComponent>
            );
          })}
        </div>
      </CalendarBackground>
    </div>
  );
};
