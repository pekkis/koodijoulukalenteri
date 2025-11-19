import { HatchDataWithoutDay } from "@/services/hatch";

import image from "./symbolics.webp";

export const symbolicsHatch: HatchDataWithoutDay = {
  title: "Domain-kisan ykkönen",
  image: {
    src: image,
    alt: 'Antropomorfinen Symbolics.com-hahmo juhlii ykköspallilla ykkössijaansa "ensimmäinen domain"-kisassa!'
  },
  content: [
    {
      type: "markdown",
      text: `
**Viidestoista** maaliskuuta 1985 muistetaan päivänä, jolloin [symbolics.com](https://www.symbolics.com), ensimmäinen ja [vanhin edelleen elossa oleva](https://en.wikipedia.org/wiki/List_of_the_oldest_currently_registered_Internet_domain_names) .com-domain rekisteröitiin.

[Symbolics](https://en.wikipedia.org/wiki/Symbolics) oli tietokonevalmistaja, joka valmisti [Lisp-koneita](https://en.wikipedia.org/wiki/Lisp_machine), määrällisesti vähäistä mutta alan kehitykselle tärkeää tietokoneen alalajia.

Nämä ihmevempeleet myivät kuin häkä [edellisen AI-buumin](https://en.wikipedia.org/wiki/History_of_artificial_intelligence#Boom_(1980%E2%80%931987)) aikana, mutta kun kupla vuonna 1987 puhkesi, Lisp-masiinat kuolivat sukupuuttoon.

Yritys- ynnä muiden kauppojen kautta domain päätyi vuosia myöhemmin [Aron Meystedt](https://www.linkedin.com/in/aronmeystedt/)-nimisen kaiffarin haltuun. Tyyppi ylläpitää domainissa [melko... värikästä... internet-museota](https://www.symbolics.com), joka on ehdottomasti vierailemisen ja tutkimisen arvoinen!




`
    }
  ]
};
