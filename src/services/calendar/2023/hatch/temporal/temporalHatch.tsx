import { HatchDataWithoutDay } from "@/services/hatch";

import temporal from "@/assets/temporal.jpeg";

const temporalHatch: HatchDataWithoutDay = {
  title: "Aikamoisia aikakirjastoja",
  image: {
    src: temporal,
    alt: "Antropomorfiset kellot keskustelemassa ajasta Greenwichin meridiaanilla."
  },
  content: [
    {
      type: "markdown",
      text: `JavaScriptin aikojen ja päivämäärien hallinta [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)-pökäleellä on aina ollut täysin holtitonta. Se johtuu siitä, että JavaScriptin toteutus perustuu Javan ensimmäisen betaversion bugiseen läjään, josta Java luopui joskus 1990-luvun puolella.

Ei siis ihme, että niin kauan kuin muistan, on ollut pakko käyttää kolmansien osapuolten kirjastoja. Ja koska aika on aika vaikea asia mallintaa - aikavyöhykkeet esimerkiksi eivät ole kiinteitä vyöhykkeitä vaan historiallinen tietokanta ajasta eri aikakausilla - kaikissa kirjastoissa on omat kommervenkkinsä.

Uusi sisäänrakennettu [Temporal](https://tc39.es/proposal-temporal/docs/index.html)-toteutus on tulossa, mutta se on ollut tulossa viimeiset kymmenen vuotta, joten saapa nähdä. Siihen saakka käytetään jotakin muuta.

* [Moment](https://momentjs.com/) oli pitkään "se" kirjasto huolimatta mutaabeliudestaan ja muista ongelmistaan. Onneksi ei enää vuosiin.
* [Luxon](https://moment.github.io/luxon/) on Momentin tekijöiden uusi näkemys aiheesta. Mielestäni siinä on kiva rajapinta ja se on toiminut OK. Koodikalenteri käyttää Luxonia.
* [DayJS](https://day.js.org/) on kamala, koodinlaadullisesti jopa vaarallinen. Vältä kuin julkisia käymälöitä punatautiepidemian aikana.
* [Date-fns](https://date-fns.org/) on funktionaalisen ihmisen valinta. Se pyrkii hyödyntämään natiivia datea, mikä rajoittaa kirjastoa.
* [js-Joda](https://js-joda.github.io/js-joda/) on hyvän Java-aikakirjaston käännös jäsälle. Olen kuullut tästä hyvää, mutta en ole itse perehtynyt.
* [React Spectrum Internationalized](https://react-spectrum.adobe.com/internationalized/date/index.html) lupaa olevansa lähellä tulevaa Temporalia. Hieno lupaus, jos pitää paikkansa.`
    }
  ]
};

export default temporalHatch;
