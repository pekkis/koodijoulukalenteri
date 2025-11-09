import { style } from "@vanilla-extract/css";

export const image = style({
  height: "auto",
  display: "block"
});

export const normal = style({ width: "min(80cqi, 80cqb)" });

export const wide = style({
  width: "min(95cqi, 95cqb)"
});
