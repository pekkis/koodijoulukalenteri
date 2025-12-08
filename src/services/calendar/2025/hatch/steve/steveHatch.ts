import { HatchDataWithoutDay } from "@/services/hatch";

import image from "./steve.webp";

export const steveHatch: HatchDataWithoutDay = {
  title: "Steven iPhone-presis",
  image: {
    src: image,
    alt: "Jouluinen Steve Jobs laittaa alkuperäisen iPhonen kuusen alle"
  },
  content: [
    {
      type: "markdown",
      text: `
Tammikuun **yhdeksäntenä** päivänä, vuonna 2007, Applen toimitusjohtaja [Steve Jobs](https://en.wikipedia.org/wiki/Steve_Jobs) esitteli [iPhonen](https://en.wikipedia.org/wiki/IPhone_(1st_generation)) yleisölle MacWorld-tapahtumassa.

Toissa vuoden kalenterissa ihailimme samannumeroisessa luukussa [kaikkien demojen äitiä](/c/2023/h/9). Kaikista myöhemmistä demoista tämän Steven presiksen _täytyy_ olla äitidemon lempilapsi.
`
    },
    {
      type: "youtube",
      id: "ASC4YOKtgRg",
      caption:
        "Steven legendaarinen presis. Varsinainen action alkaa 25 minuutin kohdalta."
    },
    {
      type: "markdown",
      text: `
Puhelin oli demopäivänä vielä ihan raakile. Prototyyppi ei ollut harjoituksissa suostunut pysymään pystyssä koko presistä.

Tarkkaan suunnitellun esitysjärjestyksen [ja muiden silmänkääntötemppujen avustuksella](https://9to5mac.com/2017/01/09/steve-jobs-iphone-presentation-2007-inside-story/) kaikki meni varsinaisena esityspäivänä kuin Strömsössä, ja loppu on historiaa.

Esitystä katsellessasi ja sen merkitystä pohtiessasi voit vaikka pyöritellä mielessäsi suomalaisen [Nokian](https://en.wikipedia.org/wiki/Nokia) osuutta maailman kännykkämarkkinoista. Se oli vuonna 2007 noin 40 prosenttia, älypuhelimista suunnilleen puolet.
`
    }
  ]
};
