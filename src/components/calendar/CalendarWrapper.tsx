import { FC, useMemo } from "react";
import * as styles from "./CalendarWrapper.css";
import { getTime } from "@/services/time";
import { FaSkull } from "react-icons/fa";
import NaughtyOrNice from "./NaughtyOrNice";
import Refresher from "./Refresher";
import { CalendarType, getClientCalendar } from "@/services/calendar";
import { Calendar } from "@/components/calendar/Calendar";
import { Paragraph } from "@/components/ui/Paragraph";

type Props = {
  calendar: CalendarType;
  isInteractive?: boolean;
};

export const CalendarWrapper: FC<Props> = ({ calendar, isInteractive }) => {
  const clientCalendar = useMemo(() => getClientCalendar(calendar), [calendar]);

  return (
    <>
      <div className={styles.instructions}>
        <Paragraph>
          Hou, hou, ja vielä kerran hou, tervetuloa koodijoulukalenteriin.
          Huomaathan, että avattuasi luukun pääset klikkaamalla syvemmälle
          luukun syövereihin.
        </Paragraph>

        <Paragraph>
          <FaSkull /> Varoitus: tontut huomaavat, jos kurkit luukkuihin
          etukäteen. Joulun taika päivittää kalenterin joka aamu kello{" "}
          <strong>05:00:05</strong>, mutta voit varmuudeksi toki rynkytellä
          reloadia!
        </Paragraph>

        <Refresher serverTime={getTime().toISO() as string} />
      </div>
      <NaughtyOrNice calendar={clientCalendar} />
      <Calendar calendar={calendar} isInteractive={isInteractive} />
    </>
  );
};
