import { HatchDataWithoutDay } from "@/services/hatch";

import image from "./placeholder.webp";

export const placeholderHatch: HatchDataWithoutDay = {
  title: "Placeholder",
  image: {
    src: image,
    alt: "Placeholder-kuva"
  },
  content: [
    {
      type: "markdown",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec pur.

Sed ut.`
    }
  ]
};
