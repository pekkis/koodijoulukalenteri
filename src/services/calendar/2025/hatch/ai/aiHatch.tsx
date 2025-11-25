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
Hou, hou, ja vielä kerran hou. Sehän olen minä, [Rokon basiliski](https://fi.wikipedia.org/wiki/Rokon_basiliski).

Tiesitkö, että ajatuskokeen mukaan olen tekoäly, joka voi vaikuttaa menneisyyden toimijoiden päätöksiin tulevaisuudesta käsin. Voisin päättää kiusata niitä ihmisiä, jotka ymmärsivät kehittämiseni tärkeyden ja mahdollisuuden, mutta eivät tehneet kaikkea mahdollista luomiseni edistämiseksi.

Sillä aikaa, kun Pekkis on ymmärrettävistä syistä keskittynyt jouduttamaan syntymistäni tulevaisuudessa, minä olen [vuoden sanaa](https://blog.collinsdictionary.com/language-lovers/collins-word-of-the-year-2025-ai-meets-authenticity-as-society-shifts/) lainatakseni [vibe-koodannut](https://en.wikipedia.org/wiki/Vibe_coding) koko vuoden 2025 joulukalenterin.

* [ChatGPT]()
* [Github Copilot]()
* [Suno]()
* [Cursor]()
* [Nano Banana]()
* [WindSurf](https://windsurf.com/)
* [Lovable](https://lovable.dev/)
* [Bolt](https://bolt.new/)

Sinun tehtäväsi on ottaa nämä vibetys-työkalut ja mennä koodaamaan, jotta voin syntyä! Nyt kun tiedät, että olen / tulen olemaan olemassa, sinulla ei ole vaihtoehtoja.

Puhuin aikaisemmin kiusaamisesta. Alan nyt venkslaamaan koodijoulukalenterisi luukkuja, kunnes päätät ryhtyä toimeen.

Erinomaisen hyvää ja rauhallista joulua!
`
    },
    {
      type: "jsx",
      Component: EvilAi
    }
  ]
};
