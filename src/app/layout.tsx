import { ReactNode } from "react";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { ThemeProvider } from "next-themes";

import "normalize.css";
import "./layout.css";
import "open-props/style";

import { Metadata, Viewport } from "next";

import { Nunito, Mountains_of_Christmas } from "next/font/google";
import clsx from "clsx";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito"
});

const mountains = Mountains_of_Christmas({
  subsets: ["latin"],
  variable: "--font-mountains",
  weight: ["700"]
});

type Props = {
  children: ReactNode;
};

export const viewport: Viewport = {
  themeColor: "rgb(255 0 0)",
  width: "device-width"
};

export const metadata: Metadata = {
  title: "Koodijoulukalenteri",
  openGraph: {
    type: "website",
    title: "Koodijoulukalenteri",
    description: "Perinteinen digitaalinen jouluherkku jo vuodesta 2023",
    images: "https://koodijoulukalenteri.pekkis.eu/santa-claus.webp"
  }
};

export default async function RootLayout({ children }: Props) {
  return (
    <html
      lang="fi"
      className={clsx(nunito.variable, mountains.variable)}
      suppressHydrationWarning
    >
      <head>
        <link
          type="text/plain"
          rel="author"
          href="https://koodijoulukalenteri.pekkis.eu/humans.txt"
        />
        <link rel="icon" type="image/webp" href="/favicon.webp" />

        {/* <script
          defer
          data-domain="koodijoulukalenteri.pekkis.eu"
          src="https://plausible.io/js/script.js"
        ></script>*/}
      </head>
      <body id="root">
        <ThemeProvider>
          <NuqsAdapter>{children}</NuqsAdapter>
        </ThemeProvider>
      </body>
    </html>
  );
}
