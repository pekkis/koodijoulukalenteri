import { ComponentProps, FC, ReactNode } from "react";
import * as styles from "./Button.css";
import clsx from "clsx";

type Props = ComponentProps<"button"> & {
  icon?: ReactNode;
  relative?: boolean;
  block?: boolean;
  svelte?: boolean;
  extraRed?: boolean;
  relativelyGreener?: boolean;
  mixWithUgliest?: boolean;
};

const Button: FC<Props> = ({
  children,
  icon,
  block = false,
  relative = false,
  svelte = false,
  disabled,
  extraRed = false,
  relativelyGreener = false,
  mixWithUgliest = false,
  ...rest
}) => {
  const classes = clsx(styles.button, {
    [styles.relative]: relative,
    [styles.svelte]: svelte,
    [styles.active]: !disabled,
    [styles.block]: block,
    [styles.extraRed]: extraRed,
    [styles.relativelyGreenerRed]: relativelyGreener,
    [styles.mixWithUgliest]: mixWithUgliest
  });

  return (
    <button disabled={disabled} className={classes} {...rest}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
