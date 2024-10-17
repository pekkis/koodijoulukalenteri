"use client";

import useNaughtiness from "@/hooks/useNaughtiness";
import { FC } from "react";
import Progress from "../ui/Progress";
import * as styles from "./NaughtyOrNice.css";
import { ClientCalendarType } from "@/services/calendar";

type Props = {
  calendar: ClientCalendarType;
};

const NaughtyOrNice: FC<Props> = ({ calendar }) => {
  const { naughtinessLevel, naughtiness, nextNaughtinessLevel } =
    useNaughtiness(calendar);

  const myExp = (naughtiness || 0) - naughtinessLevel.requiredNaughtiness;

  const reverseExp =
    nextNaughtinessLevel.requiredNaughtiness -
    naughtinessLevel.requiredNaughtiness -
    myExp;

  return (
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
  );
};

export default NaughtyOrNice;
