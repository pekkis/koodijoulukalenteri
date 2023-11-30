import { HatchDataWithoutDay } from "@/services/hatch";

import knitters from "@/assets/knit-2.jpeg";

const knittersHatch: HatchDataWithoutDay = {
  title: "Kuumodulin kudotut muistit",
  image: {
    src: knitters,
    alt: "Naisohjelmoitsijat kutomassa kuumodulin RAM-muisteja"
  },
  content: [
    {
      type: "markdown",
      text: `Joulukuun 11. päivä vuonna 1972 [Apollo 17-lento](https://fi.wikipedia.org/wiki/Apollo_17) laskeutui kuuhun. Se olikin sitten viimeinen kerta, kun ihminen on tuolla yötaivaalla julkeasti möllöttävällä pallukalla kävellyt.

Kuumodulin laskeutumis- ja navigointitietokoneen piti olla hippasen verran robustimpi kuin keskimääräisen vuoden 2023 joulukalenteriappiksen. Tuon ajan teknologialla tämä ei ollut helppoa. Masiinan muistit kirjaimellisesti kudottiin kasaan naisohjelmoitsijoiden toimesta, ja sen jälkeen näitä bittejä ei saanut poikittain sen enempää yllättävä IVO-buutti kuin tuhmasti käyttäytyvä neutriinokaan.

* [Core Rope Memory: When Computer Science Meets Girl Power](https://wehackthemoon.com/tech/core-rope-memory-when-computer-science-meets-girl-power)
* [Wikipedia: Core Rope Memory](https://en.wikipedia.org/wiki/Core_rope_memory)
`
    },
    {
      type: "youtube",
      id: "hckwxq8rnr0"
    }
  ]
};

export default knittersHatch;
