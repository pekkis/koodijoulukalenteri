import { HatchDataWithoutDay } from "@/services/hatch";

import motherOfAllDemos from "@/assets/diy-3.jpeg";

const motherOfAllDemosHatch: HatchDataWithoutDay = {
  title: "Mother of all demos",
  image: {
    src: motherOfAllDemos,
    alt: "Douglas Engelbart esittelee hiirtä."
  },
  content: [
    {
      type: "markdown",
      text: `hip lop, hip lop`
    }
  ]
};

export default motherOfAllDemosHatch;
