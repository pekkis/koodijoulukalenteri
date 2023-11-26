import { JsxBlockType } from "@/services/hatch";
import { FC } from "react";

type Props = {
  block: JsxBlockType;
};

const JsxBlock: FC<Props> = ({ block }) => {
  const { Component } = block;
  return (
    <>
      <Component />
    </>
  );
};

export default JsxBlock;
