import { createGlobalTheme } from "@vanilla-extract/css";

const theme = createGlobalTheme(":root", {
  fontFamily: {
    body: "var(--font-nunito)",
    christmas: "var(--font-mountains)"
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
    plumper: "20px",
    plumpest: "40px",
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
    xxs: "0.33rem",
    xs: "0.5rem",
    s: "1rem",
    m: "2rem",
    l: "4rem",
    xl: "8rem"
  },

  relativeSpacing: {
    none: "0",
    xxs: "0.25em",
    xs: "0.5em",
    s: "1em",
    m: "2em",
    l: "4em",
    xl: "8em"
  },

  size: {
    container: "768px"
  }
});

export default theme;
