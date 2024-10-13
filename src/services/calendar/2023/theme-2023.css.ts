import { createTheme } from "@vanilla-extract/css";
import {
  christmasyProgrammers,
  naughtyProgrammers,
  monsterProgrammers,
  styrankiProgrammer,
  antichristProgrammer
} from "@/services/assets";
import { calendarTheme } from "@/calendar-theme.css";

export const theme2023 = createTheme(calendarTheme, {
  background: {
    christmasy: `url(${christmasyProgrammers.src})`,
    naughty: `url(${naughtyProgrammers.src})`,
    monster: `url(${monsterProgrammers.src})`,
    antichristProgrammer: `url(${antichristProgrammer.src})`,
    styranki: `url(${styrankiProgrammer.src})`
  }
});
