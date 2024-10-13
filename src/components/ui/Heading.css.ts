import theme from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const h1 = style({
  fontFamily: theme.fontFamily.christmas,
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "3rem",
  marginBlock: theme.spacing.s,
  lineHeight: "1.75"
});

export const h2 = style({
  fontSize: "2rem"
});

export const h3 = style({
  fontSize: "1.5rem"
});

export const h4 = style({});

export const h5 = style({});
