import { Calendar } from "@/components/calendar/Calendar";
import Dialog from "@/components/dialog/Dialog";
import HatchRenderer from "@/components/hatch-renderer/HatchRenderer";
import { getCalendar, getClientCalendar } from "@/services/calendar";
import { notFound } from "next/navigation";

type Props = {
  params: {
    calendarId: string;
    hatchId: string;
  };
};

export default async function HatchPage({ params }: Props) {
  const calendar = await getCalendar(params.calendarId);

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
      <Calendar calendar={calendar} />
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
