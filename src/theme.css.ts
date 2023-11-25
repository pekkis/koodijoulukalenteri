import { createGlobalTheme } from "@vanilla-extract/css";

const theme = createGlobalTheme(":root", {
  fontSizes: {
    body: "18px"
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
    container: "800px"
  }
});

export default theme;
