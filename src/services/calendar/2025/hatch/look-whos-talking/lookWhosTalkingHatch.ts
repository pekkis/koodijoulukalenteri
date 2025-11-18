import { HatchDataWithoutDay } from "@/services/hatch";
import image from "./look-whos-talking.webp";
import { SpeechApiExample } from "@/services/calendar/2025/hatch/look-whos-talking/SpeechApiExample";

export const lookWhosTalkingHatch: HatchDataWithoutDay = {
  title: "Hei, kuka puhuu",
  image: {
    src: image,
    alt: "Antropomorfiset selaimet (Chrome, Firefox, Safari) puhuvat ja kuuntelevat"
  },

  content: [
    {
      type: "markdown",
      text: `
Selaimet ovat täynnä outoja ja yllättäviä rajapintoja, joita pääsee "oikeassa" työssä hyödyntämään harvoin.

Yksi suosikeistani, eikä edes kovin uusi sellainen, on puherajapinta. Sen avulla selaimet osaavat sekä tunnistaa että tuottaa puhetta, vaihtelevalla menestyksellä. Kokeile vaikka!
`
    },
    {
      type: "jsx",
      Component: SpeechApiExample
    },
    {
      type: "markdown",
      text: `
* [MDN: Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
`
    }
  ]
};
