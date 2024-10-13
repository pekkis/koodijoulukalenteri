import { CalendarType, getClientCalendar } from "@/services/calendar";
import { JsxBlockType } from "@/services/hatch";
import { FC } from "react";

type Props = {
  calendar: CalendarType;
  block: JsxBlockType;
};

const JsxBlock: FC<Props> = ({ calendar, block }) => {
  const { Component } = block;
  return (
    <>
      <Component calendar={getClientCalendar(calendar)} />
    </>
  );
};

export default JsxBlock;
