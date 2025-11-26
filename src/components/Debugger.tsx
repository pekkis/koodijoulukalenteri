import {
  contentClass,
  debuggerClass,
  flexClass
} from "@/components/Debugger.css";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Debugger: FC<Props> = ({ children }) => {
  if (!process.env.NEXT_PUBLIC_DEBUG) {
    return children;
  }

  return (
    <div className={flexClass}>
      <div className={contentClass}></div>
      <div className={debuggerClass}>debugger</div>
    </div>
  );
};
