"use server";

import { getCalendar } from "@/services/calendar";

export async function calculateNaughtinessIncrease(
  calendarId: string,
  day: number,
  openHatches: number[]
) {
  const calendar = await getCalendar(calendarId);
  if (!calendar) {
    return 0;
  }

  const hatch = calendar.getHatchData();

  const hatches;

  return 10;
}
