import { HatchDataWithoutDay } from "@/services/hatch";

import next from "@/assets/pekonia-ja-spagettia-4.jpeg";

const nextHatch: HatchDataWithoutDay = {
  title: "Seuraava luukku",
  image: {
    src: next,
    alt: ""
  },
  content: [
    {
      type: "markdown",
      text: `Seuraava luukku`
    }
  ]
};

export default nextHatch;
