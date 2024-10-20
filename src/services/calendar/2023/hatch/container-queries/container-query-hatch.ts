import { HatchDataWithoutDay } from "@/services/hatch";

import css from "./ihmiskontti.jpeg";
import Component from "./Component";

const containerQueryHatch: HatchDataWithoutDay = {
  title: "CSS konttikyselyt",
  image: {
    src: css,
    alt: "Mies kyselee mahdollisesti kokoon liittyviä kysymyksiä varastokontilta"
  },
  content: [
    {
      type: "markdown",
      text: `Container queryt ovat epäilemättä kaikkien aikojen TOP 5 CSS-ominaisuuksien listallani. Ne muuttavat pelin peruuttamattomasti ihan kokonaan siinä missä gridautus, pyöreät kulmat tai divin floattaus aikanaan!

Kylläpä paranee leiskoittaminen ja komponenttien hila tällaisilla vitkuttimilla. Iso onnen kyynelhän tässä silmäkulmasta herahtaa ihan enterprise-hankkeissa asti, kunhan selaintuki vielä hitusen paranee tai totean polyfillauksen toimivaksi.

* [konttikyselyiden speksit](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries)
* [joko tätä saa käyttää???](https://caniuse.com/?search=container%20queries)
* [polyfillillä tätä saa ainakin käyttää?!?](https://github.com/GoogleChromeLabs/container-query-polyfill)

Alla mahtava demo (boksia voi raahata pienemmäksi sivusuunnassa, ainakin deskarilla) ja ennen kaikkea parit videot minua paljon kovemmalta CSS-tyypiltä.

Koodijoulukalenteri muuten käyttää etenkin gridautuksessa ja luukuissa tätä fiitsöä.

`
    },
    { type: "jsx", Component },
    { type: "youtube", id: "3_-Je5XpbqY" },
    { type: "youtube", id: "Zddz_R1RnfM" }
  ]
};

export default containerQueryHatch;
