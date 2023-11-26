import {
  syncNaughtinessToStorage,
  getNaughtinessFromStorage,
  getNaughtinessLevel,
  getNextNaughtinessLevel
} from "@/services/naughtiness";
import { useCallback, useEffect } from "react";
import { atom, useAtom } from "jotai";

const naughtinessAtom = atom<number | undefined>(undefined);
const isNaughtinessDefinedAtom = atom(false);

const useNaughtiness = () => {
  const [naughtiness, setNaughtiness] = useAtom(naughtinessAtom);
  const [isNaughtinessDefined, setIsNaughtinessDefined] = useAtom(
    isNaughtinessDefinedAtom
  );

  const addNaughtiness = useCallback(
    (amount: number) => {
      setIsNaughtinessDefined(true);
      setNaughtiness(Math.max(0, getNaughtinessFromStorage() + amount));
    },
    [setNaughtiness, setIsNaughtinessDefined]
  );

  useEffect(() => {
    if (!isNaughtinessDefined || naughtiness === undefined) {
      return;
    }
    syncNaughtinessToStorage(naughtiness);
  }, [naughtiness, isNaughtinessDefined]);

  useEffect(() => {
    setNaughtiness(getNaughtinessFromStorage());
    setIsNaughtinessDefined(true);
  });

  const naughtinessLevel = getNaughtinessLevel(naughtiness);
  const nextNaughtinessLevel = getNextNaughtinessLevel(naughtiness);

  return {
    naughtiness,
    addNaughtiness,
    naughtinessLevel,
    nextNaughtinessLevel
  };
};

export default useNaughtiness;
