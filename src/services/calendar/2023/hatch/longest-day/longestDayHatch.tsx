import { HatchDataWithoutDay } from "@/services/hatch";

import longest from "./longest-day.jpeg";
import TickerServer from "./TickerServer";

const longestDayHatch: HatchDataWithoutDay = {
  title: "Vuoden paras koodauspäivä",
  image: {
    alt: "On vuoden pimein ja lyhin päivä. Koodari on iloinen, koska valopallo ei häiritse tunkkailua.",
    src: longest
  },
  content: [
    {
      type: "markdown",
      text: `Tänään valopallo häiritsee koodausta kaikkein vähiten, koska se on kauimpana päiväntasaajan takana. On ihanaa, että kerrankin ei tarvitse vetää verhoja ikkunan eteen, että saa tunkata rauhassa!`
    },
    {
      type: "jsx",
      Component: TickerServer
    },
    {
      type: "markdown",
      text: "Jos koodaus ei maistu, päivä on juuri sopivan mittainen tynkä siihen, että katsot kaikki koodisaarnani putkeen. Sen urakan jälkeen vaivut sulavasti ja takuuvarmasti horrokseen odottamaan kevättä ja lämpöä."
    },
    {
      type: "youtube",
      id: "Mk5sAUc0EB8",
      caption: "React-vuorisaarna (2016)"
    },
    {
      type: "youtube",
      id: "OguXQ0zDOko",
      caption: "Vuorisaarna II: Toinen tuleminen (2017)"
    },
    {
      type: "youtube",
      id: "QKE8Eusvp0I",
      caption: "40-vuotisjuhlavuorisaarna (2018)"
    },
    {
      type: "youtube",
      id: "0Kl7NIE0Eb8",
      caption: "Vuorisaarna 4.0: tekno-evankeliumi 3019 (2019)"
    },
    {
      type: "youtube",
      id: "Imjqd9JiG_M",
      caption: "Virkamiessaarna 5: fronttidevauksen kristallikallo 2222 (2022)"
    },

    {
      type: "youtube",
      id: "ug2jB8SVDCY",
      caption: "React 10 v + Web 30 v syklinen sisältösaittisaarna (2023)"
    }
  ]
};

export default longestDayHatch;
