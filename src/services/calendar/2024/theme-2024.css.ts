import { createTheme } from "@vanilla-extract/css";

import hipster from "./hipster.png";
import zombie from "./zombie.png";
import evil from "./evil.png";
import cursedSoul from "./cursed-soul.png";
import hitler from "./hitler.png";

import { calendarTheme } from "@/calendar-theme.css";

export const theme2024 = createTheme(calendarTheme, {
  background: {
    christmasy: `url(${hipster.src})`,
    naughty: `url(${zombie.src})`,
    monster: `url(${evil.src})`,
    antichristProgrammer: `url(${cursedSoul.src})`,
    styranki: `url(${hitler.src})`
  }
});
