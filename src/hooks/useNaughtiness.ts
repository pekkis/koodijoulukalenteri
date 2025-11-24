import { ClientCalendarType, NaughtinessLevel } from "@/services/calendar";
import {
  getMaxNaughtiness,
  getNaughtinessLevel,
  getNextNaughtinessLevel
} from "@/services/naughtiness";
import { getTime } from "@/services/time";
import { DateTime } from "luxon";
import { useCallback, useMemo } from "react";
import { useLocalStorage } from "@mantine/hooks";

const useNaughtiness = (calendar: ClientCalendarType) => {
  const key = `naughtiness-${calendar.id}`;

  const isInteractive = useMemo(() => {
    const isOpenAt = DateTime.fromISO(calendar.openAt);
    const now = getTime();

    return now > isOpenAt;
  }, [calendar.openAt]);

  const [localStorageNaughtiness, setLocalStorageNaughtiness] =
    useLocalStorage<number>({
      key,
      defaultValue: 0
    });

  const addNaughtiness = useCallback(
    (add: number) => {
      setLocalStorageNaughtiness((prev) => {
        return Math.max(0, prev + add);
      });
    },
    [setLocalStorageNaughtiness]
  );

  const effectiveNaughtiness = !isInteractive ? 0 : localStorageNaughtiness;

  const naughtinessLevel = getNaughtinessLevel(calendar, effectiveNaughtiness);
  const nextNaughtinessLevel = getNextNaughtinessLevel(
    calendar,
    effectiveNaughtiness
  );

  const firstMediumLevel = calendar.naughtinessLevels.find(
    (level) => level.range === "medium"
  ) as NaughtinessLevel;
  const firstLowLevel = calendar.naughtinessLevels.find(
    (level) => level.range === "low"
  ) as NaughtinessLevel;

  const ret = {
    naughtiness: effectiveNaughtiness,
    addNaughtiness,
    naughtinessLevel,
    nextNaughtinessLevel,
    maxNaughtiness: getMaxNaughtiness(calendar),
    range: {
      high: firstMediumLevel?.requiredNaughtiness - 1,
      low: firstLowLevel.requiredNaughtiness
    }
  };

  return ret;
};

export default useNaughtiness;
