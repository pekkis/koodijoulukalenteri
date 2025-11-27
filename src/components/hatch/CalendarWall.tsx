import { FC } from "react";
import HatchPeek from "../hatch-renderer/HatchPeek";
import { getClientCalendar } from "@/services/calendar";
import { InnerHatchProps } from "@/components/hatch/hatch-types";

const CalendarWall: FC<InnerHatchProps> = async ({ calendar, hatch }) => {
  const data = await calendar.getHatchData(hatch);

  if (!data) {
    return null;
  }

  return <HatchPeek calendar={getClientCalendar(calendar)} data={data} />;
};

export default CalendarWall;
