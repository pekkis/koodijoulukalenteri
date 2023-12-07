"use client";

import { getTime } from "@/services/calendar";
import { DateTime } from "luxon";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";

type Props = {
  serverTime: string;
};

const getIntervalLength = (hour: number) => {
  if (hour === 4 || hour === 5) {
    return 1000;
  }

  return 60000;
};

const Refresher: FC<Props> = ({ serverTime }) => {
  const [lastRefresh, setLastRefresh] = useState(DateTime.fromISO(serverTime));
  const [now, setNow] = useState(DateTime.fromISO(serverTime));

  useEffect(() => {
    const i = setInterval(() => {
      setNow(getTime().setZone("Europe/Helsinki"));
    }, getIntervalLength(now.hour));

    return () => {
      clearInterval(i);
    };
  }, [now.hour]);

  const router = useRouter();

  useEffect(() => {
    if (now.setZone("Europe/Helsinki").hour === 5 && now.second >= 5) {
      if (lastRefresh.setZone("Europe/Helsinki").hour !== 5) {
        router.refresh();
        setLastRefresh(getTime().setZone("Europe/Helsinki"));
      }
    }
  }, [now, lastRefresh, router]);

  if (!process.env.NEXT_PUBLIC_DEBUG_OFFSET) {
    return null;
  }

  return (
    <div>
      <div>now {now.setLocale("fi").setZone("Europe/Helsinki").toISO()}</div>
      <div>
        last refresh{" "}
        {lastRefresh.setLocale("fi").setZone("Europe/Helsinki").toISO()}
      </div>
    </div>
  );
};

export default Refresher;
