import { style } from "@vanilla-extract/css";

export const squircle = style({
  borderRadius: "40px",
  border: "5px solid red",
  cornerShape: "squircle",
  padding: "1em"
});

export const normal = style({
  borderRadius: "10px",
  border: "5px solid red",
  padding: "1em"
});

export const bevel = style({
  borderRadius: "10px",
  border: "5px solid red",
  padding: "1em",
  cornerShape: "bevel"
});
