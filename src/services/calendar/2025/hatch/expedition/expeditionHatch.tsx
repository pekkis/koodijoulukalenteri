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
Hou hou! Löysit salaisen bonusluukun! Sen sisältä löydät pelaamista joulunpyhiksi.

Tänä vuonna olimme siunattuja. [Sandfall Interactive](https://www.sandfallinteractive.com/) julkaisi häkellyttävän, tajunnanräjäyttävän, ainutkertaisen debyyttimestariteoksensa [Clair Obscur: Expedition 33](https://clairobscur.com/). Pelaa se gamepassissa tai osta omaksi. Muista myös soundtrack!

Pelin syntytarina on lähes ihmeellisempi kuin itse pelin stoori. Uskon eläväni ainoassa rinnakkaisuniversumissa, jossa sekä Peter Jacksonin LOTR että Expedition 33 toteutuivat sellaisena kuin ne ovat.

Nappaa pukinkonttiin myös [Factorio](https://www.factorio.com) ja sen lisäosa Space Age, jonka ansiosta viime vuoden kalenteri jäi kokonaan tekemättä. Etenkin koodareille ja muille "alan" tyypeille Factorio tuntuu olevan parasta huumetta. Itse olen pelannut 1500 tuntia, ja harkitsen juuri luukusta inspiroituneena uuden maailman aloittamista!
`
    },
    {
      type: "youtube",
      id: "2VaLOc1FpSo",
      caption: "Expedition 33 launch trailer"
    },
    {
      type: "youtube",
      id: "mXLOLgC2V2Q",
      caption:
        "The impossible true stories behind the making of Clair Obscur: Expedition 33"
    },

    {
      type: "youtube",
      id: "LpNVf8sczqU",
      caption: "Lumière Official Music Video"
    },
    {
      type: "youtube",
      id: "J8SBp4SyvLc",
      caption: "Factorion traileri"
    },
    {
      type: "youtube",
      id: "OiczN-8QKDA",
      caption: "Factorio: Space Agen traileri"
    },
    {
      type: "youtube",
      id: "dilLv1RELM4",
      caption: "Mehustelua Factorion spriteistä"
    }
  ]
};
