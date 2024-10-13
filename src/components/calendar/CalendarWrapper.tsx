import { FC, useMemo } from "react";
import * as styles from "./CalendarWrapper.css";
import { getTime } from "@/services/time";
import { FaSkull } from "react-icons/fa";
import NaughtyOrNice from "./NaughtyOrNice";
import Refresher from "./Refresher";
import { CalendarType, getClientCalendar } from "@/services/calendar";
import { Calendar } from "@/components/calendar/Calendar";

type Props = {
  calendar: CalendarType;
  isInteractive?: boolean;
};

export const CalendarWrapper: FC<Props> = ({ calendar, isInteractive }) => {
  const clientCalendar = useMemo(() => getClientCalendar(calendar), [calendar]);

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
      <NaughtyOrNice calendar={clientCalendar} />
      <Calendar calendar={calendar} isInteractive={isInteractive} />
    </>
  );
};
