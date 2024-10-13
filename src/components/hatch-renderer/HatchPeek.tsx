import { HatchData } from "@/services/hatch";
import { FC } from "react";
import NextImg from "@/components/NextImg";
import OuterLayer from "./OuterLayer";
import * as styles from "./HatchPeek.css";
import { ClientCalendarType } from "@/services/calendar";

type Props = {
  calendar: ClientCalendarType;
  data: HatchData;
};

const HatchPeek: FC<Props> = ({ calendar, data }) => {
  return (
    <OuterLayer calendar={calendar} day={data.day}>
      <NextImg
        alt={data.image.alt}
        src={data.image.src}
        className={styles.image}
        width={640}
        height={640}
      />
    </OuterLayer>
  );
};

export default HatchPeek;
