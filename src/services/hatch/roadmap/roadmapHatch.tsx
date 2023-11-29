import { HatchDataWithoutDay } from "@/services/hatch";

import roadmap from "@/assets/roadmap.jpeg";

const roadmapHatch: HatchDataWithoutDay = {
  title: "Tiekartta meikäläiseen",
  image: {
    src: roadmap,
    alt: "Webbidevaajan alku katselee sekavaa tiekarttaa kohti senioriteettia"
  },
  content: [
    {
      type: "markdown",
      text: `Tykkään opettaa ja saarnata ja luennoida, ja kerron aina mielelläni kaikille webin ja koodauksen pariin hakeutuville omasta mielestäni tärkeimmän alan salaisuuden: **koodaamaan oppii koodaamalla**. Harjoitus tekee mestarin, tuhansia toistoja, valvottuja öitä, ja niin edespäin.

Internet on pullollaan matskua aiheesta kuin aiheesta, mutta *mitä hemmettiä* pitäisi osata ja opetella? Äkkiäkös itse keksin koska tahansa kertoa miljoonasta asiasta, unohtaen ainoastaan ne jutut mitkä ovat muuttuneet itselleni vuosia sitten itsestäänselviksi tai jotka eivät juuri sillä hetkellä tule mieleen.

Olisipa harvinaisen kiva, että olisi joku järkeväksi havaittu tiekartta, jonka avulla hahmottaa polkua mitä suosittelee kuljettavaksi ja jonka on itse aikanaan kulkenut.

* [Devauksen tiekarttoja](https://roadmap.sh/)
* [Fronttidevauksen tiekartta](https://roadmap.sh/frontend)

En tietenkään ole aina samaa mieltä vaikkapa järjestyksestä tai jostain tietyistä detaljitason jutuista, enkä ole lukenut jokikistä karttaa tarkasti, mutta oman fronttiin erikoistuneen täyden pinon tunkkaajan tontilta katsottuna näissä on kyllä mukana järjen ääni.

Tässä tiivistettyä viisauttani nuorelle tai alanvaihtaja-minulle.

1) laita kahvipannu porisemaan
1) keksi joku "oikea" ja / tai kiva harrasteprojekti jota on kiva viedä eteenpäin kuukausia tai vuosia
1) pidä tiekartta auki ja mielessä
1) tunkkaa
1) turhaudu isosti koska et osaa tai tiedä jotain
1) ota selvää ja opettele se mitä et osaa tai tiedä, tunkkaa lisää

Toista kohtia 4-6 seuraavat 25 vuotta. Muista pitää välissä taukoja ja huolehtia (lihas)kunnosta. Muuten alkaa niskaan ja selkään sattua.
`
    }
  ]
};

export default roadmapHatch;
