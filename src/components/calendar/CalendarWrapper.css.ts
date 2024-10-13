import { style } from "@vanilla-extract/css";
import theme from "@/theme.css";

export const grid = style({
  display: "grid",
  gap: 0,

  gridTemplateColumns: "repeat(50, 2cqi)",
  gridTemplateRows: "repeat(50, 2cqi)"
});

export const instructions = style({
  marginBlock: theme.spacing.m,
  marginInline: "auto",
  maxWidth: theme.size.container
});
