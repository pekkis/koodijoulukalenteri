import { CalendarWrapper } from "@/components/calendar/CalendarWrapper";
import { getCalendar } from "@/services/calendar";
import { getTime } from "@/services/time";

export const metadata = {
  title: "Pekkiksen koodijoulukalenteri 2023"
};

export const dynamic = "force-dynamic";

type Props = {
  params: {
    calendarId: string;
  };
};

export default async function CalendarPage({ params }: Props) {
  const calendar = await getCalendar(params.calendarId);

  const now = getTime();
  const isInteractive = now > calendar.openAt;

  return <CalendarWrapper calendar={calendar} isInteractive={isInteractive} />;
}
