import { HatchDataWithoutDay } from "@/services/hatch";

import strongHtml from "@/assets/strong-html.jpeg";

const strongHtmlHatch: HatchDataWithoutDay = {
  title: "Strong HTML",
  image: {
    src: strongHtml,
    alt: "HTML-koodia, jossa on paljon strong-elementtejä."
  },
  content: [
    {
      type: "markdown",
      text: `Strong HTML`
    }
  ]
};

export default strongHtmlHatch;
