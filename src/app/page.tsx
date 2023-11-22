import Calendar from "@/components/calendar/Calendar";

export const metadata = {
  title: "Pekkiksen koodijoulukalenteri 2023"
};

export const dynamic = "force-dynamic";

export default async function IndexPage() {
  return <Calendar />;
}
