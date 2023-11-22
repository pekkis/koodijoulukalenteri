import { FC, ReactNode } from "react";
import { getHatchData } from "@/services/hatch";
import HatchPeek from "../hatch-renderer/HatchPeek";

type Props = {
  day: number;
  children?: ReactNode;
};

const CalendarWall: FC<Props> = async ({ day }) => {
  const data = await getHatchData(day);

  return <HatchPeek day={day} data={data} />;
};

export default CalendarWall;
