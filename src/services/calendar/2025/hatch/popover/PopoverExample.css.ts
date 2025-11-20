import theme from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const popoverClass = style({});

export const popperClass = style({
  margin: 0,
  padding: theme.spacing.xs,
  maxWidth: "min(20em, 60vw)",
  inset: "auto",
  bottom: "calc(anchor(top) + 20px)",
  justifySelf: "anchor-center",
  "::backdrop": {
    backdropFilter: "blur(3px)"
  }
});
