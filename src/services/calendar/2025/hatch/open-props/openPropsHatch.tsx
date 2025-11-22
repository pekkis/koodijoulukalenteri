import { HatchDataWithoutDay } from "@/services/hatch";

import image from "@/services/calendar/2025/hatch/placeholder/placeholder.webp";

export const openPropsHatch: HatchDataWithoutDay = {
  title: "Open Props",
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
