import { FC } from "react";
import CalendarWall from "../hatch/CalendarWall";
import Hatch from "../hatch/Hatch";
import * as styles from "./Calendar.css";

const Calendar: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <Hatch
          day={1}
          position={{
            top: 38,
            left: 13,
            width: 5,
            height: 5
          }}
        >
          Rubals
        </Hatch>
        <Hatch
          day={22}
          position={{
            top: 28,
            left: 13,
            width: 5,
            height: 5
          }}
        >
          Rubals
        </Hatch>

        <Hatch
          day={23}
          position={{
            top: 18,
            left: 13,
            width: 5,
            height: 5
          }}
        >
          Rubals
        </Hatch>

        <Hatch
          day={24}
          position={{
            top: 15,
            left: 33,
            width: 10,
            height: 10
          }}
        >
          <CalendarWall day={24}>Rubals</CalendarWall>
        </Hatch>
      </div>
    </div>
  );
};

export default Calendar;
