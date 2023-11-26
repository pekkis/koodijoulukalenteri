import { HatchData } from "@/services/hatch";
import { FC, Fragment } from "react";
import NextImg from "../NextImg";
import MainHeading from "./MainHeading";
import JsxBlock from "./blocks/JsxBlock";
import * as styles from "./HatchRenderer.css";
import MarkdownBlock from "./blocks/MarkdownBlock";
import BackButton from "./BackButton";

type Props = {
  day: number;
  data: HatchData;
};

const HatchRenderer: FC<Props> = ({ data }) => {
  return (
    <div>
      <MainHeading>{data.title}</MainHeading>
      <NextImg
        src={data.image.src}
        alt={data.image.alt}
        width={640}
        height={640}
        className={styles.image}
      />

      {data.content.map((block, i) => {
        switch (block.type) {
          case "markdown":
            return <MarkdownBlock key={i} block={block} />;
          case "jsx":
            return <JsxBlock key={i} block={block} />;

          default:
            return <Fragment key={i}>lus</Fragment>;
        }
      })}

      <BackButton>Takaisin kalenteriin</BackButton>
    </div>
  );
};

export default HatchRenderer;
