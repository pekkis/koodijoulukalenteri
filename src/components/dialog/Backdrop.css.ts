import { style } from "@vanilla-extract/css";

export const backdrop = style({
  position: "fixed",
  inset: 0,
  backgroundColor: "rgb(0 0 0 / .66)",
  zIndex: 10000,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});
