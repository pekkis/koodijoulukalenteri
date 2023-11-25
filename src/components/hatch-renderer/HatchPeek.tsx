import { HatchData } from "@/services/hatch";
import { FC } from "react";
import Img from "@/components/NextImg";
import OuterLayer from "./OuterLayer";
import * as styles from "./HatchPeek.css";

type Props = {
  data: HatchData;
};

const HatchPeek: FC<Props> = ({ data }) => {
  return (
    <OuterLayer day={data.day}>
      <Img alt="risuja" src={data.image} className={styles.image} />
    </OuterLayer>
  );
};

export default HatchPeek;
