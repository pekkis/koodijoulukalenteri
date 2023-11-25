export const getNaughtiness = (): number => {
  if (typeof window === "undefined") {
    return 0;
  }

  return parseInt(window.localStorage.getItem("naughtiness") || "0", 10);
};

export const syncNaughtiness = (amount: number): void => {
  if (typeof window === "undefined") {
    return;
  }

  console.log("SYNK SYNK", amount);

  window.localStorage.setItem("naughtiness", amount.toString());
};
