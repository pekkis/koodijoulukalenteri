import { ReactNode } from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import "@/services/assets";
import { Metadata, Viewport } from "next";
import Debug from "./Debug";
import { getCalendar, getClientCalendar } from "@/services/calendar";
import { Providers } from "@/components/Providers";

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

  const backgroundImages = new Set(
    calendar.naughtinessLevels.map((nl) => nl.backgroundImage)
  );

  return (
    <>
      <Providers calendar={getClientCalendar(calendar)}>
        <Header calendar={calendar} />
        <Main>
          {process.env.NODE_ENV === "development" && <Debug />}
          {children}
        </Main>
        <Footer />

        {Array.from(backgroundImages).map((entry) => {
          return <link rel="preload" href={entry} as="image" key={entry} />;
        })}
      </Providers>
    </>
  );
}
