import { FC } from "react";
import CalendarWall from "../hatch/CalendarWall";
import Hatch, { HatchPosition } from "../hatch/Hatch";
import * as styles from "./Calendar.css";
import { getTime, isHatchOpenable } from "@/services/calendar";
import { getPosition } from "@/services/hatch";
import { sortBy } from "ramda";
import { FaSkull } from "react-icons/fa";
import NaughtyOrNice from "./NaughtyOrNice";
import EscapeHatch from "./EscapeHatch";
import Refresher from "./Refresher";

type HatchConfig = {
  day: number;
  position: HatchPosition;
};

const hatches: HatchConfig[] = [
  {
    day: 1,
    position: getPosition(13, -4, 7, 7)
  },
  {
    day: 2,
    position: getPosition(3, 3, 5, 5)
  },

  {
    day: 3,
    position: getPosition(-3, 10, 5, 5)
  },

  {
    day: 4,
    position: getPosition(12, 26, 6, 6)
  },

  {
    day: 5,
    position: getPosition(25, -5, 5, 5)
  },

  {
    day: 6,
    position: getPosition(3, 20, 7, 10)
  },
  {
    day: 7,
    position: getPosition(-4, 3, 5, 5)
  },

  {
    day: 8,
    position: getPosition(19, 2, 5, 5)
  },

  {
    day: 9,
    position: getPosition(-3, 30, 5, 5)
  },

  {
    day: 10,
    position: getPosition(-25, 22, 6, 6)
  },

  {
    day: 11,
    position: getPosition(-12, -3, 6, 6)
  },

  {
    day: 12,
    position: getPosition(14, 17, 5, 5)
  },

  {
    day: 13,
    position: getPosition(20, 31, 12, 6)
  },

  {
    day: 14,
    position: getPosition(4, 10, 6, 6)
  },

  {
    day: 15,
    position: getPosition(-13, 6, 6, 6)
  },

  {
    day: 16,
    position: getPosition(-12, 33, 6, 6)
  },

  {
    day: 17,
    position: getPosition(4, -13, 6, 6)
  },

  {
    day: 18,
    position: getPosition(-5, -10, 5, 5)
  },

  {
    day: 19,
    position: getPosition(-2, 20, 6, 6)
  },

  {
    day: 20,
    position: getPosition(3, -3, 6, 6)
  },

  {
    day: 21,
    position: getPosition(22, 11, 6, 6)
  },

  {
    day: 22,
    position: getPosition(13, 9, 5, 5)
  },

  {
    day: 23,
    position: getPosition(-3, -3, 4, 4)
  },
  {
    day: 24,
    position: getPosition(30, 16, 12, 12)
  }
];

const Calendar: FC = () => {
  const sortedHatches = sortBy((hatch) => {
    return hatch.position.left;
  }, hatches);

  return (
    <>
      <div className={styles.instructions}>
        <p>
          Hou, hou, ja vielä kerran hou, tervetuloa koodijoulukalenteriin.
          Huomaathan, että avattuasi luukun pääset klikkaamalla syvemmälle
          luukun syövereihin.
        </p>

        <p>
          <FaSkull /> Varoitus: tontut huomaavat, jos kurkit luukkuihin
          etukäteen. Joulun taika päivittää kalenterin joka aamu kello{" "}
          <strong>05:00:05</strong>, mutta voit varmuudeksi toki rynkytellä
          reloadia!
        </p>

        <Refresher serverTime={getTime().toISO() as string} />
      </div>
      <NaughtyOrNice>
        <div className={styles.grid}>
          <EscapeHatch />
          {sortedHatches.map((config) => {
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
      </NaughtyOrNice>
    </>
  );
};

export default Calendar;
