import { StaticImageData } from "next/image";

import risuja from "@/assets/risuja.png";

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

export type ContentBlockType =
  | MarkdownBlockType
  | HeadingBlockType
  | ImageBlockType;

export type HatchData = {
  day: number;
  image: StaticImageData;
  title: string;
  content: ContentBlockType[];
};

// type HatchesData = Record<number, HatchData>;

const risujaData: Omit<HatchData, "day"> = {
  title: "Tuhmat saavat risuja",
  image: risuja,
  content: [
    {
      type: "markdown",
      text: "Luukkujen varhaisille aukaisijoille pukki antaa **risuja** ja **kiviä** ja Bacon.js:n."
    }
  ]
};

/* eslint-disable @typescript-eslint/no-unused-vars */

export const getHatchData = async (day: number): Promise<HatchData> => {
  return { ...risujaData, day };
};
