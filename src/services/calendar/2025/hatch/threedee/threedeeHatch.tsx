import { HatchDataWithoutDay } from "@/services/hatch";

import image from "./threedee.webp";
import { Threedee } from "@/services/calendar/2025/hatch/threedee/Threedee";

export const threedeeHatch: HatchDataWithoutDay = {
  title: "Kolmedee selaimessa",
  image: {
    src: image,
    alt: "Kolmedee-lahjapaketti pyöriskelee kuin väkkärä kaikkien neljän akselinsa ympäri."
  },
  content: [
    {
      type: "markdown",
      text: `Hämmästyn aina, kun näen jotain tosi hienoa kolmedeetä selaimessa. Mitään Paulin (tämä luukku on omistettu hänelle!) koodaamaa on mahdoton ylittää, mutta vähempikin riittää vaikutuksen tekemiseen, jos on 3D:n kanssa yhtä avuton kuin minä!

Viime vuonna ihailin Vercelin hienoa kolmiuloitteista, interaktiivista, fysiikkamoottorilla kuorrutettua konffalippua. Erityisen ihanaksi jutun teki se, että tekijät [kirjoittivat aiheesta kattavan blogipostauksen](https://vercel.com/blog/building-an-interactive-3d-event-badge-with-react-three-fiber), joka säilyy jälkipolville.
`
    },
    {
      type: "youtube",
      id: "oF2bDrRZuF4",
      caption: "Theo-sedän ihmettelyvideo Vercelin kolmedee-vercelöinnistä"
    },
    {
      type: "markdown",
      text: `Päätekniikkoina Vercelin mahtipökäleessä ovat [React](https://react.dev/), [Three.js](https://threejs.org/) ja [React-three-fiber](https://r3f.docs.pmnd.rs/getting-started/introduction). Tämä on siitä jännä yhdistelmä, että osaan _itsekin_ laittaa yksinkertaisen joulukuution pyörimään ruudulle. Katso vaikka. Mikä hämmästyttävä taidonnäyte. Vapise, Pauli!`
    },
    {
      type: "jsx",
      Component: Threedee
    }
  ]
};
