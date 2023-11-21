import { FC, ReactNode } from "react";
import * as styles from "./Insides.css";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  isOpen: boolean;
};

const Insides: FC<Props> = ({ children, isOpen }) => {
  const classes = clsx(styles.door, {
    [styles.doorOpen]: isOpen
  });

  return (
    <div className={styles.insides}>
      <div className={styles.backDoor}>
        <div className={classes}>{children}</div>
      </div>
    </div>
  );
};

export default Insides;
