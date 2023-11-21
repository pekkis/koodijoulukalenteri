import theme from "@/theme.css";
import { style } from "@vanilla-extract/css";

/*
font-family: "tamarillo-jf", sans-serif;
font-weight: 400;
font-style: normal;
*/

export const header = style({
  fontFamily: "p22-yule-heavy-snow, sans-serif",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "2rem",
  textAlign: "center",
  marginBlockEnd: theme.spacing.m,

  "@media": {
    "screen and (min-width: 800px)": {
      fontSize: "4rem"
    }
  }
});
