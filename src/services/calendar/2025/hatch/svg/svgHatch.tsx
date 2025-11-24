import { HatchDataWithoutDay } from "@/services/hatch";

import image from "./svg.webp";

export const svgHatch: HatchDataWithoutDay = {
  title: "SVG",
  image: {
    src: image,
    alt: "Antropomorfinen jouluinen SVG-vektorikuva ivaa kolmea bittikarttaformaattia - pulleaa png:tä, pakkaus-artefakteja sisältävää webp:tä sekä vanhaa ja naavapartaista mustavalkoista gif-kuvaa."
  },
  content: [
    {
      type: "markdown",
      text: `
[SVG](https://en.wikipedia.org/wiki/SVG) on mahtiformaatti. Yksinkertaisimmillaan se on ihan tavallinen kuvaformaatti muiden joukossa, [\`img\`-tagin](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img) src-attribuutissa möllöttämässä, mutta se voi olla niin paljon muutakin.

[Josh W. Comeaun](https://joshwcomeau.com/) kesällä 2025 kirjoittama [ystävällinen tutustutus SVG:hen](https://www.joshwcomeau.com/svg/friendly-introduction-to-svg/) herätti minut muistamaan, kuinka köpö ja rajoittunut olen SVG:n kanssa. Häpesin jopa. Häpeän vähän vieläkin. Älä ole kuten minä. Osaa paremmin!

* [Wikipedia: SVG]()
* [MDN: SVG]()
* [A Friendly Introduction to SVG](https://www.joshwcomeau.com/svg/friendly-introduction-to-svg/)
* [An Interactive Guide to SVG Paths](https://www.joshwcomeau.com/svg/interactive-guide-to-paths/)


`
    }
  ]
};
