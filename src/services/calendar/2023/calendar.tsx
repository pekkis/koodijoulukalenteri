import { CalendarType, HatchConfig } from "@/services/calendar";

import hatch666 from "./hatch/demonic/hatch666";
import movies1Hatch from "./hatch/movies/movies-1";
import containerQueryHatch from "./hatch/container-queries/container-query-hatch";
import valueForLifeHatch from "./hatch/value-for-life/value-for-life";
import carjackHatch from "./hatch/carjack/carjackHatch";
import linusHatch from "./hatch/linus/linusHatch";
import roadmapHatch from "./hatch/roadmap/roadmapHatch";
import domainHatch from "./hatch/fi-domain/fiDomainHatch";
import movies2Hatch from "./hatch/movies/movies-2";
import knittersHatch from "./hatch/knitters/knittersHatch";
import adaHatch from "./hatch/ada/adaHatch";
import stylingHatch from "./hatch/styling/stylingHatch";
import motherOfAllDemosHatch from "./hatch/mother-of-all-demos/motherOfAllDemosHatch";
import movies3Hatch from "./hatch/movies/movies-3";
import movies4Hatch from "./hatch/movies/movies-4";
import metaHatch from "./hatch/metaframeworks/metaHatch";
import strongHtmlHatch from "./hatch/strong-html/strongHtmlHatch";
import temporalHatch from "./hatch/temporal/temporalHatch";
import longestDayHatch from "./hatch/longest-day/longestDayHatch";
import netscapeHatch from "./hatch/netscape/netscapeHatch";
import nextHatch from "./hatch/next/nextHatch";
import edgeHatch from "./hatch/edge/edgeHatch";
import christmasEveHatch from "./hatch/final/christmasEveHatch";
import runtimeHatch from "./hatch/runtime/runtimeHatch";
import packageManagersHatch from "./hatch/package-manager/packageManagerHatch";
import { getPosition, HatchData, HatchesData } from "@/services/hatch";

import risuja from "./assets/risuja-2.webp";
import risuja1 from "./assets/pekonia-ja-spagettia-1.jpeg";
import risuja2 from "./assets/pekonia-ja-spagettia-2.jpeg";
import risuja3 from "./assets/pekonia-ja-spagettia-3.jpeg";
import risuja4 from "./assets/pekonia-ja-spagettia-4.jpeg";
import risuja5 from "./assets/risuja1.jpeg";
import risuja6 from "./assets/risuja2.jpeg";
import risuja7 from "./assets/risuja3.jpeg";
import { isHatchOpenable } from "@/services/time";
import { DateTime } from "luxon";
import EscapeHatch from "@/components/calendar/EscapeHatch";
import { theme2023 } from "@/services/calendar/2023/theme-2023.css";

import christmasyProgrammers from "./assets/programmers.webp";
import naughtyProgrammers from "./assets/naughty-programmers.webp";
import monsterProgrammers from "./assets/hirvio.webp";
import antichristProgrammer from "./assets/antichrist.webp";

import { InstructionsSlot } from "@/services/calendar/2023/slots/InstructionsSlot";
import { ControlsSlot } from "@/services/calendar/2023/slots/ControlsSlot";
import { FC } from "react";

const NullSlot: FC = () => null;

export {
  christmasyProgrammers,
  naughtyProgrammers,
  monsterProgrammers,
  antichristProgrammer
};

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
  1: movies1Hatch,
  2: roadmapHatch,
  3: containerQueryHatch,
  4: domainHatch,
  5: carjackHatch,
  6: linusHatch,
  7: valueForLifeHatch,
  8: movies3Hatch,
  9: motherOfAllDemosHatch,
  10: adaHatch,
  11: knittersHatch,
  12: stylingHatch,
  13: runtimeHatch,
  14: movies2Hatch,
  15: netscapeHatch,
  16: metaHatch,
  17: strongHtmlHatch,
  18: packageManagersHatch,
  19: edgeHatch,
  20: nextHatch,
  21: movies4Hatch,
  22: longestDayHatch,
  23: temporalHatch,
  24: christmasEveHatch,
  666: hatch666
};

const description = `Aito ja alkuperäinen vuoden 2023 koodijoulukalenteri.`;

export const calendar: CalendarType = {
  id: "2023",
  year: 2023,
  weight: 1000,
  title: "koodijoulukalenteri 2023",
  canonicalImage: christmasyProgrammers.src,

  openAt: DateTime.local(2023, 11, 25, 0, {
    zone: "Europe/Helsinki"
  }),

  description,

  themeClassName: theme2023,

  hatches: [
    {
      day: 1,
      position: getPosition(13, -4, 7, 7),

      openableAt: DateTime.local(2023, 12, 1, 5, {
        zone: "Europe/Helsinki"
      })
    },
    {
      day: 2,
      position: getPosition(3, 3, 5, 5),
      openableAt: DateTime.local(2023, 12, 2, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 3,
      position: getPosition(-3, 10, 5, 5),
      openableAt: DateTime.local(2023, 12, 3, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 4,
      position: getPosition(12, 26, 6, 6),
      openableAt: DateTime.local(2023, 12, 4, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 5,
      position: getPosition(25, -5, 5, 5),
      openableAt: DateTime.local(2023, 12, 5, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 6,
      position: getPosition(3, 20, 7, 10),
      openableAt: DateTime.local(2023, 12, 6, 5, {
        zone: "Europe/Helsinki"
      })
    },
    {
      day: 7,
      position: getPosition(-4, 3, 5, 5),
      openableAt: DateTime.local(2023, 12, 7, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 8,
      position: getPosition(19, 2, 5, 5),
      openableAt: DateTime.local(2023, 12, 8, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 9,
      position: getPosition(-3, 30, 5, 5),
      openableAt: DateTime.local(2023, 12, 9, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 10,
      position: getPosition(-25, 22, 6, 6),
      openableAt: DateTime.local(2023, 12, 10, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 11,
      position: getPosition(-12, -3, 6, 6),
      openableAt: DateTime.local(2023, 12, 11, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 12,
      position: getPosition(14, 17, 5, 5),
      openableAt: DateTime.local(2023, 12, 12, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 13,
      position: getPosition(20, 31, 12, 6),
      openableAt: DateTime.local(2023, 12, 13, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 14,
      position: getPosition(4, 10, 6, 6),
      openableAt: DateTime.local(2023, 12, 14, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 15,
      position: getPosition(-13, 6, 6, 6),
      openableAt: DateTime.local(2023, 12, 15, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 16,
      position: getPosition(-12, 33, 6, 6),
      openableAt: DateTime.local(2023, 12, 16, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 17,
      position: getPosition(4, -13, 6, 6),
      openableAt: DateTime.local(2023, 12, 17, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 18,
      position: getPosition(-5, -10, 5, 5),
      openableAt: DateTime.local(2023, 12, 18, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 19,
      position: getPosition(-2, 20, 6, 6),
      openableAt: DateTime.local(2023, 12, 19, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 20,
      position: getPosition(3, -3, 6, 6),
      openableAt: DateTime.local(2023, 12, 20, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 21,
      position: getPosition(22, 11, 6, 6),
      openableAt: DateTime.local(2023, 12, 21, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 22,
      position: getPosition(13, 9, 5, 5),
      openableAt: DateTime.local(2023, 12, 22, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 23,
      position: getPosition(-3, -3, 4, 4),
      openableAt: DateTime.local(2023, 12, 23, 5, {
        zone: "Europe/Helsinki"
      })
    },
    {
      day: 24,
      position: getPosition(30, 16, 12, 12),
      openableAt: DateTime.local(2023, 12, 24, 5, {
        zone: "Europe/Helsinki"
      })
    },

    {
      day: 666,
      position: getPosition(26, 4, 5, 5),
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
            const risut = [
              risuja1,
              risuja5,
              risuja2,
              risuja6,
              risuja3,
              risuja7,
              risuja4,
              risuja1,
              risuja5,
              risuja2,
              risuja6,
              risuja3,
              risuja7,
              risuja4,
              risuja1,
              risuja5,
              risuja2,
              risuja6,
              risuja3,
              risuja7,
              risuja4,
              risuja1,
              risuja5,
              risuja2,
              risuja6,
              risuja3,
              risuja7,
              risuja4
            ];

            return risut[hatch.day - 1];
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
      backgroundImage: christmasyProgrammers.src,
      music: "/calendar/2023/jingle-bells.mp3"
    },
    {
      level: 1,
      requiredNaughtiness: 1,
      name: "kiltti",
      backgroundImage: christmasyProgrammers.src,
      music: "/calendar/2023/jingle-bells.mp3"
    },
    {
      level: 2,
      requiredNaughtiness: 500,
      name: "paatunut",
      backgroundImage: naughtyProgrammers.src,
      music: "/calendar/2023/jingle-bells.mp3"
    },
    {
      level: 3,
      requiredNaughtiness: 1500,
      name: "hirviö",
      backgroundImage: monsterProgrammers.src,
      music: "/calendar/2023/horror-bells.mp3"
    },
    {
      level: 4,
      requiredNaughtiness: 5000,
      name: "pelsepuupi",
      backgroundImage: antichristProgrammer.src,
      music: "/calendar/2023/horror-bells.mp3"
    }
  ],

  getSlotComponent: (slot) => {
    switch (slot) {
      case "instructions":
        return InstructionsSlot;

      case "controls":
        return ControlsSlot;

      default:
        return NullSlot;
    }
  }
};
