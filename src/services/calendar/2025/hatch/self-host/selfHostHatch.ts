import { HatchDataWithoutDay } from "@/services/hatch";

import image from "./self-host.webp";

export const selfHostHatch: HatchDataWithoutDay = {
  title: "Hostaa itse!",
  image: {
    src: image,
    alt: "Ylpeä itse hostattu antropomorfinen serveri potkii ahneita ja inhottavia Vercel- ja AWS-hahmoja kylkeen"
  },
  content: [
    {
      type: "markdown",
      text: `
Oletko sinäkin kyllästynyt tech bro-biljardöörien ja kansanmurhaajia nuoleskelevien niljakkeiden ylikalliisiin, epäeettisiin ja _aivan liian helppoihin_ palveluihin? Hostaa itse, kele!

Trumpin uhkailtua minua tulleilla vuoden 2025 keväällä päätin siirtää omat palveluni mahdollisuuksien mukaan omaan haltuuni, takaisin karuun pohjolaan ja yksinkertaisempaan menneisyyden maailmaan.

Ostin fyysisen hyrskyttävän palvelimen [Hetzneriltä](https://www.hetzner.com/) Tuusulasta. Rakensin sinne himmelin [Nginxillä](https://nginx.org/) ja [Dockerilla](https://www.docker.com/). Sähköposteja en osaa hostata, joten ne asuvat [PurelyMailissa](https://purelymail.com/). DNS:t jatkavat Amazonissa, koska siirto itkettää.

Vasta kun olin pystyttänyt settini wanhan liiton konsteilla ja kiroillut, kuinka kaikki on kamalan hankalaa, aloin ottamaan selvää jutuista.

Ja kas kummaa, pökälettähän on tarjolla. [Dokploy](https://dokploy.com/) ja [Coolify](https://coolify.io/) herättivät heti kiinnostukseni. [Dokku](https://dokku.com/) ja [CapRover](https://caprover.com/) ovat myös olemassa. [EasyPanel](https://easypanel.io/), mikäseon, mitä hittoa. Miksi näitä on niin paljon, ja _miksi ymmärrän kaikesta niin vähän?!?_.

Tieto lisää tuskaa. Kiitos, [Tieto](https://www.tieto.com/). Vuoden 2026 itsehostattu infra, täältä tullaan, syteen tai saveen.
`
    }
  ]
};
