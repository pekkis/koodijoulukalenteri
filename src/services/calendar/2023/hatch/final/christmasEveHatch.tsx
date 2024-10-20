import { HatchDataWithoutDay } from "@/services/hatch";

import christmasEve from "./hou-hou.jpg";

const christmasEveHatch: HatchDataWithoutDay = {
  title: "Hyvää joulua ja tunkkaamisen iloa!",
  image: {
    alt: "Peksu ja Joulupukki, kumpikin ohjelmistokehittäjiä, juhlistavat joulua parikoodaamalla!",
    src: christmasEve
  },
  content: [
    {
      type: "markdown",
      text: `Hyvää joulua. Lahjani teille ja koko maailmalle on koodijoulukalenterin lähdekoodien julkaisu avoimena lähdekoodina ja vapaana kuin taivaan lintu.

* [Koodijoulukalenterin lähdekoodit](https://github.com/pekkis/koodijoulukalenteri)

Koodijoulukalenteri oli hauska harjoitus. Minun olisi vain pitänyt tajuta aloittaa sen tekeminen kuukautta aikaisemmin.

Aloitin tunkkaamisen 21. marraskuuta, ja ensimmäinen viikko meni perustan koodaamiseen, pelillistämiseen ja kaikkeen "ylimääräiseen". Luukkujen kanssa meinasi sitten tulla turhan hoppu.

Tunkkausprosessi itsessään oli mielenkiintoinen. "Osaanko tehdä luukun avaus-animaation"-kokeilu kasvoi kokonaiseksi koodijoulukalenteriksi, ja luukkuen luonti muuttui aika nopeasti tutkimusmatkaksi generatiiviseen tekoälyyn.

Luukkujen sisällöt, paitsi tekoälylle omistetun kymmenennen luukun novellin, on luonut biologinen äly. Kuvat ovat kaikki peräisin tekoälyltä. Se ei *todellakaan* ollut suunnitelmissani aloittaessani projektin!

Huumorintajuni ei ole vuosien mittaan juuri parantunut, mutta minusta on tullut varovaisempi. Jos kiinnostaa nähdä, millaisen ultimaattisen tuhmuustason itsesensuroin etten tulisi canceloiduksi, sekin löytyy lähdekoodista.

Opin paljon, minulla oli hauskaa, ja päätin että ryhdyn kasaamaan vuoden 2024 koodijoulukalenteria jo tammikuun alussa. Jos oikein villiinnyn, teen siitä CAAS (Calendar As A Service) -palvelun, jossa kuka tahansa voi luoda oman koodijoulukalenterinsa!`
    }
  ]
};

export default christmasEveHatch;
