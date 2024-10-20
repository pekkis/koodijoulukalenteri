import { ReactNode } from "react";

import Header from "./Header";
import Main from "./Main";

import { Container } from "@/components/Container";
import Footer from "@/components/Footer";
import { Providers } from "@/components/Providers";
import CalendarWrapper from "@/components/calendar/CalendarWrapper";
import { getCalendar, getClientCalendar } from "@/services/calendar";
import { getTime } from "@/services/time";
import { Metadata } from "next";
import Link from "next/link";
import Debug from "./Debug";

type Props = {
  params: Promise<{
    calendarId: string;
  }>;
  children: ReactNode;
};

export const generateMetadata = async ({
  params
}: Props): Promise<Metadata> => {
  const { calendarId } = await params;

  const calendar = await getCalendar(calendarId);
  return {
    title: calendar.title,
    openGraph: {
      type: "website",
      description: calendar.description,
      title: `${calendar.title} - Pekkiksen koodijoulukalenteri`,
      images: calendar.canonicalImage
    }
  };
};

export default async function CalendarLayout({ params, children }: Props) {
  const { calendarId } = await params;

  const calendar = await getCalendar(calendarId);

  const now = getTime();
  const isInteractive = now > calendar.openAt;

  const backgroundImages = new Set(
    calendar.naughtinessLevels.map((nl) => nl.backgroundImage)
  );

  return (
    <>
      <Providers calendar={getClientCalendar(calendar)}>
        <Container wide>
          <Header calendar={calendar} isInteractive={isInteractive} />
          <Main>
            <CalendarWrapper calendar={calendar} isInteractive={isInteractive}>
              {children}
            </CalendarWrapper>
            {process.env.DEBUG && <Debug />}
          </Main>
          <Footer>
            Copyright &copy; Mikko &quot;Pekkis&quot; Forsström |{" "}
            <Link tabIndex={0} href="/">
              Etusivu
            </Link>{" "}
            |{" "}
            <Link tabIndex={0} href="/about">
              Lisätiedot
            </Link>
          </Footer>

          {Array.from(backgroundImages).map((entry) => {
            return <link rel="preload" href={entry} as="image" key={entry} />;
          })}
        </Container>
      </Providers>
    </>
  );
}
