import { getTime } from "@/services/time";
import { DateTime } from "luxon";
import { FC } from "react";

const Debug: FC = () => {
  const then = DateTime.utc(2023, 12, 1);
  const now = DateTime.utc();

  const diff = then.diff(now, "minutes");

  const time = getTime();

  return (
    <div>
      <div>seconds from beginning: {diff.minutes}</div>
      <div>time: {time.toLocaleString()}</div>
      {process.env.NODE_ENV}
    </div>
  );
};

export default Debug;
