import { HatchDataWithoutDay } from "@/services/hatch";

import image from "./scrollbars.webp";
import { Scrollbars } from "@/services/calendar/2025/hatch/scrollbars/Scrollbars";

export const scrollbarsHatch: HatchDataWithoutDay = {
  title: "Vierityspalkin uudet kujeet",
  image: {
    src: image,
    alt: "Selainikkuna, jossa on värikäs, pullukka vierityspalkki"
  },
  content: [
    {
      type: "markdown",
      text: `
Muistan elävästi, kuinka onnellinen olin vuosituhannen alussa, kun pystyin [säätämään vierityspalkin väriä Internet Explorer 5.5:sen ilmestyttyä](https://www.quirksmode.org/css/scrollbars.html).

Nyt hyvät ajat ovat palanneet! Eivät ihan yhtä hyvinä kuin ennen, mutta vihdoin ja viimein [scrollbareja saa taas tyyliteltyä "paremmiksi"]() standardinmukaisin keinoin, enempi vähempi tuettuna!

Tyhmät Mac-koneet käyttävät vakiona tylsiä overlay-palkkeja, joiden kanssa säätäminen ole lainkaan yhtä ~~kamalaa~~ hauskaa kuin windows-palkkien kera, joten kehotan käymään systeemiasetuksissa laittamassa wanhan liiton scrollbarit takaisin päälle!`
    },
    {
      type: "jsx",
      Component: Scrollbars
    },
    {
      type: "markdown",
      text: `
* [MDN: Scrollbars styling](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scrollbars_styling)
`
    }
  ]
};
