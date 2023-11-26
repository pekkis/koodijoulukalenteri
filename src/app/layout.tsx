import { ReactNode } from "react";

import "normalize.css";
import "./layout.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import "@/services/assets";

type Props = {
  children: ReactNode;
};

export default async function WelcomeLayout({ children }: Props) {
  return (
    <html lang="fi">
      <head>
        <link rel="icon" type="image/webp" href="/favicon.webp" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/tmc3dha.css"
        ></link>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />

        <script
          defer
          data-domain="koodijoulukalenteri.pekkis.eu"
          src="https://plausible.io/js/script.js"
        ></script>
      </head>
      <body id="root">
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
