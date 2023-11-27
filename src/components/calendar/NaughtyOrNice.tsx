"use client";

import useNaughtiness from "@/hooks/useNaughtiness";
import cx from "clsx";
import { FC, ReactNode } from "react";
import Progress from "../ui/Progress";
import * as styles from "./NaughtyOrNice.css";

type Props = {
  children: ReactNode;
};

const NaughtyOrNice: FC<Props> = ({ children }) => {
  const { naughtinessLevel, naughtiness, nextNaughtinessLevel } =
    useNaughtiness();
  const classes = cx(styles.container, {
    [styles.christmasy]:
      naughtinessLevel.level === -1 ||
      naughtinessLevel.level === 0 ||
      naughtinessLevel.level === 1,
    [styles.naughty]: naughtinessLevel.level === 2,
    [styles.monster]: naughtinessLevel.level === 3,
    [styles.antichrist]: naughtinessLevel.level === 4,
    [styles.styranki]: naughtinessLevel.level === 5
  });

  const myExp = (naughtiness || 0) - naughtinessLevel.requiredNaughtiness;

  const reverseExp =
    nextNaughtinessLevel.requiredNaughtiness -
    naughtinessLevel.requiredNaughtiness -
    myExp;

  return (
    <div>
      <div className={styles.naughtinessLevel}>
        <div>
          Kiltteystaso: <strong>{naughtinessLevel.name}</strong>
        </div>
        <div>
          <Progress
            max={
              nextNaughtinessLevel.requiredNaughtiness -
              naughtinessLevel.requiredNaughtiness
            }
            value={reverseExp}
          />
        </div>
      </div>
      <div className={classes}>{children}</div>
    </div>
  );
};

export default NaughtyOrNice;
