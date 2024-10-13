import { CalendarType } from "@/services/calendar";
import { calendar as ogCalendar } from "@/services/calendar/2023/calendar";

const description = `Yleisön pyynnöstä painatimme uuden, rajoitetun erän vuoden 2003 koodijoulukalenteria. Se
on pelattavavissa lähes alkuperäisessä muodossaan joulukuussa 2024.`;

export const calendar = {
  ...ogCalendar,
  title: "koodijoulukalenteri 2023, 2. painos",
  year: 2024,
  id: "2023-redux",

  description,

  openAt: ogCalendar.openAt.set({ year: 2024 }),

  hatches: ogCalendar.hatches.map((hatch) => {
    return {
      ...hatch,
      openableAt: hatch.openableAt.set({ year: 2024 })
    };
  })
} satisfies CalendarType;