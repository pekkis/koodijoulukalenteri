import { HatchDataWithoutDay } from "@/services/hatch";

import image from "./colors.webp";
import { ColorsExample } from "@/services/calendar/2025/hatch/colors/ColorsExample";

export const colorsHatch: HatchDataWithoutDay = {
  title: "Talven värivalot",
  image: {
    src: image,
    alt: "CSS-logoon on ripustettu rgb-, hsl- ja muita värikkäitä talvivaloja. HDR:nä tietysti."
  },
  content: [
    {
      type: "markdown",
      text: `
Minusta tuntuu, että suuri osa maailmasta - minä mukaanluettuna - on pysyvästi jämähtänyt [CSS-väreissä](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Colors) 1990-luvulle. \`#ff0000\` pitäisi riittää kaikille.

Hyvä on, väitteeni on karrikoitu. [\`rgb(255 0 0 / .5)\`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/rgb) on oman mukavuusalueeni vihon viimeinen rajajoki, ja ken siitä yli käy, saa kaiken toivon heittää.

Jos uskaltautuu kaivamaan, löytää kaikkea hienoa. Nykyään voi käyttää esimerkiksi HDR-värejä ja erilaisia väriavaruuksia (joista ymmärrän liian vähän), [väri](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/color)- ja [värinsekoitusfunktioita](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/color-mix) (likimain hebreaa minulle!), ja vaikkapa [suhteellisia värejä](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Colors/Using_relative_colors) suoraan CSS:stä.

Eikä saa unohtaa [\`light-dark()\`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/light-dark)-funktiota, jonka ansiosta dark moden tekeminen on "vähän" helpompaa.

Tässäpä tiedonpalasia, joita jokaisen meistä pitäisi lisätä palettiinsa. Alta voit ihailla, mitä sain pikaisesti kokeilemalla aikaan.
`
    },
    {
      type: "jsx",
      Component: ColorsExample
    },
    {
      type: "markdown",
      text: `
* [MDN: CSS colors](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Colors)
* [MDN: color()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/color)
* [MDN: color-mix()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/color-mix)
* [MDN: Using relative colors](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Colors/Using_relative_colors)
* [MDN: light-dark()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/light-dark)
`
    }
  ]
};
