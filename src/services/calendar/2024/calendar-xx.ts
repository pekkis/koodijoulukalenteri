import { CalendarType } from "@/services/calendar";
import { calendar as calendarXY } from "./calendar-xy";
import { produce } from "immer";

import nice from "./assets/xx/xx-nice-009.webp";

const description = `Seksivau! Vuoden 2024 koodijoulukalenterissa kuumimmat koodaritytöt jakavat vuoden 2024 mehevimmät ja irstaimmat koodivinkit.

Älä yritä kurkkia luukkuja etukäteen tai hakkeroida. Tontut kyyläävät ikkunan takana!`;

export const calendar: CalendarType = {
  ...calendarXY,

  description,

  id: "2024-xx",
  title: "Koodityttöjoulukalenteri 24",

  naughtinessLevels: produce(calendarXY.naughtinessLevels, (draft) => {
    draft[0].backgroundImage = nice.src;
  })
};
