import { HatchDataWithoutDay } from "@/services/hatch";

import longest from "@/assets/longest-day.jpeg";
import Ticker from "./Ticker";

const longestDayHatch: HatchDataWithoutDay = {
  title: "Vuoden paras koodauspäivä",
  image: {
    alt: "On vuoden pimein ja lyhin päivä. Koodari on iloinen, koska valopallo ei häiritse tunkkailua.",
    src: longest
  },
  content: [
    {
      type: "markdown",
      text: `Tänään valopallo häiritsee koodausta kaikkein vähiten. Verhoja ei kerrankin tarvitse vetää ikkunan eteen!`
    },
    {
      type: "jsx",
      Component: Ticker
    }
  ]
};

export default longestDayHatch;
