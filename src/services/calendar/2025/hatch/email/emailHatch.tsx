import { HatchDataWithoutDay } from "@/services/hatch";

import image from "./email.webp";
import { Email } from "@/services/calendar/2025/hatch/email/Email";

export const emailHatch: HatchDataWithoutDay = {
  title: "Sähköpostia Reactilla",
  image: {
    src: image,
    alt: "Antropomorfinen React-hahmo kirjoittaa sähköpostia läppärillä"
  },
  content: [
    {
      type: "markdown",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec pur.

Sed ut.`
    },
    { type: "jsx", Component: Email }
  ]
};
