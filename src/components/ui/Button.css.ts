import theme from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const button = style({
  backgroundColor: theme.colors.primary,
  color: theme.colors.white,
  borderRadius: theme.borderRadius.plump,
  padding: theme.spacing.s,
  borderWidth: 0,
  transition: "200ms ease-out all",

  ":disabled": {
    cursor: "not-allowed",
    opacity: 0.5
  }
});

export const relative = style({
  padding: theme.relativeSpacing.s
});

export const svelte = style({
  padding: theme.spacing.xxs,
  borderRadius: theme.borderRadius.sharp
});

export const active = style({
  cursor: "pointer",
  ":hover": {
    backgroundColor: "rgb(230 0 0)"
  }
});

export const icon = style({
  display: "inline-block",
  verticalAlign: "middle",
  marginRight: theme.spacing.xs
});

export const block = style({
  display: "block",
  width: "100%"
});

export const extraRed = style({
  "@supports": {
    "(background-color: color(display-p3 1 0 0))": {
      backgroundColor: "color(display-p3 1 0 0)"
    }
  }
});

export const relativelyGreenerRed = style({
  backgroundColor: `rgb(from ${theme.colors.primary} r 100 b)`
});

export const mixWithUgliest = style({
  backgroundColor: `color-mix(in srgb, ${theme.colors.primary} 20%, rgb(74 65 42))`
});
