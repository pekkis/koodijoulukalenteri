import { style } from "@vanilla-extract/css";

export const escapeHatch = style({
  transition: "all 1s"
});

export const pulse1 = style({
  boxShadow:
    "-0.5cqi -0.5cqi 3cqi rgb(100, 0, 0), 0.5cqi 0.5cqi 3cqi rgb(100, 0, 0)"
});

export const pulse2 = style({
  boxShadow:
    "-1cqi -1cqi 8cqi rgb(255, 0, 0), 1cqi 1cqi 8cqi rgb(255, 0, 0), 0 0 4cqi rgb(255, 180, 0)"
});

export const insides = style({
  fontSize: "min(50cqi, 50cqb)"
});
