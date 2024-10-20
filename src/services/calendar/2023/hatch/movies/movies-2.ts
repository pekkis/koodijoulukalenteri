import { HatchDataWithoutDay } from "@/services/hatch";

import reptilian from "./reptilian.jpeg";

const movies2Hatch: HatchDataWithoutDay = {
  title: "2000-luvun alun koodileffoja",
  image: {
    src: reptilian,
    alt: "Elokuvajuliste, jossa liskoihminen Mark Reptilianusberg esittelee kansalle sosiaalisen median saittiaan"
  },
  content: [
    {
      type: "markdown",
      text: `2000-luvullakin on tehty paljon hyviä koodileffoja. Tässä joitakin omia suosikkejani suunnilleen ensimmäiseltä puolikkaalta tätä vuosituhatta!`
    },
    {
      type: "youtube",
      id: "lB95KLmpLR4",
      caption:
        "The Social Network (2008) on liikuttava kasvutarina reptiliaanista, joka oppii matkimaan ihmistä, koodaamaan PHP:llä, ja perustaa menestyksekkään veppifirman!"
    },
    {
      type: "youtube",
      id: "lFwtY1bxlNc",
      caption:
        "Swordfish (2001) tavoittaa elähdyttävällä tavalla 2000-luvun alun teknobuumin. Tältä tuntui olla töissä Riot-E:ssä tai ajaa keltainen Lamborghini täysillä kolera-altaaseen matkalla jonottamaan Saunalahden serverin osakkeita purevassa syysviimassa!"
    },
    {
      type: "youtube",
      id: "NkTrG-gpIzE",
      caption:
        "Source Code (2011) on nimeään myöten todellinen koodarin koodarileffa, ja hyvä leffa onkin. Moonin ja tämän jälkeen odotin David Bowien pojalta hienoa uraa, mutta ei se oikein lähtenyt lentoon."
    },
    {
      type: "youtube",
      id: "d4RiUy23e9s",
      caption:
        "Tron: Legacy (2010) on yksi kuvallisesti ja äänellisesti siisteimmistä koodarileffoista. Tykkään kaikista Kosinskin leffoista, koska ne ovat perin nättejä ja kivan kuuloisia!"
    },
    {
      type: "youtube",
      id: "vf4r5q8-aWo",
      caption:
        "Wreck-It Ralph (2012) on yksi suosikkipiirretyistäni kautta aikojen. Se on myös hyvä peli- ja siten myös koodileffa! Tälle tehtiin jatko-osakin, se on ihan OK muttei lainkaan niin muistettava kuin alkuperäinen."
    },
    {
      type: "youtube",
      id: "dJTU48_yghs",
      caption:
        "Her (2013) on herkkä ja kaunis ihmisen ja tekoälyn välinen rakkaustarina."
    }
  ]
};

export default movies2Hatch;
