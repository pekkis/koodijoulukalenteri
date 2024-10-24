import { CalendarType } from "@/services/calendar";
import { calendar as ogCalendar } from "@/services/calendar/2023/calendar";

const description = `Yleisön pyynnöstä painatin uuden, rajoitetun erän vuoden 2023 koodijoulukalenteria. Se
on pelattavissa alkuperäistä mahdollisimman pitkälle matkivassa muodossa joulukuussa 2024.`;

export const calendar = {
  ...ogCalendar,
  title: "koodi&shy;joulu&shy;kalenteri 2023, 2. painos",
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
