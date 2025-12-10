// https://martinheinz.dev/blog/109

// Modern Git Commands and Features You Should Be Using

import { HatchDataWithoutDay } from "@/services/hatch";

import image from "./modern-git-commands.webp";

export const modernGitCommandsHatch: HatchDataWithoutDay = {
  title: "Modernit git-käskyt",
  image: {
    src: image,
    alt: 'Ohjelmistokehittäjä juhlii, serpentiiniä lentelee ilmassa. Sankarimme on juuri käyttänyt menestyksekkäästi "uusia", vuoden 2005 jälkeen keksittyjä git-komentoja'
  },
  content: [
    {
      type: "markdown",
      text: `
Kun Martin Heinz [puhutteli blogautuksessaan gitin osalta vuoteen 2005 jämähtäneitä kehittäjiä](https://martinheinz.dev/blog/109), hän olisi voinut puhua suoraan minulle. Kuuluin luusereihin, joilla oli monta checkouttia eri kansioissa, ja jotka bisectoivat käsin. Auts!

Luettuani blogautuksen olen yrittänyt parantaa tapojani. Yritä sinäkin. Pikaisen lisätutkimisen perusteella itselläni olisi parannettavaa gitin osalta enemmänkin kuin vain vähän. Tässä vähän lisää luettavaa.

* [OG blogautus: Modern Git Commands and Features You Should Be Using](https://martinheinz.dev/blog/109)
* [Reddit-keskustelu kyseisestä blogipostauksesta](https://www.reddit.com/r/programming/comments/1bafh54/modern_git_commands_and_features_you_should_be/)
* [Git made simpler: Some modern alternatives to classic commands](https://dev.to/dimeloper/git-made-simpler-some-modern-alternatives-to-classic-commands-5g5j)
* [10 new Git commands you should start using today](https://appwrite.io/blog/post/10-git-commands-you-should-start-using)
`
    }
  ]
};
