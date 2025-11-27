import "server-only";

/* eslint-disable @typescript-eslint/no-unused-vars */

import type { HatchData } from "@/services/hatch";
import type {
  HatchPosition,
  HatchProps,
  InnerHatchProps
} from "@/components/hatch/hatch-types";
import { DateTime } from "luxon";
import { FC } from "react";

export type HatchConfig = {
  day: number;
  position: HatchPosition;
  openableAt: DateTime;
  hatchComponent?: () => Promise<FC<HatchProps>>;
  innerHatchComponent?: () => Promise<FC<InnerHatchProps>>;
};

export type NaughtinessLevel = {
  level: number;
  requiredNaughtiness: number;
  name: string;
  backgroundImage: string;
  music: string;
  range: "low" | "medium" | "high";
};

export type ContentSlotName = "instructions" | "controls";

export type CalendarType = {
  defaultHatchComponent?: () => Promise<FC<HatchProps>>;
  defaultInnerHatchComponent?: () => Promise<FC<InnerHatchProps>>;

  themeClassName: string;
  year: number;
  weight: number;
  id: string;
  title: string;
  getHatchData: (hatch: HatchConfig) => Promise<HatchData | null>;
  hatches: HatchConfig[];
  naughtinessLevels: NaughtinessLevel[];

  /*
  getNaughtinessIncrement?: (
    calendar: ClientCalendarType,
    openHatches: number[]
  ) => number;
   */

  description: string;
  metaDescription?: string;
  openAt: DateTime;
  canonicalImage: string;

  getSlotComponent: (slot: ContentSlotName) => FC<{ calendar: CalendarType }>;
};

export type ClientCalendarType = Omit<
  CalendarType,
  | "getHatchData"
  | "hatches"
  | "description"
  | "openAt"
  | "getSlotComponent"
  | "defaultHatchComponent"
  | "defaultInnerHatchComponent"
> & {
  openAt: string;
};

const calendars: Record<string, () => Promise<CalendarType>> = {
  2023: async () => {
    const { calendar } = await import("./calendar/2023/calendar");
    return calendar;
  },
  "2023-redux": async () => {
    const { calendar } = await import("./calendar/2023-redux/calendar");
    return calendar;
  },
  2025: async () => {
    const { calendar } = await import("./calendar/2025/calendar");
    return calendar;
  }
};

export const getCalendars = async (): Promise<CalendarType[]> => {
  return Promise.all(
    Object.values(calendars).map((obu) => {
      return obu();
    })
  );
};

export const doesCalendarExist = async (id: string) => {
  const calendar = calendars[id];

  if (!calendar) {
    return false;
  }

  return true;
};

export const getClientCalendar = (
  calendar: CalendarType
): ClientCalendarType => {
  const {
    getHatchData,
    hatches,
    openAt,
    description,
    getSlotComponent,
    defaultHatchComponent,
    defaultInnerHatchComponent,
    ...clientCalendar
  } = calendar;
  return {
    ...clientCalendar,
    openAt: openAt.toISO() as string
  };
};

export const getCalendar = async (id: string): Promise<CalendarType | null> => {
  const calendar = calendars[id];

  if (!calendar) {
    return null;
  }

  return calendar();
};
