import { getCalendars } from "@/services/calendar";
import Link from "next/link";

import * as styles from "./page.css";
import { Calendar } from "@/components/calendar/Calendar";
import { pipe, sortBy } from "remeda";
import { Provider } from "jotai";
import { Container } from "@/components/Container";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { Markdown } from "@/components/Markdown";
import { getTime } from "@/services/time";
import Footer from "@/components/Footer";
import { connection } from "next/server";

export const metadata = {
  title: "Koodijoulukalenteri"
};

export const revalidate = 60;

export default async function IndexPage() {
  await connection();

  const calendars = await getCalendars();

  const now = getTime();

  const sortedCalendars = pipe(
    calendars,
    sortBy((calendar) => calendar.weight),
    sortBy((calendar) => -calendar.title),
    sortBy((calendar) => -calendar.year)
  );

  return (
    <Container>
      <header>
        <Heading level={1}>Koodijoulukalenteri</Heading>
      </header>

      <main>
        <Paragraph>
          Tervetuloa Pekkiksen koodijoulukalenteriin, perinteiseen joka- tai
          jokatoisvuotiseen digitaaliseen jouluherkkuun jo vuodesta 2023!
        </Paragraph>

        <section className={styles.grid}>
          {sortedCalendars.map((calendar) => {
            return (
              <div key={calendar.id} className={styles.calendar}>
                <Provider>
                  <Calendar calendar={calendar} />

                  <h2 className={styles.heading}>
                    <Link
                      href={`/c/${calendar.id}`}
                      dangerouslySetInnerHTML={{ __html: calendar.title }}
                    ></Link>
                  </h2>

                  <Markdown>{calendar.description}</Markdown>

                  {now < calendar.openAt && (
                    <Paragraph>
                      Kalenteri herää eloon{" "}
                      <strong>
                        {calendar.openAt.setLocale("fi").toLocaleString({})}
                      </strong>
                      .
                    </Paragraph>
                  )}
                </Provider>
              </div>
            );
          })}
        </section>
      </main>
      <Footer>
        Copyright &copy; Mikko &quot;Pekkis&quot; Forsström |{" "}
        <Link href="/">Etusivu</Link> | <Link href="/about">Lisätiedot</Link>
      </Footer>
    </Container>
  );
}
