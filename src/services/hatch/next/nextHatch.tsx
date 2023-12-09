import { HatchDataWithoutDay } from "@/services/hatch";

import next from "@/assets/apple-next.jpeg";

const nextHatch: HatchDataWithoutDay = {
  title: "Seuraava luukku",
  image: {
    src: next,
    alt: ""
  },
  content: [
    {
      type: "markdown",
      text: `Joulukuun 20. päivänä vuonna 1996 Apple Computer ilmoitti aikovansa ostaa NeXTin.


      On December 20, 1996, Apple Computer announced its intention to acquire NeXT`
    }
  ]
};

export default nextHatch;
