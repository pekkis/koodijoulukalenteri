import { getCalendar } from "@/services/calendar";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

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
  const { calendarId } = await params;
  const calendar = await getCalendar(calendarId);

  if (!calendar) {
    return notFound();
  }

  return null;
}
