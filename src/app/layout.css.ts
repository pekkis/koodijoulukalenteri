import { globalStyle } from "@vanilla-extract/css";
import theme from "@/theme.css";

globalStyle("html", {
  fontSize: "18px",
  fontFamily: theme.fontFamily.body,
  fontVariationSettings: '"wght" 400',
  lineHeight: theme.lineHeight.body,

  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "18px"
    }
  }
});

globalStyle("a, a:hover", {
  color: theme.colors.secondary
});

globalStyle("body", {
  marginBlock: 0,
  marginInline: 0,
  backgroundColor: theme.colors.white,
  padding: 0,

  "@media": {
    "screen and (min-width: 768px)": {
      padding: 0
    }
  }
});

globalStyle("*", {
  boxSizing: "border-box",
  scrollbarColor: theme.colors.primary
});

globalStyle("strong", {
  fontVariationSettings: '"wght" 600'
});
