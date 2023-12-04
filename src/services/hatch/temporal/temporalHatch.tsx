import { HatchDataWithoutDay } from "@/services/hatch";

import temporal from "@/assets/temporal.jpeg";

const temporalHatch: HatchDataWithoutDay = {
  title: "Aikahyppy",
  image: {
    src: temporal,
    alt: "Aikahyppy"
  },
  content: [
    {
      type: "markdown",
      text: `Aikahyppy`
    }
  ]
};

export default temporalHatch;
