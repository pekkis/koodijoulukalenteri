import { Paragraph } from "@/components/ui/Paragraph";
import { CalendarType } from "@/services/calendar";
import { FC } from "react";
import { FaSkull } from "react-icons/fa";

type Props = {
  calendar: CalendarType;
};

export const InstructionsSlot: FC<Props> = () => {
  return (
    <>
      <Paragraph>
        Hou, hou, ja vielä kerran hou, tervetuloa koodijoulukalenteriin.
        Huomaathan, että avattuasi luukun pääset klikkaamalla syvemmälle luukun
        syövereihin.
      </Paragraph>

      <Paragraph>
        <FaSkull /> Varoitus: tontut huomaavat, jos kurkit luukkuihin etukäteen.
        Joulun taika päivittää kalenterin joka aamu kello{" "}
        <strong>05:00:05</strong>, mutta voit varmuudeksi toki rynkytellä
        reloadia!
      </Paragraph>
    </>
  );
};
