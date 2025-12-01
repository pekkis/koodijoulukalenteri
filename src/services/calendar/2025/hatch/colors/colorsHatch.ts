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
Minusta tuntuu, että suuri osa maailmasta - minä mukaanluettuna - on pysyvästi jämähtänyt [CSS-väreissä](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Colors) 1990-luvulle. Tämän teorian mukaan \`#ff0000\` pitäisi riittää kaikille.

Hyvä on! Tulen vastaan! [\`rgb(255 0 0 / .5)\`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/rgb) on oman mukavuusalueeni vihon viimeinen rajajoki. Ken siitä yli käy, saa kaiken toivon heittää.

Jos uskaltautuu yli käymään, voi löytää kaikkea hienoa. Nykyään voi käyttää esimerkiksi HDR-värejä ja erilaisia väriavaruuksia (joista ymmärrän liian vähän), [väri](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/color)- ja [värinsekoitusfunktioita](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/color-mix) (likimain hebreaa minulle!), ja vaikkapa [suhteellisia värejä](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Colors/Using_relative_colors) suoraan CSS:llä.

Eikä saa unohtaa [\`light-dark()\`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/light-dark)-funktiota, jonka ansiosta synkän moodin tekeminen on "vähän" helpompaa.

Alta voit ihailla omia mahti-esimerkkejäni. Siltä varalta, että pelkkä CSS ei riitä värittämään oman sielusi mustuutta, [color.js](https://colorjs.io/) auttaa varmasti!

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
