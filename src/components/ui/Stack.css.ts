import theme from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const stackClass = style({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.s
});
