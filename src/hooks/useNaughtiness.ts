import { ClientCalendarType } from "@/services/calendar";
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

  const effectiveNaughtiness = !isInteractive ? 0 : localStorageNaughtiness;

  const addNaughtiness = useCallback(
    (add: number) => {
      setLocalStorageNaughtiness((prev) => {
        return prev + add;
      });
    },
    [setLocalStorageNaughtiness]
  );

  const naughtinessLevel = getNaughtinessLevel(calendar, effectiveNaughtiness);
  const nextNaughtinessLevel = getNextNaughtinessLevel(
    calendar,
    effectiveNaughtiness
  );

  const ret = {
    naughtiness: effectiveNaughtiness,
    addNaughtiness,
    naughtinessLevel,
    nextNaughtinessLevel,
    maxNaughtiness: getMaxNaughtiness(calendar)
  };

  return ret;
};

export default useNaughtiness;
