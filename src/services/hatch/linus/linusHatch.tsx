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
      text: `[Linuxin](https://fi.wikipedia.org/wiki/Linux) maskotti Tux saa itsenäisyyspäivän kunniaksi toimia kasvoina kaikelle suomalaiselle koodille, koska tuo vaatimaton käyttiksenpoikanen lienee karusta pohjolasta siinneistä softaprojekteista kaikkein kuuluisin.

Myös Linus Torvaldsin toinen tunnettu softalapsi, [Git](https://fi.wikipedia.org/wiki/Git), on itselleni tärkeä, joten kiitos, Linus! Kiitos myös kaikki muutkin koodarit ja koodarin kaltaiset, joiden kanssa olen saanut vuosien mittaan tunkkailla.

Hyvää itsenäisyyspäivää, koodaamisen iloa, ja muistakaapa koodata vapaan koodarin avointa koodia aina kun mahdollista!

* [Koodia Suomesta](https://koodiasuomesta.fi/)
* [Pekkiksen koodit (myös Suomesta!)](https://github.com/pekkis/)
* [Vähän lisääkin Peksun vapaata koodia](https://github.com/mhm-online)
      `
    }
  ]
};

export default linusHatch;
