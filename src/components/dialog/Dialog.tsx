"use client";

import { FC, ReactNode, ViewTransition } from "react";
import Backdrop from "./Backdrop";
import * as styles from "./Dialog.css";
import { useClickOutside } from "@mantine/hooks";
import { useRouter } from "next/navigation";
import useOpenHatches from "@/hooks/useOpenHatches";
import useKeyPress from "@/hooks/useKeyPress";
import { ClientCalendarType } from "@/services/calendar";
import { RemoveScroll } from "react-remove-scroll";

type Props = {
  children: ReactNode;
  calendar: ClientCalendarType;
};

const Dialog: FC<Props> = ({ calendar, children }) => {
  const router = useRouter();
  const { searchParams } = useOpenHatches();

  const ref = useClickOutside<HTMLDivElement>(() => {
    router.push(`/c/${calendar.id}?${searchParams.toString()}`, {
      scroll: false
    });
  });

  useKeyPress("Escape", () => {
    router.push(`/c/${calendar.id}?${searchParams.toString()}`, {
      scroll: false
    });
  });

  return (
    <ViewTransition>
      <Backdrop>
        <RemoveScroll>
          <div ref={ref} className={styles.dialog}>
            <div className={styles.dialogInsides}>{children}</div>
          </div>
        </RemoveScroll>
      </Backdrop>
    </ViewTransition>
  );
};

export default Dialog;
