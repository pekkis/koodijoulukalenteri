import { HatchData } from "@/services/hatch";
import { FC } from "react";
import Img from "../Img";
import OuterLayer from "./OuterLayer";

type Props = {
  data: HatchData;
};

const HatchPeek: FC<Props> = ({ data }) => {
  return (
    <OuterLayer day={data.day}>
      <Img src={data.image} />
    </OuterLayer>
  );
};

export default HatchPeek;
