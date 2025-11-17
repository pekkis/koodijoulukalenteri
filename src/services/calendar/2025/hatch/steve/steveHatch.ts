import { HatchDataWithoutDay } from "@/services/hatch";

import image from "./steve.webp";

export const steveHatch: HatchDataWithoutDay = {
  title: "Steven presis",
  image: {
    src: image,
    alt: "Jouluinen Steve Jobs laittaa alkuperäisen iPhonen kuusen alle"
  },
  content: [
    {
      type: "markdown",
      text: `
Tammikuun **yhdeksäntenä** päivänä, vuonna 2007, Applen toimitusjohtaja Steve Jobs esitteli iPhonen yleisölle MacWorld-tapahtumassa.

Toissa vuoden kalenterissa ihailimme samassa luukussa [kaikkien demojen äitiä](/c/2023/h/9). Steven presiksen täytyy olla äidin lempilapsi.
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
Mikä hassuinta, iPhone oli vielä ihan raakile, eikä se tahtonut harjoituksissa pysyä pystyssä! Erinäisten silmänkääntötemppujen avustuksella varsinaisena esityspäivänä tapahtui ihme, prototyyppi hyrskytteli, ja kaikki meni kuin Strömsössä. Loppu onkin historiaa!

* [The golden path, hidden Wi-Fi & cellular tricks behind the iPhone presentation](https://9to5mac.com/2017/01/09/steve-jobs-iphone-presentation-2007-inside-story/)
`
    }
  ]
};
