import { DateTime } from "luxon";

export const isHatchOpenable = (day: number): boolean => {
  if (process.env.DEBUG) {
    return true;
  }

  const openableAt = DateTime.local(2023, 11, day, 5, {
    zone: "Europe/Helsinki"
  });

  const now = DateTime.utc();

  return now >= openableAt;
};
