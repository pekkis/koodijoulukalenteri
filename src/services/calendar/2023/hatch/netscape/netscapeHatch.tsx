import { HatchDataWithoutDay } from "@/services/hatch";

import netscape from "@/assets/netscape-2.jpeg";

const netscapeHatch: HatchDataWithoutDay = {
  title: "Netscape Navigator",
  image: {
    alt: "Netscape",
    src: netscape
  },
  content: [
    {
      type: "markdown",
      text: `Joulukuun 15. päivänä 1994 [Netscape](https://en.wikipedia.org/wiki/Netscape) julkaisi [Netscape Navigator](https://en.wikipedia.org/wiki/Netscape_(web_browser)) 1.0:n, ensimmäisen virallisesti valmiin version ensimmäisestä kaupallisesta www-selaimesta.

Elokuussa 1995 Netscape, ensimmäinen nykyaikainen startup joka oli perustettu kokonaista kuusitoista kuukautta aikaisemmin, listautui pörssiin. Pelkkää tappiota tuottaneen firman markkina-arvo oli ensimmäisen pörssipäivän jälkeen lähes 3 miljardia aikalaisdollaria.

Vuonna 1996 Netscapen selaimen markkinaosuus oli yli 80 prosenttia. Vuonna 1998 [AOL](https://en.wikipedia.org/wiki/AOL) osti Netscapen 4,2 miljardilla dollarilla. Vuonna 1999 Microsoft julkaisi Internet Explorer 5:n, joka oli tosi hyvä verrattuna Netscapen selaimeen. Koko Navigatorin lähdekoodi viskattiin roskikseen, ja avoimen lähdekoodin [Firefoxiin](https://en.wikipedia.org/wiki/Firefox) aivan liian paljon myöhemmin huipentunut projekti lähti liikkeelle nollasta.

Vuonna 2003 AOL antoi kaikille Netscapen työntekijöille potkut ja sulki koko pajan. Netscapen henki ja perintö ovat siitä alkaen eläneet [Mozilla-säätiössä](https://foundation.mozilla.org/).
`
    }
  ]
};

export default netscapeHatch;
