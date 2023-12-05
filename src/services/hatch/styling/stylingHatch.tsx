import { HatchDataWithoutDay } from "@/services/hatch";

import styling from "@/assets/styling.jpeg";

const stylingHatch: HatchDataWithoutDay = {
  title: "Tyylitys Reactissa",
  image: {
    src: styling,
    alt: "Tyttö tyylittää React-saittiaan kaikilla mahdollisilla kirjastoilla. Kaikki ratkaisut ovat yhtä paskoja."
  },
  content: [
    {
      type: "markdown",
      text: `Kirjoitin vuonna 2016 [blogipostauksen CSS:n historiasta ja tulevaisuudesta](https://www.pekkis.eu/blogi/2016/10/18/css-n-lyhyt-historia). Pohdiskelen plokautuksen lopussa sitä, miten CSS istuu Reactiin, ja kuuluuko tulevaisuus JavaScript- vai CSS-pohjaiselle CSS:lle.

Viimeksi tänään pohdin ihan samaa kysymystä, enkä juuri ole päässyt sen kanssa eteenpäin. [Styled Components](https://styled-components.com/), [Emotion](https://emotion.sh/) ja muut ajonaikaiset kirjastot tuntuivat aluksi hyviltä, mutta nyt kun asiat siirtyvät takaisin serverille, ne olivatkin ansa.

Tyylittäminen pelkillä puhtailla CSS-moduleilla on paljon parempi vaihtoehto kuin vuonna 2016, koska CSS plattana on kehittynyt. [PostCSS:llä](https://postcss.org/) ja kumppaneilla on silti edelleen paikkansa. Ylipäätään tämä tapa tuntuu aina toimivan ilman säätöä ja lisätunkkausta, mutta sitten taas toisaalta, blergh.

Joulukalenteri on tyylitelty [Vanilla Extract](https://vanilla-extract.style/)-kirjastolla, joka edustaa runtimettömiä CSS-in-JS-tunkkeja. Tämä maailma pyrkii yhdistämään CSS:n ja TypeScriptin parhaat puolet, ja vetoaa meikäläiseen ajatuksellisesti. Mutta sitten taas, ekstratunkkausta. Aargh!`
    }
  ]
};

export default stylingHatch;
