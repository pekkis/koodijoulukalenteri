import { HatchDataWithoutDay } from "@/services/hatch";

import valueForSociety from "./value-for-society.jpeg";

const valueForLifeHatch: HatchDataWithoutDay = {
  title: "Koodilaulut",
  image: {
    src: valueForSociety,
    alt: "Tieto-yrityksen logo"
  },
  content: [
    {
      type: "markdown",
      text: `Koodilaulut kuuluvat erottamattomasti joulunviettoon. Ne tarjoavat mittaamattomasti arvoa yhteiskunnalle ja elämälle. Minkään sortin kaksinaisuus ei ole koodilauluissa optio!`
    },
    {
      type: "youtube",
      id: "IFeKV_bmb9M",
      caption: "Value for Life on todellinen koodilauluklassikko!"
    },

    {
      type: "markdown",
      text: `Olin Value for Lifen "ilmestyessä" mukana tekemässä Intelligent Building - älytoimistoplattaa Tiedon piikkiin. Tunkkasin softaamme pääsiäismunan, missä kaikki ruudut saa tuuttaamaan Value for Lifeä eetteriin, mutta muiden tiimin jäsenten mielestä ei ollut hyvä idea mergettää tätä bränchiä masteriin.

Hitusen myötähäpeää aiheuttava laulu? Ehkäpä. Silti hieno hauska ja jotain josta olla yrityksenä ylpeä? Taatusti! Corporate-laulut kunniaan!`
    },

    {
      type: "youtube",
      id: "cBQUXHejrfY",
      caption:
        "Tukkari-reggae laskettakoon koodilauluksi, koska voimme koodareina olla ylpeitä Apotti-hankkeesta. Kuka sanoo, ettei halvalla saa muka hyvää?"
    },
    {
      type: "youtube",
      id: "3Jym9rfQgec",
      caption:
        "Jos ei ennen tätä biisiä ole tehnyt mieli Reaktorille duuniin, niin kohta kyllä tekee!"
    }
  ]
};

export default valueForLifeHatch;
