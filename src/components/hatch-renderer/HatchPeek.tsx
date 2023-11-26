import { HatchData } from "@/services/hatch";
import { FC } from "react";
import NextImg from "@/components/NextImg";
import OuterLayer from "./OuterLayer";
import * as styles from "./HatchPeek.css";

type Props = {
  data: HatchData;
};

const HatchPeek: FC<Props> = ({ data }) => {
  return (
    <OuterLayer day={data.day}>
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
