import Ticker from "./Ticker";
import { getTime } from "@/services/time";

const TickerServer = () => {
  const serverTime = getTime().toISO() as string;

  return <Ticker serverTime={serverTime} />;
};

export default TickerServer;
