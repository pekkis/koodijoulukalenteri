import { FC, ReactNode } from "react";
import Backdrop from "./Backdrop";
import * as styles from "./Dialog.css";

type Props = {
  children: ReactNode;
};

const Dialog: FC<Props> = ({ children }) => {
  return (
    <Backdrop>
      <dialog open className={styles.dialog}>
        {children}
      </dialog>
    </Backdrop>
  );
};

export default Dialog;
