import { HatchDataWithoutDay } from "@/services/hatch";

import baldurs from "@/assets/balduran.jpeg";

const baldursHatch: HatchDataWithoutDay = {
  title: "Baldur's Gate 3",
  image: {
    src: baldurs,
    alt: "Baldur's Gate 3:n logo"
  },
  content: [
    {
      type: "markdown",
      text: `[Dr. Kobros-säätiön](https://www.dr-kobros.com) "vuoden 2023 parhaat koodit"-palkinto, himoittu kultainen tunkki, luovutettakoon juhlallisin menoin [Larian Studiosille](https://larian.com/). Menivät ja koodasivat parhaan pelin noin 15 vuoteen. Kiitos!`
    },
    {
      type: "markdown",
      text: `Puolilapsi oli kysynyt äidiltään hämmentyneenä, voivatko Steamin peliaikatilastot pitää oikeasti paikkaansa? Voiko Pekkis olla pelannut kahden viikon aikana **160 tuntia**?

Häpeillen tunnustan, että kyllä tämä paikkansa piti, mutta minun on sanottava puolustuksekseni, että vaikka olinkin lomalla, kävin työhaastatteluissa, minulta meni pari päivää hyvää peliaikaa hukkaan, ja että olisin kyllä muuten pelannut enemmän.

Kirjoitin nuorempana miehenä Pelit-lehteen arvosteluja. Sitä taustaa vasten mietin aina, kuinka monta pistettä antaisin. Baldurs's Gate kolmosen kodalla päädyin lukuun **97** ja "Pekkis suosittelee"-leimaan.

Joitakin Pekkiksen muita suosikkipelejä 40+ vuoden peliharrastuksen tiimoilta:

* [MHM 2000](https://fi.wikipedia.org/wiki/MHM) - tämän teinkin itse(lleni)!
* [Pool of Radiance](https://en.wikipedia.org/wiki/Pool_of_Radiance) ja muut kultalaatikot
* [Final Fantasy VII](https://en.wikipedia.org/wiki/Final_Fantasy_VII)
* [Fallout](https://en.wikipedia.org/wiki/Fallout_(series))
* [Baldur's Gate 2](https://en.wikipedia.org/wiki/Baldur%27s_Gate_II:_Shadows_of_Amn)
* [Knights of the Old Republic](https://en.wikipedia.org/wiki/Star_Wars:_Knights_of_the_Old_Republic)
* [Dragon Age: Origins](https://en.wikipedia.org/wiki/Dragon_Age:_Origins)
* [Mass Effect 2](https://en.wikipedia.org/wiki/Mass_Effect_2)
* [Skyrim](https://en.wikipedia.org/wiki/The_Elder_Scrolls_V:_Skyrim)
* [Red Dead Redemption 2](https://en.wikipedia.org/wiki/Red_Dead_Redemption_2)
* [Divinity: Original Sin 2](https://en.wikipedia.org/wiki/Divinity:_Original_Sin_II)
* [Factorio](https://en.wikipedia.org/wiki/Factorio)
`
    },
    {
      type: "youtube",
      id: "1T22wNvoNiU"
    },
    { type: "youtube", id: "Bk2AqXsJsWU" }
  ]
};

export default baldursHatch;
