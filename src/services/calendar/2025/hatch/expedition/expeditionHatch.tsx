import { HatchDataWithoutDay } from "@/services/hatch";

import image from "./expedition.webp";

export const expeditionHatch: HatchDataWithoutDay = {
  title: "Pelejä pukinkonttiin",
  image: {
    src: image,
    alt: "Kolme kaunista pariisitarta, päällään hienot tummanpuhuvat univormut joissa expedition 33-hihanauhat, käsissään joulun paras lahja, Clair Obscur: Expedition 33."
  },
  content: [
    {
      type: "markdown",
      text: `
Haa! Löysit salaisen bonusluukun! Sen sisältä löydät pelaamista joulunpyhiksi.

Tänä vuonna olimme kerta kaikkiaan siunattuja. [Sandfall Interactive](https://www.sandfallinteractive.com/) julkaisi häkellyttävän, tajunnanräjäyttävän, ainutkertaisen debyyttimestariteoksensa [Clair Obscur: Expedition 33](https://clairobscur.com/). Pelaa se gamepassissa tai osta omaksi. Muista myös soundtrack.

Pelin syntytarina on lähes ihmeellisempi kuin tarina itse pelissä. Olen uskomattoman onnekas eläessäni ainoassa rinnakkaisuniversumissa, jossa sekä Peter Jacksonin LOTR-trilogia että Expedition 33 ovat olemassa sellaisena kuin ne ovat.

Bonuksena nappaa pukinkonttiin myös kahden edellisen vuoden parhaat pelit, joista kumpikin on kaikkien aikojen top kympissäni. Viime vuoden kalenteri jäi tekemättä [Factorio: Space Agen](https://www.factorio.com/) vuoksi, ja toissa vuoden kesällä pelasin [Baldur's Gate 3:sta](https://baldursgate3.game/) yöt ja päivät läpeensä.
`
    },
    {
      type: "youtube",
      id: "2VaLOc1FpSo",
      caption: "Expedition 33 launch trailer"
    },
    {
      type: "youtube",
      id: "LpNVf8sczqU",
      caption: "Lumière Official Music Video"
    },
    {
      type: "youtube",
      id: "mXLOLgC2V2Q",
      caption:
        "The impossible true stories behind the making of Clair Obscur: Expedition 33"
    },
    {
      type: "youtube",
      id: "gwAL9RG5YK8",
      caption: "We Lost"
    },
    {
      type: "youtube",
      id: "9wYHLgLYQlU",
      caption:
        "Flying Waters - Rain from the Ground (biisi pelastettiin roskiksesta)"
    }
  ]
};
