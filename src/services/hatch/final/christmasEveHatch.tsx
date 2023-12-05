import { HatchDataWithoutDay } from "@/services/hatch";

import christmasEve from "@/assets/santa-and-jebus.jpeg";

const christmasEveHatch: HatchDataWithoutDay = {
  title: "Jouluaatto",
  image: {
    alt: "Joulupukki ja Jeesus, kumpikin ohjelmistokehittäjiä, juhlistavat joulua parikoodaamalla!",
    src: christmasEve
  },
  content: [
    {
      type: "markdown",
      text: `Jouluaatto`
    }
  ]
};

export default christmasEveHatch;
