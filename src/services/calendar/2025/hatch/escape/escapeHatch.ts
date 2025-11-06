import { HatchDataWithoutDay } from "@/services/hatch";
import image from "./demon-santa.jpeg";
import { EscapeHatchContent } from "./EscapeHatchContent";

export const escapeHatch: HatchDataWithoutDay = {
  title: "Pukki on ankara, muttei armoton",
  image: { src: image, alt: "Karmiva pahalaisjoulupukki" },

  content: [
    {
      type: "markdown",
      text: `Katso, kuinka syvälle rappioon ja pohjattomiin kadotuksen syövereihin ennenaikainen kalenteriluukkujen avaaminen on johtanut sinut. Vieläkö olet pelastettavissa?`
    },
    {
      type: "jsx",
      Component: EscapeHatchContent
    }
  ]
};
