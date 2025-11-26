"use client";

import { DateTime } from "luxon";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";

type Props = {
  serverTime: string;
};

const getIntervalLength = (hour: number) => {
  if (hour === 4 || hour === 5) {
    return 60000;
  }

  return 60000 * 10;
};

const Refresher: FC<Props> = ({ serverTime }) => {
  const router = useRouter();

  useEffect(() => {
    const now = DateTime.fromISO(serverTime);
    const interval = getIntervalLength(now.hour);

    const to = setTimeout(() => {
      console.debug("Refreshed...");
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
