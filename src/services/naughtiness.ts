export const getNaughtinessFromStorage = (): number => {
  if (typeof window === "undefined") {
    return 0;
  }

  return parseInt(window.localStorage.getItem("naughtiness") || "0", 10);
};

export const syncNaughtinessToStorage = (amount: number): void => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem("naughtiness", amount.toString());
};

type NaughtinessLevel = {
  level: number;
  requiredNaughtiness: number;
  name: string;
};

export const NAUGHTINESS_MAX = 5000;

const naughtinessLevels: NaughtinessLevel[] = [
  {
    level: -1,
    requiredNaughtiness: 0,
    name: "tuntematon"
  },
  {
    level: 0,
    requiredNaughtiness: 0,
    name: "viaton"
  },
  {
    level: 1,
    requiredNaughtiness: 1,
    name: "kiltti"
  },
  {
    level: 2,
    requiredNaughtiness: 500,
    name: "paatunut"
  },
  {
    level: 3,
    requiredNaughtiness: 1500,
    name: "hirviö"
  },
  {
    level: 4,
    requiredNaughtiness: NAUGHTINESS_MAX,
    name: "pelsepuupi"
  }
  /*
  {
    level: 5,
    requiredNaughtiness: NAUGHTINESS_MAX,
    name: "styranki"
  }
  */
];

export const getNaughtinessLevel = (
  naughtiness: number | undefined
): NaughtinessLevel => {
  if (naughtiness === undefined) {
    return naughtinessLevels[0];
  }

  const naughtinessLevel = naughtinessLevels.findLast((nl) => {
    return naughtiness >= nl.requiredNaughtiness;
  });

  if (!naughtinessLevel) {
    return naughtinessLevels[0];
  }

  return naughtinessLevel;
};

export const getNextNaughtinessLevel = (
  naughtiness: number | undefined
): NaughtinessLevel => {
  if (naughtiness === undefined) {
    return naughtinessLevels[1];
  }

  const naughtinessLevel = naughtinessLevels.findLastIndex((nl) => {
    return naughtiness >= nl.requiredNaughtiness;
  });

  if (!naughtinessLevel) {
    return naughtinessLevels[1];
  }

  return (
    naughtinessLevels[naughtinessLevel + 1] ||
    naughtinessLevels[naughtinessLevel]
  );
};
