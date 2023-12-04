import { HatchDataWithoutDay } from "@/services/hatch";

import turing from "@/assets/turing.jpeg";

const movies4Hatch: HatchDataWithoutDay = {
  title: "Viime vuosien koodileffoja",
  image: {
    src: turing,
    alt: "Elokuvajuliste, jossa kaunis tyttöandroidi kräkkää Enigma-masiinaa yhdessä Alan Turingin kanssa"
  },
  content: [
    {
      type: "markdown",
      text: `Löö löö`
    }
  ]
};

export default movies4Hatch;
