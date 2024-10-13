import { ReactNode } from "react";

import "normalize.css";
import "./layout.css";
import "open-props/style";

import "@/services/assets";
import { Metadata, Viewport } from "next";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Pekkiksen koodijoulukalenteri",
  openGraph: {
    type: "website",
    title: "Pekkiksen koodijoulukalenteri",
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

        <meta charSet="utf-8" />

        <script
          defer
          data-domain="koodijoulukalenteri.pekkis.eu"
          src="https://plausible.io/js/script.js"
        ></script>
      </head>
      <body id="root">{children}</body>
    </html>
  );
}
