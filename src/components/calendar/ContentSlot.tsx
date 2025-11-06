import { CalendarType, ContentSlotName } from "@/services/calendar";
import { FC } from "react";

type Props = {
  slot: ContentSlotName;
  calendar: CalendarType;
};

export const ContentSlot: FC<Props> = ({ calendar, slot }) => {
  const Component = calendar.getSlotComponent(slot);

  // eslint-disable-next-line react-hooks/static-components
  return <Component calendar={calendar} />;
};
