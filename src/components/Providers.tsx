"use client";

import { FC, ReactNode, useMemo } from "react";
import { createStore, Provider } from "jotai";
import { ClientCalendarType } from "@/services/calendar";

type Props = {
  calendar: ClientCalendarType;
  children: ReactNode;
};

export const Providers: FC<Props> = ({ calendar, children }) => {
  const store = useMemo(() => {
    return createStore();
  }, [calendar.id]);

  return <Provider store={store}>{children}</Provider>;
};
