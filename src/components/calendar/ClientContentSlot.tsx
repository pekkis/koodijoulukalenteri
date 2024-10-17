import {
  CalendarType,
  ClientCalendarType,
  getClientCalendar
} from "@/services/calendar";
import { getTime } from "@/services/time";
import { FC, useMemo } from "react";

type Props = {
  calendar: CalendarType;
  ClientComponent: FC<{ calendar: ClientCalendarType; isOpen?: boolean }>;
};

export const ClientContentSlot: FC<Props> = ({ calendar, ClientComponent }) => {
  const now = getTime();
  const isOpen = now > calendar.openAt;

  const clientCalendar = useMemo(() => getClientCalendar(calendar), [calendar]);
  return <ClientComponent calendar={clientCalendar} isOpen={isOpen} />;
};
