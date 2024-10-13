import { ClientCalendarType } from "@/services/calendar";
import {
  getNaughtinessLevel,
  getNextNaughtinessLevel
} from "@/services/naughtiness";
import { getTime } from "@/services/time";
import { atom, useAtom } from "jotai";
import { DateTime } from "luxon";
import { useCallback, useEffect, useMemo } from "react";
import { useLocalStorage } from "usehooks-ts";

const naughtinessAtom = atom<number>(0);

const useNaughtiness = (calendar: ClientCalendarType) => {
  const key = `naughtiness-${calendar.id}`;

  const isInteractive = useMemo(() => {
    const isOpenAt = DateTime.fromISO(calendar.openAt);
    const now = getTime();

    return now > isOpenAt;
  }, [calendar.openAt]);

  const [localStorageNaughtiness, setLocalStorageNaughtiness] =
    useLocalStorage<number>(key, 0);

  const [naughtiness, setNaughtiness] = useAtom(naughtinessAtom);

  const effectiveNaughtiness = !isInteractive ? 0 : naughtiness;

  const addNaughtiness = useCallback(
    (add: number) => {
      setLocalStorageNaughtiness((prev) => {
        return prev + add;
      });
    },
    [setLocalStorageNaughtiness]
  );

  useEffect(() => {
    setNaughtiness(localStorageNaughtiness);
  }, [localStorageNaughtiness, setNaughtiness]);

  const naughtinessLevel = getNaughtinessLevel(calendar, effectiveNaughtiness);
  const nextNaughtinessLevel = getNextNaughtinessLevel(
    calendar,
    effectiveNaughtiness
  );

  return {
    naughtiness: effectiveNaughtiness,
    addNaughtiness,
    naughtinessLevel,
    nextNaughtinessLevel
  };
};

export default useNaughtiness;
