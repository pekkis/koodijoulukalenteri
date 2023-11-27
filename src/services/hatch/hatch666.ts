import { HatchDataWithoutDay } from "../hatch";
import Hatch666Content from "./Hatch666Content";
import demonicSanta from "@/assets/demonic-santa.webp";

const hatch666: HatchDataWithoutDay = {
  title: "Pukki on ankara, muttei armoton",
  image: { src: demonicSanta, alt: "Karmiva pahalaisjoulupukki" },

  content: [
    {
      type: "markdown",
      text: `Katso, kuinka syvälle rappioon ja pohjattomiin kadotuksen syövereihin ennenaikainen kalenteriluukkujen avaaminen on johtanut sinut. Vieläkö olet pelastettavissa?`
    },
    {
      type: "jsx",
      Component: Hatch666Content
    }
  ]
};

export default hatch666;
