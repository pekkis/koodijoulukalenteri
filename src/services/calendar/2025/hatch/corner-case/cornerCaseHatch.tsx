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
Tiesitkö, että CSS:ssä on elokuusta 2025 alkaen uusi hieno [\`corner-shape\`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/corner-shape)-ominaisuus, jolla tylsät tuhanteen kertaan nähdyt pyöreät kulmat muuttuvat eksoottisiksi muodoiksi suoraan tulevaisuudesta? Katso ja ihmettele!

Jos kulmat luukun dialogissa tai alempana eivät näy tavallista velmumpina, se johtuu siitä, että käytät *kökköselainta*. Uusi kulmaleikkuri tulee työpöytä-[Chromen](https://www.google.com/intl/fi_fi/chrome/) mukana alkaen versiosta 139, muita selaimia vielä (loppusyksystä 2025) odotellaan.

[Polyfillaus](https://css-houdini.iamvdo.me/corner-shape) on mahdollista [Houdinin](https://developer.mozilla.org/en-US/docs/Web/API/Houdini_APIs) kautta. Koodijoulukalenteri kieltäytyy polyfilleistä periaatteellisista syistä.
`
    },
    { type: "jsx", Component: CornerCases },

    {
      type: "markdown",
      text: `
Knoppitietona opin kulmikasta tutkimustyötä tehdessäni, että perus \`border-radius\` property syö itse asiassa **kaksi** arvoa per kulma. Kaikkea sitä onkin ollut tietämättä, vaikka CSS:ää on tullut koodattua tovi!

* [MDN: corner-shape](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/corner-shape)
* [The modern way to draw squircles using corner-shape in CSS](https://amitmerchant.com/the-modern-way-to-draw-squircles-using-corner-shape-in-css/)
* [What can we actually do with corner-shape](https://css-tricks.com/what-can-we-actually-do-with-corner-shape/)
`
    }
  ]
};
