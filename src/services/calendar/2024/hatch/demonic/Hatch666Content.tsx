"use client";

import Button from "@/components/ui/Button";
import useNaughtiness from "@/hooks/useNaughtiness";
import { ClientCalendarType } from "@/services/calendar";
import { FC } from "react";

type Props = {
  calendar: ClientCalendarType;
};

const Hatch666Content: FC<Props> = ({ calendar }) => {
  const { addNaughtiness } = useNaughtiness(calendar);

  return (
    <p>
      <Button
        block
        onClick={() => {
          addNaughtiness(-Infinity);
        }}
      >
        Nöyrry ja ano anteeksiantoa
      </Button>
    </p>
  );
};

export default Hatch666Content;
