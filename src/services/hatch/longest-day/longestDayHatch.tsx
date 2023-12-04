import { HatchDataWithoutDay } from "@/services/hatch";

import longest from "@/assets/pekonia-ja-spagettia-2.jpeg";

const longestDayHatch: HatchDataWithoutDay = {
  title: "Päivän pisimmät sekunnit",
  image: {
    alt: "Päivän pisimmät",
    src: longest
  },
  content: [
    {
      type: "markdown",
      text: `Päivän pisimmät`
    }
  ]
};

export default longestDayHatch;
