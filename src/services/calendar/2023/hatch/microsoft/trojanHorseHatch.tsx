import { HatchDataWithoutDay } from "@/services/hatch";

import trojanHorse from "./ms.jpeg";

const trojanHorseHatch: HatchDataWithoutDay = {
  title: "Troijan koodihepo",
  image: {
    alt: "Koodarit vetävät isoa puista Troijan koodihevosta kohti kaupunkiaan. Hevosen kylkeä koristaa suuri Microsoftin logo.",
    src: trojanHorse
  },
  content: [
    {
      type: "markdown",
      text: `Vuonna 1999 [Microsoft päätettiin pilkkoa osiin](https://en.wikipedia.org/wiki/United_States_v._Microsoft_Corp.) monopoliaseman väärinkäytön takia. Tuomari ei nähnyt muuta keinoa hillitä Microsoftin ja sen toimitusjohtajan Bill Gatesin hillitöntä himoa omistaa aivan kaikki ja ajaa kilpailijat pois markkinoilta käyttämällä Windowsia lyömäaseena.

Urani alkuvuosina Microsoft, jota ei lakiteknisen näpertelyn vuoksi lopulta pilkottu, oli kauhea peikko. [Internet Explorer](), joka oli voittanut selainsodan likaisella pelillä, hallitsi selainmarkkinaa, ja tämä selain oli haiseva kasa.

Nämä ajat eivät olleet hyviä webille, Microsoftin hallitseva asema ja [W3C:n loputon byrokraattinen taaksepäinyhteensopimaton näpertely](https://en.wikipedia.org/wiki/XHTML) olivat tappaa koko alustan.

Vuonna 2008 ZendCon-konferenssissa San Franciscossa muistan kuinka Microsoftin edustajille buuattiin, ja kuinka heitä heiteltiin frisbeillä, joita parat yrittivät jakaa sovintolahjoina heille kyräileville ja Microsoftiin skeptisesti suhtautuville osallistujille.

Itse en heitellyt, mutta lähellä oli, koska suhtauduin Microsoftiin avoimen vihamielisesti.

Voi kuinka ajat ovatkaan muuttuneet! Tässä vain osa Microsoftin jutskista, joita olen ylpeänä käyttänyt koodikalenteria tehdessäni.

* [Visual Studio Code](https://code.visualstudio.com/)
* [TypeScript](https://www.typescriptlang.org/)
* [GitHub](https://github.com/)
* [NPM](https://www.npmjs.com/)
* [Bing Create](https://www.bing.com/create)

[WSL:n](https://learn.microsoft.com/en-us/windows/wsl/install) läpi jopa *koodaan* joskus Windowsilla työpöytäkoneellani, ja se on ihan OK kokemus. Kymmenen vuotta sitten olisin tukehtunut pullaan pelkästä ajatuksesta.

Entisten pahisten kääntyminen hyviksiksi on kaunis tarina, ja kannustan Microsoftia jatkamaan tällä tiellä. En silti voi olla näkemättä mielessäni kauhukuvaa, jossa vanha monopoli-Microsoft purkautuu Troijan hevosestaan ja olemme kaikki Mikkiksen orjia.`
    }
  ]
};

export default trojanHorseHatch;
