"use client";

import { getTime } from "@/services/time";
import { DateTime } from "luxon";
import { useRouter } from "next/navigation";
import { FC, useCallback, useEffect } from "react";

type Props = {
  serverTime: string;
};

const getIntervalLength = (hour: number, minute: number) => {
  if (hour === 4 && minute >= 50) {
    return 60000;
  }

  if (hour === 4 && minute >= 30) {
    return 60000 * 20;
  }

  if (hour === 4) {
    return 60000 * 30;
  }

  return 60000 * 60;
};

const Refresher: FC<Props> = ({ serverTime }) => {
  const router = useRouter();

  const theRefresher = useCallback(() => {
    const now = getTime();
    const serverNow = DateTime.fromISO(serverTime);
    const diff = now.diff(serverNow, "seconds");
    console.log("DIFF FROM LAST REFRESH", diff.seconds);

    if (Math.abs(diff.seconds) > 120) {
      console.log("DID A REFRESH!");
      router.refresh();
    }
  }, [serverTime, router]);

  useEffect(() => {
    const ctrl = new AbortController();

    document.addEventListener(
      "visibilitychange",
      () => {
        if (!document.hidden) {
          theRefresher();
        }
      },
      {
        signal: ctrl.signal
      }
    );

    window.addEventListener(
      "focus",
      () => {
        theRefresher();
      },
      { signal: ctrl.signal }
    );

    return () => {
      ctrl.abort("because I'm worth it");
    };
  }, [serverTime, theRefresher]);

  useEffect(() => {
    const now = DateTime.fromISO(serverTime).setZone("Europe/Helsinki");

    const interval = getIntervalLength(now.hour, now.minute);

    console.log({
      now: now.toLocaleString(DateTime.DATETIME_MED),
      nextRefresh: interval
    });

    const to = setTimeout(() => {
      console.debug("Refreshed...", now.toLocaleString(DateTime.DATETIME_MED));
      router.refresh();
    }, interval);

    return () => {
      clearTimeout(to);
    };
  }, [serverTime, router]);

  if (!process.env.NEXT_PUBLIC_DEBUG) {
    return null;
  }

  return (
    <div>
      <div>last refresh: {serverTime}</div>
    </div>
  );
};

export default Refresher;
