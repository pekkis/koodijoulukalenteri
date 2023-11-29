import { HatchDataWithoutDay } from "@/services/hatch";

import css from "@/assets/ihmiskontti.jpeg";
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

Kylläpä paranee leiskoitus ja komponenttien dissain. Iso onnen kyynelhän tässä silmäkulmasta herahtaa ihan enterprise-hankkeissa asti, kunhan selaintuki vielä hitusen paranee.


* [konttikyselyin speksit](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries)
* [joko saa käyttää?](https://caniuse.com/?search=container%20queries)

Alla mahtava demo ja video. Kalenteri käyttää etenkin gridautuksessa ja luukuissa tätä fiitsöä muutenkin.

`
    },
    { type: "jsx", Component },
    { type: "youtube", id: "3_-Je5XpbqY" }
  ]
};

export default containerQueryHatch;
