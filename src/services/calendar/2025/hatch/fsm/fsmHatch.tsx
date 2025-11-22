import { HatchDataWithoutDay } from "@/services/hatch";

import image from "./fsm.webp";

export const fsmHatch: HatchDataWithoutDay = {
  title: "Äärelliset automaatit",
  image: {
    src: image,
    alt: "Hyvää tarkoittava, mutta harhainen koodari on koodannut sovelluksen ja käyttöliittymän tilakoneella (äärellinen automaatti). Sankarimme on itsekin kauhuissaan himmelistä, jonka näkee ruudullaan."
  },
  content: [
    {
      type: "markdown",
      text: `
Onko KICS (Keep It Complex, Stupid) aiheuttanut tykytyksiä? Oletko jo siivonnut [Bacon.js:n]() ja muun reaktiivisen ryönän enterprise-hankkeistasi? [Rimmelöinti](https://rimmel.js.org/) tai [harmajointi](https://github.com/raimohanska/harmaja) ei kiinnostele? Ovatko paskasti tehdyt [Redux-saaga-himmelit](https://redux-saga.js.org/) jo nähty ja koettu? Olet jo puhdistanut [pitkät ja puhtaat funktioputket](https://ramdajs.com/) perusteellisesti koodipohjistasi?

Kyllä? Hyvä kuulla. Kaipaat siis _seuraavaa_ traumaperäistä stressihäiriötä teoriassa eleganteista, mutta käytännössä tuhoon johtavista niche-käytännöistä. Oi kuinka ihana kuulla, sallithan minun ojentaa auttavan käden!

Törmäsin taannoin [Zag](https://zagjs.com/)-kirjastoon, joka yhdistää [tilakoneet](https://fi.wikipedia.org/wiki/%C3%84%C3%A4rellinen_automaatti) ja komponenttikirjastot. Siitä palasivat välittömästi mieleeni [XState](https://xstate.js.org/) ja [Stately](https://stately.ai/), olen menneisyydessä pariinkin otteeseen tutkinut ja kokeillut niitä. Etenkin MHM:n uudelleenlämmittelyjen yhteydessä tilakone on ollut kiinnostava aihe.

"Normaalin" fronttikehityksen osalta saan äärellisiä tilakoneajatuksia pyöritellessäni kylmiä väreitä, enkä missään nimessä pelkästään hyvällä tavalla. Odotan mielenkiinnolla sitä päivää, kun törmään hankkeeseen, joka on sössitty ylläpitämiskelvottomaksi jonkin sortin tilakone-perversioilla!


* [Stately](https://stately.ai/)
* [Xstate](https://xstate.js.org/)
* [Zag](https://zagjs.com/)
* [SCXML](https://en.wikipedia.org/wiki/SCXML)
`
    },
    {
      type: "youtube",
      id: "2OiWs-h_M3A",
      caption: "Juutubetusta tilakoneista"
    }
  ]
};
