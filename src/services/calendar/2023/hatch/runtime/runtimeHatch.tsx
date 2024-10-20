import { HatchDataWithoutDay } from "@/services/hatch";

import runtime from "./runtime.jpeg";

const runtimeHatch: HatchDataWithoutDay = {
  title: "Runtime",
  image: {
    src: runtime,
    alt: "Antropomorfinen pulskan puoleinen JavaScript-ohjelmointi juoksee juoksumatolla."
  },
  content: [
    {
      type: "markdown",
      text: `Kun tekee webbiä, tulee väkisinkin tunkattua paljon [JavaScriptiä](https://en.wikipedia.org/wiki/JavaScript). Onhan se ainoa kieli, mitä webbiselaimet suoraan syövät.

Jäsä on siitä mielenkiintoinen kieli, että sen kyvykkyys riippuu paljon siitä, missä ympäristössä sitä ajetaan. Selaimessa on DOM, serverillä tiedostojärjestelmä, ja niin edespäin.

Alunperin JS oli selaimeen tehty ohjelmointilelu, jonka piti poistua takavasemmalle kun Java on valmis korvaamaan sen, mutta eihän siinä käynyt laisinkaan niin kuin oli suunniteltu.

Vuonna 2009 [Ryan Dahl](https://en.wikipedia.org/wiki/Ryan_Dahl)-niminen sankari repi sydämen irti Googlen V8-jäsämoottorista ja laittoi pökäleen pyörimään palvelimelle. Näin syntyi [Node.js](https://en.wikipedia.org/wiki/Node.js), jolla JavaScriptiä on enemmän tai vähemmän onnellisesti ajeltu siitä lähtien.

Dahl ei ollut kaikilta osin tyytyväinen luomukseensa. Vuonna 2018 hän julkaisi [Denon](https://en.wikipedia.org/wiki/Deno_(software)), päivitetyn näkemyksensä samasta aiheesta. Kuluneena vuonna 2023 paljon huomiota sai [Bun](https://en.wikipedia.org/wiki/Bun_(software)), uusi JavaScript-ajoympäristö, joka lupaa olla nopea.

Sekä Bunin, Denon että kaikkien muidenkin markkinoille punkevien uusien tunkkien "ongelma" on massiivinen määrä Node.js:lle tehtyä koodia, jota niiden "pitäisi" taaksepäin yhteensopivasti tukea, jos ne haluavat, että massat ja enterprise-hankkeet aikuisten oikeasti siirtyvät käyttämään jotain uutta.

* [Node.js](https://nodejs.org/)
* [Deno](https://deno.com/)
* [Bun](https://bun.sh/)
* [Awesome JS Runtimes](https://github.com/errilaz/awesome-js-runtimes)

`
    }
  ]
};

export default runtimeHatch;
