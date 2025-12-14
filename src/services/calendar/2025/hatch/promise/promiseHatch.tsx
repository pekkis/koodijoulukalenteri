import { HatchDataWithoutDay } from "@/services/hatch";

import image from "./promise.webp";

export const promiseHatch: HatchDataWithoutDay = {
  title: "Lupaus paremmasta",
  image: {
    src: image,
    alt: "Antropomorfinen JavaScript-promise-maallikkosaarnaaja lupailee parempaa tulevaisuutta. Hän lupaa (Promise.try) yrittää parhaansa ja resolvata (Promise.withResolvers) jutut parhaan kykynsä mukaan!"
  },
  content: [
    {
      type: "markdown",
      text: `
Muistan kun kuulin [promiseista](https://en.wikipedia.org/wiki/Futures_and_promises) ensimmäisen kerran. Olin ihan äimän käkenä ja pihalla kuin lumiukko koko jutusta.

Tämän täytyi olla joskus ennen [jQuery.deferredin](https://api.jquery.com/category/deferred-object/) julkaisua, vuonna 2009 ehkä! Edistyneemmät kollegat alkoivat puhua [Promises/A+ speksistä](https://promisesaplus.com/), ja koodeissa vilahtelivat [Q](https://github.com/kriskowal/q), [RSVP.js](https://github.com/tildeio/rsvp.js), [when](https://github.com/cujojs/when), ja lopulta [Bluebird](https://github.com/petkaantonov/bluebird). Hyviä aikoja!

Promise-kirjastot lakkasivat olemasta merkityksellisiä [natiivin promisen](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) ilmestyttyä selaimiin 2014-2015 ja [Internet Explorerin](https://en.wikipedia.org/wiki/Internet_Explorer) kadottua historian hämäriin.

Vaikken näitä kirjastoja kaipaakaan kuin korkeintaan nostalgiamielessä, niissä oli puolensa. Selaimen omalla promisella on kestänyt vuosikymmenen verran saavuttaa käyttömukavuuden taso, joka parhaisiin custom-kirjastoihin oli aikanaan leivottu sisään.

Vuoden 2024 [Promise.withResolvers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/withResolvers) ja vuoden 2025 [Promise.try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/try) ovat olleet sellaisia parannuksia, että arkikoodikin on keksinyt niille käyttöä!

* [MDN: Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* [MDN: Promise.withResolvers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/withResolvers)
* [MDN: Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/try)
`
    }
  ]
};
