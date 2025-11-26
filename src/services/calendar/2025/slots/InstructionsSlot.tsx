import { Paragraph } from "@/components/ui/Paragraph";
import { CalendarType } from "@/services/calendar";
import { getTime } from "@/services/time";
import { DateTime } from "luxon";
import { FC } from "react";
import { FaSkull } from "react-icons/fa";

type Props = {
  calendar: CalendarType;
};

export const InstructionsSlot: FC<Props> = ({ calendar }) => {
  const now = getTime();

  return (
    <>
      <Paragraph justify>
        Hou, hou, tervetuloa vuoden 2025 koodijoulukalenteriin. Huomaathan, että
        avattuasi luukun voit kliksutella itsesi vielä syvemmälle luukun
        syövereihin.
      </Paragraph>

      <Paragraph justify>
        <FaSkull /> Varoituksen sana: kooditontut huomaavat, jos kurkit
        luukkuihin etukäteen. Nukkumatin unihiekka päivittää kalenterin joka
        aamu huomaamattasi suunnilleen kello viisi, mutta voit varmuudeksi
        rynkytellä reloadia!
      </Paragraph>

      {now < calendar.openAt && (
        <Paragraph>
          Kalenteri muuttuu interaktiiviseksi{" "}
          <strong>
            {calendar.openAt
              .setLocale("fi")
              .toLocaleString(DateTime.DATETIME_MED)}
          </strong>
          .
        </Paragraph>
      )}
    </>
  );
};
