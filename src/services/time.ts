import { HatchConfig } from "@/services/calendar";
import { DateTime, DurationLike } from "luxon";

export const isHatchOpenable = (hatch: HatchConfig): boolean => {
  const now = getTime();
  return now >= hatch.openableAt;
};

export const getTime = (): DateTime => {
  const now = DateTime.utc();

  if (!process.env.NEXT_PUBLIC_OFFSET) {
    return now;
  }

  try {
    const offset = JSON.parse(process.env.NEXT_PUBLIC_OFFSET) as DurationLike;
    return now.plus(offset);
  } catch {
    return now;
  }
};
