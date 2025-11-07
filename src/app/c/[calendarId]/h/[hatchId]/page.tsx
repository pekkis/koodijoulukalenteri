import Dialog from "@/components/dialog/Dialog";
import HatchRenderer from "@/components/hatch-renderer/HatchRenderer";
import { getCalendar, getClientCalendar } from "@/services/calendar";
import { getTime } from "@/services/time";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    calendarId: string;
    hatchId: string;
  }>;
};

export default async function HatchPage({ params }: Props) {
  const { calendarId, hatchId } = await params;

  const calendar = await getCalendar(calendarId);

  if (!calendar) {
    return notFound();
  }

  const now = getTime();

  if (now < calendar.openAt) {
    notFound();
  }

  const hatch = calendar.hatches.find(
    (hatch) => hatch.day === parseInt(hatchId)
  );

  if (!hatch) {
    notFound();
  }

  const data = await calendar.getHatchData(hatch);

  if (!data) {
    notFound();
  }

  return (
    <Dialog calendar={getClientCalendar(calendar)}>
      <HatchRenderer calendar={calendar} day={parseInt(hatchId)} data={data} />
    </Dialog>
  );
}
