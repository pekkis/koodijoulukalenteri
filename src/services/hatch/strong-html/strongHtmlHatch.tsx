import { HatchDataWithoutDay } from "@/services/hatch";

import strongHtml from "@/assets/strong-html.jpeg";

const strongHtmlHatch: HatchDataWithoutDay = {
  title: "Vahva hötskä",
  image: {
    src: strongHtml,
    alt: "Antropomorfiset HTML-tägit, joiden joukossa on paljon strong-elementtejä, nostelevat painoja salilla."
  },
  content: [
    {
      type: "markdown",
      text: `Siinä kohtaa, kun olet plärännyt edellisen luukun kaikki metafreimarit läpi ja JavaScript-väsymys yllättää, on aika palata juurille. Vahva webbiplatta tarvitsee vahvaa HTML:ää!

[HTMX](https://htmx.org/) on vahvasti HTML:n ja hypertekstin päälle rakentava tekki. On tästä ihan mitä mieltä tahansa ja tuntuu tämä ajatusmaailma miten vieraalta Reactiin tottuneelle, niin ainakin se on erilainen ja sen takana piileksivät propellipäät uskovat juttuunsa täysillä.

Oma tavoitteeni vuodelle 2024: "tee näillä tekeillä jotakin, jos et muuten, niin siksi että ~~voit tuomita~~ viisautesi kasvaa!"

* [HTMX](https://htmx.org/)
* [Hyperscript](https://hyperscript.org/)
* [BETH stack](https://github.com/ethanniser/the-beth-stack)

`
    }
  ]
};

export default strongHtmlHatch;
