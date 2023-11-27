import theme from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const block = style({
  marginBlock: theme.spacing.m
});

export const caption = style({
  marginBlockStart: theme.spacing.xs,
  fontSize: "smaller",
  fontStyle: "italic"
});
