import theme from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const praatClass = style({
  borderWidth: "1px",
  borderStyle: "dotted",
  padding: theme.spacing.xs,
  display: "flex",
  alignContent: "stretch"
});

export const pruutClass = style({
  flex: "2"
});

export const xClass = style({
  flex: "0"
});
