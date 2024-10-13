import { createGlobalTheme } from "@vanilla-extract/css";

const theme = createGlobalTheme(":root", {
  fontFamily: {
    body: "logical-variable, sans-serif",
    christmas: "p22-yule-heavy-snow, sans-serif"
  },

  fontSizes: {
    body: "18px"
  },

  lineHeight: {
    body: "1.75"
  },

  borderRadius: {
    sharp: "3px",
    soft: "6px",
    plump: "9px",
    megaPlump: "100px"
  },

  borderWidth: {
    thin: "1px",
    thicc: "5px"
  },

  colors: {
    primary: "#ff0000",
    secondary: "#b30000",
    tertiary: "#ffbfbf",
    quaternary: "#00ff00",
    quinary: "#00b300",
    black: "rgb(0, 0, 0)",
    white: "rgb(255, 255, 255)",
    hatchBorder: "rgb(100, 100, 100)"
  },

  spacing: {
    none: "0",
    xs: "0.5rem",
    s: "1rem",
    m: "2rem",
    l: "4rem",
    xl: "8rem"
  },

  size: {
    container: "768px"
  }
});

export default theme;
