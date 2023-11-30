import { HatchDataWithoutDay } from "@/services/hatch";

import trinity from "@/assets/trinity.webp";

const movies: HatchDataWithoutDay = {
  title: "Virittäydy kalenterin tunnelmaan koodileffoilla",
  image: {
    src: trinity,
    alt: "Viileä hakkerityttö kräkkää pahisten salasanat kymmenellä näytöllä samaan aikaan"
  },
  content: [
    {
      type: "markdown",
      text: `Koodaaminen on ihan **sairaan siistiä**. Siksi koodareista ja muista "alan tyypeistä" tehdään koko ajan niin paljon leffojakin!

Tässä muutaman elokuvan vaatimaton pintaraapaisu. Parempi katsoa ne heti, ettei myöhemmistä luukuista tulviva *tosielämän* toiminnantäyteinen viileys räjäytä tajuntaasi huomisesta alkaen!`
    },
    {
      type: "youtube",
      id: "nUEQNVV3Gfs",
      caption:
        "Matrix on yksi parhaista koskaan tehdyistä koodarielokuvista. Harmi, ettei sille koskaan tehty jatko-osaa, koska tätä reseptiä olisi täysin mahdotonta sössiä!"
    },
    {
      type: "youtube",
      id: "LYwVkek5OMM",
      caption:
        "The Net on epäilemättä realistisin kuvaelma omasta työstäni ja työssä kohtaamistani vaaroista."
    },
    {
      type: "youtube",
      id: "sNExF5WYMaA",
      caption:
        "Ex Machina, mielenkiintoinen tutkielma teköälystä, ei ole vuonna 2023 ainakaan vähemmän ajankohtainen kuin ilmestymisvuonnaan 2015."
    },

    {
      type: "youtube",
      id: "lB95KLmpLR4",
      caption:
        "The Social Network on liikuttava tarina reptiliaanista, joka oppii matkimaan ihmistä, koodaamaan PHP:llä, ja perustaa suht' menestyksekkään veppifirman!"
    },
    {
      type: "youtube",
      id: "lFwtY1bxlNc",
      caption:
        "Swordfish tavoittaa elähdyttävällä tavalla 2000-luvun alun teknobuumin. Tältä tuntui olla töissä Riot-E:ssä tai jonottaa Saunalahden serverin osakkeita purevassa syysviimassa!"
    },
    {
      type: "youtube",
      id: "_Gr2zXuEBL0",
      caption:
        "Kimi meni kaikilta ohi, koska korona. Se on ihan kiva pienimuotoinen koodarileffa, joka olisi ansainnut teatterilevityksen!"
    },
    {
      type: "youtube",
      id: "piI9vJ9-UZ0",
      caption:
        "Hackers näyttää webbiscenen juuri sellaisena kuin se oli aivan alussa. Harmittaa, että itse missasin ihan alun huuman ja kiiman!"
    },
    {
      type: "youtube",
      id: "G_XRqJV2zdk",
      caption:
        "Tykkäsin Sneakersista teininä. Pitäisi joskus katsoa se uudelleen aikuisena, koska muistan siitä tosi vähän. Todellinen vanhan liiton näyttelijöiden koodarileffa!"
    },
    {
      type: "youtube",
      id: "jZ1ZDlLImF8",
      caption:
        "Blackhat on ainoa leffa, joka *oikeasti* tavoittaa sen, kuinka tylsää koodauksen katsominen sivusta voi olla. Valitsin sen listalle vain, koska Chris Hemsworth on tosielämän koodarismiehen prototyyppi, ja näyttelee minua kun minusta tehdään koodarielokuva!"
    }
  ]
};

export default movies;
