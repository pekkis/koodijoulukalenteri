import { HatchDataWithoutDay } from "@/services/hatch";

import netscape from "@/assets/netscape-2.jpeg";

const netscapeHatch: HatchDataWithoutDay = {
  title: "Netscape",
  image: {
    alt: "Netscape",
    src: netscape
  },
  content: [
    {
      type: "markdown",
      text: `Netscape`
    }
  ]
};

export default netscapeHatch;
