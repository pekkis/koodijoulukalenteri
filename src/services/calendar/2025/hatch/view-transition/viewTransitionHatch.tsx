import { HatchDataWithoutDay } from "@/services/hatch";

import image from "@/services/calendar/2025/hatch/view-transition/view-transitions.webp";
import { ViewTransitionExample } from "@/services/calendar/2025/hatch/view-transition/ViewTransitionExample";

export const viewTransitionHatch: HatchDataWithoutDay = {
  title: "Siirtymäkausi",
  image: {
    src: image,
    alt: "Tekälyn piirtämä jokseenkin abstrakti näkemys siitä, miltä view transitiot voisivat näyttää."
  },
  content: [
    {
      type: "markdown",
      text: `
Tunnustan mitä rehellisimmin ja täysin avoimesti, että *animaatiot* eivät ole vahvinta osaamisaluettani. En ole kovin visuaalinen ihminen, ja animaatioiden ymmärtäminen alkaen ihan perustasolta, konseptina, mekanismina, on minulle vähän haastavaa.

Otan mielelläni vastaan kaiken, joka tekee animaatioiden ajattelusta ja tekemisestä helpompaa. [View Transition-rajapinta](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API) lupaa tehdä juuri sen, ja se on (puoliksi) [juuri saavuttanut baseline-statuksen](https://web.dev/blog/same-document-view-transitions-are-now-baseline-newly-available), joten kaunein kiitos siitä, oi rajapinta!

View transitiot mahdollistavat tilojen välisen animoinnin yhden dokumentin sisällä (SPA), ja - mikä on tähän asti ollut täysin mahdotonta - kahden "oikean" sivulatauksen (MPA) välillä.

Hämmästyttävää! Häkellyttävää! Tällaista taikuutta ei vuoden 2005 Pekkis olisi koskaan uskonut näkevänsä. Katso alhaalta (ja löydä joulukalenterista!), kuinka jopa minä sain aikaan animaatioita tekemättä juuri mitään tai ymmärtämättä mitään.

## Demo
`
    },
    { type: "jsx", Component: ViewTransitionExample },
    {
      type: "markdown",
      text: `
## Luettavaa ja katseltavaa

* [Toe Dipping Into View Transitions](https://css-tricks.com/toe-dipping-into-view-transitions/)
* [View transitions for single page applications](https://web.dev/learn/css/view-transitions-spas)
* [View Transitions Feature Explorer](https://codepen.io/web-dot-dev/full/EaPbbgx)
`
    },
    {
      type: "youtube",
      id: "quvE1uu1f_I",
      caption: "MPA View Transitions deep dive"
    },
    {
      type: "youtube",
      id: "89db2qSF7JY",
      caption:
        "View Transitions: The brand-new browser API that will blow your mind"
    }
  ]
};
