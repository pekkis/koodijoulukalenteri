import { YoutubeBlockType } from "@/services/hatch";
import { FC } from "react";
import { YouTubeEmbed } from "@next/third-parties/google";
import * as styles from "./YoutubeBlock.css";

type Props = {
  block: YoutubeBlockType;
};

const YoutubeBlock: FC<Props> = ({ block }) => {
  return (
    <div className={styles.block}>
      <YouTubeEmbed videoid={block.id} />
      {block.caption && <div className={styles.caption}>{block.caption}</div>}
    </div>
  );
};

export default YoutubeBlock;
