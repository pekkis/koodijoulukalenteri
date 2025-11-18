import theme from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const stackClass = style({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.s
});

export const rowClass = style({
  flexDirection: "row"
});

export const svelteClass = style({
  gap: theme.spacing.xxs
});
