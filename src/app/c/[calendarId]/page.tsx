export const metadata = {
  title: "Pekkiksen koodijoulukalenteri 2023"
};

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{
    calendarId: string;
  }>;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function CalendarPage({ params }: Props) {
  return null;
}
