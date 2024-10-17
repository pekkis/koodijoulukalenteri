import { CalendarWrapper } from "@/components/calendar/CalendarWrapper";
import Dialog from "@/components/dialog/Dialog";
import HatchRenderer from "@/components/hatch-renderer/HatchRenderer";
import { getCalendar, getClientCalendar } from "@/services/calendar";
import { getTime } from "@/services/time";
import { notFound } from "next/navigation";

type Props = {
  params: {
    calendarId: string;
    hatchId: string;
  };
};

export default async function HatchPage({ params }: Props) {
  const calendar = await getCalendar(params.calendarId);

  const now = getTime();
  if (now < calendar.openAt) {
    notFound();
  }

  const hatch = calendar.hatches.find(
    (hatch) => hatch.day === parseInt(params.hatchId)
  );

  if (!hatch) {
    notFound();
  }

  const data = await calendar.getHatchData(hatch);

  if (!data) {
    notFound();
  }

  return (
    <>
      <CalendarWrapper calendar={calendar} />
      <Dialog calendar={getClientCalendar(calendar)}>
        <HatchRenderer
          calendar={calendar}
          day={parseInt(params.hatchId)}
          data={data}
        />
      </Dialog>
    </>
  );
}
