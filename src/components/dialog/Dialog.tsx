"use client";

import { FC, ReactNode, useEffect, useRef } from "react";
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
    console.log("hmm");
    router.push(`/?${searchParams.toString()}`, { scroll: false });
  });

  useKeyPress("Escape", () => {
    router.push(`/?${searchParams.toString()}`, { scroll: false });
  });

  useEffect(() => {
    return () => {
      console.log("MIT VIT?");
    };
  }, []);

  return (
    <Backdrop>
      <dialog
        ref={ref}
        open
        className={styles.dialog}
        onKeyDown={(e) => {
          console.log("E", e);
        }}
      >
        {children}
      </dialog>
    </Backdrop>
  );
};

export default Dialog;
