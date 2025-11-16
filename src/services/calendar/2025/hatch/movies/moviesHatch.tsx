import { HatchDataWithoutDay } from "@/services/hatch";

import image from "./beekeeper-2.webp";

export const moviesHatch: HatchDataWithoutDay = {
  title: "Koodileffoja, 2024-2025",
  image: {
    src: image,
    alt: "Beekeeper, companion-botti ja tappajarobotti nirhaavat scammereita"
  },
  content: [
    {
      type: "markdown",
      text: `
Ihan kuin tekoäly olisi jotenkin muotia, koska tekoäly ja botit ovat toistuva kaava viimeisen parin vuoden koodileffoissa! Näiden lisäksi hyvä nörtti kostaa, ja pahoille phishing-huijareille kostetaan.
`
    },
    {
      type: "youtube",
      id: "Si4RBWqX1wE",
      caption:
        "The Beekeeper (2024) on yksi viime aikojen hassuimmista ja hauskimmista Statham-kostoleffoista. Ja mikä hulvattominta, pahikset ovat inhoja tietojenkalastelu-scammereita!"
    },

    {
      type: "youtube",
      id: "4VrLQXR7mKU",
      caption:
        "I'm Not a Robot (2023) voitti parhaan lyhytelokuvan Oscar-palkinnon vuonna 2025. Youtubessa katsottavana koko elokuva!"
    },
    {
      type: "youtube",
      id: "Qr_kX0D3DNA",
      caption:
        "Companion (2025) on vähän pidempi, ja ehkä hitusen brutaalimpi, elokuva seuralaisbotista. Tämä elokuva oli omaan makuuni oikein sopiva!"
    },
    {
      type: "youtube",
      id: "fsQgc9pCyDU",
      caption:
        "Mission Impossible: Final Reckoning (2025) on katsottava, mutta super-pönöttävä ja ummettava osa Tom Cruisen action-saagaan. Päävihu on tekoäly, mutta se jää tosi pieneen rooliin."
    },
    {
      type: "youtube",
      id: "IYLHdEzsk1s",
      caption:
        'Megan 2.0 (2025) hyppää ykkösosan kauhuteemasta niin pitkälle campin puolelle, että olisin kuvitellut helposti pitäväni leffasta "hölmö, mutta hauska"-tasolla. Mutta ei, se oli aika meh.'
    },
    {
      type: "youtube",
      id: "DCWcK4c-F8Q",
      caption:
        "The Amateur (2025). Nörtti kostaa vaimonsa murhaajille käyttäen nörttejä keinoja. Ihan ok, mutta en minä tätä vuoden päästä enää muista."
    },

    {
      type: "youtube",
      id: "YShVEXb7-ic",
      caption:
        "Tron: Ares (2025). Vai kenties Tron: Arse? Kivat visut, hienot mutta kakofoniset musiikit ja näyttävät effut. Mäntti juoni, oksu Jared, kökkö leffa."
    }
  ]
};
