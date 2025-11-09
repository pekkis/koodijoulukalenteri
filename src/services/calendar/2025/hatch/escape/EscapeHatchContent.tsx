"use client";

import Button from "@/components/ui/Button";
import useNaughtiness from "@/hooks/useNaughtiness";
import { ClientCalendarType } from "@/services/calendar";
import { FC } from "react";

type Props = {
  calendar: ClientCalendarType;
};

export const EscapeHatchContent: FC<Props> = ({ calendar }) => {
  const { addNaughtiness } = useNaughtiness(calendar);

  return (
    <p>
      <Button
        block
        onClick={() => {
          addNaughtiness(-Infinity);
        }}
      >
        Myy sielusi
      </Button>
    </p>
  );
};
