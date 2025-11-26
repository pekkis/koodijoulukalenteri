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
import notFound from "@/app/not-found";

type Props = {
  params: Promise<{
    calendarId: string;
  }>;
  children: ReactNode;
};

export default async function CalendarLayout({ params, children }: Props) {
  const { calendarId } = await params;

  const calendar = await getCalendar(calendarId);

  if (!calendar) {
    return notFound();
  }

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
            {process.env.NEXT_PUBLIC_DEBUG && <Debug calendar={calendar} />}
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
