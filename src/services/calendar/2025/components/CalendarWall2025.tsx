import { FC } from "react";
import HatchPeek from "@/components/hatch-renderer/HatchPeek";
import { getClientCalendar } from "@/services/calendar";
import { InnerHatchProps } from "@/components/hatch/Hatch";

export const CalendarWall2025: FC<InnerHatchProps> = async ({
  calendar,
  hatch
}) => {
  const data = await calendar.getHatchData(hatch);

  if (!data) {
    return null;
  }

  return (
    <HatchPeek size="wide" calendar={getClientCalendar(calendar)} data={data} />
  );
};
