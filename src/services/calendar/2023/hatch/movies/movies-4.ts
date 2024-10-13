import { HatchDataWithoutDay } from "@/services/hatch";

import turing from "@/assets/turing.jpeg";

const movies4Hatch: HatchDataWithoutDay = {
  title: "Viime vuosien koodileffat",
  image: {
    src: turing,
    alt: "Elokuvajuliste, jossa kaunis tyttöandroidi kräkkää Enigma-masiinaa yhdessä Alan Turingin kanssa"
  },
  content: [
    {
      type: "markdown",
      text: `Aktiivinen (52-120+ leffaa vuodessa teattereissa) elokuvaharrastukseni alkoi vuonna 2012. Tässä joitakin katsomisen arvoisia koodileffoja vakavasti otettavan elokuvakulutukseni aikakaudelta.`
    },
    {
      type: "youtube",
      id: "j2jRs4EAvWM",
      caption:
        "The Imitation Game (2014) on ammattitaitoisesti tehty draama Alan Turingista, joka hakkeroi natsien Enigma-masiinan ja auttaa liittoutuneita voittamaan sodan. Turingin tarina loppuu onnettomasti, mutta olkoon se meille ikuinen muistutus siitä, että ihmiskunnalla on vielä kehityttävää."
    },
    {
      type: "youtube",
      id: "sNExF5WYMaA",
      caption:
        "Ex Machina (2015) on mielenkiintoinen, ajatuksia herättävä ja lopulta aika karmiva leffa tekoälystä."
    },
    {
      type: "youtube",
      id: "5wfrDhgUMGI",
      caption:
        "Hidden Figures (2016) on tarina mustista matemaatikoista, jotka yrittävät lähettää ihmisen kuuhun. Tietokoneet ovat viedä naisten työpaikat, mutta koodaamisen opetteleminen pelastaa päivän!"
    },
    {
      type: "youtube",
      id: "cSp1dM2Vj48",
      caption:
        "Ready Player One (2018) on aika spielbergmäinen Spielberg-seikkailu virtuaalitodellisuudessa. Se on katsomisen arvoinen jo pelkästään miljardin peli- ja popkulttuuriviittauksen vuoksi."
    },
    {
      type: "youtube",
      id: "X2m-08cOAbc",
      caption:
        "Free Guy (2021) on vähän samantyylinen popkulttuuriviittauskimara kuin Ready Player One, mutta hauskempi ja mielestäni parempi leffa!"
    },
    {
      type: "youtube",
      id: "cXL_HDzBQsM",
      caption:
        "BlackBerry (2023) on hauskasti dramatisoitu tarina Research In Motionin ja sen BlackBerry-älypuhelimen noususta ja tuhosta. Vitsit, kun joku tekisi Nokian matkapuhelinliiketoiminnasta samanlaisen leffan!"
    }
  ]
};

export default movies4Hatch;
