import theme from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const hatch = style({
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "all 1s ease-out",
  cursor: "pointer",
  borderRadius: theme.borderRadius.sharp,
  position: "relative",

  ":hover": {
    backgroundColor: "rgb(255 255 255 / .33)"
  },

  ":focus": {
    backgroundColor: "rgb(255 255 255 / .33)"
  }
});

export const checkbox = style({
  display: "none"
});

export const label = style({
  perspective: "1000px",
  transformStyle: "preserve-3d",
  cursor: "pointer",
  display: "flex",
  minHeight: "100%",
  width: "100%",
  height: "100%",
  position: "relative"
});

export const door = style({
  borderRadius: theme.borderRadius.sharp,
  borderWidth: "1px",
  borderStyle: "dashed",
  borderColor: theme.colors.hatchBorder,

  transformStyle: "preserve-3d",
  transition: "all 300ms",
  transformOrigin: "0% 50%",
  position: "absolute",
  inset: 0,
  zIndex: 6666666,
  cursor: "not-allowed"
});

export const openableDoor = style({
  cursor: "pointer"
});

export const openDoor = style({
  transform: "rotateY(-100deg)",
  borderRadius: theme.borderRadius.sharp,
  borderWidth: "1px",
  borderStyle: "dashed",
  borderColor: theme.colors.hatchBorder,
  cursor: "pointer"
});

export const content = style({
  position: "absolute",
  height: "100%",
  width: "100%",
  backfaceVisibility: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "2rem"
});

export const back = style({
  background: "linear-gradient(to right, #384044, #2e454f)",
  backgroundColor: "black",
  transform: "rotateY(-180deg)"
});

export const title = style({});

export const inside = style({
  borderRadius: theme.borderRadius.sharp,
  borderWidth: "1px",
  borderStyle: "dashed",
  borderColor: theme.colors.hatchBorder,
  backgroundColor: theme.colors.white,
  opacity: 0,
  position: "absolute",
  inset: 0,
  transition: "all 300ms",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  containerType: "size"
});

export const insideOpen = style({
  backgroundColor: theme.colors.white,
  borderWidth: "1px",
  borderStyle: "dashed",
  borderColor: theme.colors.hatchBorder,
  opacity: 1
});
