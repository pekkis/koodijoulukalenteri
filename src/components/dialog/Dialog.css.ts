import theme from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const dialog = style({
  // display: "block",
  paddingInline: theme.spacing.s,
  paddingBlock: theme.spacing.s,
  borderRadius: theme.borderRadius.plump,
  width: `min(90vw, 25rem)`,
  backgroundColor: theme.colors.background,
  color: theme.colors.foreground,
  maxHeight: `min(90vh, 35rem)`,
  overflowY: "scroll",
  scrollbarColor: `${theme.colors.primary} rgb(200 200 200 / .5)`,

  "@supports": {
    "(corner-shape: squircle)": {
      borderRadius: theme.borderRadius.plumpest,
      cornerShape: "squircle"
    }
  },

  selectors: {
    "&:has([data-epic-corners])": {
      "@supports": {
        "(corner-shape: squircle)": {
          cornerShape: "squircle",
          cornerTopRightShape: "bevel",
          cornerTopLeftShape: "scoop",
          borderTopLeftRadius: theme.borderRadius.plumpest
        }
      }
    },

    '&:has([data-scrollbars="thin"])': {
      scrollbarWidth: "thin",
      scrollbarColor: `hotpink rebeccapurple`
    },

    '&:has([data-scrollbars="brown"])': {
      scrollbarColor: `rgb(74, 65, 42) rgb(52, 46, 29)`,
      scrollbarGutter: "stable both-edges",
      overflowY: "unset",
      overflow: "scroll"
    },
    '&:has([data-scrollbars="hide"])': {
      scrollbarWidth: "none"
    }
  }
});

export const dialogInsides = style({
  // containerType: "inline-size"
});
