import { HatchDataWithoutDay } from "@/services/hatch";

import image from "./corner-case.webp";
import { CornerCases } from "@/services/calendar/2025/hatch/corner-case/CornerCases";

export const cornerCaseHatch: HatchDataWithoutDay = {
  title: "Muodokkaat reunat",
  supports: ["corner-shape", "squircle"],
  image: {
    src: image,
    alt: "HTML-loota, jossa on leikatut kulmat"
  },
  content: [
    {
      type: "markdown",
      text: `
Tiesitkö, että CSS:ssä on elokuusta 2025 alkaen uusi hieno \`corner-shape\`-ominaisuus, jolla tylsät tuhanteen kertaan nähdyt pyöreät kulmat muuttuvat eksoottisiksi muodoiksi suoraan tulevaisuudesta? Katso ja ihmettele!

Jos kulmat luukussa tai alempana eivät näy tavallista hupaisampina, se johtuu siitä, että käytät kökköselainta. Uusi kulmaleikkuri tulee Chromen mukana alkaen versiosta 139, muita selaimia vielä (loppusyksystä 2025) odotellaan.
`
    },
    { type: "jsx", Component: CornerCases },

    {
      type: "markdown",
      text: `
* [MDN: corner-shape](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/corner-shape)
* [The modern way to draw squircles using corner-shape in CSS](https://amitmerchant.com/the-modern-way-to-draw-squircles-using-corner-shape-in-css/)

Knoppitietona opin kulmikasta tutkimustyötä tehdessäni, että perus \`border-radius\` property syö itse asiassa **kaksi** arvoa per kulma. Kaikkea sitä onkin ollut tietämättä, vaikka CSS:ää on tullut koodattua tovi!

* [What can we actually do with corner-shape](https://css-tricks.com/what-can-we-actually-do-with-corner-shape/)
`
    }
  ]
};
