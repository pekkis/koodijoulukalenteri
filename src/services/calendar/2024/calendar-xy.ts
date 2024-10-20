import { CalendarType, HatchConfig } from "@/services/calendar";

import { getPosition, HatchData, HatchesData } from "@/services/hatch";

import risuja from "./assets/risuja.webp";
import { isHatchOpenable } from "@/services/time";
import { DateTime } from "luxon";
import EscapeHatch from "@/components/calendar/EscapeHatch";
import { theme2024 } from "./theme-2024.css";

import hipster from "./assets/hipster.png";
import zombie from "./assets/zombie.png";
import evil from "./assets/evil.png";
import cursedSoul from "./assets/cursed-soul.png";
import hitler from "./assets/hitler.png";
import { placeholderHatch } from "./hatch/placeholder/placeholderHatch";
import { escapeHatch } from "./hatch/escape/escapeHatch";

const risujaData: Omit<HatchData, "day"> = {
  title: "Tuhmille kiviä, risuja, pekonia ja spagettia",
  image: {
    src: risuja,
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

const description = `Vuoden 2024 koodijoulukalenteri, täynnä herkullisia koodiyllätyksiä. Äläkä yritä kurkkia luukkuja etukäteen! Tontut kyyläävät ikkunan takana.`;

export const calendar: CalendarType = {
  id: "2024-xy",
  year: 2024,
  weight: 500,
  title: "koodijoulukalenteri 2024 (XY)",

  themeClassName: theme2024,

  description,

  openAt: DateTime.local(2024, 12, 1, 0, {
    zone: "Europe/Helsinki"
  }),

  hatches: [
    {
      day: 1,
      position: getPosition(-16, 11, 8, 8),

      openableAt: DateTime.local(2024, 12, 1, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 2,
      position: getPosition(-26, -4, 6, 6),
      openableAt: DateTime.local(2024, 12, 2, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 3,
      position: getPosition(4, 2, 5, 5),
      openableAt: DateTime.local(2024, 12, 3, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 4,
      position: getPosition(-12, -22, 5, 5),
      openableAt: DateTime.local(2024, 12, 4, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 5,
      position: getPosition(3, 28, 6, 6),
      openableAt: DateTime.local(2024, 12, 5, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 6,
      position: getPosition(-3, -4, 6, 6),
      openableAt: DateTime.local(2024, 12, 6, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 7,
      position: getPosition(-4, 10, 5, 5),
      openableAt: DateTime.local(2024, 12, 7, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 8,
      position: getPosition(27, 28, 6, 6),
      openableAt: DateTime.local(2024, 12, 8, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 9,
      position: getPosition(15, 33, 7, 7),
      openableAt: DateTime.local(2024, 12, 9, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 10,
      position: getPosition(4, -10, 6, 6),
      openableAt: DateTime.local(2024, 12, 10, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 11,
      position: getPosition(5, 9, 7, 5),
      openableAt: DateTime.local(2024, 12, 11, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 12,
      position: getPosition(-13, -2, 7, 7),
      openableAt: DateTime.local(2024, 12, 12, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 13,
      position: getPosition(-3, 25, 6, 6),
      openableAt: DateTime.local(2024, 12, 13, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 14,
      position: getPosition(2, -2, 6, 6),
      openableAt: DateTime.local(2024, 12, 14, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 15,
      position: getPosition(2, 18, 6, 7),
      openableAt: DateTime.local(2024, 12, 15, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 16,
      position: getPosition(16, 5, 6, 7),
      openableAt: DateTime.local(2024, 12, 16, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 17,
      position: getPosition(26, 20, 6, 6),
      openableAt: DateTime.local(2024, 12, 17, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 18,
      position: getPosition(-7, 17, 6, 6),
      openableAt: DateTime.local(2024, 12, 18, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 19,
      position: getPosition(-2, 2, 6, 6),
      openableAt: DateTime.local(2024, 12, 19, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 20,
      position: getPosition(-22, 3, 6, 6),
      openableAt: DateTime.local(2024, 12, 20, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 21,
      position: getPosition(11, -3, 6, 6),
      openableAt: DateTime.local(2024, 12, 21, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 22,
      position: getPosition(-7, -13, 6, 6),
      openableAt: DateTime.local(2024, 12, 22, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 23,
      position: getPosition(-13, 4, 6, 6),
      openableAt: DateTime.local(2024, 12, 23, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 24,
      position: getPosition(10, 16, 14, 14),
      openableAt: DateTime.local(2024, 12, 24, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 666,
      position: getPosition(29, -11, 5, 5),
      openableAt: DateTime.local(666, 6, 6, 6, {
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
            return risuja;
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
      level: 0,
      requiredNaughtiness: 0,
      name: "viaton",
      backgroundImage: hipster.src
    },
    {
      level: 1,
      requiredNaughtiness: 1,
      name: "kiltti",
      backgroundImage: hipster.src
    },
    {
      level: 2,
      requiredNaughtiness: 500,
      name: "paatunut",
      backgroundImage: zombie.src
    },
    {
      level: 3,
      requiredNaughtiness: 1500,
      name: "suurtuhma",
      backgroundImage: evil.src
    },
    {
      level: 4,
      requiredNaughtiness: 3000,
      name: "kadotettu sielu",
      backgroundImage: cursedSoul.src
    },
    {
      level: 5,
      requiredNaughtiness: 5000,
      name: "styranki",
      backgroundImage: hitler.src
    }
  ],

  getSlotComponent: () => () => null
};
