import { getTime } from "@/services/time";

export const dynamic = "force-dynamic";

export async function GET() {
  const data = getTime();

  return Response.json(data.setZone("Europe/Helsinki").setLocale("fi").toISO());
}
