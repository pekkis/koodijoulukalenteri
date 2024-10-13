import { FC } from "react";
import HatchPeek from "../hatch-renderer/HatchPeek";
import {
  CalendarType,
  getClientCalendar,
  HatchConfig
} from "@/services/calendar";

type Props = {
  calendar: CalendarType;
  hatch: HatchConfig;
};

const CalendarWall: FC<Props> = async ({ calendar, hatch }) => {
  const data = await calendar.getHatchData(hatch);

  if (!data) {
    return null;
  }

  return <HatchPeek calendar={getClientCalendar(calendar)} data={data} />;
};

export default CalendarWall;
