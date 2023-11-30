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
    }
  ]
};

export default movies;
