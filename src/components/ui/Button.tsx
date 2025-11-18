import { ComponentProps, FC, ReactNode } from "react";
import * as styles from "./Button.css";
import clsx from "clsx";

type Props = ComponentProps<"button"> & {
  icon?: ReactNode;
  relative?: boolean;
  block?: boolean;
  svelte?: boolean;
};

const Button: FC<Props> = ({
  children,
  icon,
  block = false,
  relative = false,
  svelte = false,
  disabled,
  ...rest
}) => {
  const classes = clsx(styles.button, {
    [styles.relative]: relative,
    [styles.svelte]: svelte,
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
