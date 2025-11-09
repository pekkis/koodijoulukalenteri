"use client";

import JingleBells from "@/components/calendar/JingleBells";
import NaughtyOrNice from "@/components/calendar/NaughtyOrNice";
import { ClientCalendarType } from "@/services/calendar";
import {
  flexxerClass,
  itemClass
} from "@/services/calendar/2025/slots/ControlsSlotContent.css";
import { FC } from "react";

type Props = {
  calendar: ClientCalendarType;
  isOpen?: boolean;
};

export const ControlsSlotContent: FC<Props> = ({ calendar }) => {
  return (
    <div className={flexxerClass}>
      <div className={itemClass}>
        <JingleBells
          calendar={calendar}
          isInteractive
          pausedTitle="Pimpeli pompeli"
          playingTitle="Pysäytä pompeli"
        />
      </div>
      <div className={itemClass}>
        <NaughtyOrNice calendar={calendar} />
      </div>
    </div>
  );
};
