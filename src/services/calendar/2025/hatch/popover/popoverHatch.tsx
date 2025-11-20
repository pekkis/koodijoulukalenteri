import { HatchDataWithoutDay } from "@/services/hatch";

import image from "./popover.webp";
import { PopoverExample } from "@/services/calendar/2025/hatch/popover/PopoverExample";

export const popoverHatch: HatchDataWithoutDay = {
  title: "Ponnahtavat ikkunat",
  image: {
    src: image,
    alt: "Napin yläpuolelle on ponnahtanut potra popover-ikkuna"
  },
  content: [
    {
      type: "markdown",
      text: `
Erilaisten popuppien, popoverien, tooltippien, dialogien, overlay-molluskojen ynnä muiden tekeminen on ollut helvettiä niin kauan kuin muistan. Siksi Popperin (nykyinen [Floating UI](https://floating-ui.com/)) kaltaisille kirjastoille on ollut (ja on varmasti vieläkin) kysyntää.

Selaimen oma [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API) saavutti alkuvuonna 2025 baseline-tason. Rajapinta näyttää lupaavalta, joten ehkä pääsemme kammottavista popover-himmeleistä eroon seuraavien vuosien kuluessa!

Popoverin voi väitetysti yhdistää [dialog-elementtiin](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog), ja sillä tavalla myös modaalisten popoverien pitäisi päästä kokemaan syntymän ihme!

[Ankkuripositiointi](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Anchor_positioning) on käytettävissä popoverien ulkopuolellakin, mutta se liittyy näihin aika kiinteästi, joten asukoon sekin tässä luukussa.

Alhaalta löydät esimerkkirävellykseni. Se on tosi köpöinen, koska koodijoulukalenterin luukkusivu on vanhan liiton modaali-virveli. En osannut refaktoroida sitä uusien hienojen rajapintojen päälle, joten popoverit toimivat luukun sisällä vähän huonosti.
`
    },
    {
      type: "jsx",
      Component: PopoverExample
    },
    {
      type: "markdown",
      text: `
* [MDN: Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API)
* [MDN: Using the Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API/Using)
* [The Popover API is now Baseline Newly available](https://web.dev/blog/popover-baseline)
* [MDN: The dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog)
* [MDN: CSS Anchor positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Anchor_positioning)
`
    }
  ]
};
