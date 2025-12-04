import { getCalendar } from "@/services/calendar";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import { getTime } from "@/services/time";
import Refresher from "@/components/calendar/Refresher";

export const revalidate = 60;

type Props = {
  params: Promise<{
    calendarId: string;
  }>;
};

export const generateMetadata = async ({
  params
}: Props): Promise<Metadata> => {
  const { calendarId } = await params;

  const calendar = await getCalendar(calendarId);

  if (!calendar) {
    notFound();
    return {};
  }

  return {
    metadataBase: new URL("https://koodijoulukalenteri.pekkis.eu"),
    title: `${calendar.title}`,
    description: calendar.metaDescription || calendar.description,
    openGraph: {
      type: "website",
      description: calendar.metaDescription || calendar.description,
      title: `${calendar.title}`,
      images: calendar.canonicalImage
    }
  };
};

export default async function CalendarPage({ params }: Props) {
  await connection();
  const { calendarId } = await params;
  const calendar = await getCalendar(calendarId);

  if (!calendar) {
    return notFound();
  }

  return <Refresher serverTime={getTime().toISO() as string} />;
}
