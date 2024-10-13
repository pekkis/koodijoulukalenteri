import theme from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const calendar = style({
  contain: "inline-size"
});

export const heading = style({
  fontSize: "1.2rem",
  marginBlockStart: theme.spacing.xs,
  marginBlockEnd: theme.spacing.s
});

export const grid = style({
  marginBlock: theme.spacing.m,
  display: "grid",
  gap: theme.spacing.m,
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"
});
