import {
  parseAsArrayOf,
  parseAsInteger,
  useQueryState
} from "next-usequerystate";
import { useCallback, useMemo } from "react";

const useOpenHatches = () => {
  const [openHatches, setOpenHatches] = useQueryState(
    "hatches",
    parseAsArrayOf(parseAsInteger).withDefault([])
  );

  const toggleHatch = useCallback(
    (day: number) => {
      const isOpen = openHatches.includes(day);

      if (isOpen) {
        setOpenHatches(openHatches.filter((oh) => oh !== day));
      } else {
        setOpenHatches([...openHatches, day]);
      }
    },
    [openHatches, setOpenHatches]
  );

  const searchParams = useMemo(() => {
    const sp = new URLSearchParams();
    sp.set("hatches", openHatches.map((n) => n.toString()).join(","));

    return sp;
  }, [openHatches]);

  return { openHatches, setOpenHatches, toggleHatch, searchParams };
};

export default useOpenHatches;
