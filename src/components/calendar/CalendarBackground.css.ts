import { calendarTheme } from "@/calendar-theme.css";
import theme from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  borderRadius: theme.borderRadius.plump,
  containerType: "inline-size",
  backgroundSize: "contain",
  transition: "all 10s ease-out"
});

export const christmasy = style({
  backgroundImage: calendarTheme.background.christmasy
});

export const naughty = style({
  backgroundImage: calendarTheme.background.naughty
});

export const monster = style({
  backgroundImage: calendarTheme.background.monster
});

export const styranki = style({
  backgroundImage: calendarTheme.background.styranki
});

export const antichrist = style({
  backgroundImage: calendarTheme.background.antichristProgrammer
});
