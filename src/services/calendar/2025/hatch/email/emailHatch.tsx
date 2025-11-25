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
Väittävät, että kaikista webbikoodauksen alalajeista [HTML-sähköpostien](https://en.wikipedia.org/wiki/HTML_email) lähetys on muuttunut kahdessakymmenessä vuodessa vähiten. Se oli ripulia vuoden 2008 holleilla, kun sitä viimeksi muistan tehneeni, ja on ilmeisesti vieläkin!

Tämä ei tarkoita, etteikö HTML-sähköposteja voisi renderöidä Reactilla, ihan niin kuin kaikkea muutakin. [React Email](https://react.email/) lupaa auttaa luomaan kauniita ja hyvin toimivia viestejä Reactilla, TypeScriptillä ja [Tailwindillä](https://tailwindcss.com/). Aah! Ooh!

Kirjaston takana on [Resend](https://resend.com/)-niminen paja, joka - yllätys yllätys - lähettelee ja manageroi sähköposteja ja postituslistoja. Se on oikein hyvänoloinen palvelu, eikä siis yllättävää, että tämä parivaljakko toimii hyvin yhdessä.

Alla olevasta lomakkeesta voit lähettää itsellesi tai ~~vihamiehellesi~~ ystävällesi Koodijoulukalenterin ruman mainosspämmin, jonka tein näillä kätösillä ja vekottimilla juuri äsken. Voi pojat, kuinka joku ilahtuukaan, kun postilaatikko kilahtaa!
`
    },
    { type: "jsx", Component: Email }
  ]
};
