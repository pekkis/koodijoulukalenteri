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

Viimeksi tänään pohdin ihan samaa kysymystä, enkä juuri ole seitsemässä vuodessa päässyt eteenpäin. [Styled Components](https://styled-components.com/), [Emotion](https://emotion.sh/) ja muut ajonaikaiset tyylikirjastot tuntuivat tavallaan hyviltä, mutta vain puoliksi, ja ne osoittautuivat ansaksi anti-hydraatio-liikkeen aikakaudella.

Tyylittäminen paljailla CSS-moduleilla on paljon parempi vaihtoehto kuin vuonna 2016, koska CSS alustana on kehittynyt niin paljon. [PostCSS:llä](https://postcss.org/) ja kumppaneilla on silti edelleen paikkansa. Ylipäätään CSS-lähtöinen tapa tuntuu aina toimivan ilman säätöä, mutta sitten toisaalta, tyyppiturvallisuus puuttuu.

[Tailwind](https://tailwindcss.com/) ei ole koskaan herättänyt itsessäni wau-efektiä, mutta pitäisi joskus sukeltaa siihen, että osaisin viisastella paremmin.

Joulukalenteri on tyylitelty [Vanilla Extract](https://vanilla-extract.style/)-kirjastolla, joka edustaa runtimettömiä CSS-in-JS-tunkkeja. Tämä maailma pyrkii yhdistämään CSS:n ja TypeScriptin parhaat puolet, ja vetoaa meikäläiseen ajatuksellisesti. Lisätunkkaukselta ja buildiputkien säädöltä ei kyllä välty.

Kalenteriluukkua ajatellen sopivasti Meta julkaisi juuri äsken samaa ideologiaa edustavan [StyleX](https://stylexjs.com/)-kirjaston, jonka otan heti kokeiluun. Jos se riittää Facebookille ja Instagramille ja Whatsappille, se varmaankin riittää minulle. [PandaCSS](https://pandacss.io/) on kolmas vaihtoehto tästä koulukunnasta.

Eksoottisempaa vaihtoehtoa kaipaaville julkaistiin ihan hetki sitten [CSS Hooks](https://css-hooks.com/), johon en siihenkään ole ehtinyt vielä syventyä. Aion kyllä, ihan näillä näppäimillä.
`
    }
  ]
};

export default stylingHatch;
