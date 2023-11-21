"use client";

import { FC, ReactNode, useState } from "react";
import * as styles from "./Hatch.css";
import cx from "clsx";
import clsx from "clsx";
import { useRouter } from "next/navigation";

type Props = {
  number: number;
  className: string;
  children: ReactNode;
};

const Hatch: FC<Props> = ({ className, children, number }) => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const classes = cx(styles.hatch, className);

  console.log(isOpen, "is open");

  return (
    <div
      role="button"
      tabIndex={number}
      onClick={(e) => {
        e.preventDefault();
        console.log("clixu?");
        setIsOpen((p) => (p ? false : true));
        console.log("ACTICADO");

        router.push("/", {});
      }}
      className={classes}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          setIsOpen((p) => (p ? false : true));
        }
      }}
    >
      <label className={styles.label}>
        <input className={styles.checkbox} type="checkbox" />
        <div className={clsx(styles.door, { [styles.openDoor]: isOpen })}>
          <div className={styles.content}>{number}</div>
          <div className={clsx(styles.content, styles.back)}></div>
        </div>
        <div
          className={clsx(styles.inside, {
            [styles.insideOpen]: isOpen
          })}
        >
          {children}
        </div>
      </label>
    </div>
  );
};

export default Hatch;
