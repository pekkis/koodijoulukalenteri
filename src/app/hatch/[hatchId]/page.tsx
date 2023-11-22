import Calendar from "@/components/calendar/Calendar";
import Dialog from "@/components/dialog/Dialog";
import HatchRenderer from "@/components/hatch-renderer/HatchRenderer";
import { getHatchData } from "@/services/hatch";

type Props = {
  params: {
    hatchId: string;
  };
};

export default async function HatchPage({ params }: Props) {
  const data = await getHatchData(parseInt(params.hatchId));

  return (
    <>
      <Calendar />
      <Dialog>
        <HatchRenderer day={parseInt(params.hatchId)} data={data} />
      </Dialog>
    </>
  );
}
