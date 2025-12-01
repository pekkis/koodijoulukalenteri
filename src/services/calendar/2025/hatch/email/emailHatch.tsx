import { HatchDataWithoutDay } from "@/services/hatch";

import image from "./email.webp";
import { Email } from "@/services/calendar/2025/hatch/email/Email";

export const emailHatch: HatchDataWithoutDay = {
  title: "Sähköpostia Reactilla",
  image: {
    src: image,
    alt: "Antropomorfinen React-hahmo kirjoittaa sähköpostia läppärillä"
  },
  content: [
    {
      type: "markdown",
      text: `
Väittävät, että [HTML-sähköpostien](https://en.wikipedia.org/wiki/HTML_email) lähetys on muuttunut kahdessakymmenessä vuodessa kaikista webbikoodauksen alalajeista vähiten. HTML, jota sähköpostiohjelmat söivät, oli oksettavaa ripulia vuoden 2008 holleilla, kun sitä viimeksi itse tein, ja on kai vieläkin!

Tämä ei tarkoita, etteikö HTML-sähköposteja voisi rendailla kätevästi Reactilla niin kuin kaiken muunkin. [React Email](https://react.email/) lupaa auttaa luomaan **kauniita** ja **hyvin toimivia** viestejä Reactilla, TypeScriptillä ja [Tailwindillä](https://tailwindcss.com/). Aah! Ooh!

Kirjaston takana on [Resend](https://resend.com/)-niminen paja, joka - yllätys yllätys - lähettelee sähköposteja ja manageroi postituslistoja. Tämä on oikein kätevän oloinen palvelu, josta olen kuullut hyvää, ja kirjasto ja palvelu toimivat tietysti keskenään tosi hyvin yhteen.

Alla olevasta lomakkeesta voit lähettää itsellesi tai ~~vihamiehellesi~~ ystävällesi Koodijoulukalenterin brutalistisen mainosspämmin, jonka koodasin äsken omilla kätösilläni ja juuri mainostamillani vekottimilla.

Hyvä tuli. Voi pojat, kuinka joku ilahtuukaan, kun postilaatikossa kohta kilahtaa!
`
    },
    { type: "jsx", Component: Email }
  ]
};
