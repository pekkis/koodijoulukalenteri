import theme from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const dialog = style({
  position: "fixed",
  inset: theme.spacing.xs,
  zIndex: 20000,
  display: "block",
  paddingInline: theme.spacing.s,
  paddingBlock: theme.spacing.s,
  borderRadius: theme.borderRadius.plump,
  maxWidth: `min(100vw, 30rem)`
});
