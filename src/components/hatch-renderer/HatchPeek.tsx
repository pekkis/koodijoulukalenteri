import { HatchData } from "@/services/hatch";
import { FC } from "react";
import NextImg from "@/components/NextImg";
import OuterLayer from "./OuterLayer";
import * as styles from "./HatchPeek.css";
import { ClientCalendarType } from "@/services/calendar";
import clsx from "clsx";

type Props = {
  calendar: ClientCalendarType;
  data: HatchData;
  size?: "normal" | "wide";
};

const HatchPeek: FC<Props> = ({ calendar, data, size = "normal" }) => {
  return (
    <OuterLayer calendar={calendar} day={data.day}>
      <NextImg
        alt={data.image.alt}
        src={data.image.src}
        className={clsx(styles.image, {
          [styles.normal]: size === "normal",
          [styles.wide]: size === "wide"
        })}
        width={640}
        height={640}
      />
    </OuterLayer>
  );
};

export default HatchPeek;
