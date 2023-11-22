import { FC, ReactNode } from "react";
import { DateTime } from "luxon";
import Risuja from "../hatches/Risuja";

type Props = {
  day: number;
  children?: ReactNode;
};

const CalendarWall: FC<Props> = ({ day, children }) => {
  const openableAt = DateTime.local(2023, 11, day, 5, {
    zone: "Europe/Helsinki"
  });

  console.log("I AM OPENABLE AT", openableAt.toISO());

  const now = DateTime.utc();

  if (now < openableAt) {
    return <Risuja />;
  }

  return <>{children}</>;
};

export default CalendarWall;
