import { DateTime } from "luxon";

export const isHatchOpenable = (day: number): boolean => {
  const openableAt = DateTime.local(2023, 11, day, 5, {
    zone: "Europe/Helsinki"
  });

  const now = DateTime.utc();

  return now >= openableAt;
};
