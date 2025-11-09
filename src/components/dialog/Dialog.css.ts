import theme from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const dialog = style({
  // display: "block",
  paddingInline: theme.spacing.s,
  paddingBlock: theme.spacing.s,
  borderRadius: theme.borderRadius.plump,
  width: `min(90vw, 25rem)`,
  backgroundColor: theme.colors.white,
  maxHeight: `min(90vh, 35rem)`,
  overflowY: "scroll",

  "::backdrop": {
    backgroundColor: "rgb(0 0 0 / .66)"
  }
});

export const dialogInsides = style({
  // containerType: "inline-size"
});
