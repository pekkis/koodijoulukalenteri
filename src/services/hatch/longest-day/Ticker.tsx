"use client";

import { DateTime } from "luxon";
import { FC, useEffect, useState } from "react";

type Props = {
  serverTime: string;
};

const Ticker: FC<Props> = ({ serverTime }) => {
  const [now, setNow] = useState(DateTime.fromISO(serverTime).setLocale("fi"));

  useEffect(() => {
    const i = setInterval(() => {
      setNow(DateTime.local().setLocale("fi"));
    }, 1000);

    return () => {
      clearInterval(i);
    };
  });

  const theMoment = DateTime.local(2023, 12, 6, 21, 52, {
    zone: "Europe/Helsinki"
  }).setLocale("fi");

  if (theMoment > now) {
    const diff = theMoment.diff(now, ["days", "hours", "minutes", "seconds"]);
    return <p>Talvipäivänseisaukseen on {diff.toHuman()}.</p>;
  }

  const diff = now.diff(theMoment, ["days", "hours", "minutes", "seconds"]);
  return <p>Talvipäivänseisauksesta on {diff.toHuman()}.</p>;
};

export default Ticker;
