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
  const { naughtinessLevel, naughtiness, maxNaughtiness } =
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
          value={Math.max(0, maxNaughtiness - myNaughtiness)}
        />
      </div>
    </div>
  );
};

export default NaughtyOrNice;
