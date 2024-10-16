"use client";

import useOpenHatches from "@/hooks/useOpenHatches";
import Link from "next/link";
import { FC, ReactNode } from "react";
import * as styles from "./OuterLayer.css";
import { ClientCalendarType } from "@/services/calendar";

type Props = {
  calendar: ClientCalendarType;
  day: number;
  children: ReactNode;
};

const OuterLayer: FC<Props> = ({ calendar, day, children }) => {
  const { openHatches, searchParams } = useOpenHatches();

  const url = `/c/${calendar.id}/hatch/${day}?${searchParams.toString()}`;

  const amIOpen = openHatches.includes(day);

  return (
    <Link
      tabIndex={amIOpen ? day * 100 + 10 : -1}
      href={url}
      scroll={false}
      className={styles.outerLayer}
      onClick={() => {
        if (typeof window === "undefined") {
          return;
        }
      }}
    >
      {children}
    </Link>
  );
};

export default OuterLayer;
