import theme from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  marginInline: "auto",
  maxWidth: "1200px",
  padding: theme.spacing.s,

  "@media": {
    "screen and (min-width: 768px)": {
      padding: theme.spacing.m
    }
  }
});

export const wide = style({
  maxWidth: "1400px"
});
