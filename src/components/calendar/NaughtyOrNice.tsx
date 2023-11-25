"use client";

import { FC, ReactNode } from "react";
import * as styles from "./NaughtyOrNice.css";
import cx from "clsx";
import useNaughtiness from "@/hooks/useNaughtiness";

type Props = {
  children: ReactNode;
};

const NaughtyOrNice: FC<Props> = ({ children }) => {
  const { naughtiness } = useNaughtiness();
  const isNaughty = naughtiness >= 5;
  const classes = cx(styles.container, { [styles.naughty]: isNaughty });

  return <div className={classes}>{children}</div>;
};

export default NaughtyOrNice;
