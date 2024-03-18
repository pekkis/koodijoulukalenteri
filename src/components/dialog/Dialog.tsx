"use client";

import { FC, ReactNode, useRef } from "react";
import Backdrop from "./Backdrop";
import * as styles from "./Dialog.css";
import { useScrollLock, useOnClickOutside } from "usehooks-ts";
import { useRouter } from "next/navigation";
import useOpenHatches from "@/hooks/useOpenHatches";
import useKeyPress from "@/hooks/useKeyPress";

type Props = {
  children: ReactNode;
};

const Dialog: FC<Props> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { searchParams } = useOpenHatches();
  const router = useRouter();

  useScrollLock({
    autoLock: true
  });

  useOnClickOutside(ref, () => {
    router.push(`/?${searchParams.toString()}`, { scroll: false });
  });

  useKeyPress("Escape", () => {
    router.push(`/?${searchParams.toString()}`, { scroll: false });
  });

  return (
    <Backdrop>
      <div ref={ref} className={styles.dialog}>
        <div className={styles.dialogInsides}>{children}</div>
      </div>
    </Backdrop>
  );
};

export default Dialog;
