"use client";

import useNaughtiness from "@/hooks/useNaughtiness";
import cx from "clsx";
import { FC, ReactNode, useEffect, useState } from "react";
import Hatch from "@/components/hatch/Hatch";
import * as styles from "./EscapeHatch.css";

import useOpenHatches from "@/hooks/useOpenHatches";
import { HatchProps } from "@/components/hatch/hatch-types";

const InnerEscapeHatch: FC<{
  position: HatchProps["position"];
  calendar: HatchProps["calendar"];
  day: HatchProps["day"];
  isInteractive?: HatchProps["isInteractive"];
  children: ReactNode;
}> = ({ position, calendar, day, isInteractive, children }) => {
  const [pulse, setPulse] = useState(false);
  const { openHatches } = useOpenHatches();

  useEffect(() => {
    const i = setInterval(() => {
      setPulse((p) => !p);
    }, 1000);

    return () => {
      clearInterval(i);
    };
  }, []);

  const classes = cx(styles.escapeHatch, {
    [styles.pulse1]: !pulse,
    [styles.pulse2]: pulse
  });

  return (
    <Hatch
      calendar={calendar}
      isOpenable={true}
      day={day}
      position={position}
      className={classes}
      naughtinessIncrease={1000 * openHatches.length}
      isInteractive={isInteractive}
      isDark
    >
      {children}
    </Hatch>
  );
};

const EscapeHatch: FC<HatchProps> = ({
  position,
  day,
  calendar,
  isInteractive,
  children
}) => {
  const { naughtinessLevel } = useNaughtiness(calendar);

  if (naughtinessLevel.level < 5) {
    return null;
  }

  return (
    <InnerEscapeHatch
      position={position}
      day={day}
      calendar={calendar}
      isInteractive={isInteractive}
    >
      {children}
    </InnerEscapeHatch>
  );
};

export default EscapeHatch;
