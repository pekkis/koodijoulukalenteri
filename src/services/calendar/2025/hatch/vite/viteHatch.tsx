import { HatchDataWithoutDay } from "@/services/hatch";

import image from "./vite.webp";

export const viteHatch: HatchDataWithoutDay = {
  title: "Vite (plus)",
  image: {
    src: image,
    alt: "Iso antropomorfinen Vite-hahmo seisoo jalustalla. Kaikki antropomorfiset metaframeworkit ja kirjastot palvovat sitä. Next.js ja Turbopack murjottavat nurkassa aasinhattu päässä."
  },
  content: [
    {
      type: "markdown",
      text: `
Kaikki paitsi Next.js tuntuvat konsolidoivan [Viten](https://vite.dev/) ympärille. Itsekin parin viime vuoden isossa enterprise-projektissani laskeskelin ja tutkiskelin, että tähän ekosysteemiin betsaaminen kannattaa (ja sulkee ekosysteemin ulkopuolella olevat ratkaisut ulos).

[Vite+](https://viteplus.dev/) on tuloillaan oleva, Viten tekijöiden omien ja kolmannen osapuolen hyväksi havaittujen tunkkien päälle pystyttämä monetisoitu kilke, joka lupaa tarjota kaikki ekosysteemin parhaat puolet helposti.

Jos pakettiratkaisu on liian kallis tai et muuten tykkää siitä, kasaa ihmeessä sama setti pitkästä tavarasta. Nämä ovat kaikki yhdessä ja yksittäin erinomaisen laadukkaita ohjelmistotuotteita!

* [Vite](https://vite.dev/) on build-työkalu ekosysteemin ytimessä.
* [Vitest](https://vitest.dev/) on tosi hyvä testiframework.
* [Oxc / Oxlint](https://oxc.rs/) linttailee.
* [Oxc / Oxfmt](https://oxc.rs/) prettieröi.
* [Rolldown](https://rolldown.rs/) ja [Tsdown](https://tsdown.dev/) kääntelevät kirjastot.
* [Nitro](https://v3.nitro.build/) hoitelee fullstäkin.
* [Vinxi](https://github.com/nksaraf/vinxi) rakentaa Nitron päälle.
`
    }
  ]
};
