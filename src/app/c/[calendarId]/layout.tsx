import { ReactNode } from "react";

import Header from "./Header";
import Main from "./Main";

import "@/services/assets";
import { Metadata, Viewport } from "next";
import Debug from "./Debug";
import { getCalendar, getClientCalendar } from "@/services/calendar";
import { Providers } from "@/components/Providers";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getTime } from "@/services/time";
import { Container } from "@/components/Container";

type Props = {
  params: {
    calendarId: string;
  };
  children: ReactNode;
};

export const generateMetadata = async ({
  params
}: Props): Promise<Metadata> => {
  const calendar = await getCalendar(params.calendarId);
  return {
    title: calendar.title
  };
};

export const viewport: Viewport = {
  themeColor: "rgb(255 0 0)",
  width: "device-width"
};

export default async function CalendarLayout({ params, children }: Props) {
  const calendar = await getCalendar(params.calendarId);

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
            {process.env.DEBUG && <Debug />}
            {children}
          </Main>
          <Footer>
            Copyright &copy; 2023 Mikko &quot;Pekkis&quot; Forsström |{" "}
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
