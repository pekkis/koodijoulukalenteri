import { HatchDataWithoutDay } from "@/services/hatch";
import image from "./kontrahti.webp";
import { EscapeHatchContent } from "./EscapeHatchContent";

export const escapeHatch: HatchDataWithoutDay = {
  title: "Pukki on ankara, muttei armoton",
  image: { src: image, alt: "Sopimus paholaisen kanssa pelastaa tuhmurin'" },

  content: [
    {
      type: "markdown",
      text: `Tuhmuutesi on saavuttanut mittaluokan, josta ei ole paluuta. Jos sinulle oli joskus tarjolla armoa, nyt on auttamatta liian myöhäistä.

Sielusi on musta, musta kuin... musta aukko. Voit yhtä hyvin myydä sen, mikä on peruuttamattomasti menetetty. Ehkä pelastuksesi on löydettävissä pohjattomasta pahuudesta.`
    },
    {
      type: "jsx",
      Component: EscapeHatchContent
    }
  ]
};
