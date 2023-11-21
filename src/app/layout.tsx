import { ReactNode } from "react";

import "normalize.css";
import "./layout.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

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
      </head>
      <body>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
