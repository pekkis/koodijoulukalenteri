import { FC, ReactNode } from "react";
import * as styles from "./Hatch.css";
import cx from "clsx";

type Props = {
  className: string;
  children: ReactNode;
};

const Hatch: FC<Props> = ({ className, children }) => {
  const classes = cx(styles.hatch, className);

  return <div className={classes}>{children}</div>;
};

export default Hatch;
