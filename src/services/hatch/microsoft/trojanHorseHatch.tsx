import { HatchDataWithoutDay } from "@/services/hatch";

import trojanHorse from "@/assets/ms.jpeg";

const trojanHorseHatch: HatchDataWithoutDay = {
  title: "Troijan hevonen",
  image: {
    alt: "Troijan hevonen",
    src: trojanHorse
  },
  content: [
    {
      type: "markdown",
      text: `Troijan hevonen`
    }
  ]
};

export default trojanHorseHatch;
