import { ComponentProps, FC, ReactNode } from "react";
import * as styles from "./Button.css";
import clsx from "clsx";

type Props = ComponentProps<"button"> & {
  icon?: ReactNode;
  block?: boolean;
};

const Button: FC<Props> = ({ children, icon, block, disabled, ...rest }) => {
  const classes = clsx(styles.button, {
    [styles.active]: !disabled,
    [styles.block]: block
  });

  return (
    <button disabled={disabled} className={classes} {...rest}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
