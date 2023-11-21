"use client";

import { FC, ReactNode } from "react";
import * as styles from "./Hatch.css";
import cx from "clsx";

type Props = {
  number: number;
  className: string;
  children: ReactNode;
};

const Hatch: FC<Props> = ({ className, children, number }) => {
  const classes = cx(styles.hatch, className);

  return (
    <div
      role="button"
      tabIndex={number}
      onClick={() => {
        console.log("ACTICADO");
      }}
      className={classes}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          console.log("ACTIVADO");
        }
      }}
    >
      {children}
    </div>
  );
};

export default Hatch;
