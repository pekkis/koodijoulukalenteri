import theme from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const paragraph = style({
  marginBlock: theme.spacing.s,
  maxWidth: "65ch"
});
