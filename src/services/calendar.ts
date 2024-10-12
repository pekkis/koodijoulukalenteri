import { DateTime } from "luxon";

export const isHatchOpenable = (day: number): boolean => {
  if (process.env.DEBUG) {
    return true;
  }

  const openableAt = DateTime.local(2023, 12, day, 5, {
    zone: "Europe/Helsinki"
  });

  const now = getTime();

  return now >= openableAt;
};

export const getTime = (): DateTime => {
  if (!process.env.NEXT_PUBLIC_DEBUG_OFFSET) {
    return DateTime.utc();
  }

  return DateTime.utc().plus({
    minutes: parseInt(process.env.NEXT_PUBLIC_DEBUG_OFFSET)
  });
};
