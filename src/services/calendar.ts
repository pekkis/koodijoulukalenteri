/* eslint-disable @typescript-eslint/no-unused-vars */
import { HatchData } from "@/services/hatch";
import { calendar as calendar2023 } from "./calendar/2023/calendar";
import { calendar as calendar2024XY } from "./calendar/2024/calendar-xy";
import { calendar as calendar2024XX } from "./calendar/2024/calendar-xx";
import { calendar as calendar2023_redux } from "./calendar/2023-redux/calendar";
import { HatchPosition, HatchProps } from "@/components/hatch/Hatch";
import { DateTime } from "luxon";
import { FC } from "react";

export type HatchConfig = {
  day: number;
  position: HatchPosition;
  openableAt: DateTime;
  hatchComponent?: FC<HatchProps>;
};

export type NaughtinessLevel = {
  level: number;
  requiredNaughtiness: number;
  name: string;
  backgroundImage: string;
  music: string;
};

export type ContentSlotName = "instructions" | "controls";

export type CalendarType = {
  themeClassName: string;
  year: number;
  weight: number;
  id: string;
  title: string;
  getHatchData: (hatch: HatchConfig) => Promise<HatchData | null>;
  hatches: HatchConfig[];
  naughtinessLevels: NaughtinessLevel[];
  description: string;
  openAt: DateTime;

  getSlotComponent: (slot: ContentSlotName) => FC<{ calendar: CalendarType }>;
};

export type ClientCalendarType = Omit<
  CalendarType,
  "getHatchData" | "hatches" | "description" | "openAt" | "getSlotComponent"
> & {
  openAt: string;
};

const calendars = [
  calendar2023,
  calendar2023_redux,
  calendar2024XY,
  calendar2024XX
  // { id: "2024-1", title: "Pekkiksen koodijoulukalenteri 2024" }
] satisfies CalendarType[];

export const getCalendars = async (): Promise<CalendarType[]> => {
  return calendars;
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
    ...clientCalendar
  } = calendar;
  return {
    ...clientCalendar,
    openAt: openAt.toISO() as string
  };
};

export const getCalendar = async (id: string): Promise<CalendarType> => {
  const calendar = calendars.find((calendar) => calendar.id === id);

  if (!calendar) {
    throw new Error(`Calendar ${id} not found`);
  }

  return calendar;
};
