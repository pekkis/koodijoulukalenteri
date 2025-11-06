import { HatchConfig } from "@/services/calendar";
import { DateTime, DurationLike } from "luxon";

export const isHatchOpenable = (hatch: HatchConfig): boolean => {
  if (process.env.DEBUG) {
    return true;
  }

  const now = getTime();

  return now >= hatch.openableAt;
};

export const getTime = (): DateTime => {
  const now = DateTime.utc();

  if (!process.env.NEXT_PUBLIC_OFFSET) {
    return now;
  }

  try {
    console.log("OFFSET", process.env.NEXT_PUBLIC_OFFSET);

    const offset = JSON.parse(process.env.NEXT_PUBLIC_OFFSET) as DurationLike;
    return now.plus(offset);
  } catch (e) {
    console.log(e);
    return now;
  }
};
