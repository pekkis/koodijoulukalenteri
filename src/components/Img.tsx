import { FC } from "react";
import { StaticImageData } from "next/image";
import * as styles from "./Img.css";

type Props = {
  src: StaticImageData;
};

const Image: FC<Props> = ({ src }) => {
  return (
    <img
      alt="Joulupukki antaa tuhmille lapsille risuja"
      className={styles.image}
      src={src.src}
    />
  );
};

export default Image;
