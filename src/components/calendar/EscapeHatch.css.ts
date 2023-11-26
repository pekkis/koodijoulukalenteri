import { style } from "@vanilla-extract/css";

export const escapeHatch = style({
  transition: "all 1s"
});

export const pulse1 = style({
  boxShadow: "-5px -5px 50px rgb(255, 0, 0), 5px 5px 50px rgb(255, 0, 0)"
});

export const pulse2 = style({
  boxShadow:
    "-5px -5px 100px rgb(255, 0, 0), 5px 5px 100px rgb(255, 0, 0), 0 0 100px rgb(255, 165, 0)"
});

export const insides = style({
  fontSize: "min(50cqi, 50cqb)"
});
