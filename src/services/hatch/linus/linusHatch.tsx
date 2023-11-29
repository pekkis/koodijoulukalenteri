import { HatchDataWithoutDay } from "@/services/hatch";

import tux from "@/assets/tux.jpeg";

const linusHatch: HatchDataWithoutDay = {
  title: "Suomalainen koodi",
  image: {
    src: tux,
    alt: "Linus Torvalds"
  },
  content: [
    {
      type: "markdown",
      text: `[Linuxin](https://fi.wikipedia.org/wiki/Linux) maskotti Tux saa itsenäisyyspäivän kunniaksi toimia kasvoina kaikelle suomalaiselle koodille, koska hanke lienee karusta pohjolasta siinneistä softaprojekteista kaikkein kuuluisin.

Myös Linus Torvaldsin toinen tunnettu softalapsi, [Git](https://fi.wikipedia.org/wiki/Git), on itselleni tärkeä, joten kiitos, Linus! Kiitos myös kaikki muutkin koodarit ja koodarin kaltaiset, joiden kanssa olen saanut vuosien mittaan tunkkailla. Hyvää itsenäisyyspäivää!

* [Koodia Suomesta](https://koodiasuomesta.fi/)
      `
    }
  ]
};

export default linusHatch;
