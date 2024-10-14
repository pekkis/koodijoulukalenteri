import { Container } from "@/components/Container";
import Footer from "@/components/Footer";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import Link from "next/link";

export default function AboutPage() {
  return (
    <Container>
      <main>
        <Heading level={1}>Pekkiksen koodijoulukalenteri</Heading>

        <Heading level={2}>Yhteydenotto</Heading>

        <Paragraph>
          <a href="mailto:pekkisx@gmail.com">pekkisx@gmail.com</a>
        </Paragraph>

        <Heading level={2}>Miksi?</Heading>

        <Paragraph>
          Minua kiinnosti marraskuun lopussa 2023 kokeilla, osaanko tehdä luukun
          aukaisun CSS:llä. Siitä se sitten lähti, kuten harrasteprojekteilla
          usein tapana on, ja lopputuloksena syntyi osin kiireellä alikoodattu
          ja toisaalta <em>massiivisesti yliengineerattu</em>{" "}
          joulukalenteripökäle.
        </Paragraph>

        <Heading level={2}>Tekijänoikeudelliset kommervenkit</Heading>

        <Paragraph>
          Kaikki matskut, jotka olen tehnyt omin kätösin, ovat julkaistut
          MIT-lisenssillä. Kaikki muiden tekemät matskut ovat parhaan
          käsitykseni mukaan lisenssivapaita.
        </Paragraph>

        <Heading level={3}>Linkit</Heading>

        <ul>
          <li>
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://github.com/pekkis/koodijoulukalenteri"
            >
              Lähdekoodi
            </Link>
          </li>
        </ul>

        <Heading level={3}>Attribuutiot</Heading>

        <ul>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://csschristmascalendar.com/"
            >
              Luukun aukaisun inspiraatio ja referenssi
            </a>
          </li>

          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://en.wikipedia.org/wiki/File:Jingle_Bells_(90bpm)_(Kevin_MacLeod)_(ISRC_USUAN1100187).oga"
            >
              Kulkuset, iloinen versio
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.youtube.com/watch?v=mP1Er3W6Zk8"
            >
              Kulkuset, kauhuversio
            </a>
          </li>
        </ul>
      </main>
      <Footer>
        Copyright &copy; 2023 Mikko &quot;Pekkis&quot; Forsström |{" "}
        <Link href="/">Etusivu</Link> | <Link href="/about">Lisätiedot</Link>
      </Footer>
    </Container>
  );
}
