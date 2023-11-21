import { style } from "@vanilla-extract/css";

export const insides = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  inset: 0,
  position: "absolute"
});

export const backDoor = style({
  backgroundColor: "rgb(0 0 0)",
  opacity: 0,
  position: "absolute",
  inset: 0
});

export const door = style({
  // backgroundImage: `url(${bg.src})`,
  // backgroundPosition: "inherit",
  backgroundColor: "transparent",
  position: "absolute",
  inset: 0,
  transformOrigin: "left",
  transition: "all 0.5s ease-in-out"
});

export const doorOpen = style({
  /*prespectiv creates the door open effect*/
  transform:
    "perspective(1200px) translateZ(0px) translateX(0px) translateY(0px) rotateY(-105deg)"
});
