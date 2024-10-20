import theme from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  borderRadius: theme.borderRadius.plump,
  containerType: "inline-size",
  backgroundSize: "contain",
  transition: "all 10s ease-out"
});
