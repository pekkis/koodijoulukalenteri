import { HatchDataWithoutDay } from "@/services/hatch";

import image from "./css.webp";

export const cssHatch: HatchDataWithoutDay = {
  title: "CSS",
  image: {
    src: image,
    alt: "Antropomorfinen CSS-hahmo tuulettaa CSS-speksin julkaisua. Antropomorfinen Javascript Style Sheets (JSSS) ja antropomorfinen Netscape Navigator-hahmo itkevät ja polkevat jalkaa. Internet Explorer 3, ensimmäinen CSS:ää tukeva selain, kurkkaa kulman takaa!"
  },
  content: [
    {
      type: "markdown",
      text: `[W3C](https://www.w3.org/) julkaisi [CSS taso ykkösen](https://www.w3.org/TR/CSS1/) suosituksenaan seitsemäntenätoista joulukuuta 1996. Päätös oli karvas pala [Netscapelle](https://en.wikipedia.org/wiki/Netscape), joka oli panostanut voimakkaasti omaan vaihtoehtoiseen [JavaScript Style Sheets (JSSS)](https://en.wikipedia.org/wiki/JavaScript_Style_Sheets)-teknologiaansa.

[Netscape Navigatorista](https://en.wikipedia.org/wiki/Netscape_Navigator) vastaavien koodariparkojen ei auttanut kuin paskofiksata kasaan tunkki, joka käänsi CSS-säännöt lennossa JSSS:ksi. Tässä on syy siihen, miksi [CSS ei koskaan toiminut Netscapessa](https://jkorpela.fi/www/nncss.html), jos JavaScriptin käänsi pois päältä.

Netscapen purkkaratkaisu oli sekä huono että epävakaa. Muistan hauskuuttaneeni itseäni opiskeluaikana yksinkertaisella CSS-rimpsulla, joka kaatoi koko moskan. Huono CSS-tuki oli vahva vaikutin siinä, että Netscape kärsi murskatappion ensimmäisessä selainsodassa.

[Kirjoitin kymmenisen vuotta sitten aiheesta](https://www.pekkis.eu/blogi/2016/10/18/css-n-lyhyt-historia) pidemmälti blogissani. Historia-osuus on vielä ihan kurantti, vaikka juttu muuten onkin vanhentunut!`
    },
    {
      type: "youtube",
      id: "UvF0Zt4_NGU",
      caption: "Entire CSS History In 26 Years"
    }
  ]
};
