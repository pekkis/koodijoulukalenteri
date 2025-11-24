"use client";

import useNaughtiness from "@/hooks/useNaughtiness";
import { FC } from "react";
import * as styles from "./NaughtyOrNice.css";
import { ClientCalendarType } from "@/services/calendar";
import Progress from "@/components/ui/Progress";

type Props = {
  calendar: ClientCalendarType;
};

const NaughtyOrNice: FC<Props> = ({ calendar }) => {
  const { naughtinessLevel, naughtiness, maxNaughtiness, range } =
    useNaughtiness(calendar);

  const myNaughtiness = naughtiness || 0;

  return (
    <div className={styles.naughtinessLevel}>
      <div>
        Kiltteystaso: <strong>{naughtinessLevel.name}</strong>
      </div>
      <div>
        <Progress
          max={maxNaughtiness}
          optimum={maxNaughtiness}
          high={maxNaughtiness - range.high}
          low={maxNaughtiness - range.low}
          value={Math.max(0, maxNaughtiness - myNaughtiness)}
        />
      </div>
    </div>
  );
};

export default NaughtyOrNice;
