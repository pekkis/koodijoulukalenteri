import theme from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const button = style({
  backgroundColor: theme.colors.primary,
  color: theme.colors.white,
  borderRadius: theme.borderRadius.plump,
  padding: theme.spacing.s,
  borderWidth: 0,
  cursor: "pointer",
  transition: "200ms ease-out all",

  ":hover": {
    backgroundColor: "rgb(230 0 0)"
  }
});

export const icon = style({
  display: "inline-block",
  verticalAlign: "middle",
  marginRight: theme.spacing.xs
});
