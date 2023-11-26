import { StaticImageData } from "next/image";

import risuja from "@/assets/risuja-2.png";
import demonicSanta from "./hatch/demonic-santa.png";

import { HatchPosition } from "@/components/hatch/Hatch";
import { isHatchOpenable } from "./calendar";
import { FC } from "react";
import Hatch666Content from "./hatch/Hatch666Content";

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

export type JsxBlockType = {
  type: "jsx";
  Component: FC;
};

export type ContentBlockType =
  | MarkdownBlockType
  | HeadingBlockType
  | ImageBlockType
  | JsxBlockType;

export type HatchData = {
  day: number;
  image: StaticImageData;
  title: string;
  content: ContentBlockType[];
};

type HatchesData = Record<number, Omit<HatchData, "day">>;

const risujaData: Omit<HatchData, "day"> = {
  title: "Tuhmat saavat kiviä ja risuja",
  image: risuja,
  content: [
    {
      type: "markdown",
      text: "Luukkujen varhaisille aukaisijoille pukki antaa **risuja** ja **kiviä** ja Bacon.js:n."
    }
  ]
};

const hatches: HatchesData = {
  666: {
    title: "Pukki on sieluton, muttei vailla armoa",
    image: demonicSanta,
    content: [
      {
        type: "jsx",
        Component: Hatch666Content
      }
    ]
  }
};

/* eslint-disable @typescript-eslint/no-unused-vars */

export const getHatchData = async (day: number): Promise<HatchData | null> => {
  if (day !== 666 && !isHatchOpenable(day)) {
    return { ...risujaData, day };
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
