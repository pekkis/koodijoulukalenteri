import { DateTime } from "luxon";
import { FC } from "react";

const Debug: FC = () => {
  const then = DateTime.utc(2023, 12, 1);
  const now = DateTime.utc();

  const diff = then.diff(now, "minutes");

  return (
    <div>
      <div>seconds from beginning: {diff.minutes}</div>
      <div>current date: {process.env.NEXT_PUBLIC_NOW}</div>
      {process.env.NODE_ENV}
    </div>
  );
};

export default Debug;
