import { HatchDataWithoutDay } from "@/services/hatch";

import tunkki from "@/assets/tunkkaajat.jpeg";

const carjackHatch: HatchDataWithoutDay = {
  title: "Tunkki",
  image: {
    src: tunkki,
    alt: "Hitsin hieno oranssi tunkki"
  },
  content: [
    {
      type: "markdown",
      text: `Tänäkin vuonna tiedotusvälineet ovat uutisoineet hyvin menneistä ja lähes maaliin päässeistä IT-hankkeista!

Poliisin hienoa ja kuvauksen perusteella alusta asti tuhoon tuomittua [Vitja-järjestelmää raahattiin kivirekenä perässä 14 vuotta](https://www.iltalehti.fi/digiuutiset/a/b39990ec-db3b-42d4-a415-f6b393410f56), ennen kuin joku suoraselkäinen sinivuokko lopulta antoi rammalle tunkille armonlaukauksen virka-aseellaan.

[Helsingin kaupunki kehitteli omaa Wilmaa](https://www.hs.fi/kaupunki/art-2000009917641.html) 32 miljoonalla kaupungin asukkaiden eurolla, kunnes huomattiin, että koko tunkki on paitsi huono idea, myös mennyt peruuttamattomasti perseelleen huonon johtamisen takia.

Omaan parinkymmenen vuoden uraani mahtuu siihenkin monenlaisia tunkkeja. Karmeimmat viritykset, tai ainakin ne kammotukset, joita tajuntani ei blokkaa kokonaan jotta saan nukuttua öisin, muistan ikuisesti.

[The Daily WTF](https://thedailywtf.com/) on paikka, jossa olen käynyt vuosikymmeniä säännöllisen epäsäännöllisesti lukemassa muiden tunkeista. Omista tunkkailustani kirjoitan elämänkerrallisessa suurteoksessani "Hopeakettu muistelee", jonka viisi ensimmäistä osaa kattavat urani jännittävät alkuvuodet.

* [Osa 1: Laimea uhka](https://www.pekkis.eu/blogi/2017/04/10/hopeakettu-muistelee-osa-1-laimea-uhka)
* [Osa 2: Koodarin yökkäys](https://www.pekkis.eu/blogi/2017/04/17/hopeakettu-muistelee-osa-2-koodarin-yokkays)
* [Osa 3: Shitin kosto](https://www.pekkis.eu/blogi/2017/04/24/hopeakettu-muistelee-osa-3-shitin-kosto)
* [Osa 4: Uusi toimisto](https://www.pekkis.eu/blogi/2017/05/01/hopeakettu-muistelee-osa-4-uusi-toimisto)
* [Osa 5: Vuokraisännän vastaisku](https://www.pekkis.eu/blogi/2017/05/29/hopeakettu-muistelee-osa-5-vuokraisannan-vastaisku)`
    }
  ]
};

export default carjackHatch;
