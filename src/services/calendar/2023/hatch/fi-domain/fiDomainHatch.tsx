import { HatchDataWithoutDay } from "@/services/hatch";

import internetRuotsista from "./internet-ruotsista.jpeg";

const domainHatch: HatchDataWithoutDay = {
  title: "Internetin haku Ruotsista",
  image: {
    src: internetRuotsista,
    alt: "Suomalaiset koodarit ovat vuonna 1986 matkalla Ruotsiin hakemaan internetiä"
  },
  content: [
    {
      type: "markdown",
      text: `Joulukuun 4. päivänä vuonna 1986 Tampereen teknillinen korkeakoulu (myöhempi Tampereen teknillinen yliopisto, TTY) lähetti hakemuksen .fi:n, uuden ylätason verkkotunnuksen, luomisesta. Verkkotunnuksia hallinnoiva ICANN hyväksyi hakemuksen ja myönsi TTKK:lle oikeuden hallinnoida sitä.

Internetiä Suomessa ei kuitenkaan vielä ollut, joten sellainen piti käydä hakemassa veneellä Ruotsista. 64 kilobitin yhteys riitti koko Suomelle oikein hyvin.

* [Ammattilehti: Fi-domainin mielenkiintoinen historia](https://www.ammattilehti.fi/uutiset.html?76936)
* [Wikipedia: .fi](https://fi.wikipedia.org/wiki/.fi)
      `
    }
  ]
};

export default domainHatch;
