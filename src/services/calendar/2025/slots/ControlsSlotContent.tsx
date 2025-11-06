"use client";

import JingleBells from "@/components/calendar/JingleBells";
import NaughtyOrNice from "@/components/calendar/NaughtyOrNice";
import { ClientCalendarType } from "@/services/calendar";
import { FC } from "react";

type Props = {
  calendar: ClientCalendarType;
  isOpen?: boolean;
};

export const ControlsSlotContent: FC<Props> = ({
  calendar,
  isOpen = false
}) => {
  return (
    <>
      <JingleBells calendar={calendar} isInteractive={isOpen} />

      <NaughtyOrNice calendar={calendar} />
    </>
  );
};
