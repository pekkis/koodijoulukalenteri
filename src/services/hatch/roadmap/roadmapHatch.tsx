import { HatchDataWithoutDay } from "@/services/hatch";

import roadmap from "@/assets/diy-3.jpeg";

const roadmapHatch: HatchDataWithoutDay = {
  title: "Tee-se-itse koodijoulukalenteri",
  image: {
    src: roadmap,
    alt: "Reippaat ja kiltit koodarit koodaavat ja suunnittelevat koodijoulukalenteria"
  },
  content: [
    {
      type: "markdown",
      text: `Koodijoulukalenterin luukkujen aukaisun välissä on melkein 24 tuntia tyhjää tilaa. Mikä olisikaan parempi tapa käyttää luppoaika kuin koodaamalla oma koodijoulukalenteri?

Myöhemmissä luukuissa on asiaa kaltaisilleni vanhoille työjuhdille, jotka ovat nähneet liiankin monta joulua, mutta tänään lähdemme liikkeelle nollasta.

Webistä ja webbikoodauksesta kiinnostuneille kerron heti kärkeen mielestäni tärkeimmän salaisuuden: **koodaamaan oppii koodaamalla**. Harjoitus tekee mestarin, ja loppu on kiinni siitä, kuinka paljon harjoittelee.

Netti on pullollaan matskua aiheesta kuin aiheesta, mutta *mitä hemmettiä* pitäisi opetella ja missä järjestyksessä?

Tykkään opettaa ja saarnata ja luennoida koodin iloista. Keksin koska tahansa tuhat ja yksi pointteria, mutta kokonaisuuden hahmottaminen on vaikeaa. Olen jo ehtinyt unohtaa puolet, ja monet aluksi vaikeat asiat tuntuvat neljännesvuosisata myöhemmin itsestäänselviltä.

Olisipa kiva, jos olisi järkeväksi havaittu tiekartta, jonka avulla voisi konkreettisesti hahmotella polkua, jota suosittelee kuljettavaksi, ja jonka on itse aikanaan vähän eri muotoisena ja hapuillen kulkenut.

* [Devauksen tiekarttoja](https://roadmap.sh/)
* [Fronttidevauksen tiekartta](https://roadmap.sh/frontend)

En ole aina ihan samaa mieltä joistakin detaljitason jutuista, mutta kokonaisuutena arvostellen, fronttiin erikoistuneen täyden pinon tunkkaajan tontilta, näissä on mukana voimakas järjen ääni.

Tässä ranskalaisiin viivoihin tiivistettyä viisauttani nuorelle tai alanvaihtaja-minulle.

1) laita kahvi- tai teepannu porisemaan tai päristele energiajuoma auki
1) keksi "oikeita" ja kivoja projekteja, joita on kiva viedä eteenpäin viikkoja, kuukausia tai vuosia
1) pidä tiekartta koko ajan auki ja mielessä
1) tunkkaa
1) turhaudu isosti koska et osaa tai tiedä jotain
1) ota selvää ja opettele se mitä et osaa tai tiedä

Luuppaa kohtia 4-6 seuraavat 25 vuotta. Muista pitää välissä taukoja ja huolehtia (lihas)kunnosta. Muuten alkaa niskaan ja selkään sattua.
`
    }
  ]
};

export default roadmapHatch;
