import { stackClass } from "@/components/ui/Stack.css";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Stack: FC<Props> = ({ children }) => {
  return <div className={stackClass}>{children}</div>;
};
