import { HatchDataWithoutDay } from "@/services/hatch";
import image from "./ellison.webp";
import { EscapeHatchContent } from "./EscapeHatchContent";

export const escapeHatch: HatchDataWithoutDay = {
  title: "Kaikki toivo on mennyttä",
  image: {
    src: image,
    alt: "Vain sopimus paholaisen kanssa voi pelastaa näin tuhman!"
  },

  content: [
    {
      type: "markdown",
      text: `Tuhmuutesi on saavuttanut mittaluokan, josta ei ole paluuta. Jos sinulle olikin joskus tarjolla armoa, nyt on liian myöhäistä.

Omatuntosi on musta, musta kuin... musta aukko. Voit yhtä hyvin myydä paholaiselle sen kuivan korpun, joka joskus oli sielusi.`
    },
    {
      type: "jsx",
      Component: EscapeHatchContent
    }
  ]
};
