import theme from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const mainHeading = style({
  marginBlockStart: 0,
  marginBlockEnd: theme.spacing.m,
  textAlign: "center",
  lineHeight: 1.4,
  hyphens: "auto",
  textWrap: "pretty"
});
