import theme from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const box = style({
  backgroundColor: `rgb(from ${theme.colors.primary} calc(r - 100) g b)`
});

export const squircle = style({
  borderRadius: "40px",
  cornerShape: "squircle",
  padding: "1em"
});

export const normal = style({
  borderRadius: "10px",
  padding: "1em"
});

export const bevel = style({
  borderRadius: "10px",
  border: "3px solid red",
  padding: "1em",
  cornerShape: "bevel"
});

export const mixed = style({
  borderRadius: "10px",
  padding: theme.spacing.s,
  cornerTopLeftShape: "scoop",
  cornerTopRightShape: "notch",
  cornerBottomLeftShape: "squircle",
  cornerBottomRightShape: "bevel"
});
