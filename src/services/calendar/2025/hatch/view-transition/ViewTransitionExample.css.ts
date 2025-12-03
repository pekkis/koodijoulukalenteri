import theme from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const praatsClass = style({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.xs,

  zIndex: 1000000
});
