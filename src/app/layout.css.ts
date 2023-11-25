import { globalStyle } from "@vanilla-extract/css";
import theme from "@/theme.css";

globalStyle("html", {
  fontSize: "16px",
  fontFamily: '"logical-variable", sans-serif',
  fontVariationSettings: '"wght" 400',
  lineHeight: 1.4,

  "@media": {
    "screen and (min-width: 800px)": {
      fontSize: "18px"
    }
  }
});

globalStyle("body", {
  marginBlock: 0,
  marginInline: 0,
  backgroundColor: theme.colors.white,
  padding: theme.spacing.s,

  "@media": {
    "screen and (min-width: 800px)": {
      padding: theme.spacing.m
    }
  }
});

globalStyle("*", {
  boxSizing: "border-box"
});
