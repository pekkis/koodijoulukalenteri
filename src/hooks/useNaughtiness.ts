import { syncNaughtiness, getNaughtiness } from "@/services/storage";
import { useCallback, useEffect } from "react";
import { atom, useAtom } from "jotai";

const naughtinessAtom = atom(0);

const useNaughtiness = () => {
  const [naughtiness, setNaughtiness] = useAtom(naughtinessAtom);

  const addNaughtiness = useCallback(
    (amount: number) => {
      setNaughtiness(getNaughtiness() + amount);
    },
    [setNaughtiness]
  );

  useEffect(() => {
    if (!naughtiness) {
      return;
    }
    syncNaughtiness(naughtiness);
  }, [naughtiness]);

  useEffect(() => {
    const t = setTimeout(() => {
      setNaughtiness(getNaughtiness());
    }, 5000);

    return () => {
      clearTimeout(t);
    };
  }, [setNaughtiness]);

  console.log("NAUGHTINESSSSSS", naughtiness);

  return {
    naughtiness,
    addNaughtiness
  };
};

export default useNaughtiness;
