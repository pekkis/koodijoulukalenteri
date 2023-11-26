import { useCallback, useEffect } from "react";

const useKeyPress = (key: string, callback: () => void) => {
  const listener = useCallback(
    (e: KeyboardEvent) => {
      if (e.key !== key) {
        return;
      }

      callback();
    },
    [key, callback]
  );

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [listener]);
};

export default useKeyPress;
