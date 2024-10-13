"use client";

import useNaughtiness from "@/hooks/useNaughtiness";
import cx from "clsx";
import { FC, useEffect, useState } from "react";
import { PiPentagramBold } from "react-icons/pi";
import Hatch, { HatchProps } from "../hatch/Hatch";
import * as styles from "./EscapeHatch.css";

import OuterLayer from "../hatch-renderer/OuterLayer";
import useOpenHatches from "@/hooks/useOpenHatches";

const InnerEscapeHatch: FC<{
  position: HatchProps["position"];
  calendar: HatchProps["calendar"];
  day: HatchProps["day"];
  isInteractive?: HatchProps["isInteractive"];
}> = ({ position, calendar, day, isInteractive }) => {
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
      isOpenable={false}
      day={day}
      position={position}
      className={classes}
      naughtinessIncrease={1000 * openHatches.length}
      isInteractive={isInteractive}
      isDark
    >
      <OuterLayer calendar={calendar} day={666}>
        <PiPentagramBold className={styles.insides} />
      </OuterLayer>
    </Hatch>
  );
};

const EscapeHatch: FC<HatchProps> = ({
  position,
  day,
  calendar,
  isInteractive
}) => {
  const { naughtinessLevel } = useNaughtiness(calendar);

  if (naughtinessLevel.level < 4) {
    return null;
  }

  return (
    <InnerEscapeHatch
      position={position}
      day={day}
      calendar={calendar}
      isInteractive={isInteractive}
    />
  );
};

export default EscapeHatch;
