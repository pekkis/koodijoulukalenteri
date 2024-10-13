import { HatchData } from "@/services/hatch";
import { FC, Fragment } from "react";
import NextImg from "../NextImg";
import MainHeading from "./MainHeading";
import JsxBlock from "./blocks/JsxBlock";
import * as styles from "./HatchRenderer.css";
import MarkdownBlock from "./blocks/MarkdownBlock";
import BackButton from "./BackButton";
import YoutubeBlock from "./blocks/YoutubeBlock";
import { CalendarType } from "@/services/calendar";

type Props = {
  calendar: CalendarType;
  day: number;
  data: HatchData;
};

const HatchRenderer: FC<Props> = ({ calendar, data }) => {
  return (
    <article>
      <header className={styles.header}>
        <MainHeading>{data.title}</MainHeading>
        <NextImg
          src={data.image.src}
          alt={data.image.alt}
          width={640}
          height={640}
          className={styles.image}
        />
      </header>

      <div>
        {data.content.map((block, i) => {
          switch (block.type) {
            case "markdown":
              return <MarkdownBlock key={i} block={block} />;
            case "jsx":
              return <JsxBlock calendar={calendar} key={i} block={block} />;
            case "youtube":
              return <YoutubeBlock key={i} block={block} />;

            default:
              return <Fragment key={i}>lus</Fragment>;
          }
        })}
      </div>

      <BackButton>Takaisin kalenteriin</BackButton>
    </article>
  );
};

export default HatchRenderer;
