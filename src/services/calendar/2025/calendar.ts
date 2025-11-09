import { CalendarType, HatchConfig } from "@/services/calendar";

import { getPosition, HatchData, HatchesData } from "@/services/hatch";

import risuja1 from "./assets/risuja-1.webp";
import risuja2 from "./assets/risuja-2.webp";
import risuja3 from "./assets/risuja-3.webp";
import risuja4 from "./assets/risuja-4.webp";
import risuja5 from "./assets/risuja-5.webp";
import risuja6 from "./assets/risuja-6.webp";

import { isHatchOpenable } from "@/services/time";
import { DateTime } from "luxon";
import { theme2025 } from "./theme-2025.css";

import bg1 from "./assets/bg-1.webp";
import bg2 from "./assets/bg-2.webp";
import bg3 from "./assets/bg-3.webp";
import bg4 from "./assets/bg-4.webp";
import bg5 from "./assets/bg-5.webp";

import { placeholderHatch } from "./hatch/placeholder/placeholderHatch";
import { escapeHatch } from "./hatch/escape/escapeHatch";
import { InstructionsSlot } from "@/services/calendar/2025/slots/InstructionsSlot";
import { ControlsSlot } from "@/services/calendar/2025/slots/ControlsSlot";
import EscapeHatch from "@/services/calendar/2025/components/EscapeHatch";
import { CalendarWall2025 } from "@/services/calendar/2025/components/CalendarWall2025";

const risujaData: Omit<HatchData, "day"> = {
  title: "Tuhmille tyhmiä lahjoja",
  image: {
    src: risuja1,
    alt: "Tuhma lapsi on saanut lahjaksi tyhmän lahjan. Hän itkee."
  },
  content: [
    {
      type: "markdown",
      text: `Nyt nimien kirjaan merkitään taas: tuhma vai kiltti, ajatelkaas! Joulupukki matkaan jo käy. Taas pienet tontut liikkuu ja muistiin merkitsee, niin joulupukki tietää saa, kuka lahjat ansaitsee.`
    }
  ]
};

const hatches: HatchesData = {
  1: placeholderHatch,
  2: placeholderHatch,
  3: placeholderHatch,
  4: placeholderHatch,
  5: placeholderHatch,
  6: placeholderHatch,
  7: placeholderHatch,
  8: placeholderHatch,
  9: placeholderHatch,
  10: placeholderHatch,
  11: placeholderHatch,
  12: placeholderHatch,
  13: placeholderHatch,
  14: placeholderHatch,
  15: placeholderHatch,
  16: placeholderHatch,
  17: placeholderHatch,
  18: placeholderHatch,
  19: placeholderHatch,
  20: placeholderHatch,
  21: placeholderHatch,
  22: placeholderHatch,
  23: placeholderHatch,
  24: placeholderHatch,
  666: escapeHatch
};

const description = `Vuoden 2025 koodijoulukalenterista löydät vuosien 2024 ja 2025 mehevimmät koodipöräytykset.

Älä yritä kurkkia luukkuja etukäteen tai tee tuhmuuksia. Tontut, ne pienet perkeleet, kyyläävät ikkunan takana 24/7!`;

export const calendar: CalendarType = {
  defaultInnerHatchComponent: CalendarWall2025,

  id: "2025",
  year: 2025,
  weight: 500,
  title: "Koodijoulukalenteri 2025",

  canonicalImage: bg1.src,

  themeClassName: theme2025,

  description,

  metaDescription:
    "Vuoden 2025 koodijoulukalenterista löydät vuosien 2024 ja 2025 mehevimmät koodipöräytykset",

  openAt: DateTime.local(2025, 11, 30, 18, {
    zone: "Europe/Helsinki"
  }),

  hatches: [
    {
      day: 1,
      position: getPosition(-16, 11, 8, 8),

      openableAt: DateTime.local(2025, 12, 1, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 2,
      position: getPosition(-26, -4, 6, 6),
      openableAt: DateTime.local(2025, 12, 2, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 3,
      position: getPosition(4, 2, 5, 5),
      openableAt: DateTime.local(2025, 12, 3, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 4,
      position: getPosition(-12, -22, 5, 5),
      openableAt: DateTime.local(2025, 12, 4, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 5,
      position: getPosition(3, 28, 6, 6),
      openableAt: DateTime.local(2025, 12, 5, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 6,
      position: getPosition(-3, -4, 6, 6),
      openableAt: DateTime.local(2025, 12, 6, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 7,
      position: getPosition(-4, 10, 5, 5),
      openableAt: DateTime.local(2025, 12, 7, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 8,
      position: getPosition(27, 28, 6, 6),
      openableAt: DateTime.local(2025, 12, 8, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 9,
      position: getPosition(15, 33, 7, 7),
      openableAt: DateTime.local(2025, 12, 9, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 10,
      position: getPosition(4, -10, 6, 6),
      openableAt: DateTime.local(2025, 12, 10, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 11,
      position: getPosition(5, 9, 7, 5),
      openableAt: DateTime.local(2025, 12, 11, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 12,
      position: getPosition(-13, -2, 7, 7),
      openableAt: DateTime.local(2025, 12, 12, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 13,
      position: getPosition(-3, 25, 6, 6),
      openableAt: DateTime.local(2025, 12, 13, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 14,
      position: getPosition(2, -2, 6, 6),
      openableAt: DateTime.local(2025, 12, 14, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 15,
      position: getPosition(2, 18, 6, 7),
      openableAt: DateTime.local(2025, 12, 15, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 16,
      position: getPosition(16, 5, 6, 7),
      openableAt: DateTime.local(2025, 12, 16, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 17,
      position: getPosition(26, 20, 6, 6),
      openableAt: DateTime.local(2025, 12, 17, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 18,
      position: getPosition(-7, 17, 6, 6),
      openableAt: DateTime.local(2025, 12, 18, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 19,
      position: getPosition(-2, 2, 6, 6),
      openableAt: DateTime.local(2025, 12, 19, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 20,
      position: getPosition(-22, 3, 6, 6),
      openableAt: DateTime.local(2025, 12, 20, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 21,
      position: getPosition(11, -3, 6, 6),
      openableAt: DateTime.local(2025, 12, 21, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 22,
      position: getPosition(-7, -13, 6, 6),
      openableAt: DateTime.local(2025, 12, 22, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 23,
      position: getPosition(-13, 4, 6, 6),
      openableAt: DateTime.local(2025, 12, 23, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 24,
      position: getPosition(10, 16, 14, 14),
      openableAt: DateTime.local(2025, 12, 24, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 666,
      position: getPosition(28, -10, 7, 7),
      openableAt: DateTime.local(1978, 3, 21, {
        zone: "Europe/Helsinki"
      }),
      hatchComponent: EscapeHatch
    }
  ],

  getHatchData: async (hatch: HatchConfig) => {
    if (hatch.day !== 666 && !isHatchOpenable(hatch)) {
      return {
        ...risujaData,
        day: hatch.day,
        image: {
          ...risujaData.image,

          get src() {
            const risut = [
              risuja1,
              risuja2,
              risuja3,
              risuja4,
              risuja5,
              risuja6
            ];

            return risut[hatch.day % 6];
          }
        }
      };
    }

    if (hatches[hatch.day]) {
      return { ...hatches[hatch.day], day: hatch.day };
    }

    return null;
  },

  naughtinessLevels: [
    {
      music: "/calendar/2025/kiltin-koodarin-joulu.mp3",
      level: 0,
      requiredNaughtiness: 0,
      name: "viaton",
      backgroundImage: bg1.src
    },
    {
      music: "/calendar/2025/kiltin-koodarin-joulu.mp3",
      level: 1,
      requiredNaughtiness: 1,
      name: "kiltti",
      backgroundImage: bg1.src
    },
    {
      music: "/calendar/2025/kiltin-koodarin-joulu.mp3",
      level: 2,
      requiredNaughtiness: 500,
      name: "paatunut",
      backgroundImage: bg2.src
    },
    {
      music: "/calendar/2025/kiltin-koodarin-joulu.mp3",
      level: 3,
      requiredNaughtiness: 1500,
      name: "tuhmuli",
      backgroundImage: bg3.src
    },
    {
      music: "/calendar/2025/tuhmien-koodarien-jouluhelvetti.mp3",
      level: 4,
      requiredNaughtiness: 3000,
      name: "kadotettu sielu",
      backgroundImage: bg4.src
    },
    {
      music: "/calendar/2025/tuhmien-koodarien-jouluhelvetti.mp3",
      level: 5,
      requiredNaughtiness: 5000,
      name: "SAFe-orjapiiskuri",
      backgroundImage: bg5.src
    }
  ],

  getSlotComponent: (slot) => {
    switch (slot) {
      case "instructions":
        return InstructionsSlot;

      case "controls":
        return ControlsSlot;

      default:
        return () => null;
    }
  }
};
