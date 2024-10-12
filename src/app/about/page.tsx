export default function AboutPage() {
  return (
    <div>
      <h1>Pekkiksen koodijoulukalenteri</h1>

      <h2>Yhteydenotto</h2>

      <p>
        <a href="mailto:pekkisx@gmail.com">pekkisx@gmail.com</a>
      </p>

      <h2>Miksi?</h2>

      <p>
        Minua kiinnosti marraskuun lopussa 2023 kokeilla, osaanko tehdä luukun
        aukaisun CSS:llä (ei, en ikinä olisi osannut tehdä, ellen olisi löytänyt
        jotain, josta lähteä apinoimaan). Siitä se sitten lähti, kuten
        harrasteprojekteilla usein tapana on, ja lopputuloksena syntyi jo
        MVP-vaiheen osalta <em>massiivisesti yliengineerattu</em>{" "}
        joulukalenteripökäle.
      </p>

      <h2>Tekijänoikeudelliset kommervenkit</h2>

      <p>
        Julkaisen kalenterin koodit Githubissa joulun jälkeen. Luukkujen sisältö
        on toistaiseksi kovakoodattu repoon, joten en voi tehdä julkaisua ennen
        kuin odotus on kokonaan ohi!
      </p>

      <p>
        Kaikki matskut, jotka olen tehnyt omin kätösin, julkaisen edellämainitun
        aikataulun mukaisesti MIT-lisenssillä. Kaikki muiden tekemät matskut
        ovat parhaan käsitykseni mukaan lisenssivapaita. Attribuutiot alhaalla.
      </p>

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
    </div>
  );
}
