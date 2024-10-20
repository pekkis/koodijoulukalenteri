import packageManagers from "./package-managers.jpeg";
import { HatchDataWithoutDay } from "@/services/hatch";

const packageManagersHatch: HatchDataWithoutDay = {
  title: "Paketinhallinta",
  image: {
    src: packageManagers,
    alt: "Pakettimanagerit manageeraavat paketteja. Se, jos joku, on kovaa hommaa."
  },
  content: [
    {
      type: "markdown",
      text: `JavaScriptin NPM-paketteja hallitaan joko virallisella Node.js:n mukana tulevalla \`npm\`-kilkuttimella tai jollain kolmannen osapuolen tarjoamalla vaihtoehdolla.

JavaScriptin paketinhallintascene eriytyi alunperin vuonna 2016, kun [Yarn](https://yarnpkg.com/) julkaistiin. Tämä julkaisu oli kuin lahja taivaasta, koska NPM oli käsittämättömän surkeassa jamassa. Se oli hidas ja epävarma, ja päivästä saattoi mennä vaikka tuntikin siihen, että asenteli projektin neitseellisesti paskoontuneita paketteja nollasta uusiksi.

NPM sai Yarnin ajan kanssa enempi vähempi kiinni, ja Yarnista julkaistiin sekä taaksepäin että virallisen asiakasohjelmiston konffien kanssa yhteensopimaton kakkosversio. Se ei ole saanut suurta suosiota, koska se ei ole kovin hyvä.

[PNPM](https://pnpm.io/) sen sijaan *on* tosi, tosi hyvä ja yhteensopiva. Se säästää sekä hermoja, aikaa että levytilaa, ja olen käyttänyt sitä kaikissa omissa hankkeissani (myös koodijoulukalenterissa) jo useamman vuoden ajan. Enterprise-työ-proggiksissakin olen sen moneen otteeseen hyväksi ja toimivaksi todennut, ja niin ovat tehneet tosi monet "isot pojatkin". Monorepojen kanssa se on ihan itsestäänselvä valinta.

Migraatio deprekoidusta yarn ykkösestä edessä? Minne? Älä mieti kahdesti, ota PNPM. Sen ainoa huono puoli on, että sitä on lähes mahdotonta olla kirjoittamatta PMMP. Onneksi sille voi tehdä aliaksen.

Pro tip? Mitä ikinä paketinhallintaa käytätkään, harkitse käyttäväsi sitä Corepackin kautta!

* [NPM](https://www.npmjs.com/)
* [Yarn](https://yarnpkg.com/)
* [PNPM](https://pnpm.io/)
* [Corepack](https://github.com/nodejs/corepack)`
    }
  ]
};

export default packageManagersHatch;
