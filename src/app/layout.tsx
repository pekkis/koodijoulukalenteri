import { ReactNode } from "react";

import "normalize.css";
import "./layout.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import * as assets from "@/services/assets";

type Props = {
  children: ReactNode;
};

export default async function WelcomeLayout({ children }: Props) {
  return (
    <html lang="fi">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/tmc3dha.css"
        ></link>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
      </head>
      <body>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
