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
Tunnustan rehellisesti ja avoimesti, että *animaatiot* eivät ole vahvinta osaamisaluettani. En ole kovin visuaalinen, ja animaatioiden ymmärtäminen on minulle haastavaa.

Otan mielelläni vastaan kaiken, joka tekee animaatioiden ajattelusta ja toteuttamisesta helpompaa. [View Transition-rajapinta](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API) lupaa tehdä juurikin näin, ja se on äskettäin [saavuttanut puolittaisen baseline-statuksen](https://web.dev/blog/same-document-view-transitions-are-now-baseline-newly-available). Kaunein kiitos, rajapinta!

View transitiot mahdollistavat tilojen välisten siirtymien animoinnin joko yhden dokumentin sisällä (SPA), tai - täysin mahdotonta tähän asti - kahden "oikean" sivulatauksen välillä (MPA). Ihan tavalliset webbisivut voivat vastedes käyttäytyä kuin appikset.

Tällaista ei nuori Pekkis olisi koskaan uskonut näkevänsä. Katso alhaalta (ja joulukalenterin luukkusivun dialogin animoinnista!), kuinka jopa minä sain Reactin canary-version [<ViewTransition>](https://react.dev/reference/react/ViewTransition)-komponentin ystävällisellä avustuksella jotakin aikaan lähes itsestään ja liikoja ymmärtämättä.

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
* [I can has use?: View Transitions](https://caniuse.com/?search=view+transition)
* [<ViewTransition>](https://react.dev/reference/react/ViewTransition)
* [Astro: View transitions](https://docs.astro.build/en/guides/view-transitions/)
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
