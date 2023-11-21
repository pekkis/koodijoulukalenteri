import theme from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const hatch = style({
  border: "1px dashed rgb(0 0 0)",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "all 1s ease-out",
  cursor: "pointer",
  borderRadius: theme.borderRadius.sharp,

  ":hover": {
    backgroundColor: "rgb(255 255 255 / .75)"
  }
});
