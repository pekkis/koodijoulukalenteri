import { ComponentProps, FC, ReactNode } from "react";
import * as styles from "./Button.css";

type Props = ComponentProps<"button"> & {
  icon?: ReactNode;
};

const Button: FC<Props> = ({ children, icon, ...rest }) => {
  return (
    <button className={styles.button} {...rest}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
