import { HatchDataWithoutDay } from "@/services/hatch";

import motherOfAllDemos from "@/assets/mother-of-demos.jpeg";

const motherOfAllDemosHatch: HatchDataWithoutDay = {
  title: "Kaikkien demojen äiti",
  image: {
    src: motherOfAllDemos,
    alt: "Douglas Engelbart pitää mahtiesitelmää, jota myöhemmin aletaan kutsua kaikkien demojen äidiksi. Maailma kuuntelee."
  },
  content: [
    {
      type: "markdown",
      text: `[Douglas Engelbart](https://en.wikipedia.org/wiki/Douglas_Engelbart) piti joulukuun yhdeksäntenä päivänä vuonna 1968 [demon](https://en.wikipedia.org/wiki/The_Mother_of_All_Demos). Sankarimme esitteli presiksessään ensimmäistä kertaa muun muassa hiiren, graafisen käyttöliittymän, tekstinkäsittelyohjelman, videopuhelun, koodin versiohallintatyökalun, kollaboratiivisen editorin ja hypertekstin.

Myöhemmin Engelbartin vaatimatonta pikku esitystä alettiin kutsua kaikkien demojen äidiksi, ymmärrettävistä syistä. Engelbart kumppaneineen olivat "vähän" edellä aikaansa, ja hänen demossaan esitellyt ideat löysivät ajan kanssa tiensä esimerkiksi Applen Macintosh-tietokoneisiin, Microsoftin Windows-käyttöjärjestelmiin ja World Wide Webiin.`
    },
    {
      type: "youtube",
      id: "yJDv-zdhzMY",
      caption: "Kaikkien demojen äiti vuodelta 1968"
    }
  ]
};

export default motherOfAllDemosHatch;
