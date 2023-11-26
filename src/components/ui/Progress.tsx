import { ComponentProps, FC } from "react";
import * as styles from "./Progress.css";

type Props = ComponentProps<"progress">;

const Progress: FC<Props> = ({ ...rest }) => {
  return <progress {...rest} className={styles.progress} />;
};

export default Progress;
