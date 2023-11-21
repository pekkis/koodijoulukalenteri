import { style } from "@vanilla-extract/css";
import theme from "@/theme.css";

import bg from "../assets/christmasy-programmers.png";

export const container = style({
  backgroundColor: theme.colors.femtiary,
  backgroundImage: `url(${bg.src})`,
  backgroundSize: "contain",
  containerType: "inline-size"
});

export const grid = style({
  display: "grid",
  gap: 0,

  gridTemplateColumns: "repeat(50, 2cqi)",
  gridTemplateRows: "repeat(50, 2cqi)"
});

export const welcome = style({
  gridArea: "welcome"
});

export const clock = style({
  borderRadius: theme.borderRadius.plump,
  padding: theme.spacing.s,
  backgroundColor: "rgb(0 255 0 / .10)",
  gridArea: "clock"
});

export const currencies = style({
  borderRadius: theme.borderRadius.plump,
  padding: theme.spacing.s,
  backgroundColor: "rgb(255 0 0 / .10)",
  gridArea: "currency"
});

export const latest = style({
  borderRadius: theme.borderRadius.plump,
  padding: theme.spacing.s,
  backgroundColor: "rgb(0 0 255 / .10)",
  gridArea: "latest"
});

export const quackcast = style({
  borderRadius: theme.borderRadius.plump,
  padding: theme.spacing.s,
  backgroundColor: "rgb(0 255 255 / .10)",
  gridArea: "quackcast"
});

export const quacktube = style({
  borderRadius: theme.borderRadius.plump,
  padding: theme.spacing.s,
  backgroundColor: "rgb(255 0 255 / .10)",
  gridArea: "quacktube"
});
