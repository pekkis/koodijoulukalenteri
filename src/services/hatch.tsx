import { StaticImageData } from "next/image";

import { HatchPosition } from "@/components/hatch/Hatch";
import { FC } from "react";
import { ClientCalendarType } from "@/services/calendar";

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
  Component: FC<{ calendar: ClientCalendarType }>;
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

export type HatchesData = Record<number, Omit<HatchData, "day">>;

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
