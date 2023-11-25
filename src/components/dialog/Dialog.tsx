"use client";

import { FC, ReactNode, useRef } from "react";
import Backdrop from "./Backdrop";
import * as styles from "./Dialog.css";
import { useOnClickOutside } from "usehooks-ts";
import { useRouter } from "next/navigation";
import useOpenHatches from "@/hooks/useOpenHatches";
import useKeyPress from "@/hooks/useKeyPress";

type Props = {
  children: ReactNode;
};

const Dialog: FC<Props> = ({ children }) => {
  const ref = useRef<HTMLDialogElement>(null);

  const { searchParams } = useOpenHatches();
  const router = useRouter();

  useOnClickOutside(ref, () => {
    router.push(`/?${searchParams.toString()}`, { scroll: false });
  });

  useKeyPress("Escape", () => {
    router.push(`/?${searchParams.toString()}`, { scroll: false });
  });

  return (
    <Backdrop>
      <dialog ref={ref} open className={styles.dialog}>
        {children}
      </dialog>
    </Backdrop>
  );
};

export default Dialog;
