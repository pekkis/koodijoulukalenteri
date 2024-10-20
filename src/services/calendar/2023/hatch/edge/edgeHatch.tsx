import { HatchDataWithoutDay } from "@/services/hatch";

import edge from "./edge.jpeg";

const edgeHatch: HatchDataWithoutDay = {
  title: "Reunalaskenta",
  image: {
    alt: "Reunalla eläminen ei pelota funktiota, joka seisoo rohkeasti reunalla",
    src: edge
  },
  content: [
    {
      type: "markdown",
      text: `Serverittömyys ja funktiot palveluna on jo nähty, reunalla elävät vannovat nyt reunalaskennan nimeen.

Hienosta hypestä huolimatta reunalaskennassa sinänsä ei mielestäni ole mitään mahdottoman eksoottista. Koodi tuodaan lähelle käyttäjää, ja siksi sen latenssi on pieni, ja koska koodia voidaan tavallaan ajaa wanhan sukupolven CDN:n siivellä, hinnat ovat usein törkyhalpoja.

Voi totta kai olla, että mielestäni koko jutussa ei ole mitään ihmeellistä siksi, etten ole raa'alla tasolla aiheeseen ehtinyt syventyä. Tavoitteeni kaudelle 2024 on tehdä jotain aiheen parissa, jotta osaan seuraavassa joulukalenterissa viisastella aiheesta paremmin.

* [Cloudflare Workers](https://workers.cloudflare.com/)
* [Cloudflare Pages](https://pages.cloudflare.com/)
* [Vercel Edge Functions](https://vercel.com/docs/functions/edge-functions)
* [Netlify Edge Functions](https://docs.netlify.com/edge-functions/overview/)
* [AWS Lambda@Edge](https://aws.amazon.com/lambda/edge/)
* [Deno Deploy](https://deno.com/deploy)`
    },
    {
      type: "youtube",
      id: "auFkJ2k28f4",
      caption:
        "Viime kesäinen tosi mielenkiintoinen presis duraabeleista objekteista"
    }
  ]
};

export default edgeHatch;
