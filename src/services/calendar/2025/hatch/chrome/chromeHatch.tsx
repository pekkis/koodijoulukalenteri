import { HatchDataWithoutDay } from "@/services/hatch";

import image from "./chrome.webp";

export const chromeHatch: HatchDataWithoutDay = {
  title: "Chrome 1.0 rellaus",
  image: {
    src: image,
    alt: "Antropomorfinen Google Chrome juhlii version 1.0 julkaisua joulukuun 11. päivänä 2008. Muut antropomorfiset vuoden 2008 selaimet - Internet Explorer, muotopuoli ja kuola valuen suusta, ja Firefox, katselevat sivusta pelokkaina."
  },
  content: [
    {
      type: "markdown",
      text: `
[Google Chromen](https://en.wikipedia.org/wiki/Google_Chrome) 1.0-versio julkaistiin **yhdestoista joulukuuta** vuonna 2008. [Toisen selainsodan](https://en.wikipedia.org/wiki/Browser_wars#Second_browser_war_(2004%E2%80%932017)) ratkaisevan taistelun voidaan katsoa alkaneen tästä päivästä.

Kun kenties seisomme tekoälyhuuman lietsoman kolmannen selainsodan kynnyksellä, on hyvä hiljentyä takkatulen äärelle katsomaan taaksepäin. Chromen monopolistisesti hallitsema markkina muistuttaa osin aika paljonkin Internet Explorerin hallitsemaa aikaisempaa monopolistista markkinaa.

Selainsota. Selainsota ei koskaan muutu.

* [Wikipedia: Browser Wars](https://en.wikipedia.org/wiki/Browser_wars)
* [Browser wars are back with a vengeance](https://fortune.com/2025/10/22/ai-browser-wars-agents-google-perplexity-opera-comet-neon-gemini/)
`
    },
    {
      type: "youtube",
      id: "K9G0rmPh6Wo",
      caption: "selainten markkinaosuudet kautta aikojen"
    },
    {
      type: "youtube",
      id: "LOWOLJci8d8",
      caption: "Netscape Navigatorin nousu ja tuho"
    },
    {
      type: "youtube",
      id: "JZIR4NM-5ig",
      caption: "dokkari selainsodista"
    }
  ]
};
