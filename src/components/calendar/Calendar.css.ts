import { style } from "@vanilla-extract/css";

import bg from "@/assets/christmasy-programmers.png";

export const container = style({
  containerType: "inline-size",
  backgroundImage: `url(${bg.src})`,
  backgroundSize: "contain"
});

export const grid = style({
  display: "grid",
  gap: 0,

  gridTemplateColumns: "repeat(50, 2cqi)",
  gridTemplateRows: "repeat(50, 2cqi)"
});
