import { rowClass, stackClass, svelteClass } from "@/components/ui/Stack.css";
import clsx from "clsx";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  row?: boolean;
  svelte?: boolean;
};

export const Stack: FC<Props> = ({ row = false, svelte = false, children }) => {
  return (
    <div className={clsx(stackClass, row && rowClass, svelte && svelteClass)}>
      {children}
    </div>
  );
};
