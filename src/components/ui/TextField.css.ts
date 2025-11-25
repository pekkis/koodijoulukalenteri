import theme from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const textFieldClass = style({
  padding: theme.spacing.xxs,
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: theme.colors.primary,
  borderRadius: theme.borderRadius.sharp
});
