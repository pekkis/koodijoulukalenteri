import {
  christmasyProgrammers,
  naughtyProgrammers,
  monsterProgrammers,
  styrankiProgrammer,
  antichristProgrammer
} from "@/services/assets";
import theme from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  borderRadius: theme.borderRadius.plump,
  containerType: "inline-size",
  backgroundSize: "contain",
  transition: "all 10s ease-out"
});

export const christmasy = style({
  backgroundImage: `url(${christmasyProgrammers.src})`
});

export const naughty = style({
  backgroundImage: `url(${naughtyProgrammers.src})`
});

export const monster = style({
  backgroundImage: `url(${monsterProgrammers.src})`
});

export const styranki = style({
  backgroundImage: `url(${styrankiProgrammer.src})`
});

export const antichrist = style({
  backgroundImage: `url(${antichristProgrammer.src})`
});

export const naughtinessLevel = style({
  marginInline: theme.spacing.s,
  marginBlock: theme.spacing.s,
  textAlign: "center"
});
