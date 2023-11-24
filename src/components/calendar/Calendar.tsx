import { FC } from "react";
import CalendarWall from "../hatch/CalendarWall";
import Hatch, { HatchPosition } from "../hatch/Hatch";
import * as styles from "./Calendar.css";
import { isHatchOpenable } from "@/services/calendar";
import { getPosition } from "@/services/hatch";

type HatchConfig = {
  day: number;
  position: HatchPosition;
};

const hatches: HatchConfig[] = [
  {
    day: 1,
    position: getPosition(13, 38, 5, 5)
  },
  {
    day: 2,
    position: getPosition(2, 2, 5, 5)
  },
  {
    day: 3,
    position: getPosition(-2, -2, 5, 5)
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
  },

  {
    day: 6,
    position: getPosition(2, 20, 5, 10)
  },

  {
    day: 5,
    position: getPosition(-2, 20, 6, 5)
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
