export const dynamic = "force-dynamic"; // defaults to force-static

type Props = {
  params: {
    hatchId: string;
  };
};

export async function GET(request: Request, { params }: Props) {
  return Response.json({
    data: params.hatchId
  });
}
