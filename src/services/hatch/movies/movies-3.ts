import { HatchDataWithoutDay } from "@/services/hatch";

import coolHackers from "@/assets/arska.jpeg";

const movies3Hatch: HatchDataWithoutDay = {
  title: "1980-luvun koodileffoja",
  image: {
    src: coolHackers,
    alt: "Elokuvajuliste, jossa coolit 1980-luvun juppinörtit ajelevat Ferrari Testarossalla ja pistävät koodaten"
  },
  content: [
    {
      type: "markdown",
      text: `Jo 1980-luvulla Hollywoodin visionäärit näkivät viisaudessaan, mihin koodi on menossa. Kotimikrojen vuosikymmenellä tehtiin monia koodileffojen klassikkoja!`
    },
    {
      type: "youtube",
      id: "hMT8tRrEMC4",
      caption:
        "Olin neljävuotias Tronin ilmestyessä, mutta muistan kyllä hämärästi, että sen erikoisefekteistä kohkattiin lapsuudessani. Elokuvaharrastuksen myöhemmin löytäneenä osaan hyvin kuvitella, millainen vaikutus leffalla on ollut aikalaiseen."
    },
    {
      type: "youtube",
      id: "TQUsLAAZuhU",
      caption:
        "Lapsuudestani puheen ollen, Wargames-elokuvassa pääsemme tietsikoiden ohella jänskättämään aikakauden suurinta mörköä: ydinsotaa. Ferriksen kannattaisi suosiolla vaan lintsata koulusta eikä hakkeroida sotilastietokoneita."
    },
    {
      type: "youtube",
      id: "kIZH5TKnEeg",
      caption:
        "Toisin kuin nykyään, kahdeksankymmentäluvulla nörtit osattiin kuvailla sopivan inhorealistisella tavalla. Nörttien kosto-komedia on kestänyt aikaa poikkeuksellisen hyvin, ja kuuluu jokaisen alalle haikailevan pakollisten katsottavien listalle."
    },
    {
      type: "youtube",
      id: "k64P4l2Wmeg",
      caption:
        "Tuntematon b-leffojen ohjaaja James Cameron teki vuonna 1984 elokuvan Terminator. Tyylipuhdasta scifiä vai visionäärin varhainen varoitus tekoälyn vaaroista? Sano sinä. Tälle tehtiin ysärillä tymäkkä jatko-osa, jota en laittanut sen vuosikymmenen listalle ihan siksi, että kasarilista iskisi tykimmin."
    }
  ]
};

export default movies3Hatch;
