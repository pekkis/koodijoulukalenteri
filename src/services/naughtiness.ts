import { ClientCalendarType, NaughtinessLevel } from "@/services/calendar";
import { takeLast } from "remeda";

export const NAUGHTINESS_MAX = 5000;

export const getMaxNaughtiness = (calendar: ClientCalendarType): number => {
  const last = takeLast(calendar.naughtinessLevels, 1);

  if (last.length !== 1) {
    throw new Error("Something really bad happen!");
  }
  return last[0].requiredNaughtiness;
};

export const getNaughtinessLevel = (
  calendar: ClientCalendarType,
  naughtiness: number | undefined
): NaughtinessLevel => {
  if (naughtiness === undefined) {
    return calendar.naughtinessLevels[0];
  }

  const naughtinessLevel = calendar.naughtinessLevels.findLast((nl) => {
    return naughtiness >= nl.requiredNaughtiness;
  });

  if (!naughtinessLevel) {
    return calendar.naughtinessLevels[0];
  }

  return naughtinessLevel;
};

export const getNextNaughtinessLevel = (
  calendar: ClientCalendarType,
  naughtiness: number | undefined
): NaughtinessLevel => {
  if (naughtiness === undefined) {
    return calendar.naughtinessLevels[1];
  }

  const naughtinessLevel = calendar.naughtinessLevels.findLastIndex((nl) => {
    return naughtiness >= nl.requiredNaughtiness;
  });

  if (!naughtinessLevel) {
    return calendar.naughtinessLevels[1];
  }

  return (
    calendar.naughtinessLevels[naughtinessLevel + 1] ||
    calendar.naughtinessLevels[naughtinessLevel]
  );
};
