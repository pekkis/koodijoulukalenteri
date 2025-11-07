import { getCalendar } from "@/services/calendar";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{
    calendarId: string;
  }>;
};

export default async function CalendarPage({ params }: Props) {
  const { calendarId } = await params;
  const calendar = await getCalendar(calendarId);

  if (!calendar) {
    return notFound();
  }

  return null;
}
