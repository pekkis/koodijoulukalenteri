import { HatchDataWithoutDay } from "@/services/hatch";

import next from "./apple-next.jpeg";

const nextHatch: HatchDataWithoutDay = {
  title: "NeXT ❤️ Apple",
  image: {
    src: next,
    alt: ""
  },
  content: [
    {
      type: "markdown",
      text: `Joulukuun 20. päivänä vuonna 1996 [Apple Computer](https://en.wikipedia.org/wiki/Apple_Inc.) ilmoitti aikovansa ostaa [NeXTin](https://en.wikipedia.org/wiki/NeXT).

NeXT oli firma, jonka [Steve Jobs](https://en.wikipedia.org/wiki/Steve_Jobs) oli perustanut vuonna 1985, kun hänet oli potkittu ulos Applen johdosta. NeXTin työasemat olivat törkykalliita, mutta hienoja, ja masiinoiden käyttöjärjestelmä, [NeXTSTEP](https://en.wikipedia.org/wiki/NeXTSTEP), oli vuosia aikaansa edellä.

Muistan, kuinka haaveilin lapsena NeXTistä lukiessani siitä Mikrobitin sivuilta. [Sir Tim Berners-Leen](https://en.wikipedia.org/wiki/Tim_Berners-Lee) ei tarvinnut haaveilla, koska Cernissä näitä ihmevehkeitä oli. Miekkonen kehittikin NeXT-koneella [World Wide Webin](https://en.wikipedia.org/wiki/World_Wide_Web) ensimmäisen version. Myös Doom ja Quake kehitettiin NeXTillä.

Jobsista tuli yrityskaupan myötä Applen neuvonantaja, mutta pian hän oli jo väliaikainen toimitusjohtaja, ja antanut potkut kaikille mielestään idiooteille - etenkin jokaiselle, joka oli ollut antamassa hänelle itselleen potkuja.

Loppu onkin historiaa. Stevestä tuli pomo, NextSTEPistä tuli [Mac OS X](https://en.wikipedia.org/wiki/MacOS), ja Applesta tuli vähän muutakin kuin tietokonefirma.`
    }
  ]
};

export default nextHatch;
