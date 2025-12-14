import { HatchDataWithoutDay } from "@/services/hatch";

import image from "./react-19-haxed.webp";

export const react19Hatch: HatchDataWithoutDay = {
  title: "React 19",
  image: {
    src: image,
    alt: "Tosi iso antropomorfinen React juhlii version 19 julkaisua. React on tosi reikäinen. Muut antropomorfiset kirjastot (Svelte, Astro, Angular, Solid.js ja Vue) ilkkuvat Reactia sen jalkojen alta."
  },
  content: [
    {
      type: "markdown",
      text: `
Vuodet vierivät, mutta React sen kun vain porskuttaa. Se on kasvanut niin isoksi ja ollut huipulla niin pitkään, että välissä on kasvanut yksi jos ei useampikin koodarisukupolvi, joka ei ole välttämättä tuntenut mitään muuta.

React 19 julkaistiin vuonna 2024, ja [React 19.2](https://react.dev/blog/2025/10/01/react-19-2) lokakuun alussa 2025. Samaan syssyyn [React Compiler](https://react.dev/blog/2025/10/07/react-compiler-1) julkaistiin vakaana versiona, ja suosituimmasta metafreimarista Next.js:stä [tuli ulos versio 16](https://nextjs.org/blog/next-16).

Kolmantena päivänä joulukuuta React julkaisi massiivisen, vakavuusasteen 10/10 tietoturva-aukon [CVE-2025-55182](https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components). Next.js [julkaisi oman aukkonsa samasta aiheesta](https://nextjs.org/blog/CVE-2025-66478). Muutaman päivän päästä aukkoja [julkaistiin vielä lisää](https://react.dev/blog/2025/12/11/denial-of-service-and-source-code-exposure-in-react-server-components).

Joidenkin mielestä [React voittaa olemalla vakioratkaisu](https://www.lorenstew.art/blog/react-won-by-default/), ja se tukehduttaa innovaation. Tässä on vinha perä, mutta niin kauan kuin siirtymä kirjastosta toiseen on _sivuttainen_, eikä jättiloikka, jonka React teki disruptoidessaan koko scenen alkaen 2013, Reactia on tosi vaikeaa syrjäyttää.

Jos jokin voi **aikuisten oikeasti** auttaa Reactia kahmaisemaan tappion voiton suusta, se on huono maine, joka syntyy karmivista tietoturva-aukoista (minutkin hakkeroitiin kun unohdin päivittää yhdet _staattiset sivut_) Reactin uusissa, jo valmiiksi vähän kyseenalaisissa serveripatterneissa.

Saas nähdä. Reactin alkuperäinen historiallinen julkaisu vuonna 2013 meni lähestulkoon yhtä vihkoon kuin vuoden 2025 joulukuu. React naurettiin ulos lavalta, ja tiimi joutui uudelleenajattelemaan viestintätapansa.

Parin vuoden takainen React-dokkari on aika ihana. Kaksi ensimmäistä React-presistä, pieleen mennyt ja paremmin mennyt, ovat edelleen katsomisen arvoiset. Pitkät kuluneet vuodet antavat niihin kivaa lisäkontekstia!
`
    },
    {
      type: "youtube",
      id: "8pDqJVdNa44",
      caption:
        "How A Small Team of Developers Created React at Facebook | React.js: The Documentary"
    },
    {
      type: "youtube",
      id: "GW0rj4sNH2w",
      caption:
        "[JSConfUS 2013] Tom Occhino and Jordan Walke: JS Apps at Facebook"
    },
    {
      type: "youtube",
      id: "x7cQ3mrcKaY",
      caption: "Pete Hunt: React: Rethinking best practices -- JSConf EU"
    }
  ]
};
