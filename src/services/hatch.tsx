import { StaticImageData } from "next/image";

import risuja from "@/assets/risuja-2.webp";

import risuja1 from "@/assets/pekonia-ja-spagettia-1.jpeg";
import risuja2 from "@/assets/pekonia-ja-spagettia-2.jpeg";
import risuja3 from "@/assets/pekonia-ja-spagettia-3.jpeg";
import risuja4 from "@/assets/pekonia-ja-spagettia-4.jpeg";
import risuja5 from "@/assets/risuja1.jpeg";
import risuja6 from "@/assets/risuja2.jpeg";
import risuja7 from "@/assets/risuja3.jpeg";

import { HatchPosition } from "@/components/hatch/Hatch";
import { isHatchOpenable } from "./calendar";
import { FC } from "react";
import hatch666 from "./hatch/hatch666";
import movies1Hatch from "./hatch/movies/movies-1";
import containerQueryHatch from "./hatch/container-queries/container-query-hatch";
import valueForLifeHatch from "./hatch/value-for-life/value-for-life";
import carjackHatch from "./hatch/carjack/carjackHatch";
import linusHatch from "./hatch/linus/linusHatch";
import roadmapHatch from "./hatch/roadmap/roadmapHatch";
import domainHatch from "./hatch/fi-domain/fiDomainHatch";
import movies2Hatch from "./hatch/movies/movies-2";
import baldursHatch from "./hatch/baldurs/baldursHatch";
import knittersHatch from "./hatch/knitters/knittersHatch";
import adaHatch from "./hatch/ada/adaHatch";
import stylingHatch from "./hatch/styling/stylingHatch";

export type MarkdownBlockType = {
  type: "markdown";
  text: string;
};

export type HeadingBlockType = {
  type: "heading";
  level: number;
  text: string;
};

export type ImageBlockType = {
  type: "image";
  alt: string;
  url: string;
};

export type YoutubeBlockType = {
  type: "youtube";
  id: string;
  caption?: string;
};

export type JsxBlockType = {
  type: "jsx";
  Component: FC;
};

export type ContentBlockType =
  | MarkdownBlockType
  | HeadingBlockType
  | ImageBlockType
  | JsxBlockType
  | YoutubeBlockType;

export type HatchData = {
  day: number;
  image: {
    src: StaticImageData;
    alt: string;
  };
  title: string;
  content: ContentBlockType[];
};

export type HatchDataWithoutDay = Omit<HatchData, "day">;

type HatchesData = Record<number, Omit<HatchData, "day">>;

const risujaData: Omit<HatchData, "day"> = {
  title: "Tuhmille kiviä, risuja, pekonia ja spagettia",
  image: {
    src: risuja,
    alt: "Tuhma lapsi on saanut lahjaksi tyhmän lahjan. Hän itkee."
  },
  content: [
    {
      type: "markdown",
      text: `Nyt nimien kirjaan merkitään taas: tuhma vai kiltti, ajatelkaas! Joulupukki matkaan jo käy. Taas pienet tontut liikkuu ja muistiin merkitsee, niin joulupukki tietää saa, kuka lahjat ansaitsee.`
    }
  ]
};

const hatches: HatchesData = {
  1: movies1Hatch,
  2: roadmapHatch,
  3: containerQueryHatch,
  4: domainHatch,
  5: carjackHatch,
  // 5: baldursHatch,
  6: linusHatch,
  7: valueForLifeHatch,
  8: movies2Hatch,
  9: baldursHatch,
  10: adaHatch,
  11: knittersHatch,
  12: stylingHatch,
  13: risujaData,
  14: risujaData,
  15: risujaData,
  16: risujaData,
  17: risujaData,
  18: risujaData,
  19: risujaData,
  20: risujaData,
  21: risujaData,
  22: risujaData,
  23: risujaData,
  24: risujaData,
  666: hatch666
};

/* eslint-disable @typescript-eslint/no-unused-vars */

export const getHatchData = async (day: number): Promise<HatchData | null> => {
  if (day !== 666 && !isHatchOpenable(day)) {
    return {
      ...risujaData,
      day,
      image: {
        ...risujaData.image,
        get src() {
          const risut = [
            risuja1,
            risuja5,
            risuja2,
            risuja6,
            risuja3,
            risuja7,
            risuja4,
            risuja1,
            risuja5,
            risuja2,
            risuja6,
            risuja3,
            risuja7,
            risuja4,
            risuja1,
            risuja5,
            risuja2,
            risuja6,
            risuja3,
            risuja7,
            risuja4,
            risuja1,
            risuja5,
            risuja2,
            risuja6,
            risuja3,
            risuja7,
            risuja4
          ];

          return risut[day - 1];
        }
      }
    };
  }

  if (hatches[day]) {
    return { ...hatches[day], day };
  }

  return null;
};

export const getPosition = (
  x: number,
  y: number,
  width: number,
  height: number
): HatchPosition => {
  const calcX = x > 0 ? x : 52 + x - width;
  const calcY = y > 0 ? y : 52 + y - height;

  return {
    top: calcY,
    left: calcX,
    width,
    height
  };
};
