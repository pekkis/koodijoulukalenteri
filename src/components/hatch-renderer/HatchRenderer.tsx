import { HatchData } from "@/services/hatch";
import { FC } from "react";
import Img from "../Img";
import BackLink from "./BackLink";
import MainHeading from "./MainHeading";

type Props = {
  day: number;
  data: HatchData;
};

const HatchRenderer: FC<Props> = ({ data }) => {
  return (
    <div>
      <MainHeading>{data.title}</MainHeading>
      <Img src={data.image} />

      <p>
        <BackLink>Takaisin kalenteriin...</BackLink>
      </p>
    </div>
  );
};

export default HatchRenderer;
