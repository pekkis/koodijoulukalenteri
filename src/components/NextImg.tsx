import { FC } from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  src: StaticImageData;
  className?: string;
  alt: string;
  width: number;
  height: number;
};

const NextImg: FC<Props> = ({ src, className, alt, width, height }) => {
  return (
    <Image
      alt={alt}
      src={src.src}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default NextImg;
