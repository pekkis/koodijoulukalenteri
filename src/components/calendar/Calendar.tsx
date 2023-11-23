import { FC } from "react";
import CalendarWall from "../hatch/CalendarWall";
import Hatch, { HatchPosition } from "../hatch/Hatch";
import * as styles from "./Calendar.css";
import { isHatchOpenable } from "@/services/calendar";

type HatchConfig = {
  day: number;
  position: HatchPosition;
};

const hatches: HatchConfig[] = [
  {
    day: 1,
    position: {
      top: 38,
      left: 13,
      width: 5,
      height: 5
    }
  },
  {
    day: 22,
    position: {
      top: 28,
      left: 13,
      width: 5,
      height: 5
    }
  },
  {
    day: 24,
    position: {
      top: 15,
      left: 33,
      width: 10,
      height: 10
    }
  }
];

const Calendar: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {hatches.map((config) => {
          const { day, position } = config;

          return (
            <Hatch
              key={config.day}
              isOpenable={isHatchOpenable(day)}
              day={day}
              position={position}
            >
              <CalendarWall day={day} />
            </Hatch>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
