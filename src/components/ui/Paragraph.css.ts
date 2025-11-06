import theme from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const paragraph = style({
  marginBlock: theme.spacing.s
});

export const justify = style({
  textAlign: "justify",
  hyphens: "auto",
  textWrap: "pretty"
  // hyphenateLimitChars: 3
  // textJustify: "inter-word"
});
