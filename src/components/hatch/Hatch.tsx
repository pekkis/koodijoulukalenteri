"use client";

import { FC, ReactNode } from "react";
import * as styles from "./Hatch.css";
import cx from "clsx";
import clsx from "clsx";
import useOpenHatches from "@/hooks/useOpenHatches";
import useNaughtiness from "@/hooks/useNaughtiness";

/* eslint-disable jsx-a11y/label-has-associated-control */

export type HatchPosition = {
  top: number;
  left: number;
  width: number;
  height: number;
};

type Props = {
  isOpenable?: boolean;
  day: number;
  position: HatchPosition;
  className?: string;
  children: ReactNode;
  naughtinessIncrease?: number;
  isDark?: boolean;
};

const Hatch: FC<Props> = ({
  className,
  children,
  day,
  position,
  isOpenable = false,
  naughtinessIncrease,
  isDark = false
}) => {
  const { openHatches, toggleHatch } = useOpenHatches();
  const { addNaughtiness } = useNaughtiness();

  const hatchSize = position.height * position.width;

  const isOpen = openHatches.includes(day);

  const classes = cx(styles.hatch, className);

  const naughtinessIncreaseByAmount = naughtinessIncrease || hatchSize;

  return (
    <div
      className={classes}
      style={{
        gridArea: `${position.top} / ${position.left} / ${
          position.top + position.height
        } / ${position.left + position.width}`
      }}
    >
      <label className={styles.label} htmlFor={`checkbox-${day}`}>
        <input
          name={`checkbox-${day}`}
          readOnly
          className={styles.checkbox}
          type="checkbox"
          checked={isOpen}
        />
        <div
          role="button"
          tabIndex={day * 100}
          onClick={() => {
            if (!isOpenable && !isOpen) {
              addNaughtiness(naughtinessIncreaseByAmount);
            }
            toggleHatch(day);
          }}
          className={clsx(styles.door, {
            [styles.openableDoor]: isOpenable,
            [styles.openDoor]: isOpen
          })}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              if (!isOpenable && !isOpen) {
                addNaughtiness(naughtinessIncreaseByAmount);
              }
              toggleHatch(day);
            }
          }}
        >
          <div className={styles.content}>{day}</div>
          <div className={clsx(styles.content, styles.back)}></div>
        </div>
        <div
          className={clsx(styles.inside, {
            [styles.darkInside]: isDark,
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
