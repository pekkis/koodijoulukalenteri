import theme from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const paragraph = style({
  marginBlock: theme.spacing.s,
  hyphens: "auto",
  textWrap: "pretty"
});

export const justify = style({
  textAlign: "justify"
});
