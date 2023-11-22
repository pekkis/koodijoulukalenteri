import { getHatchData } from "@/services/hatch";

export const dynamic = "force-dynamic"; // defaults to force-static

type Props = {
  params: {
    hatchId: string;
  };
};

export async function GET(request: Request, { params }: Props) {
  const data = await getHatchData(parseInt(params.hatchId));

  return Response.json(data);
}
