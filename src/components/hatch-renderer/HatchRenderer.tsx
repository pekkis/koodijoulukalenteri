import { HatchData } from "@/services/hatch";
import { FC, Fragment } from "react";
import Img from "../Img";
import BackLink from "./BackLink";
import MainHeading from "./MainHeading";
import JsxBlock from "./blocks/JsxBlock";

type Props = {
  day: number;
  data: HatchData;
};

const HatchRenderer: FC<Props> = ({ data }) => {
  return (
    <div>
      <MainHeading>{data.title}</MainHeading>
      <Img src={data.image} />

      {data.content.map((block, i) => {
        switch (block.type) {
          case "jsx":
            return <JsxBlock key={i} block={block} />;

          default:
            return <Fragment key={i}>lus</Fragment>;
        }
      })}

      <p>
        <BackLink>Takaisin kalenteriin...</BackLink>
      </p>
    </div>
  );
};

export default HatchRenderer;
