import { christmasyProgrammers, naughtyProgrammers } from "@/services/assets";
import theme from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  borderRadius: theme.borderRadius.plump,
  containerType: "inline-size",
  backgroundImage: `url(${christmasyProgrammers.src})`,
  backgroundSize: "contain",
  transition: "all 10s ease-out"
});

export const naughty = style({
  backgroundImage: `url(${naughtyProgrammers.src})`
});
