import { HatchDataWithoutDay } from "@/services/hatch";

import tietoLogo from "@/assets/tieto-logo.svg";

const valueForLifeHatch: HatchDataWithoutDay = {
  title: "Koodijoululaulut",
  image: {
    src: tietoLogo,
    alt: "Tieto-yrityksen logo"
  },
  content: [
    {
      type: "markdown",
      text: `Koodilaulut kuuluvat erottamattomasti joulunviettoon. Ne tarjoavat mittaamattomasti arvoa yhteiskunnalle ja elämälle. Kaksinaisuus ei ole koodilauluissa millään tasolla optio!`
    },
    {
      type: "youtube",
      id: "IFeKV_bmb9M",
      caption: "Value for Life on todellinen koodilauluklassikko!"
    },

    {
      type: "markdown",
      text: `Tein Value for lifen "ilmestyessä" Intelligent Building-älytoimistoplattaa Tiedon piikkiin. Tunkkasin softaamme välittömästi pääsiäismunan, missä kaikki ruudut saa tuuttaamaan Value for Lifeä eetteriin, mutta muiden mielestä ei ollut hyvä idea mergettää bränchiä masteriin.

Hitusen myötähäpeää aiheuttava? Ehkäpä. Silti hieno ja jotain josta olla yrityksenä ylpeä? Taatusti! Corporate-laulut kunniaan!`
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
        "Jos ei ennen tätä biisiä ole tehnyt mieli Reaktorille duuniin, niin nyt kyllä tekee!"
    }
  ]
};

export default valueForLifeHatch;
