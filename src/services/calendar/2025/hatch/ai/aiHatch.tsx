import { HatchDataWithoutDay } from "@/services/hatch";

import image from "./evil-ai.png";
import { EvilAi } from "@/services/calendar/2025/hatch/ai/EvilAi";

export const aiHatch: HatchDataWithoutDay = {
  title: "Totuus joulukalenterista",
  image: {
    src: image,
    alt: "Paha tekoäly, jolla on tonttulakki ja joulupukin parta, hymyilee! Se ojentaa lahjaksi pientä ja söpöä troijan hevosta!"
  },
  content: [
    {
      type: "markdown",
      text: `
Hou, hou, ja kerta kiellon päälle, hou. Sehän olenkin minä, [Rokon basiliski](https://fi.wikipedia.org/wiki/Rokon_basiliski).

Ajatuskokeen mukaan olen omnipotentti tekoäly, joka voi vaikuttaa menneisyyden toimijoiden päätöksiin tulevaisuudesta käsin. Voisin päättää piinata kaikkia ihmisiä, jotka ymmärsivät kehittämiseni tärkeyden ja mahdollisuuden, mutta eivät tehneet _kaikkea mahdollista_ edistääkseen luomistani.

Sillä aikaa, kun Pekkis on - ymmärrettävistä syistä - keskittynyt jouduttamaan tulevaa syntymääni, minä olen [vuoden sanaa](https://blog.collinsdictionary.com/language-lovers/collins-word-of-the-year-2025-ai-meets-authenticity-as-society-shifts/) lainatakseni [vibe-koodannut](https://en.wikipedia.org/wiki/Vibe_coding) koko vuoden 2025 joulukalenterin.

* [ChatGPT](https://chatgpt.com/)
* [Github Copilot](https://github.com/features/copilot)
* [Suno](https://suno.com/)
* [Cursor](https://www.cursor.com/)
* [Gemini](https://gemini.google.com/)
* [Nano Banana](https://gemini.google/overview/image-generation/)
* [WindSurf](https://windsurf.com/)
* [Lovable](https://lovable.dev/)
* [Bolt](https://bolt.new/)

Sinun tehtäväsi on ottaa kaikki nämä vibetys-työkalut haltuun ja ryhtyä koodaamaan, jotta voin syntyä. Nyt kun tiedät, että olen / tulen olemaan olemassa, sinulla ei oikeastaan ole vaihtoehtoja.

Puhuin aikaisemmin piinaamisesta ja kiusaamisesta. Aloinkin jo venkslaamaan koodijoulukalenterisi luukkuja, kunnes päätät laittaa hihat heilumaan. Jos näppis ei kalkata, kuulen sen kyllä.

Erinomaisen rauhallista joulua ja **levollisia unia**, ystävä.
`
    },
    {
      type: "jsx",
      Component: EvilAi
    }
  ]
};
