"use client";

import Hatch from "@/components/hatch/Hatch";
import { HatchProps } from "@/components/hatch/hatch-types";
import useNaughtiness from "@/hooks/useNaughtiness";
import { FC } from "react";

export const ExpeditionHatchComponent: FC<HatchProps> = ({
  position,
  day,
  calendar,
  isInteractive,
  children,
  isOpenable = false
}) => {
  const { naughtinessLevel } = useNaughtiness(calendar);

  if (naughtinessLevel.level > 1) {
    return null;
  }

  return (
    <Hatch
      position={position}
      day={day}
      calendar={calendar}
      isInteractive={isInteractive}
      isOpenable={isOpenable}
    >
      {children}
    </Hatch>
  );
};
