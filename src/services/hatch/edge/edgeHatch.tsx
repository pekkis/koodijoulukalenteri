import { HatchDataWithoutDay } from "@/services/hatch";

import edge from "@/assets/edge.jpeg";

const edgeHatch: HatchDataWithoutDay = {
  title: "Eläkää reunalla",
  image: {
    alt: "Reunalla eläminen ei pelota funktiota joka seisoo kuilun reunalla",
    src: edge
  },
  content: [
    {
      type: "markdown",
      text: `Reuna!`
    }
  ]
};

export default edgeHatch;
