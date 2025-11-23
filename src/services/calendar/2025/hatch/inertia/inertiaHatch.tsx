import { HatchDataWithoutDay } from "@/services/hatch";

import image from "./inertia2.webp";

export const inertiaHatch: HatchDataWithoutDay = {
  title: "Moderni monoliitti",
  image: {
    src: image,
    alt: "Antropomorfinen PHP, Laravel ja React paiskaavat kättä. Kuvan taustalla moderni musta monoliitti"
  },
  content: [
    {
      type: "markdown",
      text: `
Modernit työkalut ovat ihania. En todellakaan haluaisi palata webbikehityksessä vuoteen 2005. En kuitenkaan voi sille mitään, että vaikka vertailu todellisuudessa onkin vähän höpsökkä, [RSC](https://react.dev/reference/rsc/server-components):n ympärillä leijailee tutuntuntuinen löyhkä, ihan kuin [PHP](https://www.php.net/) olisi _kuitenkin_ salaa tullut takaisin!

Mutta entäpä jos PHP tulisikin **aikuisten oikeasti** takaisin? Entä jos voisin vaan koodata webbisoftaa kuin ennen vanhaan ja mennä? Nyt voin, kiitos [Inertia.js](https://inertiajs.com/):n!

Olin törmännyt tähän nimeen joskus aikaisemminkin, mutta kun kävin alkuvuonna opettamassa koulussa webbiä PHP:n kautta, kokeilin sitä käytännössä. Ja kas kummaa, [Laravel](https://laravel.com/) ja Inertia olivat yhdessä yllättävän mukava tapa tehdä koodia! En ollut koskenut PHP:hen moneen vuoteen, eikä se tuntunut syntiseltä, paitsi [Wordpress](https://wordpress.org/). Wordpress tuntui tosi pahalta.

Jos PHP ei miellytä, Inertian voi iskeä esimerkiksi [Railsin](https://rubyonrails.org/) tai jäsä-frameforkki [Adoniksen](https://adonisjs.com/) kylkeen. Jos on tosi niche olo, [Phoenix](https://www.phoenixframework.org/) on myös vaihtoehto. [Elixir](https://elixir-lang.org/) on varmasti ihan oma maailmansa.

En nyt ihan heti ole koodijoulukalenteria Laraveliin refaktoroimassa, mutta sinänsä ajatus framework-agnostisesta fronttikerroksesta on kutkutteleva!
`
    }
  ]
};
