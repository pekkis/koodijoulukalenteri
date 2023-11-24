import { style } from "@vanilla-extract/css";

import { christmasyProgrammers } from "@/services/assets";

export const container = style({
  containerType: "inline-size",
  backgroundImage: `url(${christmasyProgrammers.src})`,
  backgroundSize: "contain"
});

export const grid = style({
  display: "grid",
  gap: 0,

  gridTemplateColumns: "repeat(50, 2cqi)",
  gridTemplateRows: "repeat(50, 2cqi)"
});
