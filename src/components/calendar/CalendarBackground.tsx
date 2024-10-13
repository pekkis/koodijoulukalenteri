"use client";

import useNaughtiness from "@/hooks/useNaughtiness";
import cx from "clsx";
import { FC, ReactNode } from "react";
import * as styles from "./CalendarBackground.css";
import { ClientCalendarType } from "@/services/calendar";

type Props = {
  calendar: ClientCalendarType;
  children: ReactNode;
};

export const CalendarBackground: FC<Props> = ({ calendar, children }) => {
  const { naughtinessLevel } = useNaughtiness(calendar);

  const classes = cx(styles.container);

  const style = {
    backgroundImage: `url(${naughtinessLevel.backgroundImage})`
  };

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};
