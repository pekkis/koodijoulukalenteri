import { HatchDataWithoutDay } from "@/services/hatch";

import metaframeworks from "@/assets/metaframeworks.jpeg";

const metaHatch: HatchDataWithoutDay = {
  title: "Taistelevat metafreimarit",
  image: {
    src: metaframeworks,
    alt: "Antropomorfiset metafraweworkit taistelevat painiringissä."
  },
  content: [
    {
      type: "markdown",
      text: `Metaframewörkeistä`
    }
  ]
};

export default metaHatch;
