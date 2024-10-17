import { CalendarType, ContentSlotName } from "@/services/calendar";
import { FC } from "react";

type Props = {
  slot: ContentSlotName;
  calendar: CalendarType;
};

export const ContentSlot: FC<Props> = ({ calendar, slot }) => {
  const Component = calendar.getSlotComponent(slot);

  return <Component calendar={calendar} />;
};
