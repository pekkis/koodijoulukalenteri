import { HatchDataWithoutDay } from "@/services/hatch";

import image from "./toons.webp";
import { SuperJson } from "@/services/calendar/2025/hatch/tight-data/SuperJson";

export const tightDataHatch: HatchDataWithoutDay = {
  title: "Tiukkaa dataa",
  image: {
    src: image,
    alt: "Placeholder-kuva"
  },
  content: [
    {
      type: "markdown",
      text: `
Sanovat, että tekoäly muuttaa kaiken. Ilmeisesti se muuttaa jopa ikiaikaiset tiedonvälityksen muodot. [JSON](https://www.json.org/json-en.html) on kaiketi liian kallista kielimalleille, kosolti mystisiä tokeneita valuu kankkulan kaivoon!

Törmäsin sanaan [TOON](https://github.com/toon-format/toon) ensimmäistä kertaa marraskuun puolivälissä. Datatiedemies-tuttavani olivat jo kuulleet siitä. Kuulostaa jännittävältä!

Jos et ole vielä valmis luopumaan uskollisesta legacy-JSONistasi, mutta haluat terästää sitä, [SuperJSON](https://github.com/flightcontrolhq/superjson) voi olla valintasi. Se on iskenyt silmilleni monta kertaa tämän vuoden aikana. Itsekin muistan monta kertaa ärsyyntyneeni köpöstä serialisoinnista perus-jsonissa.
`
    },
    {
      type: "jsx",
      Component: SuperJson
    },
    {
      type: "markdown",
      text: `
Tarkemmin ajateltuna, ehkä meidän olisi hyvä unohtaa kaikki ohimenevät vibekoodaus- ja web 2.0-hömpötykset. Kirjain X sanassa [AJAX](https://en.wikipedia.org/wiki/Ajax_(programming)) ei näetsen tule JSONista. Se tulee [XML:stä](https://en.wikipedia.org/wiki/XML). Se oli hyvä, luotettava, luettava ja sopivan verböösi muoto mille tahansa tiedolle!
`
    }
  ]
};
