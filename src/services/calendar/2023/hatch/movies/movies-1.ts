import { HatchDataWithoutDay } from "@/services/hatch";

import trinity from "./matrix-tytsy.jpeg";

const movies1Hatch: HatchDataWithoutDay = {
  title: "Koodarileffat, 1990-luku",
  image: {
    src: trinity,
    alt: "Viileä hakkerityttö kräkkää matriisin salasanoja kymmenellä näytöllä samaan aikaan"
  },
  content: [
    {
      type: "markdown",
      text: `Koodaaminen on ihan **sairaan coolia**. Siksi koodareista ja muista "alan tyypeistä" tehdään Hollywoodissa koko ajan leffoja!

Virittäydy koodi- ja kalenteritunnelmiin katsomalla legendaarisia koodileffoja ysäriltä. Parempi itse asiassa katsoa ne heti, tai seuraavista luukuista tulviva *tosielämän* toiminnantäyteys räjäyttää huomisesta alkaen pääsi!`
    },
    {
      type: "youtube",
      id: "nUEQNVV3Gfs",
      caption:
        "Matrix on mielestäni koodarileffoista paras, ja varoittava esimerkki järjestelmään pesiytyneen bugin kataluudesta. Harmi, ettei elokuvalle koskaan tehty jatko-osaa, koska reseptihän on 100% sössimisenkestävä kuin julkinen IT-hanke!"
    },
    {
      type: "youtube",
      id: "LYwVkek5OMM",
      caption:
        "The Net on epäilemättä realistisin koskaan filmille tallentunut kuvaelma työstäni ja työssä kohtaamistani vaaroista."
    },
    {
      type: "youtube",
      id: "3_fG_zLbBeU",
      caption:
        "Konttorirottien ajoista kovin paljon ei ole muuttunut, mitä nyt yksi kulkutautiepidemia välissä vähän pakotti. Aina yhtä ajankohtainen ja todenmukainen leffa alasta!"
    },
    {
      type: "youtube",
      id: "piI9vJ9-UZ0",
      caption:
        "Hackers näyttää webbiscenen juuri sellaisena kuin se oli aivan alussa. Harmittaa, että itse missasin ihan alun huuman ja kiiman!"
    },
    {
      type: "youtube",
      id: "G_XRqJV2zdk",
      caption:
        "Tykkäsin Sneakersista teininä. Pitäisi joskus katsoa se uudelleen aikuisena, koska muistan siitä tosi vähän. Todellinen vanhan liiton näyttelijöiden koodarileffa!"
    }
  ]
};

export default movies1Hatch;
