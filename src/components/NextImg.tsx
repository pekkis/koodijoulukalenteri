import { FC } from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  src: StaticImageData;
  className?: string;
  alt: string;
};

const Img: FC<Props> = ({ src, className, alt }) => {
  return (
    <Image
      alt={alt}
      src={src.src}
      width={100}
      height={100}
      className={className}
    />
  );
};

export default Img;
