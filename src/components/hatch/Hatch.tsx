"use client";

import { FC, ReactNode, useState } from "react";
import * as styles from "./Hatch.css";
import cx from "clsx";
import clsx from "clsx";
import CalendarWall from "./CalendarWall";

/* eslint-disable jsx-a11y/label-has-associated-control */

export type HatchPosition = {
  top: number;
  left: number;
  width: number;
  height: number;
};

type Props = {
  day: number;
  position: HatchPosition;
  className?: string;
  children: ReactNode;
};

const Hatch: FC<Props> = ({ className, children, day, position }) => {
  const [isOpen, setIsOpen] = useState(false);

  const classes = cx(styles.hatch, className);

  console.log(isOpen, "is open");

  return (
    <div
      role="button"
      tabIndex={day}
      onClick={(e) => {
        e.preventDefault();
        setIsOpen((p) => (p ? false : true));
      }}
      className={classes}
      style={{
        gridArea: `${position.top} / ${position.left} / ${
          position.top + position.height
        } / ${position.left + position.width}`
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          setIsOpen((p) => (p ? false : true));
        }
      }}
    >
      <label className={styles.label} htmlFor={`checkbox-${day}`}>
        <input
          name={`checkbox-${day}`}
          className={styles.checkbox}
          type="checkbox"
          checked={isOpen}
        />
        <div className={clsx(styles.door, { [styles.openDoor]: isOpen })}>
          <div className={styles.content}>{day}</div>
          <div className={clsx(styles.content, styles.back)}></div>
        </div>
        <div
          className={clsx(styles.inside, {
            [styles.insideOpen]: isOpen
          })}
        >
          <CalendarWall day={day}>{children}</CalendarWall>
        </div>
      </label>
    </div>
  );
};

export default Hatch;
