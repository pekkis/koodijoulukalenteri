import theme from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const flexxerClass = style({
  marginBlock: theme.spacing.m,
  display: "flex",
  width: "100%",
  flexBasis: "100%",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing.m,
  flexWrap: "wrap"
});

export const itemClass = style({});
