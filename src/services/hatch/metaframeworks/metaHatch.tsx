import { HatchDataWithoutDay } from "@/services/hatch";

import metaframeworks from "@/assets/metaframeworks.jpeg";

const metaHatch: HatchDataWithoutDay = {
  title: "Taistelevat metafreimarit",
  image: {
    src: metaframeworks,
    alt: "Antropomorfiset metafraweworkit taistelevat painiringissä"
  },
  content: [
    {
      type: "markdown",
      text: `[Github Copilotin](https://github.com/features/copilot) reaaliajassa tuottamin kuolemattomin sanoin: enää ei riitä, että on UI-kirjasto, vaan pitää olla myös metaframework. Metaframework on framework, joka tekee frameworkista frameworkin. Metaframeworkin avulla frameworkin käyttöä voidaan abstrahoida, ja frameworkin käyttöä voidaan abstrahoida frameworkin käytön abstrahoinnilla. Voisiko tätä enää selkeämmin selittää?

Vakavasti ottaen, ymmärrän kyllä metafreimarien tarpeen. Reititys, koodinsplittaus, hydraatio ja saariarkkitehtuuri, datan hakeminen ja niin edespäin, ne ovat vaikeita asioita ratkaistavaksi ja tehtäväksi itse pitkästä tavarasta.

Jokaisella käyttiskirjastolla on omansa tai montakin, mutta pohjimmiltaan kaikki metaframewörkit ovat aika samankaltaisia. Jokaisen pitää vain löytää oma suosikkinsa. Joulukalenteri on muuten tehty Next.js:llä ja hostataan [Vercelissä](https://vercel.com/).

Tässä joitakin vaihtoehtoja tutkittavaksi.

* [Web Components + Enhance](https://enhance.dev/)
* [Angular + Analog](https://analogjs.org/)
* [Marko + Marko Run](https://github.com/marko-js/run)
* [Solid.js + Solid Start](https://start.solidjs.com/)
* [Svelte + SvelteKit](https://kit.svelte.dev/)
* [Redwood](https://redwoodjs.com/)
* [React + Remix](https://remix.run/)
* [Vue + Nuxt](https://nuxtjs.org/)
* [Qwik + QwikCity](https://qwik.builder.io/docs/qwikcity/)
* [Astro](https://astro.build/)
* [React + Next.js](https://nextjs.org/)

[Vite](https://vitejs.dev/) on tekki, jota melkein kaikki listaamani metafreimarit käyttävät pinnan alla. Se onkin tosi hyvä tekki. Sen ja vaikkapa [Vinxin](https://vinxi.vercel.app/) ja [Nitron](https://nitro.unjs.io/) kanssa voit rakentaa **ihan oman** metaframeworkin!
`
    }
  ]
};

export default metaHatch;
