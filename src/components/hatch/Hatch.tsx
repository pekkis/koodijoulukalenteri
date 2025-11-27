"use client";

import { Activity, FC } from "react";
import * as styles from "./Hatch.css";
import cx from "clsx";
import clsx from "clsx";
import useOpenHatches from "@/hooks/useOpenHatches";
import useNaughtiness from "@/hooks/useNaughtiness";
import { HatchProps } from "@/components/hatch/hatch-types";

const Hatch: FC<HatchProps> = ({
  calendar,
  isInteractive = false,
  className,
  children,
  day,
  position,
  isOpenable = false,
  naughtinessIncrease,
  isDark = false
}) => {
  const { openHatches, toggleHatch } = useOpenHatches();
  const { addNaughtiness } = useNaughtiness(calendar);

  const hatchSize = position.height * position.width;

  const isOpen = isInteractive && openHatches.includes(day);

  const classes = cx(styles.hatch, className, {
    [styles.interactiveHatch]: isInteractive
  });

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
          aria-disabled={!isInteractive}
          tabIndex={isInteractive ? day * 100 : -1}
          onClick={() => {
            if (!isInteractive) {
              return;
            }

            if (!isOpenable && !isOpen) {
              addNaughtiness(naughtinessIncreaseByAmount);
            }
            toggleHatch(day);
          }}
          className={clsx(styles.door, {
            [styles.openableDoor]: isInteractive && isOpenable,
            [styles.openDoor]: isOpen,
            [styles.inactiveDoor]: !isInteractive
          })}
          onKeyDown={(e) => {
            if (!isInteractive) {
              return;
            }

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
          <Activity mode={isOpen ? "visible" : "hidden"}>{children}</Activity>
        </div>
      </label>
    </div>
  );
};

export default Hatch;
