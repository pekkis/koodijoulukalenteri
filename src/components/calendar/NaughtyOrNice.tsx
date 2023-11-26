"use client";

import { FC, ReactNode } from "react";
import * as styles from "./NaughtyOrNice.css";
import cx from "clsx";
import useNaughtiness from "@/hooks/useNaughtiness";
import { NAUGHTINESS_MAX } from "@/services/naughtiness";
import Progress from "../ui/Progress";

type Props = {
  children: ReactNode;
};

const NaughtyOrNice: FC<Props> = ({ children }) => {
  const { naughtinessLevel, naughtiness } = useNaughtiness();
  const classes = cx(styles.container, {
    [styles.christmasy]:
      naughtinessLevel.level === -1 ||
      naughtinessLevel.level === 0 ||
      naughtinessLevel.level === 1,
    [styles.naughty]: naughtinessLevel.level === 2,
    [styles.monster]: naughtinessLevel.level === 3,
    [styles.styranki]: naughtinessLevel.level === 4
  });

  const naughtinessProgress = Math.max(NAUGHTINESS_MAX - (naughtiness || 0), 0);

  return (
    <div>
      <div className={styles.naughtinessLevel}>
        <div>
          Kiltteystaso: <strong>{naughtinessLevel.name}</strong>
        </div>
        <div>
          <Progress max={NAUGHTINESS_MAX} value={naughtinessProgress} />
        </div>
      </div>
      <div className={classes}>{children}</div>
    </div>
  );
};

export default NaughtyOrNice;
