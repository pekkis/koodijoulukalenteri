import { style } from "@vanilla-extract/css";

export const container = style({
  height: "100vh",
  width: "100vw",
  alignContent: "center",
  textAlign: "center",
  contain: "inline-size"
});

export const image = style({
  display: "inline-block",
  borderRadius: "100%",
  width: "clamp(350px, 50cqw, 600px)",
  height: "auto"
});
