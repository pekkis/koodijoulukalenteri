import theme from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const dialog = style({
  position: "fixed",
  inset: 0,
  zIndex: 20000,
  display: "block",
  padding: theme.spacing.m,
  borderRadius: theme.borderRadius.plump,
  maxWidth: `min(90vh, 20rem)`
});
