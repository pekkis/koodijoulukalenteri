import theme from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const component = style({
  marginBlock: theme.spacing.m,
  padding: theme.spacing.m,
  backgroundColor: theme.colors.tertiary,
  resize: "inline",
  overflow: "auto",
  containerType: "inline-size"
});

export const inside = style({
  backgroundColor: theme.colors.secondary,
  padding: theme.spacing.m,
  borderRadius: theme.borderRadius.plump,

  "@container": {
    "(width <= 15em)": {
      padding: theme.spacing.xs,
      borderRadius: theme.borderRadius.sharp,
      fontSize: "smaller",
      backgroundColor: theme.colors.quaternary
    }
  }
});
