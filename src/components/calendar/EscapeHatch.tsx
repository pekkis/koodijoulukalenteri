"use client";

import useNaughtiness from "@/hooks/useNaughtiness";
import { getPosition } from "@/services/hatch";
import cx from "clsx";
import { FC, useEffect, useState } from "react";
import { PiPentagramBold } from "react-icons/pi";
import Hatch from "../hatch/Hatch";
import * as styles from "./EscapeHatch.css";

import OuterLayer from "../hatch-renderer/OuterLayer";

const EscapeHatch: FC = () => {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const i = setInterval(() => {
      setPulse((p) => !p);
    }, 1000);

    return () => {
      clearInterval(i);
    };
  }, []);

  const { naughtinessLevel } = useNaughtiness();

  if (naughtinessLevel.level < 3) {
    return null;
  }

  const classes = cx(styles.escapeHatch, {
    [styles.pulse1]: !pulse,
    [styles.pulse2]: pulse
  });

  return (
    <Hatch
      day={666}
      position={getPosition(26, 4, 5, 5)}
      className={classes}
      naughtinessIncrease={1000}
      isDark
    >
      <OuterLayer day={666}>
        <PiPentagramBold className={styles.insides} />
      </OuterLayer>
    </Hatch>
  );
};

export default EscapeHatch;
