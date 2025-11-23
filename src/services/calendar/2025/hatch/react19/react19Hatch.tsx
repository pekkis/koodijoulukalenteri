import { HatchDataWithoutDay } from "@/services/hatch";

import image from "./react19.webp";

export const react19Hatch: HatchDataWithoutDay = {
  title: "React 19",
  image: {
    src: image,
    alt: "Tosi iso antropomorfinen React juhlii version 19 julkaisua. Muut antropomorfiset kirjastot (Svelte, Astro, Angular, Solid.js ja Vue) ovat vaarassa tulla tallotuksi massiivisen Reactin jalkojen alle."
  },
  content: [
    {
      type: "markdown",
      text: `React 19 julkaistiin vuonna 2024, ja [React 19.2](https://react.dev/blog/2025/10/01/react-19-2) lokakuun alussa 2025. Samaan syssyyn [React Compiler](https://react.dev/blog/2025/10/07/react-compiler-1) julkaistiin vakaana versiona, ja suosituimmasta metafreimarista Next.js:stä [tuli ulos versio 16](https://nextjs.org/blog/next-16).

Vuodet vierivät, mutta React sen kun vain porskuttaa. Se on kasvanut niin isoksi ja ollut huipulla niin pitkään, että välissä on kasvanut yksi jos ei jo useampi uusi koodarisukupolvi, johon kuuluvat eivät omakohtaisesti muista, miten tähän on tultu.

Teknisten ansioiden sijaan [React voittaa nykyisin olemalla vakioratkaisu](https://www.lorenstew.art/blog/react-won-by-default/), väittävät kriitikot. Ehkä siinä on vinha perä. Itse olen sitä mieltä, että mikä tahansa hypoteettinen siirtymä fronttifreimarista toiseen on parhaimmassa tapauksessa _sivuttainen_, ei jättiloikka, jonka React teki disruptoidessaan scenen alkaen 2013. Siksi Reactia on tosi hankala syrjäyttää, vaikkei siitä (enää) tykkäisikään. Itse tykkään.

Hupaisaa kyllä, Reactin alkuperäinen historiallinen julkaisu vuonna 2013 meni lähestulkoon niin pieleen kuin rellu voi mennä. React naurettiin ulos lavalta, ja tiimi joutui uudelleenajattelemaan viestintätapansa.

Parin vuoden takainen React-dokkari on aivan ihana. Kaksi ensimmäistä React-presistä, pieleen mennyt ja paremmin mennyt, ovat edelleen katsomisen arvoiset. Pitkät kuluneet vuodet antavat ihanasti lisäkontekstia!
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
