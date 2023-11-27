import theme from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const image = style({
  display: "block",
  width: "min(100%, 250px)",
  height: "auto",
  marginInline: "auto"
});

export const header = style({
  marginBlockEnd: theme.spacing.m
});
