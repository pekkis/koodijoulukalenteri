import theme from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const image = style({
  display: "block",
  width: "100%",
  height: "auto",
  marginInline: "auto"
});

export const header = style({
  marginBlockEnd: theme.spacing.m
});
