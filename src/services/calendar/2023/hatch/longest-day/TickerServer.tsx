import { DateTime } from "luxon";
import Ticker from "./Ticker";

const TickerServer = () => {
  const serverTime = DateTime.utc().toISO() as string;

  return <Ticker serverTime={serverTime} />;
};

export default TickerServer;
