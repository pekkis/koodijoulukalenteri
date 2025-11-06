import { ClientContentSlot } from "@/components/calendar/ClientContentSlot";
import { CalendarType } from "@/services/calendar";
import { ControlsSlotContent } from "@/services/calendar/2025/slots/ControlsSlotContent";
import { FC } from "react";

type Props = {
  calendar: CalendarType;
};

export const ControlsSlot: FC<Props> = ({ calendar }) => {
  return (
    <ClientContentSlot
      calendar={calendar}
      ClientComponent={ControlsSlotContent}
    />
  );
};
