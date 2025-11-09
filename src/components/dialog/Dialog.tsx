"use client";

import { FC, ReactNode, useEffect, useRef } from "react";
import * as styles from "./Dialog.css";
import { useScrollLock } from "usehooks-ts";
import { useRouter } from "next/navigation";
import useOpenHatches from "@/hooks/useOpenHatches";
import { ClientCalendarType } from "@/services/calendar";

type Props = {
  children: ReactNode;
  calendar: ClientCalendarType;
};

const Dialog: FC<Props> = ({ calendar, children }) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    ref?.current?.showModal();
  }, []);

  const { searchParams } = useOpenHatches();
  const router = useRouter();

  useScrollLock({
    autoLock: true
  });

  return (
    <dialog
      ref={ref}
      className={styles.dialog}
      closedby="any"
      onClose={() => {
        router.push(`/c/${calendar.id}?${searchParams.toString()}`, {
          scroll: false
        });
      }}
    >
      <div className={styles.dialogInsides}>{children}</div>
    </dialog>
  );
};

export default Dialog;
