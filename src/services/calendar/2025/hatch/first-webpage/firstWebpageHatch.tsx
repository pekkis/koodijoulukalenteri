import { HatchDataWithoutDay } from "@/services/hatch";

import image from "./first-webpage.webp";

export const firstWebpageHatch: HatchDataWithoutDay = {
  title: "Ensimmäinen webbisivu",
  image: {
    src: image,
    alt: "Tim Berners-Lee ystävineen juhlivat Cernissä julkaistuaan ensimmäisen webbisivun 6.8.1991! Pöydällä Berners-Leen NextCube jolla ensimmäinen saitti hyrskytti!"
  },
  content: [
    {
      type: "markdown",
      text: `
**Kuudentena** päivänä elokuuta, vuonna 1991, [Tim Berners-Lee](https://en.wikipedia.org/wiki/Tim_Berners-Lee) julkaisi [ensimmäisen webbisivun](https://info.cern.ch/). Livetys meni hyvin, saitti ei kaatunut.

Ennen rellua Berners-Lee oli keksinyt [HTTP-protollan](https://en.wikipedia.org/wiki/HTTP), [URLin](https://en.wikipedia.org/wiki/URL) ja [HTML:n](https://en.wikipedia.org/wiki/HTML) sekä tietysti koodannut ensimmäisen [HTTP-serverin](https://en.wikipedia.org/wiki/CERN_httpd) ja [webbiselaimen](https://en.wikipedia.org/wiki/WorldWideWeb). Sanalla sanoen, sir Tim on _OG webbikehittäjä!_

[CERN](https://home.cern/), joka Berners-Leen toiveesta [luovutti webin public domainiin](https://cds.cern.ch/record/1164399/) koko ihmiskunnan hyväksi vuonna 1993, on museoinut webin historian todella hienosti ja kunnioittavasti. Kannattaa käydä ihailemassa!

* [alkuperäinen webbisivu](https://info.cern.ch/hypertext/WWW/TheProject.html)
* [alkuperäinen webbisivu tekstimoodissa](https://line-mode.cern.ch/www/hypertext/WWW/TheProject.html)
* [The birth of the Web](https://home.web.cern.ch/science/computing/birth-web)
`
    },
    {
      type: "youtube",
      id: "GUrDI6OkJfU",
      caption: "Lyhyesti Tim Berners-Leestä"
    }
  ]
};
