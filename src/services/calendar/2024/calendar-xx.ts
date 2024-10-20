import { CalendarType } from "@/services/calendar";
import { calendar as calendarXY } from "./calendar-xy";
import { produce } from "immer";

import nice from "./assets/xx/xx-nice-009.webp";

export const calendar: CalendarType = {
  ...calendarXY,

  id: "2024-xx",
  title: "joulukalenteri 2024 (XX)",

  naughtinessLevels: produce(calendarXY.naughtinessLevels, (draft) => {
    draft[0].backgroundImage = nice.src;
  })
};
