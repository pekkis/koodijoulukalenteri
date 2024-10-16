import { ReactNode } from "react";

import "normalize.css";
import "./layout.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import {
  antichristProgrammer,
  christmasyProgrammers,
  monsterProgrammers,
  naughtyProgrammers
} from "@/services/assets";

import "@/services/assets";
import { Metadata, Viewport } from "next";
import Debug from "./Debug";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Pekkiksen koodijoulukalenteri 2023",
  openGraph: {
    type: "website",
    title: "Pekkiksen koodijoulukalenteri 2023",
    images: "https://koodijoulukalenteri.pekkis.eu/santa-claus.webp"
  }
};

export const viewport: Viewport = {
  themeColor: "rgb(255 0 0)",
  width: "device-width"
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

        <link rel="preload" href={christmasyProgrammers.src} as="image" />
        <link rel="preload" href={antichristProgrammer.src} as="image" />
        <link rel="preload" href={monsterProgrammers.src} as="image" />
        <link rel="preload" href={naughtyProgrammers.src} as="image" />

        <meta charSet="utf-8" />

        <script
          defer
          data-domain="koodijoulukalenteri.pekkis.eu"
          src="https://plausible.io/js/script.js"
        ></script>
      </head>
      <body id="root">
        <Header />
        <Main>
          {process.env.NODE_ENV === "development" && <Debug />}
          {children}
        </Main>
        <Footer />
      </body>
    </html>
  );
}
