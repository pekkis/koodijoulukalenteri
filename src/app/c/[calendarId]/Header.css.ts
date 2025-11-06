import theme from "@/theme.css";
import { style } from "@vanilla-extract/css";

/*
font-family: "tamarillo-jf", sans-serif;
font-weight: 400;
font-style: normal;
*/

export const header = style({
  marginBlockEnd: theme.spacing.m,
  textAlign: "center"
});

export const heading = style({
  fontFamily: theme.fontFamily.christmas,
  fontStyle: "normal",
  fontSize: "3rem",

  "@media": {
    "screen and (min-width: 800px)": {
      fontSize: "4rem"
    }
  }
});
