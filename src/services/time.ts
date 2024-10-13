import { HatchConfig } from "@/services/calendar";
import { DateTime } from "luxon";

export const isHatchOpenable = (hatch: HatchConfig): boolean => {
  if (process.env.DEBUG) {
    return true;
  }

  const now = getTime();

  return now >= hatch.openableAt;
};

export const getTime = (): DateTime => {
  if (!process.env.NEXT_PUBLIC_NOW) {
    return DateTime.utc();
  }

  return DateTime.fromISO(process.env.NEXT_PUBLIC_NOW);
};
