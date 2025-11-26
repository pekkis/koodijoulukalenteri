import { CalendarType } from "@/services/calendar";
import { getTime } from "@/services/time";
import { DateTime } from "luxon";
import { FC } from "react";

type Props = {
  calendar: CalendarType;
};

const Debug: FC<Props> = ({ calendar }) => {
  const then = calendar.openAt;

  const now = getTime();

  const diff = then.diff(now, "minutes");

  const time = getTime();

  return (
    <div>
      <div>minutes from beginning: {diff.minutes}</div>
      <div>time: {time.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS)}</div>
      {process.env.NODE_ENV}
    </div>
  );
};

export default Debug;
