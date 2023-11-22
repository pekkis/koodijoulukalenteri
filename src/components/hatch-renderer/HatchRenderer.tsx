import { HatchData } from "@/services/hatch";
import { FC } from "react";
import Img from "../Img";
import BackLink from "./BackLink";

type Props = {
  day: number;
  data: HatchData;
};

const HatchRenderer: FC<Props> = ({ data }) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <Img src={data.image} />

      <p>
        <BackLink>Takaisin kalenteriin...</BackLink>
      </p>
    </div>
  );
};

export default HatchRenderer;
