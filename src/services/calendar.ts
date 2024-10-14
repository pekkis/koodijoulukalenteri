import { HatchData } from "@/services/hatch";
import { calendar as calendar2023 } from "./calendar/2023/calendar";
import { calendar as calendar2024 } from "./calendar/2024/calendar";
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
};

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
};

export type ClientCalendarType = Omit<
  CalendarType,
  "getHatchData" | "hatches" | "description" | "openAt"
> & {
  openAt: string;
};

const calendars = [
  calendar2023,
  calendar2023_redux,
  calendar2024
  // { id: "2024-1", title: "Pekkiksen koodijoulukalenteri 2024" }
] satisfies CalendarType[];

export const getCalendars = async (): Promise<CalendarType[]> => {
  return calendars;
};

export const getClientCalendar = (
  calendar: CalendarType
): ClientCalendarType => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { getHatchData, hatches, openAt, description, ...clientCalendar } =
    calendar;
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
