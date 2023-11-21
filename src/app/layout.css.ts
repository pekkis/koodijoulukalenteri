import { globalStyle } from "@vanilla-extract/css";
import theme from "@/theme.css";

globalStyle("html", {
  fontSize: "18px",
  fontFamily: '"logical-variable", sans-serif',
  fontVariationSettings: '"wght" 400'
});

globalStyle("body", {
  marginBlock: 0,
  marginInline: 0,
  backgroundColor: theme.colors.white,
  padding: theme.spacing.m
});

globalStyle("*", {
  boxSizing: "border-box"
});
