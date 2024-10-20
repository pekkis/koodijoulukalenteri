import { HatchDataWithoutDay } from "@/services/hatch";

import roadmap from "./diy-3.jpeg";

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

Myöhemmissä luukuissa on asiaa kaltaisilleni työjuhdille, jotka ovat nähneet liian monta joulua, mutta tänään lähdemme liikkeelle nollasta.

Webbikoodauksesta kiinnostuneille kerron heti kärkeen tärkeimmän salaisuuden: **koodaamaan oppii koodaamalla**. Harjoitus tekee mestarin, ja loppu on kiinni siitä, kuinka paljon harjoittelee.

Tykkään opettaa ja saarnata ja luennoida koodin iloista. Keksin koska tahansa tuhat ja yksi opeteltavaa asiaa, mutta polun piirtäminen on hankalaa. Monet aluksi vaikeat asiat ovat muuttuneet jo itsestäänselvyyksiksi.

Netti on täynnä oppimatskua, mutta olisi kiva, jos olisi järkeväksi havaittu tiekartta, jonka avulla voisi konkreettisesti hahmotella polkua, joka kunkin pitää kulkea.

* [Devauksen tiekarttoja](https://roadmap.sh/)
* [Fronttidevauksen tiekartta](https://roadmap.sh/frontend)

En ole aina ihan samaa mieltä detaljitason jutuista, mutta kokonaisuutena arvostellen, frontti- / täyden pinon tunkkaajan tontilta, näissä on mukana voimakas järjen ääni.

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
