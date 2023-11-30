import { HatchDataWithoutDay } from "@/services/hatch";

import baldurs from "@/assets/balduran.jpeg";

const baldursHatch: HatchDataWithoutDay = {
  title: "Baldur's Gate 3",
  image: {
    src: baldurs,
    alt: "Baldur's Gate 3:n logo"
  },
  content: [
    {
      type: "markdown",
      text: `[Dr. Kobros-säätiön](https://www.dr-kobros.com) "vuoden 2023 parhaat koodit"-palkinto, himoittu kultainen tunkki, luovutettakoon juhlallisin menoin [Larian Studiosille](https://larian.com/). Menivät ja koodasivat parhaan pelin noin 15 vuoteen. Kiitos!`
    },
    {
      type: "youtube",
      id: "1T22wNvoNiU"
    },
    { type: "youtube", id: "Bk2AqXsJsWU" }
  ]
};

export default baldursHatch;
