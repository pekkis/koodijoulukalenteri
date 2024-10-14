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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calendar.id]);

  return <Provider store={store}>{children}</Provider>;
};
