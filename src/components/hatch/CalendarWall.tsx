import { FC } from "react";
import { getHatchData } from "@/services/hatch";
import HatchPeek from "../hatch-renderer/HatchPeek";

type Props = {
  day: number;
};

const CalendarWall: FC<Props> = async ({ day }) => {
  const data = await getHatchData(day);

  return <HatchPeek data={data} />;
};

export default CalendarWall;
