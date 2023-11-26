import theme from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const dialog = style({
  zIndex: 20000,
  display: "block",
  paddingInline: theme.spacing.s,
  paddingBlock: theme.spacing.s,
  borderRadius: theme.borderRadius.plump,
  maxWidth: `min(90vw, 25rem)`,
  backgroundColor: theme.colors.white,
  maxHeight: `min(90vh, 35rem)`,
  overflowY: "scroll"
});

export const dialogInsides = style({
  // containerType: "inline-size"
});
