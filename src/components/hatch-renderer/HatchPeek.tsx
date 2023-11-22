import { HatchData } from "@/services/hatch";
import { FC } from "react";
import Img from "../Img";
import OuterLayer from "./OuterLayer";

type Props = {
  day: number;
  data: HatchData;
};

const HatchPeek: FC<Props> = ({ day, data }) => {
  return (
    <OuterLayer day={day}>
      <Img src={data.image} />
    </OuterLayer>
  );
};

export default HatchPeek;
